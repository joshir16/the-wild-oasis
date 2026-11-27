import { useState } from "react";
import type { Cabin } from "../../types/types";

import { formatCurrency } from "../../utils/helpers";

import Table from "../../ui/Table";
import CreateCabinForm from "./CreateCabinForm";

import { Button } from "grid-ui";

import { HiPencil, HiTrash } from "react-icons/hi2";
import useDeleteCabin from "./useDeleteCabin";

interface CabinRowProps {
  cabin: Cabin;
}

function CabinRow({ cabin }: CabinRowProps) {
  const [showForm, setShowForm] = useState(false);

  const { isDeleting, deleteCabin } = useDeleteCabin();

  return (
    <>
      <Table.Row>
        <Table.Cell>
          <img
            className="w-16 object-cover object-center aspect-3/2"
            src={cabin.image}
          />
        </Table.Cell>
        <Table.Cell>{cabin.name}</Table.Cell>
        <Table.Cell>Fits up to {cabin.maxCapacity} guests</Table.Cell>
        <Table.Cell>{formatCurrency(cabin.regularPrice)}</Table.Cell>
        <Table.Cell>
          {cabin.discount ? (
            formatCurrency(cabin.discount)
          ) : (
            <span>&mdash;</span>
          )}
        </Table.Cell>
        <Table.Cell>
          <div className="flex gap-2">
            <Button
              variant={"secondary"}
              size={"icon-sm"}
              onClick={() => setShowForm(!showForm)}
            >
              <HiPencil />
            </Button>
            <Button
              variant={"secondary"}
              size={"icon-sm"}
              onClick={() => deleteCabin(cabin.id)}
              disabled={isDeleting}
            >
              <HiTrash />
            </Button>
          </div>
        </Table.Cell>
      </Table.Row>
      {showForm && (
        <Table.Row>
          <Table.Cell colSpan={6} className="bg-(--color-grey-50)/50 p-6">
            <CreateCabinForm cabinToEdit={cabin} />
          </Table.Cell>
        </Table.Row>
      )}
    </>
  );
}

export default CabinRow;
