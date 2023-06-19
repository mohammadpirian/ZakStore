import { Button } from "@/components";
import { AdminLayout } from "@/layout";
import { request } from "@/utils/request";
import { useQuery, useMutation } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";
import DataTable from "react-data-table-component";
import EasyEdit from "react-easy-edit";
import { toast } from "react-toastify";

const fetchData = async (url: string) => {
  const response = await request.get(url);
  return response.data;
};
const patchData = async (url: string, item: any) => {
  const response = await request.patch(url, item);
  return response.data;
};

const StockTable = () => {
  const [patches, setPatches] = useState(() => []);

  ////////////////////////////////
  const columns = [
    { name: "نام کالا", selector: (row) => row.name, sortable: true },
    {
      name: "موجودی ",
      selector: (row) => (
        <EasyEdit
          type="text"
          value={row.quantity.toString()}
          onSave={(newValue) => {
            handleEditSave(row._id, "quantity", newValue);
          }}
          onCancel={handleEditCancel}
          // saveButtonLable="ذخیره"
          // cancelButtonLable="لغو"
        />
      ),
      sortable: true,
    },
    {
      name: " قیمت",
      selector: (row) => (
        <EasyEdit
          type="text"
          value={row.price.toString()}
          onSave={(newValue) => {
            handleEditSave(row._id, "price", newValue);
          }}
          onCancel={handleEditCancel(row._id)}
          // saveButtonLable="ذخیره"
          // cancelButtonLable="لغو"
        />
      ),
      sortable: true,
    },
  ];

  ////////////////////////////////

  const {
    data: QuantityProduct,
    isLoading: isLoadingQuantityProduct,
    isError: isErrQuantityProduct,
    error: errQuantityProduct,
  } = useQuery(["QuantityProduct"], () => fetchData(`/products`));

  ////////////////////////////////////////////////////////////////////////

  const { mutate, isLoding, isError, isSuccess, data } = useMutation((data) =>
    patchData(`/products/${data.id}`, data.dataEdit)
  );

  //cancel edit
  const handleEditCancel = (id) => {
    patches.filter((item) => item.id !== id);
    setPatches(patches);
  };

  //save edit
  const handleEditSave = async (id, fieldName, newValue) => {
    console.log(id);
    console.log(fieldName);
    console.log(newValue);
    
    const obj = { id: id, [fieldName]: newValue };
    setPatches([...patches, obj]);

    try {
      const response = await Promise.all(
        patches.map(
          (item: { id: string; price?: string; quantity?: string }) => {
            const formData = new FormData();
            Object.keys(item).map((key: any) => {
              if (key !== "id") {
                return formData.append(key, item[key]);
              }
            });
            mutate({ dataEdit: formData, id: item.id });
          }
        )
      );
      if (!isLoding) {
        toast("تغییرات اعمال شد");
      }
    } catch (error) {}
    console.log(patches);
  };
  return (
    <>
      <div className="w-full flex flex-col items-end">
        <div className="mt-5 w-full " dir="rtl">
          <div className="flex justify-between my-4">
            <span className="text-black font-bold text-2xl">
              مدیریت موجودی و قیمت ها
            </span>
            <button
              className="px-6  py-2 rounded-md shadow-sm bg-[#e87b34]"
              onClick={handleEditSave}
            >
              ذخیره
            </button>
          </div>

          <DataTable
            columns={columns}
            data={QuantityProduct?.data.products}
            selectableRows
            fixedHeader
            pagination
            paginationPerPage={4}
          ></DataTable>
        </div>
      </div>
    </>
  );
};

export default StockTable;
