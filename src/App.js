import styled from 'styled-components';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Routes, Route, Router } from "react-router-dom";
import { Favorites } from './components/Favorites';

const App = () => {
  const App = styled.div`
    max-width: 1000px;
    margin: auto;
  `;

  return (
    <App>
      <Header />
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </App>
  );
};

export default App;
