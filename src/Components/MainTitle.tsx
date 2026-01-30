import { Fragment } from "react";

const MainTitle = ({ title, className = "text-white font-bold text-2xl-3xl", gold }: { title: string, className?: string, gold?: boolean }) => {
  const createMainTitle = (title: string) => {
    const parts = title.split("//");

    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <span key={index} className={`${gold ? "text-goldColor" : "text-mainColor"}`}>
            {part}
          </span>
        );
      }
      return <Fragment key={index}>{part}</Fragment>;
    });
  };

  return <p className={className}>{createMainTitle(title || "")}</p>;
};

export default MainTitle;