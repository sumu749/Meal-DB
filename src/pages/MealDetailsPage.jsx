import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MealDetailsPage() {
    const { id } = useParams();

    const [meal, setMeal] = useState(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res) => res.json())
            .then((data) => setMeal(data.meals[0]));
    }, [id]);

    if (!meal) {
        return <h2 className="text-center mt-20 text-3xl">Loading...</h2>;
    }

    return (
        <div className="max-w-6xl mx-auto py-10 px-5">
            <div className="grid md:grid-cols-2 gap-10">
                {/* Image */}

                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="rounded-xl shadow-lg"
                />

                {/* Details */}

                <div>
                    <h1 className="text-4xl font-bold mb-5">{meal.strMeal}</h1>

                    <p className="mb-2">
                        <span className="font-bold">Category :</span>

                        {meal.strCategory}
                    </p>

                    <p className="mb-2">
                        <span className="font-bold">Area :</span>

                        {meal.strArea}
                    </p>

                    <p className="mb-6">
                        <span className="font-bold">Tags :</span>

                        {meal.strTags || "No Tags"}
                    </p>

                    <h2 className="text-2xl font-bold mb-3">Instructions</h2>

                    <p className="text-gray-700 leading-7">
                        {meal.strInstructions}
                    </p>
                    <h2 className="text-2xl font-bold mt-8 mb-3">
                        Ingredients
                    </h2>

                    <ul className="list-disc ml-6 space-y-2">
                        {Array.from({ length: 20 }, (_, index) => {
                            const ingredient =
                                meal[`strIngredient${index + 1}`];

                            return ingredient ? (
                                <li key={index}>{ingredient}</li>
                            ) : null;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MealDetailsPage;
