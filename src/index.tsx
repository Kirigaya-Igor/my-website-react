import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './i18next'
import {Loader} from "./components/Loader/Loader";
import './app.scss'

ReactDOM.render(
    <Suspense fallback={<div className='app'><Loader/></div>}>
        <App />
    </Suspense>,
  document.getElementById('root')
);
