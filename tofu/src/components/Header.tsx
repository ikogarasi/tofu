import "../pages/homepage.css";
import "bootstrap/dist/css/bootstrap.css";

export interface HeaderProps {
  homePageActive: boolean;
}

const Header = ({ homePageActive }: HeaderProps) => {
  return (
    <div className="bg-image back-img">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand mb-0 a-style" href="#">
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
              <li className="nav-item mb-0">
                <a
                  className={
                    homePageActive
                      ? "nav-link active a-style"
                      : "nav-link active"
                  }
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link a-style" href="#">
                  Carriers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link a-style" href="#">
                  Book tickets
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
