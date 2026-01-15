import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <h2 style={styles.title}>Oops! Page Not Found</h2>
      <p style={styles.message}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" style={styles.button}>
        Back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
    textAlign: 'center',
    padding: '0 20px',
    fontFamily: 'sans-serif',
  },
  errorCode: {
    fontSize: '120px',
    fontWeight: 'bold',
    margin: '0',
    color: '#f3f4f6', // Subtle light gray
    position: 'absolute',
    zIndex: '-1',
  },
  title: {
    fontSize: '32px',
    color: '#374151',
    marginBottom: '10px',
  },
  message: {
    fontSize: '18px',
    color: '#6b7280',
    maxWidth: '500px',
    marginBottom: '30px',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#3b82f6', // Nice blue
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    transition: 'background-color 0.2s',
  }
};

export default NotFound;
