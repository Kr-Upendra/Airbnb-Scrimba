import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.spots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      <div className="card__img">
        <img src={`./img/${props.coverImg}`} alt="Katie Zaferes" />
        {badgeText && <div className="card__soldout">{badgeText}</div>}
      </div>
      <div className="card__stats">
        <p className="card__stats--rating">
          <img src="./img/star.png" alt="Star" />
          <span className="card__stats--rating-ratingStar">
            {props.stats.rating}
          </span>
          <span className="card__stats--rating-reviewCount">
            ({props.stats.reviewCount})
          </span>
          <span className="card__stats--rating-country">{props.location}</span>
        </p>
        <p className="card__stats--name">{props.title}</p>
        <p className="card__stats--price">
          <strong>From ${props.price}</strong> / person
        </p>
      </div>
    </div>
  );
}
