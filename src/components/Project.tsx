import { project_list, snapshot_list } from "../util/contents";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  xl: {
    breakpoint: { max: 4000, min: 1361 },
    items: 1,
    partialVisibilityGutter: 480,
  },
  lg: {
    breakpoint: { max: 1360, min: 1181 },
    items: 1,
    partialVisibilityGutter: 280,
  },
  md: {
    breakpoint: { max: 1180, min: 1001 },
    items: 1,
    partialVisibilityGutter: 160,
  },
  sm: {
    breakpoint: { max: 1000, min: 901 },
    items: 1,
    partialVisibilityGutter: 80,
  },
  xs: {
    breakpoint: { max: 900, min: 0 },
    items: 1,
  },
};

export default function Project() {
  return (
    <>
      <section>
        <h2 className="mb-2 text-center">Projects</h2>
        <div className="flex flex-wrap gap-4 place-content-center">
          {project_list.map((project) => {
            return (
              <div
                key={project.title}
                className="bg-white max-w-md rounded-md p-4 flex flex-col shadow-[0_4px_4px_rgba(0,0,0,0.05),inset_0_0_6px_rgba(0,0,0,0)]
                hover:shadow-[0_4px_6px_rgba(0,0,0,0),inset_0_0_6px_rgba(0,0,0,0.10)] hover:scale-99
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
                <p className="font-mono text-sm my-1 max-w-sm text-balance">
                  [{project.technology.join(", ")}]
                </p>
                <p className="text-pretty mb-2">{project.desc}</p>

                {project.href && (
                  <a
                    target="_blank"
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

        <div className="relative">
          <div
            className="absolute size-full bg-black/10 mask-x-from-90% mask-y-from-90%"
            aria-hidden
          />
          <Carousel
            className="mt-16 mb-8 py-16 relative"
            responsive={responsive}
            partialVisible={true}
            swipeable={true}
            draggable={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            removeArrowOnDeviceType={["xl", "lg", "md", "sm", "xs"]}
          >
            {snapshot_list.map((item) => {
              return (
                <img
                  className="mx-auto object-cover object-center max-h-100 rounded-lg pointer-events-none"
                  src={item.img_path}
                  alt={item.alt}
                />
              );
            })}
          </Carousel>
        </div>
      </section>
    </>
  );
}
