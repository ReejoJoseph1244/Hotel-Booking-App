import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SearchContextProvider } from './context/SearchContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchContextProvider>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </SearchContextProvider>
  </React.StrictMode>
);


// var express = require('express');
// var app = express();
// var cookieParser = require('cookie-parser');
// app.use(cookieParser());
// app.get('/', function(req, res){
// res.cookie('course','html').send('Our website has set the cookies'); //Sets name = express
// console.log('Cookies: ', req.cookies);
// });

// app.get('/clear', function(req, res){
// res.clearCookie('course','html');
// res.send('cookie cleared');
// });
// app.listen(2000);