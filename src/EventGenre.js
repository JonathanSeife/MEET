import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
  useEffect(() => {
    setData(() => getData());
  }, [events]);

  const [data, setData] = useState([]);

  const getData = () => {
    const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
    const data = genres.map((genre) => {
      const value = events.filter((event) =>
        event.summary.split(" ").includes(genre)
      ).length;
      return { name: genre, value };
    });
    return data.filter((entry) => entry.value > 0);
  };

  const colors = ["#A3E4D7", "#f9d59f", "#EDBB99", "#7FB3D5", "#F1948A"];

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        {" "}
        <text
          x={410 / 2}
          y={5}
          fill="black"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan fontSize="24">Events by Genre</tspan>
        </text>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {" "}
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}{" "}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
