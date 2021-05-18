import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchCountries } from "./Func/fetch";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Formularz from "./Components/Formularz";
import AlertInfo from "./Components/AlertInfo";
import alertData from "./Func/alertData";

function App() {
  const dispatch = useDispatch();
  const fetch = useSelector((state) => state.fetchReducer);
  useEffect(() => {
    fetchCountries(dispatch);
  }, [dispatch]);

  const alert = alertData(fetch);

  return (
    <div className="container border-primary rounded shadow mt-3 pt-3 pb-3">
      <h3 className="mb-3">Formularz</h3>
      {alert.msg !== "" ? (
        <AlertInfo effect={alert.effect} body={alert.msg} />
      ) : (
        ""
      )}
      <Formularz />
    </div>
  );
}

export default App;
