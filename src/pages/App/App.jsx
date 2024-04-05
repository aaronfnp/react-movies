import './App.css';
import { useState } from 'react';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom'
import { movies } from "../../data.js";


export default function App() {
  const [user, setUser] = useState(1);

  return (
    <main className="App">
      <NavBar />
      { user ? 
        <>
          <Routes>
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/actors" element={<ActorListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
          </Routes>
        </>
        :
        <LoginPage />
      }  
    </main>
  );
}