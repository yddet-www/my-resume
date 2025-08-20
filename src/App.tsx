import AboutMe from "./components/AboutMe";
import Coursework from "./components/Coursework";
import Project from "./components/Project";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <main className="w-screen">
        <h1>Wikama W. Wardhana</h1>
        <div>
          <p>
            Chicago, IL | +1 (872)-265-6893 |{" "}
            <a href="mailto:yddet.www@gmail.com">yddet.www@gmail.com</a>
          </p>
          <p>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/wardhana-wikrama/"
            >
              linkedin.com/in/wardhana-wikrama
            </a>{" "}
            |{" "}
            <a target="_blank" href="https://github.com/yddet-www">
              github.com/yddet-www/
            </a>
          </p>
        </div>
        <AboutMe />
        <Coursework />
        <Project />
        <Timeline />
      </main>
    </>
  );
}

export default App;
