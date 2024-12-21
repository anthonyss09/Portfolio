import Navbar from "./components/Navbar";
import HeaderMain from "./components/HeaderMain";

export default function Home() {
  return (
    <div className="pt-[180px] sm:pt-[200px]">
      <div className="background-wrap"></div>
      <Navbar />

      <HeaderMain />

      <main></main>
    </div>
  );
}
