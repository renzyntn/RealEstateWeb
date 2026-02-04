import locationData from "../data.json";

function Location() {
  return (
    <section className="max-w-screen">
      <div className="w-full h-60 lg:h-120">
        <iframe
          src={locationData.locationSection.mapLink}
          title={locationData.locationSection.title}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
export default Location;
