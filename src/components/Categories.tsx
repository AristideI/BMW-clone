import Card from "./Card";
import datas from "./info";

export default function Categories() {
  return (
    <>
      <p className="px-[10%] font-bold text-4xl mt-12">
        ALL CATEGORIES AT A GLANCE
      </p>
      <section className="flex justify-between items-start px-[10%] gap-6 py-2 mt-12 mb-20">
        {datas.map((elt) => (
          <Card key={elt.id} img={elt.img} title={elt.title} text={elt.text} />
        ))}
      </section>
    </>
  );
}
