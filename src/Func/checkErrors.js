export default function checkErrorsFunc(fieldErrors) {
  const errorsArray = Object.entries(fieldErrors);
  return errorsArray.reduce((numErrors, error) => {
    if (error[1] !== "") ++numErrors;
    return numErrors;
  }, 0);
}
