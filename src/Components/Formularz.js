import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Validation from "../Func/validation";
import { updateField } from "../Actions/dataUpdate";
import CountrySelect from "./CountrySelect";
import checkErrorsFunc from "../Func/checkErrors";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Email from "./Email";
import Password from "./Password";

const Formularz = () => {
  const dispatch = useDispatch();
  const { handleSubmit } = Validation();
  const { firstName, lastName, email, password, country } = useSelector(
    (state) => state.fieldlReducer
  );
  const fieldErrors = useSelector((state) => state.errorReducer);
  const disabledBtn = checkErrorsFunc(fieldErrors) === 0 ? false : true;
  const isLoading = useSelector((state) => state.fetchReducer.isLoading);

  return (
    <form onSubmit={handleSubmit}>
      <FirstName
        errorMsg={fieldErrors.firstName}
        firstName={firstName}
        dispatch={dispatch}
        updateField={updateField}
      />
      <LastName
        errorMsg={fieldErrors.lastName}
        lastName={lastName}
        dispatch={dispatch}
        updateField={updateField}
      />
      <Email
        errorMsg={fieldErrors.email}
        email={email}
        dispatch={dispatch}
        updateField={updateField}
      />
      <Password
        errorMsg={fieldErrors.password}
        password={password}
        dispatch={dispatch}
        updateField={updateField}
      />
      {isLoading ? (
        <div>Ładowanie listy krajów</div>
      ) : (
        <CountrySelect
          errorMsg={fieldErrors.country}
          country={country}
          dispatch={dispatch}
          updateField={updateField}
        />
      )}
      <div>
        <button id="submitBtn" type="submit" disabled={disabledBtn}>
          Zapisz
        </button>
      </div>
    </form>
  );
};

export default Formularz;
