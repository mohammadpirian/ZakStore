import { request } from "@/utils/request";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

export default function DeleteProductModal({
  isOpenDeleteModal,
  setIsOpenDeleteModal,
}) {
  const cookie = new Cookies();
  const isModalOpen = isOpenDeleteModal ? true : false;

  function closeModal() {
    setIsOpenDeleteModal(false);
  }

  const client = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id) => handleDelete(id),
    onSuccess: () => client.invalidateQueries({ queryKey: ["dataProduct"] }),
  });

  const handleDelete = async (id) => {
    console.log(id);
    const response = await request.delete(`/products/${id}`, {
      headers: { Authorization: `Bearer ${cookie.get("adminToken")}` },
    });
    toast.info("حذف محصول با موفقیت انجام شد!");
    return response.data;
  };

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" dir="rtl" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div  className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div  className="fixed inset-0 overflow-y-auto">
            <div  className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex"
                  >
                    حذف کالا
                  </Dialog.Title>
                  <div className="mt-2" >
                    <p className="text-sm text-gray-500 flex">
                      آیا مطمئن هستید از حذف این کالا؟
                    </p>
                  </div>

                  <div className="mt-4 flex gap-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      بیخیال
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={() => mutate(isOpenDeleteModal)}
                    >
                      حذف
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
