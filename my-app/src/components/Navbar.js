import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  return (
    <ul>
      <li>
        {" "}
        <Link to="/"> Home </Link>
      </li>
      <li>
        {" "}
        <Link to="/add"> Meeting </Link>
      </li>
      <div className="reg">
        <li>
          {" "}
          {isAuthenticated && (
            <div>
              <p> {user.name} </p>{" "}
            </div>
          )}{" "}
        </li>{" "}
        {isAuthenticated ? (
          <li>
            {" "}
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out{" "}
            </button>{" "}
          </li>
        ) : (
          <li>
            {" "}
            <button onClick={() => loginWithRedirect()}> Log In </button>
          </li>
        )}{" "}
      </div>{" "}
    </ul>
  );
};

export default Navbar;
