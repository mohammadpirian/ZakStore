import React from "react";

const CategoryRow = () => {
  return (
    <div className="flex justify-center gap-12 p-7">
      <button className="w-16 rounded-full">
        <img src="/images/avatar/sport.png" alt="" />
      </button>

      <button className="w-16 rounded-full">
        <img src="/images/avatar/doc.png" alt="" />
      </button>
      <button className="w-16 rounded-full">
        <img src="/images/avatar/kid.png" alt="" />
      </button>
      <button className="w-16 rounded-full">
        <img src="/images/avatar/woman.png" alt="" />
      </button>
      <button className="w-16 rounded-full">
        <img src="/images/avatar/man.png" alt="" />
      </button>
    </div>
  );
};

export default CategoryRow;
