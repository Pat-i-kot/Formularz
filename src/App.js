import "./App.css";
import fetchCountries from "./Func/fetch";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchCountries(dispatch);
  }, [dispatch]);
  return <div></div>;
}

export default App;
