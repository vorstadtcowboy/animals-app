import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './animals.css';
import Container from './container';
import { DropdownMenu, Header, LogoImage } from './components/header';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import App from './App';
//import Test from './test';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header>
        <LogoImage src={logo} alt="logo" />
        <DropdownMenu />
      </Header>
      <Routes>
        <Route path="hunde" element={<div>Hund</div>} />
      </Routes>
      <Container />
    </BrowserRouter>
    {/*<Test name="Jo" array={[6, 7, 9, 9]} city="Berlin" show={true} counter={10} />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
