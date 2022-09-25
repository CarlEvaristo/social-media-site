import React from 'react'
import "./Filter.css"

export default function Filter({sort, handleSort}) {
  return (
    <select 
            className="sort"
            value={sort}		         
            onChange={handleSort}
            name="sort">
        <option value="dateAscending"> -- Sort Posts -- </option>           
        <option value="dateAscending">Date Ascending</option>           
        <option value="likesAscending">Likes Ascending</option>
        <option value="dateDescending">Date Descending</option>           
        <option value="likesDescending">Likes Descending</option>
    </select>
  )
}
