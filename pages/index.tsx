import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Star from "../components/Star";

export default function Home() {
  const starArr = new Array(100).fill(<Star />);
  return (
    <div>
      <Navbar />
      <div className="w-80 bg-white">{starArr.map((e) => e)}</div>
    </div>
  );
}
