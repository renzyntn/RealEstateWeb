import Marquee from "react-fast-marquee";
import partnerImg1 from "../assets/images/partner/partner-image1.png";
import partnerImg2 from "../assets/images/partner/partner-image2.png";
import partnerImg3 from "../assets/images/partner/partner-image3.png";
import partnerImg4 from "../assets/images/partner/partner-image4.png";

function Partners() {
  return (
    <section className="max-w-screen">
      <div className="w-full flex justify-center items-center py-6">
        <div className="flex w-full h-25 justify-center items-center">
          <Marquee>
            <img
              src={partnerImg1}
              alt={"Marquee image 1"}
              className="w-20 mx-5"
            />
            <img
              src={partnerImg2}
              alt={"Marquee image 2"}
              className="w-20 mx-5"
            />
            <img
              src={partnerImg3}
              alt={"Marquee image 3"}
              className="w-20 mx-5"
            />
            <img
              src={partnerImg4}
              alt={"Marquee image 4"}
              className="w-20 mx-5"
            />
          </Marquee>
        </div>
      </div>
    </section>
  );
}
export default Partners;
