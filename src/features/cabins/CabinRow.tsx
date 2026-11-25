import { Button } from "grid-ui";
import type { Cabin } from "../../types/types";
import Table from "../../ui/Table";
import { formatCurrency } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { HiTrash } from "react-icons/hi2";

interface CabinRowProps {
  cabin: Cabin;
}

function CabinRow({ cabin }: CabinRowProps) {
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
          <Button
            variant={"secondary"}
            size={"icon-sm"}
            onClick={() => mutate(cabin.id)}
            disabled={isPending}
          >
            <HiTrash />
          </Button>
        </Table.Cell>
      </Table.Row>
    </>
  );
}

export default CabinRow;
