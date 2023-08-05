import style from './breed.module.css'
const Breed = (props) => {
    return <div className={style.breed}>
        <div>Breed: {props.breed.breed}</div>
        <div>Country: {props.breed.country}</div>
        <div>Origin: {props.breed.origin}</div>
        <div>Coat: {props.breed.coat}</div>
        <div>Pattern: {props.breed.pattern}</div>
    </div>
}

export default Breed