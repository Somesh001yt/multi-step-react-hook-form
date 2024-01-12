import MenuComponent from "./components/menu";
import "./App.scss";
import Router from "./components/routes";
import Header from "./components/header";
import { useState } from "react";

function App() {
  const [showMenu, setshowMenu] = useState(false); 

  return (
    <div className="App">
      <div className="container">
        <div className="menu">
          <MenuComponent  show={showMenu} toggleMenu={() => setshowMenu(!showMenu)}/>
        </div>
        <div className="content">
        <Header onCall={() => setshowMenu(!showMenu)} show={showMenu} />
            <Router />

        </div>
      </div>
    </div>
  );
}

export default App;
