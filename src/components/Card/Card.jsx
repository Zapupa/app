import "./Card.scss";

const Card = ({ cardName, distance, transportName, imgSrc }) => {
  return (
    <div className="card">
      <div className="cardText">
        <div className="cardTextTop">{cardName}</div>
        <div className="cardTextBottom">
          <div className="cardTextBottomLeft">Расстояние: {distance}</div>
          <div className="cardTextBottomRight">Транспорт: {transportName}</div>
        </div>
      </div>
      <img src={imgSrc} alt="img" className="cardImg" />
    </div>
  );
};

export default Card;
