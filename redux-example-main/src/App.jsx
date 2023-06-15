import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import { Header } from "./components/Header";
import { Email } from "./components/Email";
import "./App.css";
import { Username } from "./components/username";
import { Name } from "./components/Name";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Name /><br />
      <Username /><br />
      <Email />
    </div>
  );
}

export default App;
