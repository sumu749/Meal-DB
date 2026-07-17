import { Link } from "react-router-dom";

function CategoryCard({ category }) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl duration-300">
            <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="w-full h-56 object-cover"
            />

            <div className="p-5">
                <h2 className="text-2xl font-bold">{category.strCategory}</h2>

                <p className="my-4 text-gray-600">
                    {category.strCategoryDescription.slice(0, 100)}...
                </p>

                <Link
                    to={`/meals/${category.strCategory}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    View Meals
                </Link>
            </div>
        </div>
    );
}

export default CategoryCard;
