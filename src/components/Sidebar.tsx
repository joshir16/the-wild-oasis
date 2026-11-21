import Logo from "../ui/Logo";

export default function Sidebar() {
  return (
    <aside className="col-start-1 row-span-full py-8 px-6 bg-(--color-grey-0) border-r border-r-(--color-grey-100) flex flex-col gap-8">
      <Logo />
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
    </aside>
  );
}
