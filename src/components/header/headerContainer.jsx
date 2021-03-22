import BtnBack from "./btnBack/btn";
import SeachMusic from "./SearchInPage/seching";
import Like from "./Likes/like";
import s from './headerContainer.module.css'
import {useHistory, withRouter} from "react-router";


let HeaderContainer = (props)=>{

    const history = useHistory()
    function handleClick (){

        history.push('/home')
    }
    return(
        <div className={s.wrap}>
            <div>
                <BtnBack handhandleClick={handleClick} />
                <SeachMusic/>
            </div>
            <div>
                <Like/>
            </div>
        </div>

    )
}

export default HeaderContainer