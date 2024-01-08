import React from 'react'
import App from './App.jsx'
import './index.css'
import PropTypes from "prop-types";

  <React.StrictMode>
    <App subject="React, tailwind app developed with Vite" greeting="Hello, welcome back "/>
  </React.StrictMode>,
)

App.propTypes = {
  greeting: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};