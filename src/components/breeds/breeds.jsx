import Preloader from "../common/preloader";
import Breed from "./breed/breed";
import style from "./breeds.module.css"

const Breeds = (props) => {

    let pagesCount = props.breedPage.lastPage;

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.breedPage.currentPage;
    let curPF = ((curP - 3) < 0) ? 0 : curP - 3;
    let curPL = curP + 2;
    let slicedPages = pages.slice(curPF, curPL)

    let firstColumn = props.breedPage.breeds.slice(0, 3)
    let secondColumn = props.breedPage.breeds.slice(-3)

    return <div>
            {props.breedPage.currentPage === 1 ? <div></div> :
                <button className={style.button} onClick={() => {
                    props.onPageChanged(props.breedPage.currentPage - 1)
                }}>Back</button>
            }

            {slicedPages.map(p => {
                return <button className={curP === p ? style.selectedButton : style.button} key={p}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</button>
            })}

            {props.breedPage.currentPage === props.breedPage.lastPage ? <div></div> :
                <button className={style.button} onClick={() => {
                    props.onPageChanged(props.breedPage.currentPage + 1)
                }}>Next
                </button>
            }
            {props.breedPage.onLoading ? <Preloader/> :
                <div className={style.breedsWindow}>
                    <div>{firstColumn.map(b => <div key={b.breed}><Breed breed={b}/></div>)}</div>
                    <div>{secondColumn.map(b => <div key={b.breed}><Breed breed={b}/></div>)}</div>
                </div>

            }
    </div>
}

export default Breeds