import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(error => console.error('Error fetching listings:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      // Remove the listing from the state
      setListings(prevListings => prevListings.filter(listing => listing.id !== id));
    })
    .catch(error => console.error('Error deleting listing:', error));
  }


  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id} // Use unique id instead of index
            image={listing.image}
            price={listing.price}
            description={listing.description}
            location={listing.location}
            onDelete={handleDelete}
            id={listing.id}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
