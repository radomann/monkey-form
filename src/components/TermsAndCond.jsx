import { useTranslation } from "react-i18next";
import { FormWrapper } from "../layout/FormWrapper";

export function TermsAndCond({ checkbox, updateFields }) {
  const { t } = useTranslation();
  return (
    <FormWrapper title={t("terms.title")}>
      <div className="terms">
        <div>
          <ul>
            <li>{t("terms.1")}</li>
            <li>{t("terms.2")}</li>
            <li>{t("terms.3")}</li>
            <li>{t("terms.4")}</li>
            <li>{t("terms.5")}</li>
            <li>{t("terms.6")}</li>
            <li>{t("terms.7")}</li>
            <li>{t("terms.8")}</li>
          </ul>
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <input
            required
            type="checkbox"
            name="terms"
            value={checkbox}
            onChange={(e) => updateFields({ checkbox: e.target.checked })}
            style={{ marginRight: "10px" }}
          />
          {t("terms.9")}
        </div>
      </div>
    </FormWrapper>
  );
}
