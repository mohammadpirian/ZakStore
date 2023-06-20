import useGetAllProduct from "@/hooks/useGetAllProduct";
import { useRouter } from "next/router";
import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

interface Props {
  openSerchBox: boolean;
  setOpenSerchBox: (openSerchBox: boolean) => void;
}

const SearchBoxProducts = ({ openSerchBox, setOpenSerchBox }: Props) => {
  const router = useRouter();

  const {
    data: product,
    isLoading: isLoadingproduct,
    isError: isErrorproduct,
    error: errorproduct,
  } = useGetAllProduct();

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    router.push({
      pathname: `/SingleProduct/${item.name}`,
      query: { id: item._id },
    });
    setOpenSerchBox(!openSerchBox)
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  console.log(product);
  const formatResult = (item) => {
    return (
      <div className="flex items-center gap-2">
        <img
          src={`${process.env.BASE_IMAGE_URL}${item.images[0]}`}
          className="w-16"
        />
        <span className="">{item.name}</span>
      </div>
    );
  };
  return (
    <div
      className={`absolute w-full h-screen flex flex-col top-0 left-0 py-16 gap-8 items-center backdrop-blur-[2px] ${
        !openSerchBox ? "hidden" : ""
      }`}
    >
      <button className=" w-8 h-8 p-[2px] rounded-md" onClick={() => setOpenSerchBox(!openSerchBox)}>
        <img src="/images/icon/close2.png" alt="" />
      </button>
      <div className=" w-[25rem] ">
        <ReactSearchAutocomplete
          items={product?.products}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          autoFocus
          formatResult={formatResult}
        />
      </div>
    </div>
  );
};

export default SearchBoxProducts;
