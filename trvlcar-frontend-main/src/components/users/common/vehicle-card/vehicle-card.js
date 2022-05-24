import React from "react";
import { Card } from "react-bootstrap";
import { RiGasStationFill, RiCarLine, RiCaravanLine } from "react-icons/ri";
import { IoIosSnow } from "react-icons/io";
import "./vehicle-card.css";

const VehicleCard = ({ vehicle }) => {
  const { image, pricePerHour, model, fuelType, airConditioning, doors, luggage } = vehicle;
  const imageSrc = `${process.env.REACT_APP_API_URL}/files/display/${image[0]}`;

  return (
    <Card className="vehicle-card">
      <div className="image-container">
        <Card.Img variant="top" src={imageSrc} />
        <span className="price">
          <span>${pricePerHour}</span>/day
        </span>
      </div>

      <Card.Body>
        <Card.Title>{model}</Card.Title>
        <Card.Text>
          <ul className="row g-1">
            <li className="col-6">
              <RiGasStationFill /> {fuelType}
            </li>
            <li className="col-6">
              <IoIosSnow /> {airConditioning ? "AC exists" : "AC not exists"}
            </li>
            <li className="col-6">
              <RiCarLine /> {doors} doors
            </li>
            <li className="col-6">
              <RiCaravanLine /> {luggage} lt
            </li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default VehicleCard;
