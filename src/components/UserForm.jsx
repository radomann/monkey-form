import { t } from "i18next";
import { FormWrapper } from "../layout/FormWrapper";

export function UserForm({
  userName,
  firstName,
  lastName,
  email,
  birthdate,
  gender,
  password,
  passwordConfirm,
  updateFields,
}) {
  const currentDate = new Date();
  var maxDate = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const ageRestrictionToAdult = maxDate.toISOString().split("T")[0];

  function convertToISO(e) {
    let target = e.target;
    const pickedDate = new Date(target.value);

    updateFields({ birthdate: pickedDate });
  }

  const validatePasswordMatch = () => {
    const confirmPasswordInput = document.getElementById("confirm_password");
    if (confirmPasswordInput) {
      if (password !== passwordConfirm) {
        confirmPasswordInput.setCustomValidity("Passwords don't match");
      } else {
        confirmPasswordInput.setCustomValidity("");
      }
    }
  };

  return (
    <FormWrapper title={t("user_details")}>
      <label>{t("username")}</label>
      <input
        autoFocus
        required
        type="text"
        value={userName}
        onChange={(e) => updateFields({ userName: e.target.value })}
        minLength={4}
        maxLength={20}
        pattern="[a-z0-9\\-\\_]+"
        placeholder="user123, alpha_eta, cool-user, myUsername"
      />
      <label>{t("first_name")}</label>
      <input
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
        minLength={2}
        maxLength={25}
        placeholder="Jon"
      />
      <label>{t("Last name")}</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
        minLength={2}
        maxLength={25}
        placeholder="Doe"
      />
      <label>{t("email")}</label>
      <input
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        pattern=".+@.+\..+"
        placeholder="example@mail.com"
      />
      <label>{t("Birthdate")}</label>
      <input
        required
        min={1}
        type="date"
        value={birthdate ? birthdate.toISOString().split("T")[0] : ""}
        onChange={convertToISO}
        max={ageRestrictionToAdult}
      />
      <label>{t("gender")}</label>
      <select
        name="gender"
        value={gender}
        onChange={(e) => updateFields({ gender: e.target.value })}
      >
        <option value=""></option>
        <option value="female">{t("female")}</option>
        <option value="male">{t("male")}</option>
      </select>
      <label>{t("Password")}</label>
      <input
        required
        id="password"
        type="password"
        minLength={8}
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
        pattern="(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}"
        placeholder="8+ chars, 1 digit, 1 special, 1 lowercase, 1 uppercase"
      />
      <label>{t("confirm_password")}</label>
      <input
        required
        id="confirm_password"
        type="password"
        minLength={6}
        value={passwordConfirm}
        onChange={(e) => updateFields({ passwordConfirm: e.target.value })}
        pattern="(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}"
        onKeyUp={validatePasswordMatch}
        placeholder="Match with password or no bananas!"
      />
    </FormWrapper>
  );
}
