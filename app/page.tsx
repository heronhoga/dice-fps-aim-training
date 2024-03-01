import NavigateButton from "./components/Highpoints/NavigateButton";
import AudioPlayer from "./components/Highpoints/AudioPlayer";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex-grow flex flex-col justify-center">
        <header className="mx-auto sm:w-1/2 lg:w-3/4 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-3xl mb-4">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center text-white">
            IMISSAIM
          </h1>
        </header>

        <main className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Your FPS Aim Training Assistant
          </h2>
          <div className="flex justify-center items-center flex-row mx-auto">
            <NavigateButton buttonText="Highpoints" href="/highpoints" />
            <NavigateButton buttonText="Fastflick" href="/fastflick" />
          </div>
        </main>
      </div>

      <footer className="items-center justify-between flex">
        <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white mx-5">
          <AudioPlayer source="/audio/redrum.mp3" />
        </div>
        <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white mx-5">
          music: Redrum - 21savage (instrumental)
        </div>
        <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white mx-5">
          s/o to Winiss Beats
        </div>
        <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white mx-5">
          web by: hg
        </div>
      </footer>
    </div>
  );
}
