// import { handeleCloseModal } from "@/Redux/slices/modalSlices";
// import { useDispatch, useSelector } from "react-redux";
import "react-quill/dist/quill.snow.css";
import { useQuery } from "@tanstack/react-query";
// import ReactQuill from "react-quill";
import ImageViewer from "@/components/ImageViewer";
import { request } from "@/utils/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import useGetCategory from "@/hooks/useGetCategory";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface Props {
  modal: GetPropsProduct;
  setModal: (isOpen: boolean) => void;
}

const EditProductModal = ({ modal, setModal }: Props) => {
  // const { openModal, product } = useSelector((state) => state.modalReducer);
  // console.log(openModal, product);
  // const dispatch = useDispatch();
  const [editInputCategory, setEditInputCategory] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const fetchData = async (url: string) => {
    const response = await request.get(url);
    return response.data.data;
  };
  function extractPTags(htmlString: string) {
    const pTags = htmlString.split(/<p[^>]*>/).slice(1);
    const contentArray = pTags.map((pTag) => pTag.replace(/<\/p>/, ""));
    return contentArray;
  }
  // console.log(extractPTags(descriptionValue)[0]);

  const {
    data: category,
    isLoading: isLoadingcategory,
    isError: isErrorcategory,
    error: errorcategory,
  } = useGetCategory();
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
  } = useQuery(
    ["data2", editInputCategory],
    () => fetchData(`/subcategories?category=${editInputCategory}`),
    { enabled: !!editInputCategory }
  );

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
    const brandProduct = e.target.elements.brandEditedProduct.value;
    const priceProduct = e.target.elements.priceEditedProduct.value;
    const quantityProduct = e.target.elements.quantityEditedProduct.value;
    const categoryProduct = e.target.elements.categoryEditedProduct.value;
    const subcategoryProduct = e.target.elements.subcategoryEditedProduct.value;
    const imagesProduct = imageFiles;
    const descriptionProduct = extractPTags(descriptionValue)[0];

    // console.log(imagesProduct);
    const productForm = new FormData();
    productForm.append("name", nameProduct);
    productForm.append("brand", brandProduct);
    productForm.append("price", priceProduct);
    productForm.append("quantity", quantityProduct);
    productForm.append("category", categoryProduct);
    productForm.append("description", descriptionProduct);
    productForm.append("subcategory", subcategoryProduct);
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
      <div className="w-5/12 h-[90%] bg-white p-4 rounded-xl flex flex-col gap-4 shadow-xl overflow-y-scroll no-scrollbar">
        <div className="flex justify-between">
          <button
            className="w-6"
            // onClick={() => dispatch(handeleCloseModal())}
            onClick={() => setModal(false)}
          >
            <img
              src="/images/icon/close.png"
              alt=""
              className="w-6 rounded-full hover:shadow-xl"
            />
          </button>
          <h2>ویرایش محصول</h2>
          <div className="w-8"></div>
        </div>

        <p className="text-meHalfBlack">{modal.name}</p>
        <div className="flex justify-center gap-2">
          {modal.images.map((item) => {
            return (
              <img
                key={item}
                src={`${process.env.BASE_IMAGE_URL}${item}`}
                className="w-32 border-2 p-2 rounded-xl"
                alt=""
              />
            );
          })}
        </div>

        <form
          onSubmit={handleSubmit}
          action=""
          dir="rtl"
          className="flex gap-8 flex-wrap p-4 justify-center"
        >
          <div className="w-[45%]">
            <label htmlFor="">نام محصول :</label>
            <input
              type="text"
              name="nameEditedProduct"
              placeholder="نام محصول"
              defaultValue={modal.name}
              className="w-full py-2 px-4 rounded-md border-2 text-sm"
            />
          </div>
          <div className="w-[45%]">
            <label htmlFor="">برند محصول :</label>
            <input
              type="text"
              name="brandEditedProduct"
              placeholder="برند محصول"
              defaultValue={modal.brand}
              className="w-full py-2 px-4 rounded-md border-2 text-sm"
            />
          </div>
          <div className="w-[45%]">
            <label htmlFor="">قیمت محصول :</label>
            <input
              type="text"
              name="priceEditedProduct"
              placeholder="قیمت محصول"
              defaultValue={modal.price}
              className="w-full py-2 px-4 rounded-md border-2 text-sm"
            />
          </div>
          <div className="w-[45%]">
            <label htmlFor="">موجودی محصول :</label>
            <input
              type="text"
              name="quantityEditedProduct"
              placeholder="موجودی محصول"
              defaultValue={modal.quantity}
              className="w-full py-2 px-4 rounded-md border-2 text-sm"
            />
          </div>
          <div className="w-[45%]">
            <label htmlFor="">گروه بندی</label>
            <select
              name="categoryEditedProduct"
              id=""
              className="w-full py-2 px-4 border-2 rounded-md text-sm"
              onChange={(e) => setEditInputCategory(e.target.value)}
            >
              <option selected hidden>
                {
                  category.categories.filter(
                    (item: GetCategory) => item._id == modal.category
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
            </select>
          </div>
          <div className="w-[45%]">
            <label htmlFor="">زیر گروه </label>
            <select
              name="subcategoryEditedProduct"
              id=""
              className="w-full py-2 px-4 border-2 rounded-md text-sm"
            >
              <option selected hidden>
                انتخاب زیر گروه
              </option>
              {data2?.subcategories.map((item: GetCategory) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-full px-3">
            <label htmlFor="">توضیحات محصول :</label>
            <ReactQuill
              className="w-full text-center"
              theme="snow"
              defaultValue={modal.description}
              onChange={setDescriptionValue}
            />
          </div>

          <ImageViewer
            images={images}
            setImages={setImages}
            imageFiles={imageFiles}
            setImageFiles={setImageFiles}
          />
          <button className="bg-meGreen py-2 px-16 rounded-md text-meWhite hover:bg-meGreen2">
            ذخیره تغییرات
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
