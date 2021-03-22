import {connect} from "react-redux";
import  s from './MainPageContainer.module.css'
import {useHistory} from "react-router";
import {getPopularAlbum} from "../../../redux/head-reducer";

let MainPageContainer = (props)=>{

    const history = useHistory()
    function handleClick (name){
        props.getPopularAlbum(name, history)
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
    }
}


export default connect(mapStateToProps,{getPopularAlbum})(MainPageContainer)

