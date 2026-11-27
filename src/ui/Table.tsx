import type { ComponentProps } from "react";

function Table({ className = "", ...props }: ComponentProps<"table">) {
  return (
    <div className="overflow-x-auto rounded-[7px] border border-(--color-grey-200) bg-(--color-grey-0)">
      <table
        className={`w-full border-collapse text-sm ${className}`}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className = "", ...props }: ComponentProps<"thead">) {
  return (
    <thead
      className={`border-b border-(--color-grey-100) bg-(--color-grey-50) text-xs font-semibold uppercase tracking-wide text-(--color-grey-600) ${className}`}
      {...props}
    />
  );
}

function TableBody({ className = "", ...props }: ComponentProps<"tbody">) {
  return (
    <tbody
      className={`divide-y divide-(--color-grey-100) ${className}`}
      {...props}
    />
  );
}

function TableRow({ className = "", ...props }: ComponentProps<"tr">) {
  return (
    <tr className={`hover:bg-(--color-grey-50)/50 ${className}`} {...props} />
  );
}

function TableHead({ className = "", ...props }: ComponentProps<"th">) {
  return <th className={`px-6 py-4 text-left ${className}`} {...props} />;
}

function TableCell({ className = "", ...props }: ComponentProps<"td">) {
  return <td className={`px-6 py-3 align-middle ${className}`} {...props} />;
}

function TableFooter({ className = "", ...props }: ComponentProps<"tfoot">) {
  return (
    <tfoot
      className={`border-t border-(--color-grey-100) bg-(--color-grey-50) ${className}`}
      {...props}
    />
  );
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Head = TableHead;
Table.Cell = TableCell;
Table.Footer = TableFooter;

export default Table;
