import CardTestimonial from "./CardTestimonial";

function Testimonial() {
    return (
        <section className="max-w-screen">
            <div className="w-full h-full flex flex-col justify-center items-center space-y-4 px-4 py-6 bg-white text-black font-montserrat">
                <div className="w-full flex flex-col items-center space-y-6">
                    <h2 className="text-3xl font-medium font-cinzel mb-4">
                        GET IT SOLD
                    </h2>
                    <div className="grid grid-cols-1 gap-6 justify-center items-center">
                        <CardTestimonial />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Testimonial;