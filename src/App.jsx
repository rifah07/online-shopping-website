import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/*   <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<ProductDtails />} />
        </Routes> */}
        </Routes>{" "}
      </div>
    </BrowserRouter>
  );
}

export default App;