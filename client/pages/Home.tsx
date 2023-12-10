import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div className="home-container">
      <header>
        <title>Storial</title>
        <link rel="icon" href="/favicon.ico" />
      </header>

      <main className="home-header-container">
        <img src="/storial-logo.png" alt="Storial Logo" className="w-1/3" />
        <h1 className="home-header-title">
          Track Books To Read Next!
        </h1>
        <Link to="books/list">
          <button className="home-btn">view library</button>
        </Link>

        <Link to="/books/create">
          <button className="home-btn">quick add book</button>
        </Link>
      </main>
    <Footer />      
    </div>
  )
}