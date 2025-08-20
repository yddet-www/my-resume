export default function Timeline() {
  return (
    <>
      <section>
        <h2>Experiences</h2>
        <ol className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical pb-10">
          <li>
            <div className="timeline-middle">
              <svg
                className="size-5"
                data-slot="icon"
                aria-hidden="true"
                fill="none"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">AUG 2024 — PRESENT</time>
              <div className="text-lg font-black">
                Tutor - Academic Resource Center
              </div>
              <p>
                I provided tutoring support for undergraduate students in Data
                Structures and Algorithms, offering both individualized guidance
                and group instruction to strengthen problem-solving skills and
                core computer science knowledge. I conducted open review
                sessions that adapted to varied learning styles, helping
                students gain confidence and improve their grasp of complex
                concepts. Additionally, I facilitated open table sessions for
                advanced computer science courses, delivering targeted
                assistance that supported deeper conceptual understanding and
                encouraged academic success.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />

            <div className="timeline-middle">
              <svg
                className="size-5"
                data-slot="icon"
                aria-hidden="true"
                fill="none"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">AUG 2024 — DEC 2024</time>
              <div className="text-lg font-black">
                Student Collaborator - Remote Telescope Project
              </div>
              <p>
                I researched and implemented astronomical image processing
                techniques in Python, applying modern practices to improve data
                analysis workflows. In addition, I refactored legacy Java code
                into Python while maintaining equivalent performance by
                leveraging libraries such as AstroPy, SciPy, and OpenCV. I also
                coordinated project goals between IBM and IIT, ensuring
                effective collaboration and alignment across academic and
                industry stakeholders.
              </p>
            </div>
          </li>
        </ol>
      </section>
    </>
  );
}
