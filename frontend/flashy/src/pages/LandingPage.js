import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


const LandingPage = () => {
  sessionStorage.setItem('token', '')
  sessionStorage.setItem('username', '')
  localStorage.setItem('token', '')
  localStorage.setItem('username', '')


  return (
    <div className="wrapper">
      <NavBar />
      <h1>LandingPage</h1>
      <h3>welcome to flashy</h3>
      <h5>login to get started</h5>
      <div style={{ position: 'absolute', width: '100%', bottom: '0'}}>
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage