import React, {useState} from "react";

function ListingCard({listing, setListings}) {

  const [isLiked, setIsLiked] = useState(false)

  function likeHandler(){
    setIsLiked((currentValue) => !currentValue)
  }

  function deleteHandler(){
    fetch('http://localhost:6001/listings/'+listing.id,{
      method: "DELETE"
    }).then(r => r.json())
  .then(response => {
    setListings(currentValue => {
      return currentValue.filter((item) => {
        console.log(item.id)
        return item.id !== listing.id
      }
      )
    })
  })}


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button onClick= {likeHandler} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick= {likeHandler} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={deleteHandler}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
