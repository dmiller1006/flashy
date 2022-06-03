import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import FlashyAPI from '../api/FlashyAPI'


const RandomGamePage = () => {
    const [num, setNum] = useState(null)

    // useEffect(() => {
    //     const getNum = prompt('How many trivia questions would you like to see? (1-50)')
    //     const fetchData = async () => {
    //         const fetching = await FlashyAPI.getRandomTrivia(getNum)
    //         console.log(fetching)
    //     }
    //     fetchData()
    // }, [num])

  return (
      <div className="wrapper">
          <NavBar />
          <h1>playing trivia</h1>
          <h3>good luck with the random set!</h3>
          <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>
              <Footer />
          </div>
      </div>
  )
}

export default RandomGamePage