import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--background)',
      padding: '1.5rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          fontSize: '6rem',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #22d3ee 0%, #38bdf8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1rem'
        }}>
          404
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--muted-foreground)',
          marginBottom: '2rem'
        }}>
          Oops! Page not found
        </p>
        <Link
          to="/"
          className="btn-primary"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
