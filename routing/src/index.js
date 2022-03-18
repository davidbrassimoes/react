import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Expenses from './components/Expenses';
import Invoices from './components/Invoices';
import NotFound from './components/NotFound';
import Invoice from './components/Invoice';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='invoices' element={<Invoices />} >
            <Route index element={<main><p>Select an Invoice</p></main>} />
            <Route path=':invoiceId' element={<Invoice />} />
          </Route>
          <Route path='expenses' element={<Expenses />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
