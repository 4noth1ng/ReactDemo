import { useState } from "react";
import "./App.css";
import Header from "./Widgets/Header/Header.jsx";
import Cart from "./Widgets/Cart/Cart.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <Cart></Cart>
    </div>
  );
}

export default App;
