import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    getTotalBudget,
    addProjectBudget,
    projectBudgets
} from './budgetsSlice';
import Budget from '../../interfaces/budget';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export const Budgets = () => {
    const totalBudget = useSelector(getTotalBudget);
    const dispatch = useDispatch();
    const [projectAmount, setProjectAmount] = useState(0);
    const [projectName, setProjectName] = useState('');
    const budgetList: Budget[] = useSelector(projectBudgets);
    const columnDef= [{
        headerName: 'Project Name',
        field: 'project'
    }, {
        headerName: 'Project Budget Amount',
        field: 'amount'
    }];

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
            <br />
            <br />
            <div className="ag-theme-alpine" style={{
                height: 500,
                width: 500
            }}>
                <AgGridReact columnDefs={columnDef} rowData={budgetList} />
            </div>
        </div>
    );
}

export default Budgets;