import { createPortal } from "react-dom";
import type { menuButtonType } from "@/@types/proptypes";

function NavMenu({ menuButton, menuButtonClicked }: menuButtonType) {
  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center px-4 py-6 bg-white transition-transform duration-300 ${menuButton ? "translate-x-0" : "-translate-x-full"}`}
    >
      <button
        className="absolute top-7 right-4 hover:cursor-pointer"
        onClick={menuButtonClicked}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
        >
          <path
            fill="#000"
            d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
          ></path>
        </svg>
      </button>
      <div className="flex flex-col justify-center items-center gap-6 font-montserrat text-lg">
        <a href="#">HOME</a>
        <a href="#">LISTINGS</a>
        <a href="#">LET'S MOVE</a>
        <a href="#">ABOUT US</a>
      </div>
    </div>,
    document.body,
  );
}
export default NavMenu;
