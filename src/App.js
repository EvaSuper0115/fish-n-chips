import "./App.css";
import PageHero from "./PageHero";
import IntroductionPage from "./IntroductionPage";
import OpeningHours from "./OpeningHours";
import PartyCatering from "./PartyCatering";
import MenuFilter from "./MenuFilter";
import MenuFish from "./MenuFish";
import MenuChips from "./MenuChips";
import MenuSausage from "./MenuSausage";
import MenuBurger from "./MenuBurger";
function App() {
  const mainMenuHref = "#menu";
  const menuItems = [
    { menuTitle: "Fish", menuHref: "#fish-menu" },
    { menuTitle: "Chips", menuHref: "#chips-menu" },
    { menuTitle: "Sausages", menuHref: "#sausages-menu" },
    { menuTitle: "Burgers", menuHref: "#burgers-menu" },
  ];
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
                {menuItems.map((items, index) => (
                  <a
                    className="dropdown-item"
                    title={`${items.menuTitle} Menu`}
                    key={index}
                    href={items.menuHref}
                  >
                    {items.menuTitle}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <PageHero id="Home" menuHref={mainMenuHref} />
      <IntroductionPage id="What-we-make" />
      <OpeningHours id="opening-hours" />
      <PartyCatering id="party-catering" menuHref={mainMenuHref} />
      <MenuFilter id="menu" menuItems={menuItems} />
      <MenuFish id="fish-menu" />
      <MenuChips id="chips-menu" />
      <MenuSausage id="sausages-menu" />
      <MenuBurger id="burgers-menu" />
    </div>
  );
}

export default App;
