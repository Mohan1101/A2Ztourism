const Map = () => {
  // Extracted coordinates from the Google Maps link
  const locationCoordinates = "12.9121338,80.1764892";

  return (
    <div className="w-full h-[350px] md:h-[500px] text-center">
      <iframe
        className="w-full h-full rounded-lg"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15542.670916854896!2d${locationCoordinates.split(',')[1]}!3d${locationCoordinates.split(',')[0]}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x508746adaee81035!2sSkyline%20Elegance!5e0!3m2!1sen!2sin!4v1665412117284!5m2!1sen!2sin`}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
