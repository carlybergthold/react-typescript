import './App.css';
import Budgets from './features/budgets/budgets';
import Collateral from './features/collateral/collateral';

function App() {
  return (
    <div className="App">
      <Budgets />
      <Collateral beginningCollateral={2000}/>
    </div>
  );
}

export default App;