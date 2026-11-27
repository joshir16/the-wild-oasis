import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import { Spinner } from "grid-ui";
import { useCabins } from "./useCabins";

export default function CabinTable() {
  const { isPending, cabins } = useCabins();

  if (isPending)
    return (
      <Spinner className="mx-auto my-12 block" aria-label={"Loading Cabins"} />
    );

  return (
    <>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head></Table.Head>
            <Table.Head>Cabin</Table.Head>
            <Table.Head>Capacity</Table.Head>
            <Table.Head>Price</Table.Head>
            <Table.Head>Discount</Table.Head>
            <Table.Head></Table.Head>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cabins.map((cabin) => (
            <CabinRow key={cabin.id} cabin={cabin} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
