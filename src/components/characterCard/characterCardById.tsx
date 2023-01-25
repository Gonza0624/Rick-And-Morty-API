import "./characterCard.css";
import { useNavigate } from "react-router-dom";

type CardProps = {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  created: string;
};

export const CharacterCard: React.FC<CardProps> = ({
  id,
  image,
  name,
  status,
  species,
  gender,
  created,
}) => {
  const navigate = useNavigate();
  const goBack = () => {
    return navigate(-1);
  };
  return (
    <article className="character-container">
      <figure className="character-img">
        <img src={image} alt="" />
      </figure>
      <div className="character-info">
        <p className="character-item">ID: {id}</p>
        <p className="character-item">Name: {name}</p>
        <p className="character-item">Status: {status}</p>
        <p className="character-item">species: {species}</p>
        <p className="character-item">gender: {gender}</p>
        <p className="character-item">created: {created}</p>
        <button onClick={goBack} className="character-btn">
          Volver atras
        </button>
      </div>
    </article>
  );
};
