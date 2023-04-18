import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

const listingsUrl = " http://localhost:6001/listings"

function ListingsContainer({search}) {

  const[listings, setListings] = useState([])

  useEffect(()=>{
    fetch(listingsUrl)
    .then(r=>r.json())
    .then(list => {
      console.log(list)
      setListings(list)
    })
  },[])

  function deletedItems(id){
    const filteredItems = listings.filter(list => {
      return list.id !== id
    })
    setListings(filteredItems)
  }

  const filterSearch = listings.filter(list => {
    return list.description.toLowerCase().includes(search.toLowerCase())
  })

  const displayListings = filterSearch.map(list => {
    return (
      <ListingCard
        key={list.description}
        list={list}
        deletedItems={deletedItems}
      />
    )
  })

  return (
    <main>
      <ul className="cards">
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
