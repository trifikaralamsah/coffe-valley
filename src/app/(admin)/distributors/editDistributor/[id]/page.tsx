"use client";
import React, { useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/services";
import { useRouter } from "next/navigation";

const EditDistributor = (props: any) => {
  const { params } = props;
  console.log(params);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const { push } = useRouter();
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product?id=${params.id}`,
    fetcher
  );

  console.log(data);

  const product = {
    data: data?.data,
    error,
    isLoading,
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoadingSubmit(true);
    const res = await fetch("/api/distributor/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        city: e.target.city.value,
        phone: e.target.phone.value,
        country: e.target.country.value,
        state: e.target.state.value,
        email: e.target.email.value,
      }),
    });

    if (res.status === 200) {
      e.target.reset();
      setIsLoadingSubmit(false);
      push("/distributors");
    } else {
      setIsLoadingSubmit(false);
    }
  };
  return (
    <form>
      <div className="px-24 mt-4 flex flex-row gap-5">
        <div className="flex flex-col gap-4">
          <label htmlFor="">Distributor Name</label>
          <label htmlFor="">City</label>
          <label htmlFor="">State/Region</label>
          <label htmlFor="">Country</label>
          <label htmlFor="">Phone</label>
          <label htmlFor="">Email</label>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="border border-slate-600 px-2"
            defaultValue={"Cabita"}
          />
          <input
            type="text"
            className="border border-slate-600"
            defaultValue={data?.data.city}
          />
          <input type="text" className="border border-slate-600" />
          <input type="text" className="border border-slate-600" />
          <input type="number" className="border border-slate-600" />
          <input type="email" className="border border-slate-600" />
          <button className="bg-blue-500 w-1/2 text-white rounded-md ml-auto hover:bg-blue-400">
            Update
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditDistributor;
