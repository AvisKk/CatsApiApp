import {factAPI} from "./factApi";

const ADD_FACT = 'ADD_FACT';
const LOADING_ON = 'LOADING_ON';
const LOADING_OFF = 'LOADING_OFF';

let initialState = {
    post: "Fact will be there! Just click the button below",
    onLoading: false,
};

const factReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FACT:
            let text = action.newFact
            return {...state, post: text}
        case LOADING_ON:
            return {...state, onLoading: true}
        case LOADING_OFF:
            return {...state, onLoading: false}
        default:
            return state;
    }

};

export const addFact = (newFact) => ({type: ADD_FACT, newFact});
const loadingOn = () => ({type: LOADING_ON})
const loadingOff = () => ({type: LOADING_OFF})

export const addNewFact = () => async (dispatch) => {
    dispatch(loadingOn())
    const data = await factAPI.getFact();
    if (data.length !== 0) {
        const newFact = data.fact;
        dispatch(addFact(newFact))
    }
    dispatch(loadingOff())
}

export default factReducer