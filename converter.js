import { writeFileSync } from "node:fs";

const data = [];

const objectsToCsv = (data) => {
  const csvRows = [];
  // Encabezados
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(","));

  // Filas
  for (const row of data) {
    const values = headers.map((header) => {
      const escaped = ("" + row[header]).replace(/"/g, '\\"');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(","));
  }

  return csvRows.join("\n");
};

const csvData = objectsToCsv(data);

writeFileSync("./data/data.csv", csvData);
