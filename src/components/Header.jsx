import logo from "../assets/images/icon/icon.png";

function Header() {
    return (
        <header className="max-w-screen max-h-20 flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-50 bg-white drop-shadow-md">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width={"24"} height={"24"} viewBox="0 0 24 24">
                    <path fill={"none"} stroke={"#000"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d="M3 6.001h18m-18 6h18m-18 6h18" />
                </svg>
            </div>
            <div className="w-20 h-20 flex justify-center items-center">
                <a href="#">
                    <img src={logo} alt="Logo"/>
                </a>
            </div>
        </header>
    )
}
export default Header;