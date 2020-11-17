import * as React from "react";
import { Link } from "react-router-dom";
import "../../css/navigation-bar.css";
import test from "../../assets/images/profile.jpg";

export default function NavigationBar() {
  const [toggle, setToggle] = React.useState(false);

  return (
    <React.Fragment>
      <nav className={toggle === true ? "open" : ""}>
        <div className="navigation">
          <Link to="/">
            <div className="nav-brand">Pokemon Project</div>
          </Link>
          {/* This is only for better UI */}
          <div className="search-feature">
            <i className="fa fa-search icon" aria-hidden="true"></i>
            <input className="input-search" placeholder="Find Pokemon" />
          </div>
          <div className="icon-section">
            <i className="fa fa-heart ui-icon" aria-hidden="true"></i>
            <i className="fa fa-envelope ui-icon" aria-hidden="true"></i>
            <i className="fa fa-bell ui-icon" aria-hidden="true"></i>
          </div>
          {/* // */}
          <button className="toggler" onClick={() => setToggle(!toggle)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="nav-collapse">
            <span className="navbar-link">
              <Link to="/user">
                <div onClick={() => setToggle(false)}>
                <img src={test} alt="Avatar" className="avatar" />
                <span>Kevin Suryajaya</span>
                </div>
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
