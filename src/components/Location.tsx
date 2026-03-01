import locationData from "../data.json";

function Location() {
  return (
    <div className="w-full h-60">
      <iframe
        src={locationData.locationSection.mapLink}
        title={locationData.locationSection.title}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
}
export default Location;
