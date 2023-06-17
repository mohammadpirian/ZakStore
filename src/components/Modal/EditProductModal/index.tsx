// import { handeleCloseModal } from "@/Redux/slices/modalSlices";
// import { useQuery } from "@tanstack/react-query";
// import { useDispatch, useSelector } from "react-redux";
import ImageViewer from "@/components/ImageViewer";
import { request } from "@/utils/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import Cookies from "universal-cookie";

import { toast } from "react-toastify";

interface Props {
  modal: GetPropsProduct;
  setModal: (isOpen: boolean) => void;
}

const EditProductModal = ({ modal, setModal }: Props) => {
  // const { openModal, product } = useSelector((state) => state.modalReducer);
  // console.log(openModal, product);
  // const dispatch = useDispatch();

  const editProduct = async (productForm: FormData) => {
    const cookie = new Cookies();
    // console.log(Object.fromEntries(productForm));

    const response = await request.patch(
      `/products/${modal._id}`,
      productForm,
      {
        headers: {
          Authorization: `Bearer ${cookie.get("adminToken")}`,
        },
      }
    );
    setModal(false);
    toast.success("ویرایش با موفقیت ثبت شد!");
    return response.data;
  };

  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);

  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: editProduct,
    onSuccess: () => client.invalidateQueries({ queryKey: ["dataProduct"] }),
  });
  // const mutation = useMutation(editProduct);

  const handleSubmit = (e: any) => {
    // console.log(e.target.elements.nameProduct.value);
    e.preventDefault();
    const nameProduct = e.target.elements.nameEditedProduct.value;
    const imagesProduct = imageFiles;

    // console.log(imagesProduct);
    const productForm = new FormData();
    productForm.append("name", nameProduct);
    for (let i = 0; i < imagesProduct.length; i++) {
      productForm.append("images", imagesProduct[i]);
    }
    // console.log(Object.fromEntries(productForm));

    mutation.mutate(productForm);
  };

  // console.log(imageFiles);
  return (
    <div
      className={`absolute top-0 left-0 w-screen h-screen  justify-center items-center backdrop-blur-sm h-80 z-10  ${
        modal ? "flex" : "hidden"
      }`}
    >
      <div className="w-5/12 bg-meMain p-4 rounded-xl flex flex-col gap-4 shadow-xl ">
        <button
          className="w-8"
          // onClick={() => dispatch(handeleCloseModal())}
          onClick={() => setModal(false)}
        >
          <img src="/images/icon/close.png" alt="" className="w-8" />
        </button>
        <form
          onSubmit={handleSubmit}
          action=""
          dir="rtl"
          className="flex gap-8 flex-col justify-between"
        >
          <p className="flex items-center gap-4">
            <label htmlFor="">نام محصول :</label>
            <input
              type="text"
              name="nameEditedProduct"
              placeholder="نام محصول"
              defaultValue={modal.name}
              className="w-[80%] py-2 px-4 shadow-md rounded-md"
            />
          </p>

          <ImageViewer
            images={images}
            setImages={setImages}
            imageFiles={imageFiles}
            setImageFiles={setImageFiles}
          />
          <div className="flex items-center gap-12">
            <p>عکس قبلی محصول:</p>
            <img
              src={`${process.env.BASE_IMAGE_URL}${modal.images[0]}`}
              className="w-32"
              alt=""
            />
          </div>

          <button>ذخیره تغییرات</button>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;

// const [editInputCategory, setEditInputCategory] = useState("");

// const fetchData = async (url: string) => {
//   const response = await request.get(url);
//   return response.data.data;
// };

// const {
//   data: category,
//   isLoading: isLoadingcategory,
//   isError: isErrorcategory,
//   error: errorcategory,
// } = useGetCategory();
// const {
//   data: data2,
//   isLoading: isLoading2,
//   isError: isError2,
//   error: error2,
// } = useQuery(
//   ["data2", editInputCategory],
//   () => fetchData(`/subcategories?category=${editInputCategory}`),
//   { enabled: !!editInputCategory }
// );

{
  /* <label htmlFor="">گروه بندی</label>
          <select
            name=""
            id=""
            className="w-[35%] py-2 px-4"
            onChange={(e) => setEditInputCategory(e.target.value)}
          >
            <option selected hidden>
              {
                category.categories.filter(
                  (item) => item._id == modal.category
                )[0].name
              }
            </option>
            {category?.categories.map((item: GetCategory) => {
              return (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select> */
}
