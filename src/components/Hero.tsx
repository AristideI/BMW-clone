export default function Hero() {
  return (
    <header className="relative text-white px-10">
      <nav className="flex justify-between border-b-2 border-white py-5">
        <section className="flex items-center gap-20">
          <button className="flex items-center gap-4">
            <img src="/images/menu.png" alt="menu" className="w-8" />
            <p className="font-bold text-lg">MENU</p>
          </button>
          <button className="flex items-center gap-4">
            <img src="/images/loupe.png" alt="menu" className="w-7" />
            <p className="font-bold text-lg">SEARCH</p>
          </button>
        </section>
        <button className="flex gap-2 items-center">
          <img className="w-12" src="/images/logo.png" alt="logo" />
          <div className="font-bold text-xl flex flex-col items-start gap-0 justify-start">
            <p>BMW</p>
            <p className="-mt-2">MOTORRAD</p>
          </div>
        </button>
      </nav>
      <section className="grid place-content-center pt-20">
        <p className="font-bold text-[10rem] strokes">FUEL FOR LIFE</p>
      </section>
      <video
        className="w-full object-cover h-screen absolute top-0 right-0 left-0 -z-10"
        autoPlay
        muted
        loop
        src="/images/motos.mp4"
      ></video>
    </header>
  );
}
