import {breedsAPI} from "./breedsAPI";

const ADD_LIST_OF_BREEDS = 'ADD_LIST_OF_BREEDS';
const LOADING_BREEDS_ON = 'LOADING_BREEDS_ON';
const LOADING_BREEDS_OFF = 'LOADING_BREEDS_OFF';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_LAST_PAGE = 'SET_LAST_PAGE';

let initialState = {
    onLoading: false,
    currentPage: 1,
    breeds: [],
    lastPage: undefined,
}

const breedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_OF_BREEDS:
            return {...state, breeds: action.breeds};
        case LOADING_BREEDS_ON:
            return {...state, onLoading: true};
        case LOADING_BREEDS_OFF:
            return {...state, onLoading: false};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_LAST_PAGE:
            return {...state, lastPage: action.lastPage}
        default:
            return state;
    }
}

export const setListOfBreeds = (breeds) => ({type: ADD_LIST_OF_BREEDS, breeds});
const loadingOn = () => ({type: LOADING_BREEDS_ON});
const loadingOff = () => ({type: LOADING_BREEDS_OFF});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
const setLastPage = (lastPage) => ({type: SET_LAST_PAGE, lastPage})

export const addBreedsList = (page) => async (dispatch) => {
    dispatch(loadingOn())
    const data = await breedsAPI.getListOfBreeds(page)
    if (data.breed !== 0) {
        const breeds = data.data;
        dispatch(setListOfBreeds(breeds));
        const lastPage = data.last_page;
        dispatch(setLastPage(lastPage))
    }
    dispatch(loadingOff())
}
export default breedReducer