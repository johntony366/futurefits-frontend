import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex mx-20 h-[300px] mt-10 justify-center items-center">
        <h1 className="w-96 font-bold text-3xl inline-block">
          Beyond Boundaries, Safeguarding Your Digital World with Ease.
        </h1>
        <img
          className="h-64 max-w-full"
          src="/images/main.jpeg"
          alt="image description"
        />
      </div>

      <div className="flex flex-row justify-evenly gap-20 p-10 mx-20 my-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <Card
          title="Never be Late"
          content="Our alarm system integrates and notify you of any upcoming events."
          url="\images\img5.svg"
        />

        <Card
          title="All Analysis at Your Fingertips"
          content="Streamlined, Simplified, and Secure — Because Your Security deserves the best."
          url="\images\img2.svg"
        />
        <Card
          title="Stay Organised"
          content="Timely Alerts and Comprehensive Analysis Unite for Ultimate Vigilance."
          url="\images\img3.svg"
        />
      </div>
      <Footer />
    </div>
  );
}
