// css
import './App.css';

// router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// state
import { useEffect, useState } from 'react'

// components
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import FlashSetListPage from './pages/FlashSetListPage'
import FlashSetDetailPage from './pages/FlashSetDetailPage'
import AccountPage from './pages/AccountPage'
import TriviaHomePage from './pages/TriviaHomePage'
import CreateFlashSetPage from './pages/CreateFlashSetPage'
import FlashSetDeleteConfirm from './pages/FlashSetDeleteConfirm'
import RandomGamePage from './pages/RandomGamePage';
import TriviaByCategory from './pages/TriviaByCategoryPage'
import TrueFalsePage from './pages/TrueFalsePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';


const App = () => {
  const [isSignedIn, setSignedIn] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setSignedIn(true)
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage /> }/>
          <Route exact path="/home/" element={ <HomePage /> }/>

          <Route exact path="/flashsets/" element={
            <RequireAuth redirectTo="/login">
              <FlashSetListPage />
            </RequireAuth>
          }/>

          <Route exact path="/flashsets/new" element={
            <RequireAuth redirectTo="/login">
              <CreateFlashSetPage />
            </RequireAuth>
          } />

          <Route exact path="/flashsets/new" element={ <CreateFlashSetPage /> }/>
          <Route exact path="account/" element={ <AccountPage /> }/>
          <Route exact path="trivia/" element={ <TriviaHomePage /> }/>
          <Route exact path="flashsets/:id" element={<FlashSetDetailPage />} />
          <Route exact path="flashsets/:id/delete" element={<FlashSetDeleteConfirm />} />
          <Route exact path="trivia/random" element={<RandomGamePage />} />
          <Route exact path="trivia/bycategory" element={<TriviaByCategory />} />
          <Route exact path="trivia/truefalse" element={<TrueFalsePage />} />
          <Route exact path="login" element={<LoginPage isSignedIn={isSignedIn} setSignedIn={setSignedIn}/> } />
          <Route exact path="signup" element={<SignupPage isSignedIn={isSignedIn} setSignedIn={setSignedIn} />} />
          <Route exact path="logout" element={<LogoutPage isSignedIn={isSignedIn} setSignedIn={setSignedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function RequireAuth( {children, redirectTo }) {
  let isAuthenticated = sessionStorage.getItem('token') ? true : false
  if (isAuthenticated == false) { alert('You must be logged in to access these flashsets. You are being redirected to the login page.')}
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default App;
