/** @format */

import "./../index.css";
import { Container, TextField, Stack, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const CreateRecipe = () => {
  const [values, setValues] = useState([
    { id: "title", value: "" },
    { id: "ingredients", value: "" },
    { id: "instructions", value: "" },
    { id: "home_picture", value: "" },
    { id: "home_picture_alt", value: "" },
    { id: "picture_one", value: "" },
    { id: "picture_one_alt", value: "" },
    { id: "picture_two", value: "" },
    { id: "picture_two_alt", value: "" },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/recipes", {
        title: values[0].value,
        ingredients: values[1].value,
        instructions: values[2].value,
        home_picture: values[3].value,
        home_picture_alt: values[4].value,
        picture_one: values[5].value,
        picture_one_alt: values[6].value,
        picture_two: values[7].value,
        picture_two_alt: values[8].value,
      })
      .then((res) => alert("Rezept erfolgreich hinzugefügt"))
      .catch((err) => console.error(err));
    for (let i = 0; i < values.length; i++) console.log(values[i].value);
  };

  const handleChange = (e) => {
    const itemId = e.target.id;
    const itemValue = e.target.value;
    setValues(
      values.map((value) => {
        return value.id === itemId ? { ...value, value: itemValue } : value;
      })
    );
  };
  return (
    <>
      <main className="CreateRecipe">
        <Container>
          <form onSubmit={handleSubmit}>
            <Stack spacing={5} justifyContent="center">
              <TextField
                onChange={handleChange}
                className="text"
                color="secondary"
                required
                id="title"
                label="Titel"
                value={values[0].value}
              />

              <TextField
                onChange={handleChange}
                color="secondary"
                required
                multiline
                id="ingredients"
                label="Zutaten"
                helperText="pro zeile eine ZUTAT"
                value={values[1].value}
              />
              <TextField
                onChange={handleChange}
                color="secondary"
                required
                multiline
                id="instructions"
                label="Zubereitung"
                value={values[2].value}
              />
              <TextField
                onChange={handleChange}
                color="secondary"
                required
                id="home_picture"
                label="Hauptbild"
                helperText="Bitte URL angeben"
                value={values[3].value}
              />
              <TextField
                onChange={handleChange}
                color="secondary"
                required
                id="home_picture_alt"
                label="Beschreibung Hauptbild"
                value={values[4].value}
              />
              <TextField
                onChange={handleChange}
                color="secondary"
                required
                id="picture_one"
                label="Bild 1"
                helperText="Bitte URL angeben"
                value={values[5].value}
              />
              <TextField
                onChange={handleChange}
                color="secondary"
                required
                id="picture_one_alt"
                label="Beschreibung Bild 1"
                value={values[6].value}
              />
              <TextField
                onChange={handleChange}
                color="secondary"
                id="picture_two"
                label="Bild 2"
                helperText="Bitte URL angeben"
                value={values[7].value}
              />
              <TextField
                onChange={handleChange}
                color="secondary"
                id="picture_two_alt"
                label="Beschreibung Bild 2"
                value={values[8].value}
              />
            </Stack>
            <Button
              style={{ margin: "2em 0" }}
              variant="contained"
              type="submit"
              fullWidth
              size="large"
            >
              Rezept hinzufügen
            </Button>
          </form>
        </Container>
      </main>
    </>
  );
};

export default CreateRecipe;
