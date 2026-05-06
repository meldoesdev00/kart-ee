import Nav from "@/app/components/Nav";
import SplitHero from "@/app/components/SplitHero";


export default function Home() {
  return (
    <>
      <Nav />
      <main style={{ height: "100svh", overflow: "hidden", background: "#0a0a0a" }}>
        <SplitHero />
      </main>
    </>
  );
}
