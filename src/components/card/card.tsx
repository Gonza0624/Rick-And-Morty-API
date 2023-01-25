import { useNavigate } from "react-router-dom";
import "./card.css";

type CardProps = {
  id: number;
  image: string;
  name: string;
  status: string;
};

export const CardComponent: React.FC<CardProps> = ({
  id,
  image,
  name,
  status,
}) => {
  const statusValidation = () => {
    return status == "Alive" ? "alive" : status == "Dead" ? "dead" : "unknown";
  };
  const navigate = useNavigate();
  return (
    <article className="card-container">
      <figure className="img-container">
        <img src={image} alt="" />
      </figure>
      <div className="info">
        <p className="item">ID: {id}</p>
        <h3 className="item">Name: {name}</h3>
        <p className={statusValidation()}>Status: {status}</p>
        <div className="container-btn">
          <button
            onClick={() => navigate(`/character/${id}`)}
            className="card-btn"
          >
            Mas detalles
          </button>
        </div>
      </div>
    </article>
  );
};
