import React from "react";
import "./style.css";

const Image = ({ props }) => (
  <img alt={props} src={"../../../public/Images/" + props} />
);

const AllImages = [
  "ackbar.png",
  "boba.png",
  "c3po.png",
  "chewy.png",
  "Emperor.png",
  "greedo.png",
  "han.png",
  "jabba.png",
  "leia.png",
  "luke.png",
  "nien.png",
  "r2d2.png",
  "storm.png",
  "tessek.png",
  "vader.png"
];

const ImageCard = props => {
  return (
    <div className="card" onClick={props.imageClick}>
      <div className="img-container" />
    </div>
  );
};

export default ImageCard;
