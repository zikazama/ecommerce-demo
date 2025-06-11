import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <header
      style={{
        backgroundColor: "#E62355",
        position: "fixed",
        width: "100%",
        zIndex: 1000,
      }}
      className="py-3 order-bottom"
    >
      {" "}
      <div
        className="container-fluid d-grid gap-3 align-items-center"
        style={{ gridTemplateColumns: "1fr 2fr" }}
      >
        {" "}
        <div className="dropdown">
          {" "}
          <Link to={"/"} className="d-flex align-items-center text-white text-decoration-none">
            <span style={{ color: "white" }}>SinauCommerce</span>{" "}
          </Link>
        </div>{" "}
        <div className="d-flex align-items-center">
          {" "}
          <form className="w-100 me-3" role="search">
            {" "}
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />{" "}
          </form>{" "}
          <div className="flex-shrink-0 dropdown">
            {" "}
            <a
              href="#"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {" "}
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />{" "}
            </a>{" "}
            <ul className="dropdown-menu text-small shadow">
              {" "}
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>{" "}
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>{" "}
              <li>
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
              </li>{" "}
              <li>
                <hr className="dropdown-divider" />
              </li>{" "}
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
};

export default HomeHeader;
