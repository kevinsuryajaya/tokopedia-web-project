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
            <i class="fa fa-search icon" aria-hidden="true"></i>
            <input className="input-search" placeholder="Find Pokemon" />
          </div>
          <div className="icon-section">
            <i class="fa fa-heart ui-icon" aria-hidden="true"></i>
            <i class="fa fa-envelope ui-icon" aria-hidden="true"></i>
            <i class="fa fa-bell ui-icon" aria-hidden="true"></i>
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
                <img src={test} alt="Avatar" class="avatar" />
                <span onClick={() => setToggle(false)}>Kevin Suryajaya</span>
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
