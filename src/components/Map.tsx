import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

interface CountryData {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  recovered: number;
  deaths: number;
}

interface ResponseData {
  data: CountryData[];
}

// This component renders a map displaying Covid-19 cases data for countries.
const Map = () => {
  // Fetch data from the API using react-query.
  const { data } = useQuery<ResponseData>("countriesData", async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/countries");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const responseData = await response.json();
    return { data: responseData };
  });

  // Render loading message if data is not yet available.
  if (!data) {
    return <div>Loading...</div>;
  }

  // Render map container with markers for each country.
  return (
    <MapContainer
      center={[0, 0]}
      zoom={1.5}
      minZoom={1.5}
      maxZoom={10}
      maxBounds={[
        [-120, -270],
        [120, 270],
      ]}
      trackResize={true}
      className="ml-40 lg:ml-0 md:ml-56"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Map over the data and render a marker for each country. */}
      {data.data.map((countryData) => (
        <Marker
          key={countryData.country}
          position={[countryData.countryInfo.lat, countryData.countryInfo.long]}
          icon={
            new Icon({
              iconUrl: countryData.countryInfo.flag,
              iconSize: [30, 30],
              className: "rounded-full hover:scale-105 duration300",
            })
          }
        >
          {/* Display country details in a popup. */}
          <Popup>
            <div className="w-32">
              <h3 className="text-xl font-bold mb-3 md:text-lg sm:text-md">
                {countryData.country}
              </h3>
              <div>
                <div className="text-lg mb-1">
                  <div className="font-bold">Cases:</div>
                  <div className="font-semibold">
                    {countryData.cases.toLocaleString()}
                  </div>
                </div>
                <div className="text-lg text-green-600 mb-1">
                  <div className="font-bold">Recovered:</div>
                  <div className="font-semibold">
                    {countryData.recovered.toLocaleString()}
                  </div>
                </div>
                <div className="text-lg text-red-500 mb-1">
                  <div className="font-bold">Deaths:</div>
                  <div className="font-semibold">
                    {countryData.deaths.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
