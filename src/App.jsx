
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AddBankAccount from './components/BankAccount/AddBankAccount';
import BankAccountList from './components/BankAccount/BankAccountList';
import EditBankAccount from './components/BankAccount/EditBankAccount';

const App = () => {
    return (
        <Router>
            <div className="App">
                <h1>Bank Information Management System</h1>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/add-bank-account" element={<AddBankAccount />} />
                    <Route path="/bank-account-list" element={<BankAccountList />} />
                    <Route path="/edit-bank-account/:id" element={<EditBankAccount />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
