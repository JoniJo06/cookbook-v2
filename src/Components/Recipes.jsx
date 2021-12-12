/** @format */

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import "./../index.css";
import Footer from "./Footer";
import Header from "./Header";

const Recipes = () => {
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);
  // const [ingredients, setIngredients] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
        )
        .then((res) => setRecipes(res.data.items))
        .catch((err) => console.error(err));

      setIsLoading(false);
    };
    fetchData();
  }, []);
  const recipe = recipes.filter((el) => {
    return el.sys.id === id;
  });

  return (
    <>
      <header>
        <Header />
      </header>
      {!isLoading ? (
        <Container maxWidth="100%" className="Recipes">
          <h1 className="recipeHeader">{recipe[0].fields.title}</h1>
          <div className="imageContainer">
            <img className="meal" src={recipe[0].fields.picture1} alt="#" />
            {recipe[0].fields.picture2 && (
              <img className="meal" src={recipe[0].fields.picture2} alt="#" />
            )}
          </div>
          <h3>Zutaten</h3>
          {recipe[0].fields.ingredients.content.map((el, i) => {
            return <p key="i">{el.content[0].value}</p>;
          })}

          <h3> Zubereitung</h3>
          <div
            dangerouslySetInnerHTML={{ __html: recipe[0].fields.instructions }}
          ></div>
        </Container>
      ) : (
        "loading..."
      )}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Recipes;
