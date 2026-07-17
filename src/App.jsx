import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import MealsPage from "./pages/MealsPage";
import MealDetailsPage from "./pages/MealDetailsPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<CategoryPage />} />

            <Route path="/meals/:category" element={<MealsPage />} />

            <Route path="/meal/:id" element={<MealDetailsPage />} />
        </Routes>
    );
}

export default App;
