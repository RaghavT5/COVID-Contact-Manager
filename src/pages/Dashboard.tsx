import Chart from "../components/Chart";
import Map from "../components/Map";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-between pt-28 text-center">
      <h1 className="lg:text-6xl font-bold mb-4 md:text-5xl text-4xl ">
        COVID-19 Dashboard
      </h1>
      <div className="flex flex-col justify-center items-center w-full mt-16">
        <h2 className="lg:text-5xl font-bold mb-10 text-4xl">
          Total Number of Cases
        </h2>
        <div className="w-full lg:w-1/2 mb-4 px-6">
          <Chart />
        </div>
        <h2 className="text-5xl font-bold mt-20 mb-7 md:text-4xl sm:text-2xl">
          Country-Wise Data
        </h2>
        <div className="place-items-center lg:w-auto mt-4 ml-36 mb-20 z-0">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
