import {connect} from "react-redux";
import {addFact, addNewFact} from "../../react/factReducer";
import style from './facts.module.css'
import Preloader from "../common/preloader";

const Facts = (props) => {

    return <div className={style.factPage}>
        {props.factPage.onLoading ?
        <Preloader /> :
            <div className={style.fact}>{props.factPage.post}</div>
        }
        <div>
            <button onClick={() => props.addNewFact()} className={style.button}>
                I want to know more facts about cats</button>
        </div>
    </div>
}

let mapStateToProps = (state) => {
    return {
        factPage: state.factPage
    }
}

const FactContainer = connect(mapStateToProps, {addNewFact, addFact})(Facts)

export default FactContainer