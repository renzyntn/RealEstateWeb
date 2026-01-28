import servicesImg1 from "../assets/images/services/services-image1.png";
import servicesImg2 from "../assets/images/services/services-image2.png";
import servicesImg3 from "../assets/images/services/services-image3.png";

function CardServices() {
  return (
    <>
      <div className="card w-full bg-base-white shadow-xl/20">
        <figure>
          <img src={servicesImg1} alt="Services Image 1" />
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title text-xl">Real Estate Done Right</h2>
          <p className="text-base text-justify">
            Nervous about your property adventure? Don’t be. Whether you're
            getting ready to buy or sell your residence, looking at investment
            properties, or just curious about the markets, our team ensures you
            get the best experience possible!
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-white shadow-xl/20">
        <figure>
          <img src={servicesImg2} alt="Services Image 2" />
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title text-xl">Commercial and Residential</h2>
          <p className="text-base text-justify">
            Large or small, condo or mansion, we can find it and get at the
            price that's right. Fixer-uppers? Luxury? We can help with all of
            it! We live, work, and play in this community. Happy to help you
            find where to put you hard-earned dollars.
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-white shadow-xl/20">
        <figure>
          <img src={servicesImg3} alt="Services Image 3" />
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title text-xl">Rely on Expertise</h2>
          <p className="text-base text-justify">
            If you have questions about affordability, credit, and loan options,
            trust us to connect you with the right people to get the answers you
            need in a timely fashion. We make sure you feel confident and
            educated every step of the way.
          </p>
        </div>
      </div>
    </>
  );
}
export default CardServices;
