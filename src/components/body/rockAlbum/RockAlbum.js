import {connect} from "react-redux";
import  s from './RockAlbum.module.css'

let RockAlbum = (props)=>{
    return(
        <div className={s.wrap}>
            {props.data.map((elem)=>{
                let urlImg = Object.values(elem.image[2])
                return(
                    <div  className={s.album} key={elem.mbid}>
                        <img className={s.imgs} src={urlImg[0]}/>
                        <div>
                            {elem.name}
                        </div>
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

export default connect(mapStateToProps,{})(RockAlbum)

