import React from 'react'
import useAuth from "../../hooks/useAuth";
import Collection from '../../components/Collection/Collection';

const UserPage = ({dictionary}) => {
    const [user, token] = useAuth();


    // useEffect(() => {
//   const getAllWords = async () => {
//     try {
//       let res = await axios.get('http://127.0.0.1:8000/api/word/all/', {
//         headers: {
//           Authorization: "Bearer" + token,
//         },
//       });
//       setWord(res.data)
//     } catch (error) {
//       console.log(error.message)
//     }
//   }; getAllWords();
// }, [token]);
  return (
    <div>
    <h1>UserPage </h1>
    <ul> {dictionary.map((word)=> <li><Collection words= {word}/></li>)  } </ul>
   
    
    </div>
    
  )
}

export default UserPage