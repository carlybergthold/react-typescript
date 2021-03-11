import React from 'react';

interface LoanState {
    loanAmount: number;
}

export class Loans extends React.Component<{}, LoanState> {
    render () {
        return (
            <div>
                <p>My Loan Amount: {this.state.loanAmount}</p>
            </div>
        );
    }
}

export default Loans;