import { useState } from "react";
import { Link } from "react-router-dom";
function CategoryPage() {
    const [categories, setCategories] = useState([]);

    const handleLoadCategories = async () => {
        const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/categories.php",
        );

        const data = await response.json();

        setCategories(data.categories);
    };

    return (
        <div className="max-w-6xl mx-auto py-10">
            <h1 className="text-4xl font-bold text-center mb-8">
                Meal Categories
            </h1>

            <div className="text-center mb-10">
                <button
                    onClick={handleLoadCategories}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                >
                    View Meal Categories
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {categories.map((category) => (
                    <div
                        key={category.idCategory}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <img
                            src={category.strCategoryThumb}
                            alt={category.strCategory}
                            className="w-full"
                        />

                        <div className="p-5">
                            <h2 className="text-2xl font-semibold">
                                {category.strCategory}
                            </h2>

                            <p className="text-gray-600 my-3">
                                {category.strCategoryDescription.slice(0, 120)}
                                ...
                            </p>

                            <Link
                                to={`/meals/${category.strCategory}`}
                                className="text-blue-600 font-semibold"
                            >
                                View Food →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryPage;
