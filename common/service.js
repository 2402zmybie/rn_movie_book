/*
接口api
豆瓣开放API的图片 电影
 */

var BASEURL = "https://api.douban.com/v2/"

var Douban_APIS = {
    //图书搜索
    book_search: BASEURL + "book/search",

    //图书详情
    book_detail_id: BASEURL + "book/",

    //电影搜索
    movie_search:BASEURL + "movie/search",
    //电影详情
    movie_detail_id:BASEURL + "movie/"

}

export default Douban_APIS;