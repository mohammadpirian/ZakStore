import SubCategory from "@/components/SubCategory";
import useGetCategory from "@/hooks/useGetCategory";
import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiLogin } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import Cookies from "universal-cookie";
import SearchBoxProducts from "./../../../components/SearchBox/index";
import { useDispatch, useSelector } from "react-redux";
import LogoutUserModal from "@/components/Modal/LogoutUserModal";

const Navbar = () => {
  const [isOpenUserLogoutModal, setIsOpenUserLogoutModal] = useState(false);
  const cart = useSelector((state) => state.cartSlices.CartProducts);
  console.log(cart.length);
  const cookie = new Cookies();

  // console.log(cookie.get("adminToken"));

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSerchBox, setOpenSerchBox] = useState(false);

  const {
    data: category,
    isLoading: isLoadingcategory,
    isError: isErrorcategory,
    error: errorcategory,
  } = useGetCategory();

  if (isLoadingcategory) {
    return <div>Loading...</div>;
  }

  // console.log(data1.categories);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // =========================================================
  const handleLogout = () => {
    setIsOpenUserLogoutModal(true);
  };
  // =======================================================================

  return (
    <div dir="rtl" className="container  absolute z-20">
      <div>
        <div className="flex h-full justify-between p-4 px-8 items-center bg-meMain text-meBlack2">
          <button>
            <Link href="/">
              <img src="/images/logo/logo.png" alt="" className="w-40" />
            </Link>
          </button>

          <div className="flex gap-4 items-center">
            <button onClick={toggleDropdown}>دسته بندی ها</button>
            <div className="w-[5px] h-[5px] bg-meBlackDot rounded-full"></div>
            <button>تخفیف</button>
            <div className="w-[5px] h-[5px] bg-meBlackDot rounded-full"></div>
            <Link href="/aboutMe">
              <button>درباره ما</button>
            </Link>
          </div>
          <div className="flex gap-4 ">
            <button onClick={() => setOpenSerchBox(!openSerchBox)}>
              <img src="/images/icon/search.png" alt="" className="w-6 mb-3" />
            </button>
            <Link href="/loginAdmin" className="w-6">
              <button>
                <img src="/images/icon/admin2.png" alt="" className="w-6" />
              </button>
            </Link>
            <Link
              href="/loginUser"
              className={`w-6 ${cookie.get("userID") && "hidden"}`}
            >
              <button>
                <img
                  src="/images/icon/login3.png"
                  alt=""
                  className={`w-6 ${cookie.get("userID") && "hidden"}`}
                />
              </button>
            </Link>
            <div className={`w-6 ${!cookie.get("userID") && "hidden"}`}>
              <button onClick={() => handleLogout()}>
                <img
                  src="/images/icon/logout.png"
                  alt=""
                  className={`w-6 ${!cookie.get("userID") && "hidden"}`}
                />
              </button>
            </div>
            <Link href="/cart" className="w-6">
              <button className="relative">
                <img src="/images/icon/cart2.png" alt="" className="w-6" />
                <p
                  className={`absolute flex justify-center items-center rounded-full -top-1 -left-2 text-[10px] text-white bg-red-600 w-[0.9rem] h-[0.9rem] ${
                    cart.length == 0 && "hidden"
                  }`}
                >
                  {cart.length}
                </p>
              </button>
            </Link>
          </div>
        </div>

        {isDropdownOpen && (
          <div className="animation origin-top shadow-lg bg-meMain text-meBlack2">
            <div className=" px-8 p-2 flex justify-between ">
              {category.categories &&
                category.categories.map((item: GetCategory) => {
                  return (
                    <div key={item._id} className="flex flex-col gap-1">
                      <h2 className="border-b  border-b-slate-400 text-center w-full">
                        {item.name}
                      </h2>
                      <SubCategory
                        id={item._id}
                        setIsDropdownOpen={setIsDropdownOpen}
                        isDropdownOpen={isDropdownOpen}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
      <SearchBoxProducts
        setOpenSerchBox={setOpenSerchBox}
        openSerchBox={openSerchBox}
      />
      {isOpenUserLogoutModal && (
        <LogoutUserModal
          isOpenUserLogoutModal={isOpenUserLogoutModal}
          setIsOpenUserLogoutModal={setIsOpenUserLogoutModal}
        />
      )}
    </div>
  );
};

export default Navbar;
