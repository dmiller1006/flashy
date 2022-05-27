import React from 'react'
import { useState, useEffect } from "react"
import NavBar from '../components/NavBar'
import data from '../data/collections.json';
import CollectionCard from '../components/CollectionCard'
import '../pages/CollectionsPage.css'


const CollectionsPage = () => {
  // states
  const [collections, setCollections] = useState([data])

  // render collection cards
  const renderCollections = () => {
    return collections[0].map((collection, index) => {
      return (
        <CollectionCard key={index} collection={collection}/>
      )
    })
  }

  return (
    <div className="wrapper">
      <NavBar />
      <h1>your flashes</h1>
        <div className="parent ">
          {renderCollections()}
        </div>
    </div>
  )
}

export default CollectionsPage