import { Link } from 'react-router-dom'

// styles
import './Navbar.css'
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Bookify</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Add Book</Link>
      </nav>
    </div>
  )
}

