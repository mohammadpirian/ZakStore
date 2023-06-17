import { handeleCloseModal } from "@/Redux/slices/modalSlices";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  modal: GetPropsProduct;
  setModal: (isOpen: boolean) => void;
}

const EditProductModal = ({ modal, setModal }: Props) => {
  // const { openModal, product } = useSelector((state) => state.modalReducer);
  // console.log(openModal, product);
  // const dispatch = useDispatch();
  console.log(modal);

  return (
    <div
      className={`absolute top-0 left-0 w-screen h-screen  justify-center items-center backdrop-blur-sm h-80 z-10  ${
        modal ? "flex" : "hidden"
      }`}
    >
      <div className="w-7/12 bg-meWhite p-4 rounded-xl flex flex-col gap-4">
        <button
          className="py-2 px-2 bg-white"
          // onClick={() => dispatch(handeleCloseModal())}
          onClick={() => setModal(false)}
        >
          close
        </button>
        <form
          action=""
          dir="rtl"
          className="flex gap-2 flex-wrap justify-between"
        >
          <label htmlFor="">نام محصول</label>
          <input
            type="text"
            placeholder="نام محصول"
            defaultValue={modal.name}
            className="w-[35%] py-2 px-4"
          />
          <label htmlFor="">توضیحات محصول</label>
          <input
            type="text"
            placeholder="توضیحات محصول"
            defaultValue={modal.description}
            className="w-[35%] py-2 px-4"
          />
          <label htmlFor="">گروه بندی</label>
          <select name="" id="" className="w-[35%] py-2 px-4">
            <option selected hidden>
              گروه بندی
            </option>
          </select>
          <label htmlFor="">زیر گروه</label>
          <select name="" id="" className="w-[35%]">
            <option selected hidden>
              زیر گروه
            </option>
          </select>
          <input type="file" placeholder="عکس محصول" />
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
