import { FormWrapper } from "../layout/FormWrapper";
import { t } from "i18next";

export function AddressForm({ address, city, phone, updateFields }) {
  return (
    <FormWrapper title={t("address_details")}>
      <label>{t("address")}</label>
      <input
        autoFocus
        required
        type="text"
        value={address}
        onChange={(e) => updateFields({ address: e.target.value })}
        minLength={1}
        maxLength={50}
        placeholder="Cetinjski put bb"
      />
      <label>{t("City")}</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
        minLength={1}
        maxLength={50}
        placeholder="Podgorica"
      />
      <label>{t("Phone")}</label>
      <input
        required
        type="number"
        value={phone}
        onChange={(e) => updateFields({ phone: e.target.value })}
        minLength={8}
        maxLength={26}
        placeholder="+382669933224"
      />
    </FormWrapper>
  );
}
