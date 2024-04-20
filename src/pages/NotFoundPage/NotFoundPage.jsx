import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <NavLink to="/">
        <button type="button">Go Home Page</button>
      </NavLink>
      <h2>Not Found Page</h2>
    </div>
  );
}
