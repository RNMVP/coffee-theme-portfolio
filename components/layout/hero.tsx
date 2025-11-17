import IntroCard from "./introCard";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
    >
      <IntroCard />
    </section>
  );
}
