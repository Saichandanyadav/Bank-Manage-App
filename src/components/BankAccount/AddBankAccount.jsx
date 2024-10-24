import { useState } from 'react';
import { addBankAccount } from '../../api';

const AddBankAccount = () => {
    const [ifsc, setIfsc] = useState('');
    const [branchName, setBranchName] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountHolderName, setAccountHolderName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const accountData = { ifsc, branchName, bankName, accountNumber, accountHolderName };
            await addBankAccount(accountData);
            alert('Bank account added successfully!'); // Display a success message
        } catch (error) {
            console.error(error);
            alert('Failed to add bank account!'); // Display an error message
        }
    };

    return (
        <div>
            <h2>Add Bank Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>IFSC Code:</label>
                    <input
                        type="text"
                        value={ifsc}
                        onChange={(e) => setIfsc(e.target.value)}
                        placeholder="Enter IFSC Code"
                        required
                    />
                </div>
                <div>
                    <label>Branch Name:</label>
                    <input
                        type="text"
                        value={branchName}
                        onChange={(e) => setBranchName(e.target.value)}
                        placeholder="Enter Branch Name"
                        required
                    />
                </div>
                <div>
                    <label>Bank Name:</label>
                    <input
                        type="text"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        placeholder="Enter Bank Name"
                        required
                    />
                </div>
                <div>
                    <label>Account Number:</label>
                    <input
                        type="text"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        placeholder="Enter Account Number"
                        required
                    />
                </div>
                <div>
                    <label>Account Holder Name:</label>
                    <input
                        type="text"
                        value={accountHolderName}
                        onChange={(e) => setAccountHolderName(e.target.value)}
                        placeholder="Enter Account Holder Name"
                        required
                    />
                </div>
                <button type="submit">Add Bank Account</button>
            </form>
        </div>
    );
};

export default AddBankAccount;
