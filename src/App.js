
import './App.css';
import HeaderContainer from "./components/header/headerContainer";
import {BrowserRouter, Route} from "react-router-dom";
import MainPageContainer from "./components/body/mainPage/MainPageContainer";
import PopularAlbumsContainer from "./components/body/popAlbum/popularAlbum";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <div >
                  <HeaderContainer/>
              </div>
                <div>
                    <Route exact path={"/home"}  render={()=>{
                        return <MainPageContainer/>
                    }}/>
                <Route path={'/Rock'} render={()=>{
                    return <PopularAlbumsContainer/>
                }}/>
                {/*<Route path={'/Electro'}/>*/}
                {/*<Route path={'/Hip_hop'}/>*/}
                {/*<Route path={'/Pop'}/>*/}
                {/*<Route path={'/R&B'}/>*/}
                {/*<Route path={'/Indie'}/>*/}
                </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
