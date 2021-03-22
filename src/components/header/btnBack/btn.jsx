import s from "./btn.module.css"

let BtnBack = (props)=>{
    return(
        <button onClick={props.handhandleClick} className={s.btn}>Back</button>
    )
}

export default BtnBack;