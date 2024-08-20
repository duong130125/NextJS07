"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const [inputValue, setInputValue] = useState("");
  const route = useRouter();
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    console.log("5555555", inputValue);
    route.push(`/posts?search=${encodeURIComponent(inputValue)}`);
  };
  const searchParam = useSearchParams();

  const getUrl = searchParam.get("search");
  return (
    <>
      <h2>Search Value: {getUrl}</h2>
      <div className="flex items-center space-x-2">
        <input
          type="text"
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
