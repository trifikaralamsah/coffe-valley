import React from "react";

const CatalogPage = () => {
  return (
    <div className="px-24 mt-4">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="w-1/4">Bean</th>
            <th className="w-1/2">Description</th>
            <th className="w-1/4">Price/Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr className="bg-gray-200">
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CatalogPage;
