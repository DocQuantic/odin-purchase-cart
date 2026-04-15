import './App.css'
import { Route, Router, Link } from 'react-router'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <Router>
        <main>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/shop">About</Link>
                    </li>
                    <li>
                    <Link to="/cart">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/cart" component={Cart} />
        </main>
    </Router>
  )
}

export default App