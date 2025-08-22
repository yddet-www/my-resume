import AboutMe from "./components/AboutMe";
import Coursework from "./components/Coursework";
import Project from "./components/Project";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <main className="w-screen">
        <div className="mask-b-from-70% mask-b-to-95% text-shadow-lg w-full h-screen flex flex-col items-center justify-center bg-[url(https://images4.alphacoders.com/119/1191506.jpg)] bg-white/30 bg-blend-overlay bg-cover bg-top">
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

        <div className="lg:flex lg:flex-row">
          <AboutMe />
          <Coursework />
        </div>

        <Project />
        <Timeline />
      </main>
    </>
  );
}

export default App;
