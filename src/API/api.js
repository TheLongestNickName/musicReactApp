import  * as axios from "axios";


const instance = axios.create({
    // withCredentials : true,
    headers: {
        // "API_KEY":'153237df360dc9d3299c5d12048620c0'
    },
    baseURL:'http://ws.audioscrobbler.com/2.0/'
});

export const AlbumApi = {
    getPopularAlbum (name){
        return instance.get(`?method=tag.gettopalbums&tag=rock&api_key=153237df360dc9d3299c5d12048620c0&format=json`).then(response =>{
            return response.data
        })
    }
}


