import React from "react";

export default function Card() {
  return (
    <div className="cardcontainer">
      <div className="cardcontainer__card">
        <div className="cardcontainer__card--img">
          <img src="./img/image.png" alt="Katie Zaferes" />
        </div>
        <div className="cardcontainer__card--stats">
          <p className="cardcontainer__card--stats-rating">
            <img src="./img/star.png" alt="Star" />
            <span className="cardcontainer__card--stats-rating__ratingStar">
              5.0
            </span>
            <span className="cardcontainer__card--stats-rating__buyer">
              (6)
            </span>
            <span className="cardcontainer__card--stats-rating__country">
              USA
            </span>
          </p>
          <p className="cardcontainer__card--stats-name">
            Life lessons with Katie Zaferes
          </p>
          <p className="cardcontainer__card--stats-price">
            <strong>From $136</strong>/ person
          </p>
        </div>
      </div>
    </div>
  );
}
