import React from "react";
import { ChangeEventHandler, ChangeEvent } from "react";
import "./search-box.style.css";

//create a type. its like a object
type SearchBoxProps = {
  classname: string;
  placeholder?: string;
  //   onChangeHandler: ChangeEventHandler<HTMLInputElement>; //this is called generic type done with <>. and changeEventHandler is function in react that will look for changed event, and HTMLInputElement is used to find input event, like typing keyboard
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void; //this is same as doing above onChangeHandler function, but we can return something as we wish from here
};

export const SearchBox = ({
  classname,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};
