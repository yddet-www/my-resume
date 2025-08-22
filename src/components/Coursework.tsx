import { coursework_list } from "../util/contents";

export default function Coursework() {
  return (
    <>
      <section>
        <h2>Relevant coursework</h2>
        <ul className="w-fit list-disc list-outside grid grid-cols-2 gap-x-6">
          {coursework_list.map((item) => {
            return <li key={item} className="ms-6">{item}</li>;
          })}
        </ul>
      </section>
    </>
  );
}
