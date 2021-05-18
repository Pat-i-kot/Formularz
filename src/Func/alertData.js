const alertData = (fetch) => {
  let msg = "";
  let effect = "";
  if (fetch.fetchFail) {
    msg =
      "Wystąpił problem z pobraniem danych. Spróbuj odświeżyć przeglądarkę.";
    effect = "Fail";
  } else if (fetch.postSuccess) {
    msg = "Dziękujęmy za wypełnienie formaularza. Dane zostały zapisane!";
    effect = "Success";
  } else if (fetch.postFail) {
    msg = "Wystąpił problem z zapisem danych. Proszę spróbuj ponownie.";
    effect = "Fail";
  } else if (fetch.isPosting) {
    msg = "Trwa łączenie z serwerem";
    effect = "Waiting";
  }
  return { msg, effect };
};

export default alertData;
