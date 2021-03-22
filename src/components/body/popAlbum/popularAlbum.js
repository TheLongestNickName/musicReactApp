import {connect} from "react-redux";
import  s from './popularAlbum.module.css'

let PopularAlbumsContainer = (props)=>{
    return(
        <div className={s.wrap}>
            {props.data.map((elem)=>{
                return(
                    <div  className={s.album} key={elem.name}>
                        <img className={s.imgs} src={elem.image.medium}/>
                        {elem.name}
                    </div>
                )
            })
            }
        </div>
    )
}

let mapStateToProps = (state)=>{
    return {
        data : state.album.albumData.albums.album
    }
}

export default connect(mapStateToProps,{})(PopularAlbumsContainer)

