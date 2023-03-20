import "./App.css";
import PageHero from "./PageHero";
import IntroductionPage from "./IntroductionPage";
function App() {
  return (
    <div className="App">
      <nav className="navbar sticky-top navbar-expand-lg navbar-decoration">
        <a className="navbar-brand brand high-light-text" href="index.html">
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
              <a className="nav-link high-light-text" href="#introPage">
                {" "}
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link high-light-text">Hours</a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link high-light-text dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Menu
              </a>
              <div
                className="dropdown-menu dropdown-menu-text"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item">Fish & Chips</a>
                <a className="dropdown-item">Sausages & Burgers</a>
                <a className="dropdown-item">Pies & Chicken</a>
                <a className="dropdown-item">Others</a>
                <a className="dropdown-item">Children's meal</a>
                <a className="dropdown-item">Meal deal</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <PageHero />
      <IntroductionPage id="introPage" />
    </div>
  );
}

export default App;
