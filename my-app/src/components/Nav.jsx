import logo from "../components/main/desktop/logo.svg";
const Navbar = function () {
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        <li>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </li>
      </ul>{" "}
    </nav>
  );
};
export default Navbar;
