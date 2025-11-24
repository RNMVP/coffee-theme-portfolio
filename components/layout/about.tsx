import IntroCard from "./introCard";

export default function About() {
  return (
      <section
        id="about"
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
      >
        <IntroCard />
      </section>
    );
}