import axios from "axios";


const Home = () =>{
  axios.get('http://localhost:8000/').then((res) => {
    console.log(res);
  })
  return <div>blog</div>
 
}
export default Home