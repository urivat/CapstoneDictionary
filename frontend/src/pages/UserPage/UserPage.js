import React from 'react'
import useAuth from "../../hooks/useAuth";


const UserPage = () => {
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
    <div>UserPage</div>
  )
}

export default UserPage