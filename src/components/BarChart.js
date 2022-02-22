import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      <h2>Hll</h2>
      <Bar
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        }}
        height={400}
        width={600}
      />
    </div>
  );
};

export default BarChart;
