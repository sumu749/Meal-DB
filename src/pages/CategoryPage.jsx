import { useState } from "react";
import CategoryCard from "../components/CategoryCard";
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <CategoryCard
                        key={category.idCategory}
                        category={category}
                    />
                ))}
            </div>
        </div>
    );
}

export default CategoryPage;
