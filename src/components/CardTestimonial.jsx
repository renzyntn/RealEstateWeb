import cardImage1 from "../assets/images/achievement/achievement-image1.png";
import cardImage2 from "../assets/images/achievement/achievement-image2.png";
import cardImage3 from "../assets/images/achievement/achievement-image3.png";

function CardTestimonial() {
    return (
        <>
            <div className="card w-full bg-base-white shadow-xl">
                <figure>
                    <img src={cardImage1} alt="Shoes" />
                </figure>
                <div className="card-body space-y-2">
                    <h2 className="card-title text-xl">Top Residential Sales In The Last 5 Years</h2>
                    <p className="text-base text-justify">
                        We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.
                    </p>
                </div>
            </div>
            <div className="card w-full bg-base-white shadow-xl">
                <figure>
                    <img src={cardImage2} alt="Shoes" />
                </figure>
                <div className="card-body space-y-2">
                    <h2 className="card-title text-xl">Don't just list it, get it SOLD!</h2>
                    <p className="text-base text-justify">
                        We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.
                    </p>
                </div>
            </div>
            <div className="card w-full bg-base-white shadow-xl">
                <figure>
                    <img src={cardImage3} alt="Shoes" />
                </figure>
                <div className="card-body space-y-2">
                    <h2 className="card-title text-xl">Guide to Buyers</h2>
                    <p className="text-base text-justify">
                        Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!
                    </p>
                </div>
            </div>
        </>
    )
}
export default CardTestimonial;