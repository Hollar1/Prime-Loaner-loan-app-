import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import GetQuote from "./pages/getQuote/GetQuote";
import Whatsapp from "./components/whatsapp/Whatsapp";
function App() {
  return (
    <Router>
      <Whatsapp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-quote" element={<GetQuote />} />
      </Routes>
    </Router>
  );
}

export default App;
