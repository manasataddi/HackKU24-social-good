import React, { useState } from 'react';
import '../css/foodpostform.css'; // Make sure to create a FoodPostForm.css file for styling


var bgColors = { "Blue": "#354f52",                 
};

function FoodPostForm() {
  const [post, setPost] = useState({
    title: '',
    ingredients: [''],
    quantity: '',
    location: '',
    pickupTime: '',
    useBy: ''
  });

  const handleIngredientChange = (index, event) => {
    const newIngredients = [...post.ingredients];
    newIngredients[index] = event.target.value;
    setPost({ ...post, ingredients: newIngredients });
  };

  const addIngredientField = () => {
    setPost({ ...post, ingredients: [...post.ingredients, ''] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit your post data here
    console.log(post);
  };

  return (

    <div  style={{ paddingTop: '20px' }}>
      
    <div  className="food-post-form-container">
      <form onSubmit={handleSubmit} className="food-post-form">
        <input
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Name/Title of the food "
          className="food-post-input"
        />
        {post.ingredients.map((ingredient, index) => (
          <div key={index} className="ingredient-field">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e)}
              placeholder="Ingredient"
              className="food-post-input"
            />
            {index === post.ingredients.length - 1 && (
              <button type="button" onClick={addIngredientField} className="add-ingredient-button">
                Add Ingredient
              </button>
            )}
          </div>
        ))}
        <input
          type="text"
          value={post.quantity}
          onChange={(e) => setPost({ ...post, quantity: e.target.value })}
          placeholder="Quantity"
          className="food-post-input"
        />
        <input
          type="text"
          value={post.location}
          onChange={(e) => setPost({ ...post, location: e.target.value })}
          placeholder="Business/Resturant Name"
          className="food-post-input"
        />
        <input
          type="text"
          value={post.location}
          onChange={(e) => setPost({ ...post, location: e.target.value })}
          placeholder="Location"
          className="food-post-input"
        />
        <input
          type="text"
          value={post.pickupTime}
          onChange={(e) => setPost({ ...post, pickupTime: e.target.value })}
          placeholder="Time of Pickup"
          className="food-post-input"
        />
        <input
          type="text"
          value={post.useBy}
          onChange={(e) => setPost({ ...post, useBy: e.target.value })}
          placeholder="Best if Used By"
          className="food-post-input"
        />
      <button style={{ backgroundColor: bgColors.Blue }} type="submit" className="submit-post-button">Submit Post</button>
      </form>
      </div>
      <div>
      <img src="https://www.creativefabrica.com/wp-content/uploads/2022/09/05/Cartoon-of-donation-food-box-isolated-Graphics-37786816-1.png"/>
      </div>
      </div>
  );
}


export default FoodPostForm;