import MenuComponent from "./components/menu";
import "./App.scss";
import Router from "./components/routes";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="menu">
          <MenuComponent/>
        </div>
        <div className="content">
            <Router />

        </div>
      </div>
    </div>
  );
}

export default App;
