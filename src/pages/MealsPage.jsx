import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealCard from "../components/MealCard";

function MealsPage() {
    const { category } = useParams();

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
        )
            .then((res) => res.json())
            .then((data) => setMeals(data.meals));
    }, [category]);

    return (
        <div className="max-w-7xl mx-auto py-10 px-5">
            <h1 className="text-4xl font-bold text-center mb-10">
                {category} Meals
            </h1>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {meals.map((meal) => (
                    <MealCard key={meal.idMeal} meal={meal} />
                ))}
            </div>
        </div>
    );
}

export default MealsPage;
