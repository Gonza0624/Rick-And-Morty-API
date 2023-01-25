import React, { useState } from "react";
import { characters } from "../../api/characters";
import { CardComponent } from "../../components/card/card";
import Loader from "../../components/loader/loader";
import { TypeCharacter } from "./interface/character.interface";
import { Pagination } from "@mui/material";
import { Box, color } from "@mui/system";
import Title from "../../components/title/title";

export const HomePage: React.FC<{}> = () => {
  // const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>(null);
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // paginacion
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  React.useEffect(() => {
    setIsLoading(true);
    characters
      .getAll({ page })
      .then((response) => {
        setAllCharacters(response.data.results);
        setCount(response.data.info.pages);
        setTimeout(() => {
          setIsLoading(false);
        }, 600);
      })
      .catch((e) => {
        setIsLoading(false);
        console.error(e);
      });
  }, [page]);

  return (
    <div>
      <Title />
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : allCharacters?.length !== 0 ? (
        <div className="all-container">
          {allCharacters!.map((character, index) => (
            <CardComponent
              key={index}
              image={character.image}
              id={character.id}
              name={character.name}
              status={character.status}
            />
          ))}
        </div>
      ) : (
        "ERROR"
      )}
      <Box
        sx={{
          width: "100%",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#1d1c24",
          color: "red",
        }}
      >
        <Pagination
          size="large"
          variant="outlined"
          color="primary"
          count={count}
          page={page}
          onChange={handleChange}
          sx={{
            background: "#e7ebee",
            padding: "5px",
            mb: "5px",
            borderRadius: "5px",
          }}
        />
      </Box>
    </div>
  );
};
