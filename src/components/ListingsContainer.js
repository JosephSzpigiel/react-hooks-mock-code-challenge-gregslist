import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import NewItemForm from "./NewItemForm";

function ListingsContainer({searchTerm}) {
  const [listings, setListings] = useState([])
  const [sort, setSort] = useState(false)
  useEffect(() => fetch("http://localhost:6001/listings")
  .then(r => r.json())
  .then(results => setListings(results)),[])


  let filteredListings = listings.filter((listing) => {
    return listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  })

  if (sort === true){
    filteredListings = filteredListings.sort((a, b) => a.location.toLowerCase() > b.location.toLowerCase() ? 1: -1)
  }

  const listingComponents = filteredListings.map((listing)=>{
    return <ListingCard listing={listing} key= {listing.id} setListings = {setListings}/>
  })

  return (
    <main>
      <input type='checkbox' value={sort} onClick={(e) => setSort(current => !current)}></input>
      <ul className="cards">
        {listingComponents}
      </ul>
      <NewItemForm setListings={setListings}/>
    </main>
  );
}

export default ListingsContainer;
