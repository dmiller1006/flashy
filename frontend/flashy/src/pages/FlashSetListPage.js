import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import FlashSetCard from '../components/FlashSetCard'
import '../pages/FlashcardLayout.css'
import FlashyAPI from '../api/FlashyAPI'


const FlashSetListPage = () => {
  // states
  const [flashsets, setFlashSets] = useState(null)

  // render collection cards
  useEffect(() => {
    const getFlashsets = async () => {
      const data = await FlashyAPI.fetchFlashsets();
      setFlashSets(data)
    }
    getFlashsets()
  }, [])

  const renderFlashSets = () => {
    if (!flashsets) {
      return 'loading ...'
    }
    return flashsets.map((flashset, idx) => {
      return <FlashSetCard key={idx} flashset={flashset}/>
    })
  }

  return (
    <div className="wrapper">
      <NavBar />
      <h1>your flashsets</h1>
      <a href="flashsets/new"><h3>create a new flashset</h3></a>
        <div className="parent">
          {renderFlashSets()}
        </div>
      <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>
        <Footer />
      </div>
    </div>
  )
}

export default FlashSetListPage