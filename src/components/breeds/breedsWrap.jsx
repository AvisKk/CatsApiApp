import {connect} from "react-redux";
import {addBreedsList, setCurrentPage} from "../../react/breedsReducer";
import {useEffect} from "react";
import Breeds from "./breeds";

const BreedsWrap = (props) => {

    useEffect(() => {
        props.addBreedsList(props.breedPage.currentPage)
    }, [props.breedPage.currentPage])

    const onPageChanged = (pageNumber) => {
        props.addBreedsList(pageNumber);
        props.setCurrentPage(pageNumber);
    }

    return <Breeds breedPage={props.breedPage} addBreedsList={props.addBreedsList}
                   onPageChanged={onPageChanged}/>
}

let mapStateToProps = (state) => {
    return {
        breedPage: state.breedPage
    }
}

const BreedContainer = connect(mapStateToProps, {addBreedsList, setCurrentPage})(BreedsWrap)
export default BreedContainer