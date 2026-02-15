import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, Box } from '@mui/material';
import Login from './Pages/Login';
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";
import ProtectedRoute from './Components/ProtectedRoute';
import Home from "./Pages/Home";
import TypesofLoans from "./Pages/TypesofLoans";
import TypesofAccounts from "./Pages/TypesofAccounts";
import LoanPage from './Pages/LoanPage';
import SeparateLoanPage from './Components/LoanPage/SeparateLoanPage.jsx';
import SeparateAccountPage from './Components/AccountsPage/SeparateAccountPage';
import CreditScore from './Pages/CreditScore';
import TaxEstimator from './Pages/TaxEstimator';
import BudgetPlanner from './Pages/BudgetPlanner';
import EligibilityAccount from './Pages/Eligibility_Account.jsx';
import EligibilityLoan from './Pages/Eligibilty_Loan';
import DocumentsLoan from './Pages/Documents_Loan';
import DocumentsAccount from './Pages/Documents_Account.jsx';
import Dashboard from './Pages/Dashboard';
import Quiz from './Pages/Quiz';
import theme from "./theme.js";
import LoanApplication from './Pages/LoanAppplication.jsx';

function App() {
    return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Box id="app-container" sx={{minHeight: "100vh", backgroundColor: 'background.secondary'}}>
      <Header> </Header>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/loanpage" element = {<LoanPage/>} />
            <Route path="/loan/eligibility" element={<EligibilityLoan/>}/>
            <Route path="/loan/documents" element={<DocumentsLoan/>}/>
            <Route path="/loan/:loanType" element={<SeparateLoanPage/>}/>       
            <Route path="/typesofloan" element = {<TypesofLoans/>} />
            <Route path="/account/eligibility" element={<EligibilityAccount/>}/>
            <Route path="/account/documents" element={<DocumentsAccount/>}/>
            <Route path="/account/:accountType" element={<SeparateAccountPage/>}/>
            <Route path="/typesofaccounts" element = {<TypesofAccounts/>} />
            <Route path="/creditscore" element = {<CreditScore/>} />
            <Route path="/taxestimator" element = {<TaxEstimator/>} />
            <Route path="/budgetplanner" element = {<BudgetPlanner/>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
            <Route path="/dashboard" element = {<Dashboard/>} />
            <Route path="/loanapplication" element = {<LoanApplication/>} />
            <Route path="/quiz" element = {<Quiz/>} />
          </Routes>
        
        </Box>
      </BrowserRouter>
     </ThemeProvider>
  );
}

export default App;
