
import './App.css';
import HeaderContainer from "./components/header/headerContainer";
import {BrowserRouter, Route} from "react-router-dom";
import MainPageContainer from "./components/body/mainPage/MainPageContainer";
import Electro from "./components/body/electroAlbum/electro";
import RockAlbum from "./components/body/rockAlbum/RockAlbum";
import RandBAlbum from "./components/body/RandB/RandBAlbum";
import IndiaAlbum from "./components/body/indiaAlbum/indiaAlbum";
import PopAlbum from "./components/body/popAlbum/popAlbum";
import HipHopAlbum from "./components/body/hipHopAlbum/hipHopAlbum";

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
                        return <RockAlbum/>
                    }}/>
                    <Route path={'/Electro'} render={()=>{
                        return <Electro/>
                    }}/>
                    <Route path={'/R&B'} render={()=>{
                            return <RandBAlbum/>
                    }}/>
                    <Route path={'/Indie'} render={()=>{
                            return <IndiaAlbum/>
                    }}/>
                    <Route path={'/Hip-hop'} render={()=>{
                            return <HipHopAlbum/>
                    }}/>
                    <Route path={'/Pop'} render={()=>{
                            return <PopAlbum/>
                    }}/>
                </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
