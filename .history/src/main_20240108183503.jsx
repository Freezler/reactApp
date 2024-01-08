import React from 'react'
import App from './App.jsx'
import './index.css'
import PropTypes from "prop-types";


  <React.StrictMode>
    <App subject="react, tailwindCSS app developed with Vite" greeting="Hello, welcome back to my first"/>
  </React.StrictMode>,
)

App.propTypes = {
  greeting: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};