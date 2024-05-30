import React from 'react';
import '../Account/Account.scss';

/* Component function that returns a user's account */
function Account({title,amount,description, isEditing}){
    return (
      <section className={`account ${isEditing ? 'editing' : ''}`}>
        <h2 className='sr-only'>Accounts</h2>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>{title}</h3>
          <p className='account-amount'>{amount}</p>
          <p className='account-amount-description'>{description}</p>
        </div>
        <div className='account-content-wrapper cta'>
        {isEditing ? 
          <i className="fa-solid fa-chevron-right"></i>
          :
          <button className='transaction-button'>View transactions</button>
        }
        </div>
      </section>
   )}
export default Account;
