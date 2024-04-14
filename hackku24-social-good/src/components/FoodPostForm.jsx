import React, { useState } from 'react';
import '../css/foodpostform.css'; // Make sure to create a FoodPostForm.css file for styling
import { addToArr, getAllFoods } from '../utils/fetchFromAPI';

var bgColors = { "Blue": "#354f52",                 
};

function FoodPostForm() {
  const [post, setPost] = useState({
    foodId: '',
    foodName: '',
    businessName: '',
    imgSrc: 'https://cdn1.vectorstock.com/i/1000x1000/01/40/healthy-food-cartoon-vector-22230140.jpg',
    ingredients: '',
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
    var thingToAdd = {
      "foodId": getAllFoods.length+1,
      "foodName": post.foodName,
      "foodBestBy": post.useBy,
      "imgUrl": post.imgSrc,
      "foodQuantity": post.quantity,
      "foodPostedBy": post.businessName,
      "foodLocation": post.location,
      "pickUpTime": post.pickupTime
  }
    addToArr(thingToAdd)
    console.log(post);
  };

  return (

    <div  style={{ paddingTop: '20px', backgroundImage: `url('https://wallpapers.com/images/hd/pastel-gradient-background-3840-x-2160-yyj5vp6chp9is7en.jpg')`, backgroundSize: 'cover' }}>
      
    <div  className="food-post-form-container">
      <form onSubmit={handleSubmit} className="food-post-form">
        <input
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Name/Title of the food "
          className="food-post-input"
        />
        <input
              type="text"
              value={post.ingredient}
              placeholder="Ingredients"
              onChange={(e) => setPost({ ...post, ingredients: e.target.value })}
              className="food-post-input"
            />
        <input
          type="text"
          value={post.quantity}
          onChange={(e) => setPost({ ...post, quantity: e.target.value })}
          placeholder="Quantity/Servings"
          className="food-post-input"
        />
        <input
          type="text"
          value={post.businessName}
          onChange={(e) => setPost({ ...post, businessName: e.target.value })}
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
      <img src="https://png.pngtree.com/png-vector/20230103/ourmid/pngtree-charity-and-donating-food-concept-png-image_6549098.png"/>
      </div>
      </div>
  );
}



export default FoodPostForm;