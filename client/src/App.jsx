import { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import { Navbar, Transfer, Footer, Services, Transactions, News, Cryptocurencies } from "./components";
import logo from './logo.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <div className="main">
      <div className="routes">
        <Switch>
          <Route exact path="/">
            <Transfer />
            </Route>
            <Route exact path="/cryptocurencies">
            <Cryptocurencies />
            </Route>
            <Route exact path="/transactions">
            <Transactions />
            </Route>
            <Route exact path="/news">
            <News />
            </Route>
        </Switch>
        </div>
        
      </div>
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
  )
}

export default App
