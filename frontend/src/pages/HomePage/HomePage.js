import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [words, setWords] = useState([]);

useEffect(() => {
  const getAllWords = async () => {
    try {
      let res = await axios.get('http://127.0.0.1:8000/api/word/all/', {
        headers: {
          Authorization: "Bearer" + token,
        },
      });
      setWords(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }; getAllWords();
}, [token]);
    

return(
        <div>
          <h3>Home Page for {user.username}</h3>
          {words &&
          words.map((word) => (
            <span key={word.id}>
              {word.name}: {word.definition}.<br/>
            </span>
          ))}
        </div>
); 
};

export default HomePage;

//Hey!23hey

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });
//         setCars(response.data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     fetchCars();
//   }, [token]);
//   return (
//     <div className="container">
//       <h1>Home Page for {user.username}!</h1>
//       {cars &&
//         cars.map((car) => (
//           <p key={car.id}>
//             {car.year} {car.make} {car.model}
//           </p>
//         ))}
//     </div>
//   );
// };
