import { Link } from "react-router";
import { createPortal } from "react-dom";
import type { menuButtonType } from "@/@types/proptypes";
import socialData from "../data.json";

function NavMenu({ menuButton, menuButtonClicked }: menuButtonType) {
  const displaySocial = socialData.heroSection.socials.map((data) => {
    return (
      <a
        href={data.link}
        target={"_blank"}
        className="size-6 lg:size-8"
        key={data.id}
        aria-label={data.arialabel}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill={"currentColor"} d={data.svgLink}></path>
        </svg>
      </a>
    );
  });

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center px-4 py-6 mt-20 bg-white transition-transform duration-300 ${menuButton ? "translate-x-0" : "-translate-x-full"}`}
    >
      <button
        className="absolute top-7 right-4 hover:cursor-pointer size-6"
        onClick={menuButtonClicked}
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="#000"
            d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
          ></path>
        </svg>
      </button>
      <div className="flex flex-col gap-8">
        <nav
          className="flex flex-col justify-center items-center gap-8 font-montserrat text-lg md:text-xl"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="hover:font-medium border-b border-transparent hover:border-black"
            onClick={menuButtonClicked}
          >
            HOME
          </Link>
          <Link
            to="/listings"
            className="hover:font-medium border-b border-transparent hover:border-black"
            onClick={menuButtonClicked}
          >
            LISTINGS
          </Link>
          <Link
            to="/letsmove"
            className="hover:font-medium border-b border-transparent hover:border-black"
            onClick={menuButtonClicked}
          >
            LET'S MOVE
          </Link>
          <Link
            to="/about"
            className="hover:font-medium border-b border-transparent hover:border-black"
            onClick={menuButtonClicked}
          >
            ABOUT US
          </Link>
        </nav>
        <nav
          className="flex justify-center items-center gap-2"
          aria-label="Social media links"
        >
          {displaySocial}
        </nav>
      </div>
    </div>,
    document.body,
  );
}
export default NavMenu;
