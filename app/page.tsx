import Link from "next/link";
import NavigateButton from "./components/Highpoints/NavigateButton";

export default function Home() {
  return (
    <>
      <h1>DiceGameWorld</h1>
      <br />
      <h2>Your FPS Aim Training Assistant</h2>
      <NavigateButton buttonText="Highpoints" href="/highpoints" />
      <NavigateButton buttonText="Fastflick" href="/fastflick" />
    </>
  );
}
