import React, {useState} from "react";

function ListingCard({list, deletedItems}) {
  const [isFavorite, setIsFavorite] = useState(false)

  function favorites(){
    setIsFavorite(!isFavorite)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${list.id}`, {
      method:"DELETE"
    })
    .then(r=>r.json())
    .then(() => {
      deletedItems(list.id)
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={list.image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={favorites} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={favorites} className="emoji-button favorite">☆</button>
        )}
        <strong>{list.description}</strong>
        <span> · {list.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
