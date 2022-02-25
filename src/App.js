import styled from 'styled-components';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

export default () => {
  const App = styled.div`
    max-width: 1000px;
    margin: auto;
  `;

  return (
    <App>
      <Header />
      <Main />
    </App>
  );
};
