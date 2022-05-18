import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Recipe from "../components/Recipe";
import Service from "../components/Service";
import Testimoni from "../components/Testimoni";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Recipe />
      <Testimoni />
      <Footer />
    </>
  );
}
