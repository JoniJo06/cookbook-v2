/** @format */

import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Recipes from "./Recipes";
import CreateRecipe from "./CreateRecipe";


const NavigationDefinition = () => {
  
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="recipes/:id" element={<Recipes />} />
        <Route path="create-recipe" element={<CreateRecipe />} />
      </Routes>
    </div>
  );
};

export default NavigationDefinition;
