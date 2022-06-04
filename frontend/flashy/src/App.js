// css
import './App.css';

// router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <LandingPage /> }/>
          <Route exact path="/home/" element={ <HomePage /> }/>
          <Route exact path="/flashsets/" element={<FlashSetListPage /> }/>
          <Route exact path="/flashsets/new" element={ <CreateFlashSetPage /> }/>
          <Route exact path="account/" element={ <AccountPage /> }/>
          <Route exact path="trivia/" element={ <TriviaHomePage /> }/>
          <Route exact path="flashsets/:id" element={<FlashSetDetailPage />} />
          <Route exact path="flashsets/:id/delete" element={<FlashSetDeleteConfirm />} />
          <Route exact path="trivia/random" element={<RandomGamePage />} />
          <Route exact path="trivia/bycategory" element={<TriviaByCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
