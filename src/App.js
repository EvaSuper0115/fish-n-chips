import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Adastral Fish & Chips
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hours
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Menu
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Fish & Chips
                </a>
                <a className="dropdown-item" href="#">
                  Sausages & Burgers
                </a>
                <a className="dropdown-item" href="#">
                  Pies & Chicken
                </a>
                <a className="dropdown-item" href="#">
                  Others
                </a>
                <a className="dropdown-item" href="#">
                  Children's meal
                </a>
                <a className="dropdown-item" href="#">
                  Meal deal
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="page-divider"></div>
    </div>
  );
}

export default App;
