import React from 'react'
import App from './App.jsx'
import './index.css'
import PropTypes from "prop-types";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App subject="React, tailwind app developed with Vite" greeting="Hello, welcome back "/>
  </React.StrictMode>,
)

App.propTypes = {
  greeting: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};