/** @format */

import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Recipes from "./Recipes";
import CreateRecipe from "./CreateRecipe";

const NavigationDefinition = ({ adminLogin }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage adminLogin={adminLogin} />} />
        <Route
          path="recipes/:id"
          element={<Recipes adminLogin={adminLogin} />}
        />
        <Route
          path="create-recipe"
          element={<CreateRecipe adminLogin={adminLogin} />}
        />
      </Routes>
    </div>
  );
};

export default NavigationDefinition;
