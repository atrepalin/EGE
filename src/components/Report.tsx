import { FC } from "react";
import { Course } from "../utils/getReport";

const Report: FC<{
  courses: Course[];
}> = ({ courses }) => {
  if (courses.length === 0) {
    return <span>Направления не найдены!</span>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {courses.map((course, index) => {
        return (
          <li key={index}>
            <span className="mr-2 text-zinc-600/50">{course.code}</span>
            <span>{course.name}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Report;
