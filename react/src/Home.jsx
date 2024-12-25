import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <h1>My react assignments</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Bio</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/toogle">Button</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
