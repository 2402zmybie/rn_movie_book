import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ActivityIndicator,Image,ScrollView} from 'react-native';


export default class MovieDetail extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            detail:{}
        }
    }

    componentDidMount(): void {
        const url = `https://api.douban.com/v2/movie/subject/${this.props.id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoading:false,
                    detail:data
                })
            })
    }

    render() {
        if(this.state.isLoading) {
            return <ActivityIndicator size={"large"} style={{flex:1,justifyContent:'center',alignItems:'center'}}/>
        }
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Text style={styles.title}>{this.state.detail.title}</Text>
                    <Image source={{uri:this.state.detail.images.large}} style={styles.image}></Image>
                    <Text style={styles.content}>{this.state.detail.summary}</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#f4f0f0',
        flex: 1
    },
    contentContainer: {
      padding:10,
      alignItems: 'center',

    },
    title: {
        color:'#000',
        fontSize:18,
        fontWeight: 'bold',
        marginTop:15,
        textAlign: 'center'
    },
    image: {
        width:150,
        height:200,
        marginTop: 10,

    },
    content: {
        color:'#5a5959',
        fontSize:14,
        marginTop:10
    }

})