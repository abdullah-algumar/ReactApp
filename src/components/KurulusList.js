import React from "react";

function KurulusList({ kurulusData }) {
  return (
    <div className="kurulus-list col-md-4">
      <h2>Kurulus Listesi</h2>
      <ul>
        {kurulusData.map((kurulus) => (
          <li key={kurulus.id}>
            {kurulus.name} - {kurulus.country} - {kurulus.type} -{" "}
            {kurulus.employees} - {kurulus.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KurulusList;
