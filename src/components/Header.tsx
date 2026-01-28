import { useState } from "react";
import logo from "../assets/images/icon/icon.png";
import NavMenu from "./NavMenu";

function Header() {
  const [menuButton, setMenuButton] = useState(false);

  function menuButtonClicked() {
    setMenuButton(!menuButton);
  }

  return (
    <header className="h-20 flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-50 bg-white drop-shadow-md">
      <button className="hover:cursor-pointer" onClick={menuButtonClicked}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={"24"}
          height={"24"}
          viewBox="0 0 24 24"
        >
          <path
            fill={"none"}
            stroke={"#000"}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            strokeWidth={"2"}
            d="M3 6.001h18m-18 6h18m-18 6h18"
          />
        </svg>
      </button>
      <div className="w-20 flex justify-center items-center">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <NavMenu menuButton={menuButton} menuButtonClicked={menuButtonClicked} />
    </header>
  );
}
export default Header;
