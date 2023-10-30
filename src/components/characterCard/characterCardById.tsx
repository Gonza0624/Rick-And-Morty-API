import React, { useState } from "react";
import "./characterCard.css";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/loader";

type CardProps = {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  type: string;
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
  type,
}) => {
  const navigate = useNavigate();
  const goBack = () => {
    return navigate(-1);
  };
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);

  return (
    <div className="character-container-main">
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <article className="character-container">
          <figure className="character-img">
            <img src={image} alt="" />
          </figure>
          <div className="character-info">
            <p className="character-item">{id}</p>
            <p className="character-item">{name}</p>
            <p className="character-item">Status {status}</p>
            <p className="character-item">{species}</p>
            <p className="character-item">{gender}</p>
            <p className="character-item">{type}</p>
            <p className="character-item">{created}</p>
            <button onClick={goBack} className="character-btn">
              Volver atrás
            </button>
          </div>
        </article>
      )}
    </div>
  );
};
