import style from './Header.module.css'
import cat from '../../images/cat.png'
const Header = () => {
    return <div className={style.header}>
        <div><img className={style.img} src={cat} alt=""/></div>
        <div>
            <span>CAT'</span>
            <span className={style.text}>S</span>
        </div>
    </div>
}

export default Header