import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableHighlight} from 'react-native';



import Swiper from 'react-native-swiper';
import {Actions} from "react-native-router-flux"


const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex:1
    },
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },


    menu_container: {
        flexDirection:'row',
        flexWrap:'wrap',

    },
    item_container: {
        width:'33.33%',
        alignItems:'center',
        marginTop:20
    },
    image: {
        width: 60,
        height: 60

    },
    menu_text: {
        marginTop:8
    }
})


export default class Home extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <View style={{height:220}}>
                    {/*需要在swiper外面再套一层,手动设置高度,swiper才显示*/}
                    <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
                        <View style={styles.slide1}>
                            <Text style={styles.text}>Hello Swiper</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>Beautiful</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>And simple</Text>
                        </View>
                    </Swiper>
                </View>
                {/*下方的menu菜单*/}
                {/*注意图片require中必须是个静态字符串*/}
                <View style={styles.menu_container}>
                    <View style={styles.item_container}>
                        <Image source={require('../../assets/home_menu/sport.png')} style={styles.image}/>
                        <Text style={styles.menu_text}>{'sport'}</Text>
                    </View>

                    <View style={styles.item_container}>
                        <Image source={require( '../../assets/home_menu/lingshen.png')} style={styles.image}/>
                        <Text style={styles.menu_text}>{'lingshen'}</Text>
                    </View>

                    <View style={styles.item_container}>
                        <Image source={require( '../../assets/home_menu/metting.png')} style={styles.image}/>
                        <Text style={styles.menu_text}>{'metting'}</Text>
                    </View>

                    <View style={styles.item_container}>
                        <Image source={require('../../assets/home_menu/ka.png')} style={styles.image}/>
                        <Text style={styles.menu_text}>{'ka'}</Text>
                    </View>

                    <TouchableHighlight onPress={this.goToMovieDetail} style={styles.item_container} underlayColor={'white'}>
                        <View>
                            <Image source={require('../../assets/home_menu/abord.png')} style={styles.image}/>
                            <Text style={styles.menu_text}>{'热映电影'}</Text>
                        </View>
                    </TouchableHighlight>


                    <View style={styles.item_container}>
                        <Image source={require('../../assets/home_menu/vote.png')} style={styles.image}/>
                        <Text style={styles.menu_text}>{'vote'}</Text>
                    </View>
                </View>
            </View>
        )
    }

    goToMovieDetail() {
        //跳转到电影详情页
        Actions.movielist();
    }
}
