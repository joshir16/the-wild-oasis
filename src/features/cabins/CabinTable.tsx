import { useQuery } from "@tanstack/react-query";
import Table from "../../ui/Table";
import { getCabins } from "../../services/apiCabins";
import CabinRow from "./CabinRow";

export default function CabinTable() {
  const {
    isPending,
    data: cabins = [],
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });
  console.log(cabins, error);

  if (isPending) return <p>Spinner...</p>;

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
