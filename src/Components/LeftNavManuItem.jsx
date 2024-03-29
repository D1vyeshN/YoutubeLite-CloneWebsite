import React from "react";

const LeftNavManuItem = ({ text, icon, className, action }) => {
  return (
    <div className={"dark:text-white text-sm font-roboto cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-black/[0.15] dark:hover:bg-white/[0.15] " + className}
    onClick={action} >
      <span className="text-xl mr-5">{icon}</span>{text}
    </div>
  );
};

export default LeftNavManuItem;
