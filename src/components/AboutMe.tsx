import { skill_list } from "../util/contents";

export default function AboutMe() {
  return (
    <>
      <section className="border-2 border-accent">
        <h2>About me</h2>
        <div className="lg:flex lg:flex-row gap-6">
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
          <div className="flex-none">
            {skill_list.map((item) => {
              return (
                <>
                  <p key={item.category}>
                    <span className="font-semibold">{item.category}</span>:{" "}
                    {item.skills.join(", ")}
                  </p>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
