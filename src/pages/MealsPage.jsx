import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {meals?.map((meal) => (
                    <div
                        key={meal.idMeal}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl duration-300"
                    >
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className="w-full h-52 object-cover"
                        />

                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-4">
                                {meal.strMeal}
                            </h2>

                            <Link
                                to={`/meal/${meal.idMeal}`}
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MealsPage;
