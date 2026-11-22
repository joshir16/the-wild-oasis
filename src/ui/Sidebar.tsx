import type { ComponentProps } from "react";
import { NavLink } from "react-router";

function SidebarRoot({ className = "", ...props }: ComponentProps<"aside">) {
  return (
    <aside
      className={`col-start-1 row-span-full flex flex-col gap-8 border-r border-(--color-grey-100) bg-(--color-grey-0) px-6 py-8 ${className}`}
      {...props}
    />
  );
}

function SidebarHeader({ className = "", ...props }: ComponentProps<"div">) {
  return <div className={`flex justify-center ${className}`} {...props} />;
}

function SidebarNav({
  className = "",
  "aria-label": ariaLabel = "Main navigation",
  ...props
}: ComponentProps<"nav">) {
  return (
    <nav aria-label={ariaLabel} className={`flex-1 ${className}`} {...props} />
  );
}

function SidebarList({ className = "", ...props }: ComponentProps<"ul">) {
  return <ul className={`flex flex-col gap-2 ${className}`} {...props} />;
}

function SidebarItem({ className, ...props }: ComponentProps<"li">) {
  return <li className={className} {...props} />;
}

type SidebarLinkProps = Omit<ComponentProps<typeof NavLink>, "className"> & {
  className?: string;
};

function SidebarLink({ className = "", ...props }: SidebarLinkProps) {
  return (
    <NavLink
      className={`flex items-center gap-3 rounded-(--border-radius-sm) px-6 py-3 text-base font-medium text-(--color-grey-600) transition-colors hover:bg-(--color-grey-50) hover:text-(--color-grey-800) aria-[current=page]:bg-(--color-grey-50) aria-[current=page]:text-(--color-grey-800) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-brand-600) [&_svg]:size-6 [&_svg]:shrink-0 [&_svg]:text-(--color-grey-400) [&_svg]:transition-colors hover:[&_svg]:text-(--color-brand-600) aria-[current=page]:[&_svg]:text-(--color-brand-600) ${className}`}
      {...props}
    />
  );
}

function SidebarFooter({ className = "", ...props }: ComponentProps<"div">) {
  return <div className={`mt-auto ${className}`} {...props} />;
}

SidebarRoot.SidebarHeader = SidebarHeader;
SidebarRoot.SidebarNav = SidebarNav;
SidebarRoot.SidebarList = SidebarList;
SidebarRoot.SidebarItem = SidebarItem;
SidebarRoot.SidebarLink = SidebarLink;
SidebarRoot.SidebarFooter = SidebarFooter;

export default SidebarRoot;
