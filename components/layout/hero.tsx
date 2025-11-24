import { getTranslations } from "next-intl/server";
export default async function Hero() {
  const t = await getTranslations("hero");
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
    >
      <div>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </div>
    </section>
  );
}
