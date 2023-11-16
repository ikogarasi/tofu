import "./header.css";

const Header = () => {
  return (
    <header className="bgImage">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand mb-0"
            style={{ fontSize: "30px", fontWeight: "bold" }}
            href="#"
          >
            Tofu
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="header-link nav-item mb-0">
                <a className="nav-link " aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="header-link nav-item">
                <a className=" nav-link" href="#">
                  Carriers
                </a>
              </li>
              <li className="header-link nav-item">
                <a className="nav-link" href="#">
                  Book tickets
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
