// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from 'react'
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchWord from "./components/SearchWord";
import axios from "axios";

function App() {
const [words , setWords] = useState([{  //will hold words coming in to an array. 
  name: 'depart' ,  // intended this to be a sample word 
  definition: 'leave, especially in order to start a journey',
}])
const [User, setUser] = useState()
const [search , setSearch] = useState()
useEffect(() => {
  axios.get('http://127.0.0.1:8000/api/word/all/').then((res) => {
    const ResponseWords = res.data
    setWords(ResponseWords)
  });
}, [])



const wordArraySpread = () => {
  let newWord = {
    name: 'name',
    definition: 'definition'
  }
  setWords((prev) => [...prev, newWord ])// this will be for creating/adding words to a card.
}



  return (
    <div>
      <Navbar />
      <SearchWord addNew = {wordArraySpread} />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
