import React from 'react';
import { AppContext } from './context/contextApi';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './Components/header';
import Feed from './Components/Feed';
import SearchResult from "./Components/SearchResult"
import VideoDetails from "./Components/VideoDetails"


const App = () => {
  return (
    <AppContext >
      <Router>
        <div className="flex flex-col h-full scrollbar-hide">
          <Header />
          <Routes>
            <Route path='/' exact element={<Feed />} />
            <Route path='/searchResult/:searchQuery' element={<SearchResult />} />
            <Route path='/video/:id' element={<VideoDetails />} />

          </Routes>
        </div>
      </Router>
    </AppContext>
  )
}

export default App
