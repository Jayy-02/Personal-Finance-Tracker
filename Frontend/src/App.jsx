import { useState,useEffect,useRef } from "react";
import "./App.css";


const STORAGE_KEY = 'PersonalFinance'
  
  const INITIAL_FORM_STATE = {
    option: "",
    title:"",
    amount: "",
    date: "",
    desc:"",
  };
  const INITIAL_TOTAL_STATE= {
    income: 0,
    expense: 0,
    save:0,
    balance:0
}
  
function App() {

  console.log('running smoothly')

  const [form, setForm] = useState(INITIAL_FORM_STATE)
  const [total, setTotal] = useState(INITIAL_TOTAL_STATE)

  const isFirstRender = useRef(true)

  useEffect(() => {
    console.log('loading data')
  try {
    const storedData = localStorage.getItem(STORAGE_KEY)
    console.log('data retrieved from local storage',storedData)
    if (storedData) {
      const data = JSON.parse(storedData)
      console.log("parsed data from local storage", data)
      if (
        typeof data.expense === 'number' &&
        typeof data.income === 'number' &&
        typeof data.balance === 'number' &&
        typeof data.save === 'number') {
        setTotal(data)
        console.log('State updated from local storage', data)
      } else {
        console.warn('Stored data unavailable')
        setTotal(INITIAL_TOTAL_STATE)
      }
    }
  } catch (error) {
    console.error("Failed to load data from previous session",error)
    setTotal(INITIAL_TOTAL_STATE)
    }
    console.log('Data fully loaded')
  }, [])


  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      console.log('skipping initial save')
      return
    }
    console.log('Saving...')
    console.log('Current total:', total)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(total))
      console.log('Data Saved and Updated')
    }
    catch (error) {
      console.error("Error saving data to browser storage",error)
    }
    console.log('Saved!')
  }, [total])
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]:value,
    })
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const { option, amount } = form
    const amt = parseFloat(amount)
    if (isNaN(amt)) {
      console.error('Invalid amount entered')
      return
    }
    setTotal(prev => {
      let newIncome = prev.income 
      let newExpense = prev.expense
      let newSaving = prev.save
    
    switch (option) {
      case 'expense':
        console.log('updating expenses')
        newExpense = prev.expense + amt
        break
      case 'income':
        console.log('updating income')
        newIncome = prev.income + amt
        break
      case 'save':
        console.log('updating savings')
        newSaving =prev.save + amt
        break
      case '':
        alert('Please select a valid option')
        return prev
      }
      return {
        income: newIncome,
        expense: newExpense,
        save: newSaving,
        balance: newIncome - newExpense,
      }
    })
      setForm(INITIAL_FORM_STATE)
  }


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
            <a href="">₦{total.expense}</a>
          </div>
          <div class="total">
            <h3>Total Income</h3>
            <a href="">₦{total.income}</a>
          </div>
          <div class="total">
            <h3>Total Balance</h3>
            <a href="">₦{total.balance}</a>
          </div>
          <div class="total">
            <h3>Total Savings</h3>
            <a href="">₦{total.save}</a>
          </div>
        </div>
        <div class="new-txn">
          <div class="head">
            <h2>Add New Transaction</h2>
          </div>
          <div class="form">
            <form onSubmit={handleSubmit}>
              <div class="type">
                <label htmlFor="">Category: </label>
                <select
                  name="option"
                  value={form.option}
                  onChange={handleChange}
                  required>
                  <option value="">--Choose an option--</option>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                  <option value="save">Savings</option>
                </select>
              </div>
              <div class="desc">
                <label htmlFor="expense-name">Title: </label>
                <input
                  name="title"
                  type="text"
                  placeholder="eg., Light Bill"
                  value={form.title}
                  onChange={handleChange}
                  required />
              </div>
              <div>
                <label htmlFor="amount">Amount (N): </label>
                <input
                  name="amount"
                  type="number"
                  min="10.00"
                  placeholder="eg., 200.00"
                  value={form.amount}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="date">
                <label htmlFor="date">Date:</label>
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  required />
              </div>
              <div class="details">
                <label htmlFor="extras">Description:</label>
                <input
                  name="desc"
                  type="text"
                  placeholder="Enter Description (Optional)"
                  value={form.desc}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">
                Submit Transaction
              </button>
            </form>
          </div>
        </div>

        <div className="chart">
          <div class="head">
            <h2>Financial Overview</h2>
          </div>
          <div class="cards">
            <canvas></canvas>
            <div class="chart-tab">Income Vs Expenses</div>
          </div>
        </div>
        <div>
          <div class="history">
            <div class="head">
              <h2>Recent Transactions</h2>
            </div>
            <div class="filter">
              <div class="filter-group">
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
                <input
                  type="text"
                  id="txn-search"
                  placeholder="Search Transactions..."
                />
              </div>
            </div>
            <div id="txn-list" class="txn-entry">
              <div class="item">
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
