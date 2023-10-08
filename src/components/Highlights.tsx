export default function Highlights() {
  return (
    <article className="bg-[#e6e6e6] grid grid-cols-3 grid-rows-6 gap-6 px-[10%] py-12">
      <section className="bg-white w-full col-span-1 row-span-3 flex flex-col justify-between pb-8">
        <img
          className="w-full h-52 object-cover"
          src="/images/road.jpg"
          alt="road"
        />
        <div className="px-6">
          <p>Travel</p>
          <p className="font-bold text-2xl">
            THE AFRICAN DREAM: MOTORCYCLE TOUR <br /> IN SOUTH AFRICA
          </p>
        </div>
        <div className="mx-6 border-b border-b-black pb-4">
          <div className="flex items-center gap-3">
            <img className="w-4" src="/images/locations.png" alt="" />
            <p>Cape Town / environs, South Africa</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img className="w-4" src="/images/timing.png" alt="" />
              <p>13 days</p>
            </div>
            <p className="font-bold text-xl">From €6,440</p>
          </div>
        </div>
      </section>
      <section className="bg-white w-full row-span-1 font-bold text-2xl text-center py-5 px-5 flex flex-col justify-between gap-8">
        <p>FIND YOUR NEXT ADVENTURE</p>
        <p className="text-white bg-black py-1">EXPERIENCE FINDER</p>
      </section>
      <section className="bg-[url(/images/five.jpg)] bg-cover w-full row-span-4">
        <section className="w-full h-full bg-black bg-opacity-40 text-white flex flex-col justify-end pb-12">
          <div>
            <div className="px-6">
              <p>Travel</p>
              <p className="font-bold text-2xl">
                EXPOLORE COLOMBIA - THE <br /> GREAT LOOP
              </p>
            </div>
            <div className="mx-6 border-b-2 border-b-white pb-4">
              <div className="flex items-center gap-3">
                <img className="w-4" src="/images/locations.png" alt="" />
                <p>Bogota, Colombia</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <img className="w-4" src="/images/timing.png" alt="" />
                  <p>14 days</p>
                </div>
                <p className="font-bold text-xl">From €6,440</p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="w-full row-span-3 flex flex-col justify-center">
        <p className="font-bold text-5xl text-right">
          “ When was the last time you did something for the first time? ”
        </p>
      </section>
      <section className="bg-[url(/images/two.jpg)] bg-cover w-full row-span-3">
        <section className="w-full h-full bg-black bg-opacity-40 text-white flex flex-col justify-end pb-12">
          <div>
            <div className="px-6">
              <p>Travel</p>
              <p className="font-bold text-2xl">MOROCCAN GS ADVENTURE</p>
            </div>
            <div className="mx-6 border-b-2 border-b-white pb-4">
              <div className="flex items-center gap-3">
                <img className="w-4" src="/images/locations.png" alt="" />
                <p>Málaga/Morocco, Spain</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <img className="w-4" src="/images/timing.png" alt="" />
                  <p>9 days</p>
                </div>
                <p className="font-bold text-xl">From €3,440</p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="bg-white w-full row-span-2 ">
        <img
          className="w-full h-32 object-cover"
          src="/images/three.jpg"
          alt="road"
        />
        <div className="px-6 mt-4">
          <p>Travel</p>
          <p className="font-bold text-xl">
            THE CIRCUITO DE <br /> CARTAGENA
          </p>
        </div>
        <div className="mx-6 border-b border-b-black pb-4">
          <div className="flex items-center gap-3">
            <img className="w-4" src="/images/locations.png" alt="" />
            <p>Cartagena, spain</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img className="w-4" src="/images/timing.png" alt="" />
              <p>3 days</p>
            </div>
            <p className="font-bold text-xl">From €3,999</p>
          </div>
        </div>
      </section>
      <section className="bg-white w-full row-span-2 ">
        <img
          className="w-full h-32 object-cover"
          src="/images/four.jpg"
          alt="road"
        />
        <div className="px-6 mt-4">
          <p>Travel</p>
          <p className="font-bold text-xl">
            100 YEARS BMW MOTORRAD ANNIVERSARY TOUR
          </p>
        </div>
        <div className="mx-6 border-b border-b-black pb-4">
          <div className="flex items-center gap-3">
            <img className="w-4" src="/images/locations.png" alt="" />
            <p>Germany, Austria</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img className="w-4" src="/images/timing.png" alt="" />
              <p>2 days</p>
            </div>
            <p className="font-bold text-xl">From €940</p>
          </div>
        </div>
      </section>
    </article>
  );
}
