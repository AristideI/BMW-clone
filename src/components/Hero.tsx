import { useState, MouseEventHandler } from "react";
export default function Hero() {
  let [checker, setChecker] = useState(1);
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e.target);
  };
  console.log(checker, setChecker);
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
      <article className="bg-[#e6e6e6]">
        <section className="flex justify-between gap-2  p-1">
          <button
            className="bg-gray-700 w-1/5 py-2 grid place-content-center"
            style={{
              backgroundColor: checker === 1 ? "transparent" : "#a8a8a9",
            }}
            id="1"
            onClick={handleClick}
          >
            <div className="flex items-center font-bold text-lg gap-2">
              <p>All</p>
            </div>
          </button>
          <button
            className="bg-gray-700 w-1/5 py-2 grid place-content-center"
            style={{
              backgroundColor: checker === 2 ? "transparent" : "#a8a8a9",
            }}
            id="2"
            onClick={handleClick}
          >
            <div className="flex items-center font-bold text-lg gap-2">
              <img className="w-6" src="/images/location.png" alt="" />
              <p>Rental</p>
            </div>
          </button>
          <button
            className="bg-gray-700 w-1/5 py-2 grid place-content-center"
            style={{
              backgroundColor: checker === 3 ? "transparent" : "#a8a8a9",
            }}
            id="3"
            onClick={handleClick}
          >
            <div className="flex items-center font-bold text-lg gap-2">
              <img className="w-6" src="/images/street.png" alt="" />
              <p>Travel</p>
            </div>
          </button>
          <button
            className="bg-gray-700 w-1/5 py-2 grid place-content-center"
            style={{
              backgroundColor: checker === 4 ? "transparent" : "#a8a8a9",
            }}
            id="4"
            onClick={handleClick}
          >
            <div className="flex items-center font-bold text-lg gap-2">
              <img className="w-6" src="/images/racing.png" alt="" />
              <p>Training</p>
            </div>
          </button>
          <button
            className="bg-gray-700 w-1/5 py-2 grid place-content-center"
            style={{
              backgroundColor: checker === 5 ? "transparent" : "#a8a8a9",
            }}
            id="5"
            onClick={handleClick}
          >
            <div className="flex items-center font-bold text-lg gap-2">
              <img className="w-6" src="/images/route.png" alt="" />
              <p>Routes</p>
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
  return <div>{num}</div>;
}
