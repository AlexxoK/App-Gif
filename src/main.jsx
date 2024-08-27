import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifApp } from './components/GifApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GifApp/>
    </React.StrictMode>
)