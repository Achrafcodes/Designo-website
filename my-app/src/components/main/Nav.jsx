import logo from "../components/main/desktop/logo.svg";
const Navbar = function () {
  return (
    <header>
      <nav>
        <div className="navlinks">
          {" "}
          <a href="logo">
            {" "}
            <img src={logo} alt="" />
          </a>{" "}
          <ul>
            <li>
              <a href="#">Pricing</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </li>
          </ul>{" "}
        </div>
        <button>Sechedual a demo</button>
      </nav>
    </header>
  );
};
export default Navbar;
