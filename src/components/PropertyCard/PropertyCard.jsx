import React from "react";
import './PropertyCard.css'
import {truncate} from 'lodash'
import { useHistory } from "react-router-dom"; // Import useHistory hook

const PropertyCard = ({property}) => {
  const history = useHistory(); // Initialize useHistory hook

  return (
    <div className="flexColStart r-card"
         onClick={() => history.push(`/properties/${property.id}`)}> {/* Use history.push for navigation */}
      <img src={property.image} alt="home" />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{property.price}</span>
      </span>
      <span className="primaryText">{truncate(property.title, {length: 15})}</span>
      <span className="secondaryText">{truncate(property.description, {length: 80})}</span>
    </div>
  );
};

export default PropertyCard;