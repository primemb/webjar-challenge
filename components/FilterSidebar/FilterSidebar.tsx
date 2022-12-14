import React, { useTransition } from "react";
import { Category } from "../../models/Category";
import { categoryFilter } from "../../store/filter-sclice";
import { useAppDispatch } from "../../store/hooks";
import FilterItem from "./FilterItem/FilterItem";

interface IFilterSidebarProps {
  categories: Category[];
}

const FilterSidebar = ({ categories }: IFilterSidebarProps) => {
  const [_, startTransition] = useTransition();
  const dispatch = useAppDispatch();

  const filterChangeHandler = (value: string) => {
    startTransition(() => {
      dispatch(categoryFilter({ filter: value }));
    });
  };

  return (
    <div className="w-347 min-h-370 max-h-370 bg-white rounded-2xl shadow-xs shadow-custom-2  sticky top-40 flex-shrink-0 hidden lg:block">
      <div className="flex flex-col items-c justify-start mt-8 px-2 mb-4 gap-2">
        <h4 className="font-bold text-xl">دسته بندی</h4>
        <div className="max-h-300 pb-4 overflow-y-scroll">
          {categories.map((category) => (
            <FilterItem
              key={category._id}
              label={category.name}
              _id={category._id}
              onChange={filterChangeHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
