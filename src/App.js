import "./App.css";
import PageHero from "./PageHero";
import IntroductionPage from "./IntroductionPage";
import OpeningHours from "./OpeningHours";
import PartyCatering from "./PartyCatering";
import MenuFilter from "./MenuFilter";
import MenuFishnChips from "./MenuFishnChips";
function App() {
  const menuHref = "#menu";
  const menuPages = ["#fish-n-chips-menu"];
  return (
    <div className="App">
      <nav className="navbar sticky-top navbar-expand-lg navbar-decoration">
        <a
          className="navbar-brand brand high-light-text"
          href="index.html"
          title="Adastral Fish & Chips Homepage"
        >
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
              <a
                className="nav-link high-light-text"
                href="#What-we-make"
                title="What we make"
              >
                {" "}
                Specialty
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link high-light-text"
                href="#opening-hours"
                title="Adastral Fish & Chips Opening Hours"
              >
                Hours
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link high-light-text"
                href="#party-catering"
                title="Adastral Fish & Chips Party Catering Service"
              >
                Party
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link high-light-text dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                title="Adastral Fish & Chips Menu"
              >
                Menu
              </a>
              <div
                className="dropdown-menu dropdown-menu-text"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a
                  className="dropdown-item"
                  title="Fish & Chips Menu"
                  href="#fish-n-chips-menu"
                >
                  Fish & Chips
                </a>
                <a className="dropdown-item" title="Sausages & Burgers Menu">
                  Sausages & Burgers
                </a>
                <a className="dropdown-item" title="Pies & Chicken Menu">
                  Pies & Chicken
                </a>
                <a className="dropdown-item" title="Others Menu">
                  Others
                </a>
                <a className="dropdown-item" title="Children's meal Menu">
                  Children's meal
                </a>
                <a className="dropdown-item" title="Meal deal Menu">
                  Meal deal
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <PageHero id="Home" menuHref={menuHref} />
      <IntroductionPage id="What-we-make" />
      <OpeningHours id="opening-hours" />
      <PartyCatering id="party-catering" menuHref={menuHref} />
      <MenuFilter id="menu" menuPagehref={menuPages} />
      <MenuFishnChips id="fish-n-chips-menu" />
    </div>
  );
}

export default App;
