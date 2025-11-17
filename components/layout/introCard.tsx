import Image from "next/image";
import profileImg from "@/assets/images/profile.jpg";

export default function IntroCard() {
  return (
    <div className="border border-white/20 rounded-24 p-8">
      <Image
        src={profileImg}
        alt="Renan Viana"
        width={128}
        height={128}
        className="rounded-full float-left mr-4"
      />
      <p>
        I'm a software developer from Brazil, with a passion for creating
        beautiful and functional websites. I love working with React, Next.js,
        and Tailwind CSS to build fast and responsive web applications.
      </p>
    </div>
  );
}
