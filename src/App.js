import './App.css';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import TransactionLists from './components/TransactionLists';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="container">
          
          <Balance />
          <IncomeExpenses />
          <TransactionLists />
          <AddTransaction />
        </div>
    </div>
  );
}

export default App;
