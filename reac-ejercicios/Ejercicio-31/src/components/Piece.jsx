import { useState, useEffect } from "react";
import { useDrag, DragPreviewImage } from "react-dnd";

const Piece = ({ piece: { type, color }, position }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: {
      type: "piece",
      id: `${position}_${type}_${color}`,
    },
    type: "piece",
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging() };
    },
  });

  const [pieceImg, setPieceImg] = useState(null);

  const loadImage = async () => {
    try {
      const imagePath = `./images/${type}_${color}.png`;
      const imageModule = await import(imagePath);
      const pieceImg = imageModule.default;
      setPieceImg(pieceImg);
    } catch (error) {
      console.error(`Error loading image: ${error}`);
    }
  };

  useEffect(() => {
    loadImage();
  }, [type, color]);

  return (
    <>
      <DragPreviewImage connect={preview} src={pieceImg} />
      <div
        className="piece-container"
        ref={drag}
        style={{ opacity: isDragging ? 0 : 1 }}
      >
        <img src={pieceImg} alt="" className="piece" />
      </div>
    </>
  );
};

export default Piece;