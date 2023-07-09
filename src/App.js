import "./App.css";
import Contact from "./component/Contact";
import Slider from "./component/Slider";
import Fotter from "./component/Fotter";
import Product from "./component/Product";
import Menu from "./component/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <br />
      <br />

      <Slider />
      <br />
      <br />

      <Product />
      <br />
      <br />

      <Contact />
      <br />
      <br />

      <Fotter />
    </div>
  );
}

export default App;
