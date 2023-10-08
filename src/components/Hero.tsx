import { useState, MouseEventHandler } from "react";
export default function Hero() {
  let [checker, setChecker] = useState(1);
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setChecker(Number(e.currentTarget.id));
  };
  console.log(checker);
  return (
    <header className="relative text-white px-10 bg-black bg-opacity-30 h-screen">
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
      <article className="bg-[#e6e6e6] mx-12 mt-16">
        <section className="flex justify-between gap-2  p-1">
          <button
            className="bg-gray-700 w-1/5 py-2 grid place-content-center"
            style={{
              backgroundColor: checker === 1 ? "transparent" : "#a8a8a9",
              color: checker === 1 ? "black" : "white",
            }}
            id="1"
            onClick={handleClick}
          >
            <div id="1" className="flex items-center font-bold text-lg gap-2">
              <p id="1">All</p>
            </div>
          </button>
          <button
            className="bg-gray-700 w-1/5 py-2 grid place-content-center"
            style={{
              backgroundColor: checker === 2 ? "transparent" : "#a8a8a9",
              color: checker === 2 ? "black" : "white",
            }}
            id="2"
            onClick={handleClick}
          >
            <div id="2" className="flex items-center font-bold text-lg gap-2">
              <img
                id="2"
                className="w-6"
                src={
                  checker === 2
                    ? "/images/locations.png"
                    : "/images/location.png"
                }
                alt=""
              />
              <p id="2">Rental</p>
            </div>
          </button>
          <button
            className="bg-gray-700 w-1/5 py-2 grid place-content-center"
            style={{
              backgroundColor: checker === 3 ? "transparent" : "#a8a8a9",
              color: checker === 3 ? "black" : "white",
            }}
            id="3"
            onClick={handleClick}
          >
            <div id="3" className="flex items-center font-bold text-lg gap-2">
              <img
                id="3"
                className="w-6"
                src={
                  checker === 3 ? "/images/streets.png" : "/images/street.png"
                }
                alt=""
              />
              <p id="3">Travel</p>
            </div>
          </button>
          <button
            className="bg-gray-700 w-1/5 py-2 grid place-content-center"
            style={{
              backgroundColor: checker === 4 ? "transparent" : "#a8a8a9",
              color: checker === 4 ? "black" : "white",
            }}
            id="4"
            onClick={handleClick}
          >
            <div id="4" className="flex items-center font-bold text-lg gap-2">
              <img
                id="4"
                className="w-6"
                src={checker === 4 ? "/images/racin.png" : "/images/racing.png"}
                alt=""
              />
              <p id="4">Training</p>
            </div>
          </button>
          <button
            className="bg-gray-700 w-1/5 py-2 grid place-content-center"
            style={{
              backgroundColor: checker === 5 ? "transparent" : "#a8a8a9",
              color: checker === 5 ? "black" : "white",
            }}
            id="5"
            onClick={handleClick}
          >
            <div id="5" className="flex items-center font-bold text-lg gap-2">
              <img
                id="5"
                className="w-6"
                src={checker === 5 ? "/images/routes.png" : "/images/route.png"}
                alt=""
              />
              <p id="5">Routes</p>
            </div>
          </button>
        </section>
        <Checkers num={checker} />
      </article>
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

interface CheckersProps {
  num: number;
}
function Checkers({ num }: CheckersProps) {
  return num === 1 || num === 3 || num === 5 ? (
    <section className="py-8 px-20">
      <form className="flex justify-between items-center">
        <input
          className="border-2 border-black w-2/5 py-2 px-4"
          placeholder="PERIOD"
          type="text"
        />
        <button className="bg-black font-bold text-xl px-8 py-2">SEARCH</button>
      </form>
    </section>
  ) : num === 2 || num === 4 ? (
    <section className="py-8 px-20">
      <form className="flex justify-between items-center gap-4">
        <input
          className="border-2 border-black w-1/5 py-2 px-4"
          placeholder="PERIOD"
          type="text"
        />
        <input
          className="border-2 border-black w-2/5 py-2 px-4 text-black"
          placeholder="Date"
          type="date"
        />
        <input
          className="border-2 border-black w-2/5 py-2 px-4"
          placeholder="Location"
          type="text"
        />
        <button className="bg-black font-bold text-xl px-8 py-2">SEARCH</button>
      </form>
    </section>
  ) : (
    <div></div>
  );
}
