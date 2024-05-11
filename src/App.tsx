import { useState } from "react";
import Selector from "./components/Selector";
import { Course, getReport } from "./utils/getReport";
import Report from "./components/Report";

const App = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  const getCourses = () => {
    setCourses(getReport(options));
  };

  return (
    <div className="h-screen p-2 flex flex-col gap-2">
      <Selector onOptionsChanged={setOptions} />
      <button
        onClick={getCourses}
        className="px-2 py-1 rounded-md border border-zinc-400/50 hover:bg-zinc-600/50 transition-colors duration-100 w-[250px] self-center"
      >
        Показать направления
      </button>
      <Report courses={courses} />
    </div>
  );
};

export default App;
