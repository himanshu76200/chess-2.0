/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Piece = ({ piece: { type, color } }) => {
  const pieceImagePath = `assets/${type}_${color}.png`;
  return (
    <div className="piece-container">
      <img src={pieceImagePath} className="piece" />
    </div>
  );
};

export default Piece;
