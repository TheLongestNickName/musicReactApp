import {connect} from "react-redux";
import  s from './MainPageContainer.module.css'
import {useHistory} from "react-router";
import {getPopularAlbum} from "../../../redux/head-reducer";

let MainPageContainer = (props)=>{

    const history = useHistory()
    function handleClick (name){
        props.getPopularAlbum(name)
        props.getPopularAlbum(name)
        if (props.data){
            history.push(name)
        }
        else return
    }
    return(
        <div className={s.wrap}>
            {props.albums.map((elem)=>{
                return(
                    <div onClick={()=>{handleClick(elem.name)}} className={s.album} key={elem.name}>
                        <img className={s.imgs} src={elem.img}/>
                    </div>
                )
            })
            }
        </div>
    )
}

let mapStateToProps = (state)=>{
    return {
        albums : state.album.genry,
        data : state.album.albumData.albums.album
    }
}


export default connect(mapStateToProps,{getPopularAlbum})(MainPageContainer)

