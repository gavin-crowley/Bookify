import { Link } from 'react-router-dom'

// styles
import './RecipeList.css'

export default function RecipeList({ recipes }) {

  if (recipes.length === 0) {
    return <div className="error">No books to load...</div>
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime}</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Book Details</Link>
        </div>
      ))}
    </div>
  )
}
