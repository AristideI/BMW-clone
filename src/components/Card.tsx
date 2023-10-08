interface Checker {
  img: string;
  title: string;
  text: string;
}

export default function Card(props: Checker) {
  return (
    <section className="w-1/3 flex flex-col gap-6">
      <img
        className="w-full h-60 object-cover"
        src={props.img}
        alt="cover images"
      />
      <p className="font-bold text-2xl">{props.title}</p>
      <p>{props.text}</p>
      <button className="w-fit font-bold text-xl border-2 border-black py-1 px-4">
        Learn More
      </button>
    </section>
  );
}
