"use client";

import { useEffect } from "react";
export default function error({error, rest}) {
    useEffect(() => {console.log(error);}, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. please try again later.</h1>
      <button className="hover:text-amber-600" onClick={() => rest()}>
        Try again
      </button>
    </div>
  )
}
