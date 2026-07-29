import { useTranslations } from "next-intl";
import { toPersianDigits } from "rtl-text-tools";

interface PhoneNumberInput {
  value: string;
  onChange: (value: string) => void;
  lang: string;
}

export default function PhoneNumberInput({
  value,
  onChange,
  lang,
}: PhoneNumberInput) {
  const displayValue = lang === "fa" ? toPersianDigits(value) : value;

  const t = useTranslations("whatsappLinkGenerator");
  console.log(typeof value);
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {t("phoneNumber")}
      </label>
      <input
        type="text"
        value={displayValue}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t("enterPhoneNumber")}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
        required
        dir={lang === "fa" ? "rtl" : "ltr"}
      />
    </div>
  );
}
