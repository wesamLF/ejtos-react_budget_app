
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {

    const { dispatch, currency } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (e) => {
        // in case the new value is lower than the spending alert then return without updating the budget
        if (e.target.value < totalExpenses) {
            alert("you cannont reduce the budget value lower than the spending");
            return
        }

        //updating the budget
        dispatch({
            type: 'SET_BUDGET',
            payload: e.target.value,
        });
        setNewBudget(e.target.value);

    }

       

        return (
            <div className='alert alert-secondary'>
                <span>Budget:{currency + " "+ budget}</span>
                <input type="number" step="10" value={newBudget}
                    onChange={handleBudgetChange}></input>
            </div>
        );
    };
    export default Budget;