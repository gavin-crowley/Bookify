import { Link } from 'react-router-dom';
import Trashcan from '../assets/trashcan.svg';
import { projectFirestore } from '../firebase/config';

// styles
import './RecipeList.css';

export default function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <div className='error'>No books to load...</div>;
  }

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();
  };

  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <div key={recipe.id} className='card'>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime}</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Book Details</Link>
          <img
            src={Trashcan}
            className='delete'
            onClick={() => handleClick(recipe.id)}
            alt='Delete'
          />
        </div>
      ))}
    </div>
  );
}
