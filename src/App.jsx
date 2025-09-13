import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import GetQuote from "./pages/getQuote/GetQuote";
import LoanForm from "./pages/loanForm/LoanForm";
import LoanSummary from "./pages/loanSummary/LoanSummary";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/loan-form" element={<LoanForm />} />
        <Route path="/loan-summary" element={<LoanSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
