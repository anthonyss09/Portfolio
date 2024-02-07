import Image from "next/image";
import BackgroundOne from "../components/BackgroundOne";
import NavBar from "../components/NavBar";
import BackgroundTwoLong from "../components/BackgroundTwoLong";
import BackgroundThree from "../components/BackgroundThree";
import BackgroundFour from "../components/BackgroundFour";

export default function Home() {
  return (
    <main className="main">
      <NavBar />
      <BackgroundOne />
      <BackgroundTwoLong />
      <BackgroundThree />
      <BackgroundFour />
    </main>
  );
}
