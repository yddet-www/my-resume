import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <main className="w-screen">
        <div className="mask-b-from-80% text-shadow-lg w-full h-screen flex flex-col items-center justify-center bg-[url(https://pbs.twimg.com/media/FC0JEC7WQAIPvBj?format=jpg&name=4096x4096)] bg-white/25 bg-blend-overlay bg-cover bg-top">
          <h1>Wikama W. Wardhana</h1>

          <hr className="w-[200px] h-0.5 my-2 rounded-lg border-0 bg-green-950" />

          <div className="text-center">
            <p>
              <a href="mailto:yddet.www@gmail.com">yddet.www@gmail.com</a> |{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/wardhana-wikrama/"
              >
                linkedin.com/in/wardhana-wikrama
              </a>{" "}
              |{" "}
              <a target="_blank" href="https://github.com/yddet-www/">
                github.com/yddet-www
              </a>
            </p>
            <p>Chicago, IL | +1 (872)-265-6893</p>
          </div>
        </div>

        <hr className="w-2/5 h-0.5 my-12 mx-auto rounded-lg border-0 bg-green-900" />

        <AboutMe />
        <Project />
        <Timeline />
      </main>
    </>
  );
}

export default App;
