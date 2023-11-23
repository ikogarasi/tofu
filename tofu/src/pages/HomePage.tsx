import { useEffect, useState } from "react";
import "./homepage.css";
import "bootstrap/dist/css/bootstrap.css";
import { Dropdown } from "react-bootstrap";
import { useAppDispatch } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { Connection, setConnection } from "../store/slices/connectionSliceHomePage";

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchTerm1, setSearchTerm1] = useState<string>("");
  const [matchingCities, setMatchingCities] = useState<string[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [isDropdownVisible1, setIsDropdownVisible1] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [passengersAmount, setPassengersAmount] = useState<number>(0);
  const today = new Date().toISOString().slice(0, 16);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSearchClick = () => {
    const connection: Connection = {
      from: searchTerm,
      to: searchTerm1,
      departureDate: startDate,
      passengersAmount: passengersAmount,
    };

    dispatch(setConnection(connection));

    navigate("/search-page");
  };


  const handleInputChange = (inputText: string, inputNumber: number) => {
    // Шукаємо міста, що починаються з введених букв
    const matchingCities = cities.filter((city) =>
      city.toLowerCase().startsWith(inputText)
    );

    setMatchingCities(matchingCities);
    if (inputNumber === 1) {
      setIsDropdownVisible(true);
    } else {
      setIsDropdownVisible1(true);
    }
  };

  const handleInputClick = (numberInput: number) => () => {
    if (numberInput === 1) {
      setIsDropdownVisible(!isDropdownVisible);
    } else {
      setIsDropdownVisible1(!isDropdownVisible);
    }
  };

  const cities: string[] = [
    "Київ",
    "Львів",
    "Харків",
    "Одеса",
    "Дніпро",
    "Житомир",
    "Тернопіль",
    "Вінниця",
  ];

  const handleDropdownItemClick = (
    selectedCity: string,
    numberInput: number
  ) => {
    if (numberInput === 1) {
      setSearchTerm(selectedCity);
      setIsDropdownVisible(false);
    } else {
      setSearchTerm1(selectedCity);
      setIsDropdownVisible1(false);
    }
  };

  return (
    <div>
      <div className="bg-image">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand mb-0" href="#">
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
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="header-link nav-item">
                  <a className="nav-link" href="/all">
                    Carriers
                  </a>
                </li>
                <li className="header-link nav-item">
                  <a className="nav-link" href="/booking-page">
                    Book tickets
                  </a>
                </li>
              </ul>
              <a
                type="button"
                className="button-sign-in btn btn-outline-light"
                href="/signIn"
              >
                Sign in
              </a>
            </div>
          </div>
        </nav>
        <div className="text-white text-center py-5">
          <h1 className="header-h1">Find your comfortable way to home!</h1>
        </div>
        <div className="d-none d-lg-block">
          <div className="container">
            <form action="" className="col-md-8 m-auto py-5">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={searchTerm}
                  onChange={(e) => {
                    handleInputChange(e.target.value, 1);
                    setSearchTerm(e.target.value);
                  }}
                  onClick={handleInputClick(1)}
                  placeholder="From..."
                  aria-label="From"
                />
                <span className="input-group-text">⇆</span>
                {isDropdownVisible && (
                  <Dropdown.Menu className="col-xs-12 dropdown-city" show>
                    {matchingCities.map((city) => (
                      <Dropdown.Item
                        key={city}
                        onClick={() => handleDropdownItemClick(city, 1)}
                      >
                        {city}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                )}
                <input
                  type="text"
                  value={searchTerm1}
                  onChange={(e) => {
                    handleInputChange(e.target.value, 2);
                    setSearchTerm1(e.target.value);
                  }}
                  onClick={handleInputClick(2)}
                  className="form-control"
                  placeholder="To.."
                  aria-label="To"
                />
                {isDropdownVisible1 && (
                  <Dropdown.Menu
                    className="col-xs-0"
                    id="dropdown-city"
                    style={{ marginTop: "35px", marginLeft: "160px" }}
                    show
                  >
                    {matchingCities.map((city) => (
                      <Dropdown.Item
                        key={city}
                        onClick={() => handleDropdownItemClick(city, 2)}
                      >
                        {city}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                )}
                <span className="input-group-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar2-day"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.684 12.523v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V8.418h-.672v4.105z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                  </svg>
                </span>
                <input
                  type="datetime-local"
                  className="form-control w-25"
                  placeholder="Start.."
                  aria-label="Start"
                  onChange={(e) => {
                    setStartDate(new Date(e.target.value));
                  }}
                  value={startDate.toISOString().slice(0, 16)}
                  min={today}
                />
                <span className="input-group-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  onChange={(event) => {
                    setPassengersAmount(Number(event.target.value));
                  }}
                  className="form-control"
                  placeholder="1 Adult"
                  aria-label="1 Adult"
                />
                <button type="button" className="btn btn-primary">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-lg-none">
          <div className="container">
            <form action="">
              <div className="form-row m-auto">
                <div className="input-group mb-3 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="From..."
                    aria-label="From"
                  />
                  <span className="input-group-text">⇆</span>
                  <div className="input-group mb-3 col-md-6"></div>
                  <input
                    type="text"
                    className="col-1 form-control "
                    placeholder="To.."
                    aria-label="To"
                  />
                </div>
                <div className="input-group mb-3 col-md-6">
                  <span className="input-group-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar2-day"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.684 12.523v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V8.418h-.672v4.105z" />
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                      <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                    </svg>
                  </span>
                  <input
                    type="datetime-local"
                    className="form-control w-25 "
                    placeholder="Start.."
                    aria-label="Start"
                  />
                </div>
                <div className="input-group mb-3 col-md-6">
                  <span className="input-group-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="1 Adult"
                    aria-label="1 Adult"
                  />
                  <button type="button" className="btn btn-primary">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">Why you choose us?</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square  flex-shrink-0 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-journal-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
              </svg>
            </div>
            <div>
              <h2>Easy to book</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a href="/booking-page" className="btn btn-primary">
                Let me try!
              </a>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-dark flex-shrink-0 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-bus-front"
                viewBox="0 0 16 16"
              >
                <path d="M5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm1-6c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9c1.876 0 3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44.303 44.303 0 0 0 8 4Zm0-1c-1.837 0-3.353.107-4.448.22a.5.5 0 1 1-.104-.994A44.304 44.304 0 0 1 8 2c1.876 0 3.426.109 4.552.226a.5.5 0 1 1-.104.994A43.306 43.306 0 0 0 8 3Z" />
                <path d="M15 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1V2.64c0-1.188-.845-2.232-2.064-2.372A43.61 43.61 0 0 0 8 0C5.9 0 4.208.136 3.064.268 1.845.408 1 1.452 1 2.64V4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v3.5c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2V8ZM8 1c2.056 0 3.71.134 4.822.261.676.078 1.178.66 1.178 1.379v8.86a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V2.64c0-.72.502-1.301 1.178-1.379A42.611 42.611 0 0 1 8 1Z" />
              </svg>
            </div>
            <div>
              <h2>Information about buses</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a href="/all" className="btn btn-primary">
                Check
              </a>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-dark flex-shrink-0 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-person-hearts"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"
                />
              </svg>
            </div>
            <div>
              <h2>Your own account</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a href="/signIn" className="btn btn-primary">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        
      </div>
    </div>
  );
};
