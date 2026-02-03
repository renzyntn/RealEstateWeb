import imgBanner from "../assets/images/banner/banner-image.png";
import ClientCount from "./CountUp/ClientCount";
import SalesCount from "./CountUp/SalesCount";

function Hero() {
  return (
    <section className="max-w-screen h-150 md:h-200 mt-20">
      <div className="w-full h-full flex justify-center items-center">
        <img
          className="w-full h-full object-cover brightness-45"
          src={imgBanner}
          alt="Image Banner"
        />
        <div className="absolute flex flex-col justify-center items-center px-4 space-y-6 text-white text-center">
          <h1 className="font-montserrat font-medium text-base md:text-lg">
            MARCI METZGER – THE RIDGE REALTY GROUP
          </h1>
          <h2 className="font-cinzel font-light text-4xl">Pahrump Realtor</h2>
          <a
            className="w-full h-10 flex justify-center items-center bg-white rounded-full font-montserrat text-black"
            href="tel: (206) 919-6886"
          >
            <span className="font-medium text-base md:text-lg">CALL NOW</span>
          </a>
          <div className="w-full grid grid-cols-2 justify-center items-center font-cinzel text-center">
            <div className="stat p-0 md:gap-2">
              <p className="stat-title text-white text-lg md:text-2xl">
                CLIENTS
              </p>
              <ClientCount />
              <p className="stat-desc text-white text-lg md:text-2xl">
                IN 2021
              </p>
            </div>
            <div className="stat p-0 md:gap-2">
              <p className="stat-title text-white text-lg md:text-2xl">SALES</p>
              <SalesCount />
              <p className="stat-desc text-white text-lg md:text-2xl">
                IN TOTAL
              </p>
            </div>
          </div>
          <nav
            className="w-full flex justify-center items-center gap-2"
            aria-label="Social media links"
          >
            <a
              href="https://www.facebook.com/MarciHomes/"
              target={"_blank"}
              className="size-6 lg:size-8"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill={"#fff"}
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/marci-metzger-30642496/"
              target={"_blank"}
              className="size-6 lg:size-8"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill={"#fff"}
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump"
              target={"_blank"}
              className="size-6 lg:size-8"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill={"#fff"}
                  fillRule={"evenodd"}
                  d="m4.98 11.264l4.701 2.278a1.075 1.075 0 0 1 .6 1.074a1.07 1.07 0 0 1-.81.927L4.393 16.8a1.09 1.09 0 0 1-1.187-.492a1.1 1.1 0 0 1-.146-.429a9.2 9.2 0 0 1 .424-3.996a1.07 1.07 0 0 1 .606-.645a1.1 1.1 0 0 1 .888.026m1.884 9.615l3.5-3.861a1.08 1.08 0 0 1 1.205-.277a1.08 1.08 0 0 1 .673 1.03l-.183 5.195a1.07 1.07 0 0 1-.396.793a1.08 1.08 0 0 1-.861.226a9.4 9.4 0 0 1-3.748-1.506a1.07 1.07 0 0 1-.46-.758a1.07 1.07 0 0 1 .27-.842m8.298-5.139l4.975 1.606a1.08 1.08 0 0 1 .657.596a1.06 1.06 0 0 1-.017.884a9.3 9.3 0 0 1-2.487 3.166a1.082 1.082 0 0 1-1.602-.258l-2.773-4.408a1.065 1.065 0 0 1 .065-1.226a1.08 1.08 0 0 1 1.182-.36m5.059-3.152l-5.029 1.433a1.085 1.085 0 0 1-1.169-.4A1.065 1.065 0 0 1 14 12.393l2.926-4.308a1.08 1.08 0 0 1 .755-.464a1.1 1.1 0 0 1 .85.257a9.2 9.2 0 0 1 2.379 3.25a1.07 1.07 0 0 1-.691 1.46M8.469.468a15 15 0 0 0-2.585.946a1.08 1.08 0 0 0-.564.65a1.06 1.06 0 0 0 .097.851l4.915 8.456a1.076 1.076 0 0 0 1.212.499a1.066 1.066 0 0 0 .799-1.034V1.072A1.065 1.065 0 0 0 11.622.06a1.1 1.1 0 0 0-.437-.057c-.918.072-1.826.228-2.715.465"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://wa.me/14259412560"
              target={"_blank"}
              className="size-6 lg:size-8"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill={"#fff"}
                  d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.03-1.355L2.005 22l1.352-4.968A9.95 9.95 0 0 1 2.001 12c0-5.523 4.477-10 10-10M8.593 7.3l-.2.008a1 1 0 0 0-.372.1a1.3 1.3 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.73 2.73 0 0 0 6.9 9.62c.002.49.13.967.33 1.413c.409.902 1.082 1.857 1.97 2.742c.214.213.424.427.65.626a9.45 9.45 0 0 0 3.84 2.046l.568.087c.185.01.37-.004.556-.013a2 2 0 0 0 .833-.231a5 5 0 0 0 .383-.22q.001.002.125-.09c.135-.1.218-.171.33-.288q.126-.13.21-.302c.078-.163.156-.474.188-.733c.024-.198.017-.306.014-.373c-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.402-.621a.5.5 0 0 0-.176-.041a.48.48 0 0 0-.378.127c-.005-.002-.072.055-.795.931a.35.35 0 0 1-.368.13a1.4 1.4 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.108a6 6 0 0 1-1.575-1.003c-.126-.11-.243-.23-.363-.346a6.3 6.3 0 0 1-1.02-1.268l-.059-.095a1 1 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41c.11-.14.203-.276.263-.373c.118-.19.155-.385.093-.536q-.42-1.026-.868-2.041c-.059-.134-.234-.23-.393-.249q-.081-.01-.162-.016a3 3 0 0 0-.403.004z"
                ></path>
              </svg>
            </a>
          </nav>
          <p className="font-cinzel font-medium text-xl">206-919-6886</p>
        </div>
      </div>
    </section>
  );
}
export default Hero;
