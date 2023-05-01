import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { useQuery } from "react-query";

// Function to fetch graph data
const fetchGraphData = async () => {
  const response = await fetch(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  const data = await response.json();
  const { cases } = data;
  const graphData = [];

  // Convert data into format compatible with LineChart
  for (const date in cases) {
    graphData.push({ date, cases: cases[date] });
  }

  return graphData;
};

// Component for rendering the line chart
const Chart = () => {
  // Use React Query to fetch the graph data
  const { data } = useQuery("graphData", fetchGraphData);

  return (
    <div className="justify-center items-center place-items-center">
      <h2 className="text-2xl font-bold mb-4 md:ml-0">Cases Fluctuations</h2>
      <LineChart
        width={960}
        height={540}
        data={data} // Pass in the data fetched from the API
        margin={{ top: 30, right: 10, bottom: 20, left: 40 }}
        className="lg:ml-0 md:ml-52"
      >
        <XAxis
          dataKey="date" // Specify the data key for the X-axis
          stroke="#9CA3AF"
          tick={{ fontSize: 13, fontWeight: "bold" }}
        />
        <YAxis stroke="#9CA3AF" tick={{ fontSize: 18, fontWeight: "bold" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#F9FAFB",
            border: "none",
            borderRadius: "4px",
            boxShadow:
              "0px 4px 10px rgba(0, 0, 0, 0.25), 0px 0px 5px rgba(0, 0, 0, 0.1)",
            padding: "12px",
          }}
          labelStyle={{ fontWeight: "bold" }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="cases" // Specify the data key for the Y-axis
          stroke="#3B82F6"
          strokeWidth={3}
          dot={{ r: 5, strokeWidth: 2, fill: "#fff", stroke: "#3B82F6" }}
          activeDot={{
            r: 8,
            strokeWidth: 2,
            fill: "#fff",
            stroke: "#3B82F6",
          }}
        />
      </LineChart>
    </div>
  );
};

export default Chart; // Export the Chart component
