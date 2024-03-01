import NavigateButton from "./components/Highpoints/NavigateButton";
import AudioPlayer from "./components/Highpoints/AudioPlayer";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold">DiceAim</h1>
      </header>

      <main>
        <h2>Your FPS Aim Training Assistant</h2>
        <NavigateButton buttonText="Highpoints" href="/highpoints" />
        <NavigateButton buttonText="Fastflick" href="/fastflick" />
      </main>

      <footer>
        <AudioPlayer source="/audio/redrum.mp3" />
        <div>music: Redrum - 21savage (instrumental)</div>
        <div>s/o to Winiss Beats</div>
      </footer>
    </>
  );
}
