import loadingIcon from "../../images/loadingIcon.svg";
import style from './preloader.module.css'

const Preloader = () => {
    return <div>
        <img className={style.preloader} src={loadingIcon} alt=''/>
    </div>
}

export default Preloader