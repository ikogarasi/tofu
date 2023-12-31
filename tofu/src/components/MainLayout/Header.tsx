import "../../pages/homepage.css";
import "bootstrap/dist/css/bootstrap.css";
import "./../../pages/homepage.css";

export interface HeaderProps {
  homePageActive: boolean;
  pathname: string;
}

const Header = ({ homePageActive, pathname }: HeaderProps) => {
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
              <li className="header-link nav-item mb-0">
                <a
                  className={`${"nav-link a-style"} ${pathname == "/" && "nav-link active a-style"}`}
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="header-link nav-item">
                <a className={`${"nav-link a-style"} ${pathname == "/all" && "nav-link active a-style"}`} href="/all">
                  Carriers
                </a>
              </li>
              <li className="header-link nav-item">
                <a className={`${"nav-link a-style"} ${pathname == "/search-page" && "nav-link active a-style"}`}  href="/search-page">
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
