import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Word, {IWord} from "./Word";

export default function Day() {
  const { day } = useParams<{day:string}>()
  // const wordList = dummy.words.filter(word => word.day === Number(day));
  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //       .then(res => {
  //         return res.json();
  //       })
  //       .then (data => {
  //         setWords(data);
  //       })
  // }, [day]);

  const words = useFetch<IWord>(`http://localhost:3001/words?day=${day}`)

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word key={word.id} word={word} />
          ))}
        </tbody>
      </table>
    </>
  );
}