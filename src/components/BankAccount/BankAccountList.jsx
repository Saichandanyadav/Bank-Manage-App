import { useEffect, useState } from 'react';
import { fetchBankAccounts } from '../../api';

const BankAccountList = () => {
    const [bankAccounts, setBankAccounts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getBankAccounts = async () => {
            try {
                const token = localStorage.getItem('token'); // Check for the token
                if (!token) {
                    setError('You need to be logged in to view bank accounts.');
                    return; // Exit if no token found
                }
                
                // Fetch bank accounts with the token included in the API call
                const data = await fetchBankAccounts(token); // Pass token to the fetch function
                setBankAccounts(data); // Set bank accounts in state
                setError(''); // Clear any previous error
            } catch (error) {
                console.error('Failed to fetch bank accounts:', error);
                setError('Failed to fetch bank accounts! ' + (error.response?.data.message || ''));
            }
        };

        getBankAccounts(); // Call the function to fetch bank accounts
    }, []);

    return (
        <div>
            <h2>Bank Accounts</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {bankAccounts.length > 0 ? (
                    bankAccounts.map(account => (
                        <li key={account._id}>
                            {account.bankName} - {account.accountHolderName} - {account.accountNumber} (IFSC: {account.IFSCCode})
                        </li>
                    ))
                ) : (
                    <p>No bank accounts found.</p>
                )}
            </ul>
        </div>
    );
};

export default BankAccountList;
