"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const [inputValue, setInputValue] = useState({
    name: "",
    category: "",
  });
  const route = useRouter();
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((i: any) => ({
      ...i,
      [name]: value,
    }));
  };
  const handleClick = () => {
    console.log("5555555", inputValue);
    route.push(
      `/products?name=${encodeURIComponent(
        inputValue.name
      )}&category=${encodeURIComponent(inputValue.category)}`
    );
  };

  const searchParam = useSearchParams();

  const getName = searchParam.get("name");
  const getCategory = searchParam.get("category");

  return (
    <>
      <h2>Tên sản phẩm: {getName}</h2>
      <h2>Danh mục: {getCategory}</h2>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          name="name"
          value={inputValue.name}
          className="px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
          placeholder="Nhập từ khóa..."
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="category"
          value={inputValue.category}
          className="px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
          placeholder="Nhập từ khóa..."
          onChange={handleChangeInput}
        />
        <button
          className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleClick}
        >
          Tìm kiếm
        </button>
      </div>
    </>
  );
}
