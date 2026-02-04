import footerData from "../data.json";

function Footer() {
  const currentYear = new Date().getFullYear();

  const displaySocial = footerData.heroSection.socials.map((data) => {
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

  return (
    <footer className="max-w-screen px-4 py-6 lg:px-8 font-montserrat text-white bg-black">
      <nav
        className="w-full flex justify-center items-center gap-2"
        aria-label="Social media links"
      >
        {displaySocial}
      </nav>
      <div className="flex justify-center items-center mt-6">
        <p className="text-sm text-center font-normal">
          {`Copyright © ${currentYear} Marci Metzger Homes - All Rights Reserved`}
        </p>
      </div>
    </footer>
  );
}
export default Footer;
