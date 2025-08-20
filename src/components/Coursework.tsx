import { coursework_list } from "../util/contents";

export default function Coursework() {
  return (
    <>
      <section className="border-2 border-accent">
        <h2>Relevant coursework</h2>
        <ul className="w-fit list-disc list-outside grid grid-rows-5 grid-flow-col gap-x-6">
          {coursework_list.map((item) => {
            return <li key={item} className="ms-6">{item}</li>;
          })}
        </ul>
      </section>
    </>
  );
}
