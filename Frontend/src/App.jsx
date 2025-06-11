import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div class="head">
        <header>
          <h2>Personal Finance Tracker</h2>
          <p>A simple web app for finance tracking</p>
        </header>
      </div>
      <div class="summary">
        <div class="total">
          <h3>Total Expenses</h3>
          <a href="">0.00</a>
        </div>
        <div class="total">
          <h3>Total Income</h3>
          <a href="">0.00</a>
        </div>
        <div class="total">
          <h3>Total Balance</h3>
          <a href="">0.00</a>
        </div>
        <div class="total">
          <h3>Total Savings</h3>
          <a href="">0.00</a>
        </div>
      </div>
      <div class="new-txn">
        <div class="head">
          <h2>Add New Transaction</h2>
        </div>
        <div class ="form">
 <form>
          <div class="type">
            <label htmlFor="">Category: </label>
            <select id="category" required>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
              <option value="Savings">Savings</option>
            </select>
          </div>
          <div class="desc">
            <label htmlFor="expense-name">Title: </label>
            <input type="text" placeholder="eg., Light Bill" required />
          </div>
            <div>
            <label htmlFor="amount">Amount (N): </label>
            <input
              type="number"
              min="10.00"
              placeholder="eg., 200.00"
              required
            />
          </div>
          <div class ="date">
            <label htmlFor="date">Date:</label>
            <input type="date" required/>
          </div>          
          <div class="details">
            <label htmlFor="extras">Description:</label>
            <input type="text" placeholder="Enter Description (Optional)" />
          </div>
                <button type="submit">Submit Transaction</button>
        </form>
        </div>
      </div>

      <div className="chart">
        <div class ="head">
        <h2>Financial Overview</h2>
        </div>
        <div class="cards">
          <div class="chart-tab" data-chart="bar-chart">Income Vs Expenses</div>
        </div>
      </div>
      <div>
        <div class="history">
          <div class ="head">
          <h2>Recent Transactions</h2>
          </div>
          <div class="filter">
            <div class='filter-group'>
              <label htmlFor="type">Type: </label>
              <select id="txn-type">
                <option value="all">All</option>
                <option value="expense">Expenses</option>
                <option value="income">Income</option>
                <option value="savings">Savings</option>
              </select>
            </div>
            <div class="filter-group">
              <label htmlFor="period">Period: </label>
              <select id="txn-period">
                <option value="all">All</option>
                <option value="week">Last 7 days</option>
                <option value="month">Last 30 days</option>
              </select>
            </div>
            <div class="filter-group">
              <label htmlFor="amount">Amount: </label>
              <select id="txn-amount">
                <option value="all">All</option>
                <option value="below">0 - 10,000</option>
                <option value="above">Above 10,000</option>
              </select>
            </div>
            <div class="search">
              <input type="text"
                id="txn-search"
                placeholder="Search Transactions..."
              />
            </div>
          </div>
          <div id="txn-list" class="txn-entry">
            <div class ="item">
              <div class="details">
                <p>Add your first transaction to get started</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
