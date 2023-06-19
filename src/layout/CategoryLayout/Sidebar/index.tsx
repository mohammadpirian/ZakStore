import { SubCategoryLayout } from "@/components";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion";
import useGetCategory from "@/hooks/useGetCategory";
import React from "react";
const SidebarCategory = () => {
  const {
    data: category,
    isLoading: isLoadingcategory,
    isError: isErrorcategory,
    error: errorcategory,
  } = useGetCategory();
  return (
    <div className="w-[20%] px-4" dir="rtl">
      <p className="text-xs text-meHalfBlack p-4">
        فروشگاه اینترنتی زاک استور / مردانه
      </p>
      <div className="border flex flex-col gap-4 p-4 rounded-xl">
          {category?.categories &&
            category.categories.map((item: GetCategory) => {
              return (
                <Accordion key={item._id} type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{item.name}</AccordionTrigger>
                  <AccordionContent>
                  <SubCategoryLayout id={item._id} />
                  </AccordionContent>
                </AccordionItem>
        </Accordion>
              );
            })}
      </div>
    </div>
  );
};

export default SidebarCategory;