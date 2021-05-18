import { updateError } from "../Actions/dataUpdate";

export function validateFirstName(value, dispatch) {
  let errorMsg = "";
  if (!value) {
    errorMsg = "";
  } else if (!/^[a-ąćęłńóśzżź]+$/i.test(value))
    errorMsg =
      "Użyto niedozwolonego znaku. W imieniu mogą występować tylko polskie litery";
  else if (value.length > 30)
    errorMsg = "Zbyt długie imię. Imię nie może mieć więcej niż 30 znaków.";
  else errorMsg = "";
  dispatch(updateError("firstName", errorMsg));
}
export function validateLastName(value, dispatch) {
  let errorMsg = "";
  if (!value) {
    errorMsg = "";
  } else if (!/^[a-ąćęłńóśzżź]+$/i.test(value))
    errorMsg =
      "Użyto niedozwolonego znaku. W nazwisku mogą występować tylko polskie litery";
  else if (value.length > 30)
    errorMsg =
      "Zbyt długie nazwisko. Nazwisko nie może mieć więcej niż 30 znaków.";
  else errorMsg = "";
  dispatch(updateError("lastName", errorMsg));
}
export function validateEmail(value, dispatch) {
  let errorMsg = "";
  if (!value) {
    errorMsg = "";
  } else if (!/^([a-z\d\.\-_]+)@([a-z\d]+)\.([a-z\d]){2,4}$/i.test(value))
    errorMsg = "Blędny email";
  dispatch(updateError("email", errorMsg));
}
export function validatePassword(value, dispatch) {
  let errorMsg = "";
  if (!value) {
    errorMsg = "";
  } else if (!/^[a-ąćęłńóśzżź(#@$!%*?&_)\d]+$/i.test(value))
    errorMsg =
      "Użyto niedozwolonych znaków w haśle. W haśle mogą występować tylko polskie litery, cyfry i znaki specjalne ( # @ $ ! % * ? & _ )";
  else if (value.length < 8)
    errorMsg = "Zbyt krótkie hasło. Hasło musi mieć conajmniej 8 znaków.";
  else if (value.length > 30)
    errorMsg = "Zbyt długie hasło. Hasło może mieć maksymalnie 30 znaków.";
  else errorMsg = "";
  dispatch(updateError("password", errorMsg));
}

export function validateCountry(value, dispatch) {
  dispatch(updateError("country", ""));
}

export function validateEmpty(values, dispatch) {
  if (!values.firstName)
    dispatch(updateError("firstName", "Pole musi być wypełnione"));

  if (!values.lastName)
    dispatch(updateError("lastName", "Pole musi być wypełnione"));

  if (!values.email) dispatch(updateError("email", "Pole musi być wypełnione"));

  if (!values.password)
    dispatch(updateError("password", "Pole musi być wypełnione"));

  if (!values.country)
    dispatch(updateError("country", "Pole musi być wypełnione"));
}
