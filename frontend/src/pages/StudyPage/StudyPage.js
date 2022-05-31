import React from "react";
import Containers from "../../components/Containers";
import "./StudyPage.css";
import LearnedWord from "../../components/LearnedWord/LearnedWord";


function StudyPage(props) {
  const { userWords, newLearned } = props;

  // const { wordId } = useParams();
  // const [learned, setLearned] = useState(Boolean);
  // const [wordData, setWordData] = useState([]);
  // const [loading , setLoading] = useState([])


  // useEffect(() => {
  //   async function wordByID() {
  //   let res = await axios
  //   .get(`http://127.0.0.1:8000/api/word/${wordId}/`);
  //   console.log(res.data);
  //     setWordData(res.data)
  //     setLoading(false)
  // } wordByID

  // }, [wordId]);

  // const navigate = useNavigate();

  // function getId(){
  //   let filtered = userWords.filter((el) => {el.id === wordId
  //     return el.id
  //   })
  //   return navigate(`user/study/${filtered}`)
  // }
  
    


  
  return (
    <div>
      <div>
        <h1>Study Cards</h1>
        <LearnedWord userWords={userWords} />
        <div>
          <div>
            <img
              src="https://jooinn.com/images/ancient-book-7.png"
              alt="old books"
            />
          </div>

          <div>
            <Containers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyPage;
//increment count up.
