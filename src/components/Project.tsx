import { project_list } from "../util/contents";

export default function Project() {
  return (
    <>
      <section>
        <h2>Projects</h2>
        <div className="flex flex-wrap gap-4">
          {project_list.map((project) => {
            return (
              <div
                key={project.href}
                className="bg-white w-md rounded-md px-4 py-2 flex flex-col shadow-[0_4px_6px_rgba(0,0,0,0.10),inset_0_0_6px_rgba(0,0,0,0)]
                hover:shadow-[0_4px_6px_rgba(0,0,0,0),inset_0_0_6px_rgba(0,0,0,0.10)] hover:scale-98
                transition-all duration-300 ease-in-out"
              >
                <h3 className="leading-6">
                  {project.title}
                  {project.sub_title && (
                    <>
                      <br />
                      <em className="text-[16px] font-normal text-gray-800">
                        {project.sub_title}
                      </em>
                    </>
                  )}
                </h3>
                <p className="font-mono text-sm my-1 w-sm text-balance">
                  [{project.technology.join(", ")}]
                </p>
                <p className="text-pretty mb-2">{project.desc}</p>

                {project.href && (
                  <a
                    href={project.href}
                    className="ml-auto mt-auto font-mono inline-flex items-center gap-1"
                  >
                    <svg
                      className="size-4"
                      data-slot="icon"
                      aria-hidden="true"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>source code link</span>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
