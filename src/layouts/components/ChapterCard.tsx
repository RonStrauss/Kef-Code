import React from "react";
import Link from "next/link";

interface ChapterCardProps {
  title: string;
  link: string;
  course: string;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ title, link, course }) => {
  return (
    <Link href={`/courses/${course}/${link}`}>
      <div className="dark:bg-gray-700 dark:hover:bg-gray-500 hover:transition-all motion-reduce:hover:scale-100 hover:bg-slate-100 hover:scale-105 text-center rounded-lg shadow-md p-6 m-1">
        <h4>{title}</h4>
      </div>
    </Link>
  );
};

export default ChapterCard;
