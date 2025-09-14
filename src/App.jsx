import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import GetQuote from "./pages/getQuote/GetQuote";
import LoanForm from "./pages/loanForm/LoanForm";
import LoanSummary from "./pages/loanSummary/LoanSummary";
import Profile from "./pages/profile/Profile";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import TermsConditions from "./pages/termsConditions/TermsConditions";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/loan-form" element={<LoanForm />} />
        <Route path="/loan-summary" element={<LoanSummary />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
