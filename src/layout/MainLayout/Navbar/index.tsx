import SubCategory from "@/components/SubCategory";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiLogin } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

// useEffect(() => {
//   const getData = async () => {
//     const { data } = await axios.get("http://localhost:8000/api/categories");

//     console.log(data.data.categories);
//     setCategoryData(data.data.categories);
//     return data;
//   };
//   getData();
// }, []);
// =====================map============================
// {categoryData &&
//   categoryData.map((item) => {
//     return (
//       <div key={item.id}>
//         <h2 className="border-b px-8">{item.name}</h2>
//       </div>
//     );
//   })}

// ========================staticReq==========================
// const fetchData = async () => {
//   const response = await axios.get("http://localhost:8000/api/categories");
//   // console.log(response.data.data);
//   return response.data.data;
// };
// ----------------------------
// const { data, isLoading, isError, error } = useQuery(["data"], fetchData);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (isError) {
//     return <div>Error:{error.message}</div>;
//   }
// ---------------------------

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data.data;
};

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {
    data: data1,
    isLoading: isLoading1,
    isError: isError1,
    error: error1,
  } = useQuery(["data1"], () =>
    fetchData("http://localhost:8000/api/categories")
  );

  if (isLoading1) {
    return <div>Loading...</div>;
  }
  if (isError1) {
    return <div>Error:{error1}</div>;
  }

  console.log(data1.categories);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div dir="rtl" className="container  absolute z-20">
      <div className={`${!isDropdownOpen && "shadow-lg "}`}>
        <div className="flex h-full justify-between p-4 px-8 items-center bg-meWhite text-meBlack2">
          <button>
            <img src="images/logo/logo.png" alt="" className="w-40" />
          </button>
          <div className="flex gap-8 ">
            <Link href="/login">
              <button>
                <CiLogin className="w-6 h-6 " />
              </button>
            </Link>

            <button>
              <CiShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="flex justify-between px-8 pb-4 bg-meWhite text-meBlack2">
          <div className="flex gap-4">
            <button onClick={toggleDropdown}>دسته بندی ها</button>
            <button>پیشنهادات</button>
            <button>تخفیف</button>
            <button>سوالات متداول</button>
            <button>درباره ما</button>
          </div>
          <div>
            <p className="text-mePrimary">همدان</p>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="animation origin-top shadow-lg bg-meWhite text-meBlack2">
            <div className=" px-8 p-2 flex justify-between ">
              {/* <div className="flex flex-col gap-1">
                <h2 className="border-b px-8">زنانه</h2>
                <a className="hover:bg-gray-100 cursor-pointer px-1 rounded">
                  تی شرت
                </a>
                
              </div> */}
              {data1.categories &&
                data1.categories.map((item) => {
                  return (
                    <div key={item._id} className="flex flex-col gap-1">
                      <h2 className="border-b px-8">{item.name}</h2>
                      <SubCategory id={item._id} />
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
