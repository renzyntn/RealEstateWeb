import imgProfile from "../assets/images/agent/agent-image.png";

function Profile() {
  return (
    <section className="max-w-screen md:h-200">
      <div className="w-full h-full flex flex-col justify-center items-center px-4 py-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-15 lg:gap-30 text-black font-montserrat">
          <div className="flex flex-col justify-center items-center space-y-3">
            <div className="size-70 lg:size-80 rounded-full overflow-hidden">
              <img src={imgProfile} alt="Marci Metzger Image" />
            </div>
            <h2 className="font-cinzel font-medium text-3xl md:text-4xl">
              Marci Metzger
            </h2>
            <h3 className="font-medium text-xl md:text-2xl">
              Real Estate Broker
            </h3>
          </div>
          <p className="md:w-md lg:w-xl text-center md:text-justify text-base md:text-xl">
            I’m Marci Metzger, a real estate broker with over 30 years of
            experience. In 2021, me and my team helped nearly 90 clients close
            deals totaling $28.5 million. My focus is on providing expert
            guidance and making the real estate process seamless for every
            client. Whether buying or selling, I’m dedicated to delivering
            successful outcomes with personalized service.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Profile;
