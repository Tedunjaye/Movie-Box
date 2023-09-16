import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" component={<MovieDetailsPage />} />
        <Route path="/search" component={<SearchResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
