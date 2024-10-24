import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBankAccounts, updateBankAccount } from '../../api';

const EditBankAccount = () => {
    const [account, setAccount] = useState({});
    const [ifsc, setIfsc] = useState('');
    const [branchName, setBranchName] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountHolderName, setAccountHolderName] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const fetchAccount = async () => {
        const accounts = await getBankAccounts();
        const acc = accounts.find((acc) => acc._id === id);
        setAccount(acc);
        setIfsc(acc.ifsc);
        setBranchName(acc.branchName);
        setBankName(acc.bankName);
        setAccountNumber(acc.accountNumber);
        setAccountHolderName(acc.accountHolderName);
    };

    useEffect(() => {
        fetchAccount();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const accountData = { ifsc, branchName, bankName, accountNumber, accountHolderName };
            await updateBankAccount(id, accountData);
            alert('Bank account updated successfully!'); // Display a success message
            navigate('/bank-account-list'); // Redirect to the bank account list
        } catch (error) {
            console.error(error);
            alert('Failed to update bank account!'); // Display an error message
        }
    };

    return (
        <div>
            <h2>Edit Bank Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>IFSC Code:</label>
                    <input
                        type="text"
                        value={ifsc}
                        onChange={(e) => setIfsc(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Branch Name:</label>
                    <input
                        type="text"
                        value={branchName}
                        onChange={(e) => setBranchName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Bank Name:</label>
                    <input
                        type="text"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Account Number:</label>
                    <input
                        type="text"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Account Holder Name:</label>
                    <input
                        type="text"
                        value={accountHolderName}
                        onChange={(e) => setAccountHolderName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Update Bank Account</button>
            </form>
        </div>
    );
};

export default EditBankAccount;
