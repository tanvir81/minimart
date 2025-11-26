import Link from "next/link";
import Image from "next/image";
import Features from "../components/Features";
import ItemsShowcase from "@/components/ItemsShowcase";
import Testimonials from "@/components/Testimonials";
import PromoBanner from "@/components/PromoBanner";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Features />
      <ItemsShowcase />
      <Testimonials />
      <PromoBanner />
    </main>
  );
}
