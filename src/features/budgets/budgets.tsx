import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    getTotalBudget,
    addProjectBudget,
    projectBudgets
} from './budgetsSlice';
import Budget from '../../interfaces/budget';

export const Budgets = () => {
    const totalBudget = useSelector(getTotalBudget);
    const dispatch = useDispatch();
    const [projectAmount, setProjectAmount] = useState(0);
    const [projectName, setProjectName] = useState('');
    const budgetList = useSelector(projectBudgets).map((budget: Budget, index: number) =>
        <div key={index}>
            {budget.project}: ${budget.amount}
        </div>
    );

    return (
        <div>
            <p>My Budget Total: ${totalBudget}</p>
            <input onChange={e => setProjectName(e.target.value)}></input>
            <input onChange={e => setProjectAmount(Number(e.target.value))}></input>
            <button
                className="budget-button"
                onClick={() => dispatch(addProjectBudget({
                    project: projectName,
                    amount: projectAmount
                }))}
            >Add New Project</button>
            <div>{budgetList}</div>
        </div>
    );
}

export default Budgets;