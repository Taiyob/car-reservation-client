import { FormEvent, useState } from "react";
import carBookingImage1 from "../../assets/images/carBooking.jpg";

const CarBooking = () => {
  const [make, setMake] = useState("Volkswagen");
  const [model, setModel] = useState("Golf");
  const [year, setYear] = useState("2021");
  const [mileage, setMileage] = useState("125-200,000 mi");
  const [city, setCity] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!city) {
      alert("Please select a city to continue.");
    } else {
      // Handle form submission
      console.log({ make, model, year, mileage, city });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "50px",
      }}
    >
      <form style={{ width: "40%" }} onSubmit={handleSubmit}>
        <h1>Earn money by sharing your car with locals</h1>
        <div style={{ marginBottom: "10px" }}>
          <select
            value={make}
            onChange={(e) => setMake(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          >
            <option value="Volkswagen">Volkswagen</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          >
            <option value="Golf">Golf</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          >
            <option value="2021">2021</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <select
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          >
            <option value="125-200,000 mi">125-200,000 mi</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px",
            width: "100%",
            backgroundColor: "#ffd700",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
      <div style={{ width: "50%" }}>
        <img src={carBookingImage1} alt="Car" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default CarBooking;
