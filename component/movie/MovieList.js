import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ActivityIndicator,FlatList,TouchableNativeFeedback} from 'react-native';

import {Actions} from "react-native-router-flux"

//电影详情页
export default class MovieList extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            pageSize:15,
            movieList:[],
            totalPage:0,
            nowPage: 1

        }
    }

    componentDidMount() {
        this.getList();
    }

    render() {
        if(this.state.isLoading) {
            return <ActivityIndicator size={"large"} style={{flex:1,justifyContent:'center',alignItems:'center'}}/>
        }
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.movieList}
                    renderItem={({item}) => this.renderMovieItem(item)}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent = {this.separator}
                    onEndReachedThreshold = {0.5}
                    onEndReached = {this.loadNextPage}
                />
            </View>
        )
    }

    getList() {
        const start = (this.state.nowPage - 1)*this.state.pageSize;
        const size = this.state.pageSize;
        const url = `https://api.douban.com/v2/movie/in_theaters?start=${start}&count=${size}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoading:false,
                    movieList: this.state.movieList.concat(data.subjects),
                    totalPage: Math.ceil(data.total / this.state.pageSize)
                },()=> {
                })
            })

        // setTimeout(()=> {
        //     this.setState({
        //         isLoading:false,
        //         movieList:require('./movie').subjects
        //     })
        // },2000)
    }

    renderMovieItem = (item) => {
        return (
            // 注意 onPress里面放的是函数,不要直接写函数体,直接写函数体就是Actions.movieDetail({id:item.id})
            <TouchableNativeFeedback onPress={() => Actions.movieDetail({id:item.id})}>
                <View style={styles.movieItem}>
                    <Image style={styles.leftImage} source={{uri: item.images.small}}></Image>
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>电影名称: {item.title}</Text>
                        <Text style={styles.year}>制作年份: {item.year}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        )
    }

    separator() {
        return (
            <View style={{backgroundColor:'#000',height: 1,marginLeft:10,marginRight:10}}></View>
        )
    }

    //下拉加载更多
    loadNextPage = ()=> {
        console.log(this.state.nowPage)
        if((this.state.nowPage + 1) > this.state.totalPage)  {
            return;
        }
        this.setState({
            nowPage: this.state.nowPage + 1
        },() => {
            this.getList();
        })
    }
}

const styles = StyleSheet.create({
    movieItem: {
        flexDirection:'row',
        padding:10
    },
    leftImage: {
        width:70,
        height:100
    },
    rightContainer: {
        flex:1,
        alignItems:'center',
        justifyContent:'space-around'
    },
    title: {
        fontSize:14,
        fontWeight: 'bold'
    },
    year: {
      fontSize: 14,
      marginTop:5
    }
})