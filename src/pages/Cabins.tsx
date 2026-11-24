import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold leading-snug">All cabins</h1>
        <p>Filter / Sort</p>
      </div>
      <CabinTable />
    </>
  );
}

export default Cabins;
