import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  validateCountry,
  validateEmpty,
} from "./validateFunc";
import checkErrorsFunc from "./checkErrors";
import { postForm } from "../Func/fetch";

const Validation = () => {
  const dispatch = useDispatch();
  const values = useSelector((state) => state.fieldlReducer);
  const { firstName, lastName, email, password, country } = values;
  const fieldErrors = useSelector((state) => state.errorReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmpty(values, dispatch);
    if (checkErrorsFunc(fieldErrors) === 0) {
      postForm(values, dispatch);
    }
  };

  useEffect(() => {
    validateFirstName(firstName, dispatch);
  }, [firstName, dispatch]);

  useEffect(() => {
    validateLastName(lastName, dispatch);
  }, [lastName, dispatch]);

  useEffect(() => {
    validateEmail(email, dispatch);
  }, [email, dispatch]);

  useEffect(() => {
    validatePassword(password, dispatch);
  }, [password, dispatch]);

  useEffect(() => {
    validateCountry(country, dispatch);
  }, [country, dispatch]);

  return { handleSubmit };
};
export default Validation;
