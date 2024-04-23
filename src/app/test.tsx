import Navbar from "@/components/navbar/navbar";
import {
  About,
  Board,
  Contact,
  Events,
  Footer,
  Hero,
  Participants,
  Resources,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <div className="absolute z-20 w-full">
        <Navbar />
      </div>
      <Hero />
      <main className="max-w-4xl mx-auto flex flex-col gap-16 pt-16 max-lg:p-10">
        <About />
        <Events />
        <Resources />
        <Participants />
        <Board />
        <Contact />
      </main>
      <div className="bg-gradient-to-t from-celadon to-transparent">
        <Footer />
      </div>
    </>
  );
}
