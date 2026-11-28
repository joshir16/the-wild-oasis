import { useState } from "react";
import type { Cabin } from "../../types/types";

import { formatCurrency } from "../../utils/helpers";

import Table from "../../ui/Table";
import CreateCabinForm from "./CreateCabinForm";

import { Button } from "grid-ui";

import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useDeleteCabin from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";

interface CabinRowProps {
  cabin: Cabin;
}

function CabinRow({ cabin }: CabinRowProps) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const {
    name,
    id: cabinId,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      <Table.Row>
        <Table.Cell>
          <img className="w-16 object-cover object-center " src={image} />
        </Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>Fits up to {maxCapacity} guests</Table.Cell>
        <Table.Cell>{formatCurrency(regularPrice)}</Table.Cell>
        <Table.Cell>
          {discount ? formatCurrency(discount) : <span>&mdash;</span>}
        </Table.Cell>
        <Table.Cell>
          <div className="flex gap-2">
            <Button
              variant={"secondary"}
              size={"icon-sm"}
              disabled={isCreating}
              onClick={handleDuplicate}
            >
              <HiSquare2Stack />
            </Button>

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
              onClick={() => deleteCabin(cabinId)}
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
