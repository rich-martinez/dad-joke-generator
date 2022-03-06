import styled from 'styled-components';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Routes, Route } from "react-router-dom";
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
        <h1>Dad Jokes</h1>
        <Routes>
            <Route path="/" element={<Home />}>
              <Route path="favorites" element={<Favorites />} />
            </Route>
        </Routes>
      </main>
    </App>
  );
};

export default App;
