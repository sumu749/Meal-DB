import { Link } from "react-router-dom";

function MealCard({ meal }) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl duration-300">
            <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-56 object-cover"
            />

            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">{meal.strMeal}</h2>

                <Link
                    to={`/meal/${meal.idMeal}`}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}

export default MealCard;
