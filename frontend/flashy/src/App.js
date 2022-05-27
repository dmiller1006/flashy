// css
import './App.css';

// router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import CollectionsPage from './pages/CollectionsPage'
import CreateCollectionPage from './pages/CreateCollectionPage'
import AccountPage from './pages/AccountPage'
import TriviaHomePage from './pages/TriviaHomePage'


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <LandingPage />} />
          <Route exact path="/home/" element={<HomePage />} />
          <Route exact path="/collections/" element={<CollectionsPage />} />
          <Route exact path="/collections/new" element={<CreateCollectionPage />} />
          <Route exact path="account/" element={<AccountPage />} />
          <Route exact path="trivia/" element={<TriviaHomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
