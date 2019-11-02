import React from 'react'

export default function WalletInfo({expenses, incomes, balance}) {
    return (
        <div className='cont'>
            <div className="inc">
                <div className="inc-label">Income</div>
                <div className="inc-value">{incomes} DH</div>
            </div>
            
            <div className="exp">
                <div className="exp-label">Expenses</div>
                <div className="exp-value">{expenses} DH</div>
            </div>

            <div className="rest">
                <div className="rest-label">Current Balance</div>
                <div className="rest-value">{balance} DH</div>
            </div>

        </div>
    )
}

 