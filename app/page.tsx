import NavigateButton from "./components/NavigateButton";
import AudioPlayer from "./components/AudioPlayer";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex-grow flex flex-col justify-center">
        <header className="mx-auto bg-gradient-to-tr from-blue-600 to-blue-900 rounded-3xl mb-4 p-4 shadow-xl">
          <h1 className=" sm:text-5xl md:text-7xl lg:text-9xl font-bold text-center text-white">
            IMISSAIM
          </h1>
        </header>

        <main className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Your FPS Aim Training Assistant
          </h2>
          <div className="flex justify-center items-center flex-row mx-auto">
            <NavigateButton buttonText="HIGHPOINTS" href="/highpoints" />
            <NavigateButton buttonText="FASTFLICK" href="/fastflick" />
          </div>
        </main>
      </div>

      <footer className="items-center justify-between flex mb-1">
        <div
          className="text-xs sm:text-sm md:text-base lg:text-lg text-white mx-5 font-bold
          bg-gradient-to-tr from-blue-500 to-blue-900 rounded-xl p-2"
        >
          <AudioPlayer source="/audio/redrum.mp3" />
        </div>
        <div
          className="text-xs sm:text-sm md:text-base lg:text-lg text-white mx-5 
          p-2"
        >
          music: Redrum - 21savage (instrumental) s/o to Winiss Beats
        </div>

        <div
          className="text-xs sm:text-sm md:text-base lg:text-lg text-white mx-5 
          p-2"
        >
          web by: hg
        </div>
      </footer>
    </div>
  );
}
