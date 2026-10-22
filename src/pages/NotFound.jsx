
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page">
      <h1>404 - Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </section>
  );
}

export default NotFound;
