import React, { useState, useEffect } from "react";
import axiosInstance from "../axios";
import "bootstrap/dist/css/bootstrap.min.css";
import KurulusList from "./KurulusList";

const kurulusTypeOptions = [
  { value: "S", label: "Şahıs" },
  { value: "BI", label: "Büyük İşletme" },
  { value: "K", label: "KOBİ" },
  { value: "STK", label: "STK" },
];
function KurulusFilter() {
  const [kurulusData, setKurulusData] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    country: "",
    type: "",
    employees_range_min: "",
    employees_range_max: "",
    date_range_min: "",
    date_range_max: "",
  });

  const fetchKurulusData = async () => {
    try {
      const queryParams = {
        name: filters.name,
        country: filters.country,
        employees_range_min: filters.employees_range_min,
        employees_range_max: filters.employees_range_max,
        date_range_min: filters.date_range_min,
        date_range_max: filters.date_range_max,
        type: filters.type.join(","),
      };

      const response = await axiosInstance.get("/rest/kuruluslist", {
        params: queryParams,
      });
      setKurulusData(response.data);
    } catch (error) {
      console.error("Error fetching kurulus data:", error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "type") {
      const updatedType = checked
        ? [...filters.type, value]
        : filters.type.filter((typeValue) => typeValue !== value);
      setFilters((prevFilters) => ({
        ...prevFilters,
        type: updatedType,
      }));
    } else {
      setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    }
  };

  const handleFilterButtonClick = () => {
    fetchKurulusData();
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="kurulus-list-container col-md-4">
        <div className="filter-section">
          <h2>Filters</h2>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Name of Kurulus"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Country Code (like: TR, IQ, ...)"
            name="country"
            value={filters.country}
            onChange={handleFilterChange}
          />
          {kurulusTypeOptions.map((option) => (
            <div className="form-check" key={option.value}>
              <input
                type="checkbox"
                className="form-check-input"
                name="type"
                value={option.value}
                checked={filters.type.includes(option.value)}
                onChange={handleFilterChange}
              />
              <label className="form-check-label">{option.label}</label>
            </div>
          ))}

          <div className="form-row">
            <div className="col">
              <input
                type="number"
                className="form-control mb-2"
                placeholder="Employees Min"
                name="employees_range_min"
                value={filters.employees_range_min}
                onChange={handleFilterChange}
              />
              <input
                type="number"
                className="form-control mb-2"
                placeholder="Employees Max"
                name="employees_range_max"
                value={filters.employees_range_max}
                onChange={handleFilterChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <input
                type="date"
                className="form-control mb-2"
                placeholder="Date Min"
                name="date_range_min"
                value={filters.date_range_min}
                onChange={handleFilterChange}
              />
              <input
                type="date"
                className="form-control mb-2"
                placeholder="Date Max"
                name="date_range_max"
                value={filters.date_range_max}
                onChange={handleFilterChange}
              />
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <button
              className="btn btn-primary"
              onClick={handleFilterButtonClick}
            >
              Filterle
            </button>
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <KurulusList kurulusData={kurulusData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KurulusFilter;
