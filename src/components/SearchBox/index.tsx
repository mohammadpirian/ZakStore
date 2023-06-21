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
    setOpenSerchBox(!openSerchBox);
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  console.log(product);
  const formatResult = (item) => {
    return (
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-4">
          <img
            src={`${process.env.BASE_IMAGE_URL}${item.images[0]}`}
            className="w-16 rounded"
          />
          <span className="">{item.name}</span>
        </div>

        <span className="text-xs text-meBlueText mr-4">{item.price} تومان</span>
      </div>
    );
  };
  return (
    <div
      className={`fixed w-full h-screen flex flex-col top-0 left-0 py-16 gap-8 items-center backdrop-blur-[2px] ${
        !openSerchBox ? "hidden" : ""
      }`}
      onClick={(e) =>
        e.target == e.currentTarget && setOpenSerchBox(!openSerchBox)
      }
    >
      <button
        className=" w-8 h-8 p-[2px] rounded-md"
        onClick={() => setOpenSerchBox(!openSerchBox)}
      >
        <img src="/images/icon/close2.png" alt="" />
      </button>
      <div className=" w-[28rem] ">
        <ReactSearchAutocomplete
          items={product?.products}
          maxResults={5}
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
