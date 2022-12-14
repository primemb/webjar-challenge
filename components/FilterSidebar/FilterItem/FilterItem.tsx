import React from "react";
import { useAppSelector } from "../../../store/hooks";

interface IFilterItemProps {
  label: string;
  _id: string;
  onChange: (value: string) => void;
}

const FilterItem = ({ label, onChange, _id }: IFilterItemProps) => {
  const categories = useAppSelector((state) => state.filters.categories);
  return (
    <div className="w-full flex items-center justify-between">
      <label className="font-normal text-brand-grey-2">{label}</label>
      <input
        type="checkbox"
        className="accent-brand-green-1 text-white w-4 h-4 rounded"
        checked={categories.includes(_id)}
        onChange={() => onChange(_id)}
      />
    </div>
  );
};

export default FilterItem;
