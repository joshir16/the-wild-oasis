import { useEffect, useState } from "react";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import { Button } from "grid-ui";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

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
      <Button onClick={() => setShowForm((prev) => !prev)} className="mr-auto">
        Add new Cabin
      </Button>

      {showForm && <CreateCabinForm />}
    </>
  );
}

export default Cabins;
