import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <h1>welcome to flashy</h1>
      <h3>create flash cards, in a flash</h3>
      <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage