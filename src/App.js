import './App.css';
import FactContainer from "./components/facts/facts";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import BreedContainer from "./components/breeds/breedsWrap";

function App() {
    return (
        <div className="App">
            <div className="content">
                <div><Header/></div>

                <div className="mainWindow">
                    <div><BreedContainer/></div>
                    <div><FactContainer/></div>
                </div>

            </div>
            <div className="footer"><Footer/></div>
        </div>
    );
}

export default App;
