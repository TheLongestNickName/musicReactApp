import RandB from "../assets/images/R$B.jpg"
import Rock from "../assets/images/Rock.jfif"
import Electro from "../assets/images/Electro.jpg"
import HipHop from "../assets/images/hipHop.jpg"
import Pop from "../assets/images/Pop.jpg"
import Indie from "../assets/images/Indie"
import {AlbumApi} from "../API/api";
const SET_DATA = "SET_DATA"

const initialState = {
    genry:[
        {name:'Rock', img : Rock, },
        {name:'Electro', img : Electro, },
        {name:'Hip-hop', img : HipHop, },
        {name:'Pop', img : Pop },
        {name:'R&B', img : RandB, },
        {name:'Indie', img : Indie }
    ],
    test:[
        {name:'asdasdasd'},
        {name:'1'},
        {name:'2'},
        {name:'3'},
    ],

}



const headReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA :
        {
            return{
                ...state,albumData : action.data
            }
        }
        default:
            return state;
    }
};
export default headReducer

export const setDataCreator = (data)=>{
    return {
        type:SET_DATA,
        data
    }
}

export const getPopularAlbum =  (name, history)=>{
    return (dispatch)=>{
        AlbumApi.getPopularAlbum(name).then(data => {
            dispatch(setDataCreator(data));
            history.push(name)
        })
    }
}