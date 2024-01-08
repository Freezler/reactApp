import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PropTypes from "prop-types";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App subject="React, tailwind app developed with Vite" greeting="Hello, welcome back to my first"/>
  </React.StrictMode>,
)

App.propTypes = {
  greeting: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};