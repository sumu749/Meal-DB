import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import MealsPage from "./pages/MealsPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<CategoryPage />} />

            <Route path="/meals/:category" element={<MealsPage />} />
        </Routes>
    );
}

export default App;
