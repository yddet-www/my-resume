import { skill_list } from "../util/contents";

export default function AboutMe() {
  return (
    <>
      <section className="flex flex-col lg:flex-row gap-x-4 justify-center">
        <div>
          <h2>About me</h2>
          <p className="text-balance">
            I'm a Computer Science student specializing in Distributed and Cloud
            Computing at the Illinois Institute of Technology. I love working on
            projects that blend design with functionality. I believe that
            complex problems deserve robust and meticulous engineering just as
            much as thoughtful and user-friendly interfaces. Outside of coding,
            you'll usually find me huddled up listening to music, practicing on
            my guitar to play said music, or playing video games. Feel free to
            check out my projects below or reach out if you'd like to
            collaborate!
          </p>
        </div>
        <div className="flex-none">
          {/* VV Cheap trick to align with heading VV */}
          <br className="text-3xl" />
          {skill_list.map((item, index) => {
            return (
              <p key={index}>
                <span className="font-semibold">{item.category}</span>:{" "}
                {item.skills.join(", ")}
              </p>
            );
          })}
        </div>
      </section>
    </>
  );
}
