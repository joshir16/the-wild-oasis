export default function ButtonGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex gap-6 justify-end">{children}</div>;
}
