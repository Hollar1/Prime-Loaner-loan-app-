import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import GetQuote from "./pages/getQuote/GetQuote";
import LoanForm from "./pages/loanForm/LoanForm";
import LoanSummary from "./pages/loanSummary/LoanSummary";
import Profile from "./pages/profile/Profile";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import TermsConditions from "./pages/termsConditions/TermsConditions";
import ScrollToTop from "./utils/ScrollToTop";
import HomePage from "./ADMIN/homepage/HomePage";
import Applications from "./ADMIN/applications/Applications";

import AllUsers from "../src/ADMIN/allUsers/AllUsers";
import ApplicationDetails from "./ADMIN/applicationDetails/ApplicationDetails";
import Loans from "./ADMIN/loans/Loans";
import UserProfile from "./ADMIN/userProfile/UserProfile";
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
        {/* ADMIN */}
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/loans" element={<Loans/>} />
        <Route path="/user-profile" element={<UserProfile/>} />
        <Route path="/application-details" element={<ApplicationDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
