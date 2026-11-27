import { useState } from "react";
import type { Cabin } from "../../types/types";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";

import { formatCurrency } from "../../utils/helpers";

import Table from "../../ui/Table";
import CreateCabinForm from "./CreateCabinForm";

import { Button } from "grid-ui";

import toast from "react-hot-toast";
import { HiPencil, HiTrash } from "react-icons/hi2";

interface CabinRowProps {
  cabin: Cabin;
}

function CabinRow({ cabin }: CabinRowProps) {
  const [showForm, setShowForm] = useState(false);
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

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
        <Table.Cell>{formatCurrency(cabin.discount)}</Table.Cell>
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
              onClick={() => mutate(cabin.id)}
              disabled={isPending}
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
