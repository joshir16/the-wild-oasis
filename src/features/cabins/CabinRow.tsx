import type { Cabin } from "../../types/types";
import Table from "../../ui/Table";

interface CabinRowProps {
  cabin: Cabin;
}

function CabinRow({ cabin }: CabinRowProps) {
  return (
    <>
      <Table.Row>
        <Table.Cell>{}</Table.Cell>
        <Table.Cell>{cabin.name}</Table.Cell>
        <Table.Cell>{cabin.maxCapacity}</Table.Cell>
        <Table.Cell>{cabin.regularPrice}</Table.Cell>
        <Table.Cell>{cabin.discount}</Table.Cell>
        <Table.Cell>{}</Table.Cell>
      </Table.Row>
    </>
  );
}

export default CabinRow;
