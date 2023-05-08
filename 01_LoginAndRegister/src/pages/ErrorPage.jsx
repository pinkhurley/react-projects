import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="login-page">
      <div className="err-container">
        <h1>404</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <Link to="/">Please visit the Home page.</Link>
      </div>
    </div>
  )
}

export default ErrorPage