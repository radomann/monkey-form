import { useState } from "react";
import { AddressForm } from "./components/AddressForm";
import { UserForm } from "./components/UserForm";
import { useMultistepForm } from "./helpers/useMultistepForm";
import { TermsAndCond } from "./components/TermsAndCond";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { languages } from "./util/languagesList";
import { LoaderPaws } from "./util/loader";

import "./assets/css/index.scss";

const INITIAL_DATA = {
  userName: "",
  firstName: "",
  lastName: "",
  birthdate: null,
  gender: "",
  email: "",
  password: "",
  passwordConfirm: "",
  address: "",
  city: "",
  phone: "",
  checkbox: false,
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <TermsAndCond {...data} updateFields={updateFields} />,
    ]);

  async function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    setLoading(true);
    const response = await wait(JSON.stringify(data));
    alert("Hey! Check console log for detailed response, please!");
    console.log(response);
    setLoading(false);
  }

  function wait(value) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value), 3000);
    });
  }

  return (
    <div>
      {isLoading ? <LoaderPaws /> : ""}
      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="header">
            <div className="lang-select">
              <select
                name="language"
                onChange={(e) => i18next.changeLanguage(e.target.value)}
              >
                {languages.map(({ code, name, country_code }) => (
                  <option key={country_code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="steps">
              {currentStepIndex + 1} / {steps.length}
            </div>
          </div>
          {step}
          <div className="footer">
            {!isFirstStep && (
              <button type="button" disabled={isLoading} onClick={back}>
                {t("previous")}
              </button>
            )}
            <button type="submit" disabled={isLoading}>
              {isLastStep ? t("submit") : t("next")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
