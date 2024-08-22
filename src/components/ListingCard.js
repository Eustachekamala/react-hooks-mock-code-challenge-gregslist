import React, { useState } from "react";

function ListingCard({ image, price, description, location, onDelete, id }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(prevState => !prevState);
  }

  const handleDelete = () => {
    // Optionally confirm deletion with the user
    if (window.confirm("Are you sure you want to delete this listing?")) {
      setIsDeleted(true); // Mark as deleted to hide the card
      onDelete(id); // Notify parent to handle server-side deletion
    }
  }

  if (isDeleted) {
    return null; // Don't render the card if it is marked as deleted
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">${price}</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
