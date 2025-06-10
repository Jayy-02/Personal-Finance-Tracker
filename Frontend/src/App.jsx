import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div class="banner">
        <header>
          <h2>Personal Finance Tracker</h2>
        </header>
      </div>
      <div>
        <div class="expenses">
          <h3>Total Expenses</h3>
          <a href="">0.00</a>
        </div>
        <div class="income">
          <h3>Total Income</h3>
          <a href="">0.00</a>
        </div>
        <div class="balance">
          <h3>Total Balance</h3>
          <a href="">0.00</a>
        </div>
        <div class="savings">
          <h3>Total Savings</h3>
          <a href="">0.00</a>
        </div>
      </div>
      <div class="new-txn">
        <div class="head">
          <h2>Add New Transaction</h2>
        </div>
        <form>
          <div class="type">
            <label htmlFor="">Category</label>
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
            <label htmlFor="date">Date</label>
            <input type="date" required/>
          </div>
          <div class="details">
            <label htmlFor="extras">Description</label>
            <input type="text" placeholder="Enter Description (Optional)" />
          </div>
        </form>
      </div>

      <div className="chart">
        <h2>Financial Overview</h2>
        <div class="cards">
          <div class="chart-tab" data-chart="bar-chart">Income Vs Expenses</div>
        </div>
        <div class="history">
          <h2>Recent Transactions</h2>
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
