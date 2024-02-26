import React from "react";

const UploadPage = () => {
  return (
    <form typeof="multipart/form-data">
      <div className="px-24 mt-4 flex flex-row gap-5">
        <div className="flex flex-col gap-4">
          <label htmlFor="">Title</label>
          <label htmlFor="">Document File</label>
          <label htmlFor="">Author</label>
        </div>
        <div className="flex flex-col gap-4">
          <input type="text" className="border border-slate-600 px-2" />
          <input type="file" className="border border-slate-600" />
          <input type="text" className="border border-slate-600" />
          <button className="bg-blue-500 w-1/2 text-white rounded-md ml-auto hover:bg-blue-400 py-1">
            Add Document
          </button>
        </div>
      </div>
    </form>
  );
};

export default UploadPage;
