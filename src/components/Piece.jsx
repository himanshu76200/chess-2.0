/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDrag, DragPreviewImage } from "react-dnd";

const Piece = ({ piece: { type, color }, position }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: "piece",
    item: { id: `${position}_${type}_${color}` },
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging() };
    },
  });
  const pieceImagePath = `assets/${type}_${color}.png`;

  return (
    <>
      <DragPreviewImage connect={preview} src={pieceImagePath} />
      <div
        className="piece-container"
        ref={drag}
        style={{ opacity: isDragging ? 0 : 1 }}
      >
        <img src={pieceImagePath} className="piece" />
      </div>
    </>
  );
};

export default Piece;
