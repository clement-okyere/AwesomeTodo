import React from "react";
interface ISearchProps {
  className?: string;
  placeholder: string;
}
export const Search = ({ className, placeholder }: ISearchProps) => {
  return <input className={className} placeholder={placeholder} type="text" />;
};
