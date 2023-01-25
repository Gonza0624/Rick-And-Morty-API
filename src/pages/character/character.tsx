import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { characters } from "../../api/characters";
import { TypeCharacter } from "../home/interface/character.interface";
import { CharacterCard } from "../../components/characterCard/characterCardById";


export const CharacterPage: React.FC = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  //   const [character, setCharacter] = useState<TypeCharacter | null>(null);
  const [character, setCharacter] = useState<any>([]);

  console.log(id);
  useEffect(() => {
    setIsLoading(true);
    characters
      .getById({ id })
      .then((r) => {
        setCharacter(r.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 600);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <CharacterCard
        image={character.image}
        id={character.id}
        name={character.name}
        status={character.status}
        species={character.species}
        gender={character.gender}
        created={character.created}
      />
    </div>
  );
};
