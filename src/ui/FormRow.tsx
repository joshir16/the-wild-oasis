import { Label } from "grid-ui";
import { isValidElement } from "react";

type FormRowProps = {
  label?: string;
  error?: string | null;
  children: React.ReactNode;
};

export default function FormRow({ label, error, children }: FormRowProps) {
  const id = isValidElement<{ id?: string }>(children)
    ? children.props.id
    : undefined;

  return (
    <div className="grid grid-cols-[15rem_minmax(16rem,1.2fr)_1fr] items-center gap-6 py-3 first:pt-0 last:pb-0 border-b border-(--color-grey-100) last:border-b-0 has-[button]:flex has-[button]:justify-end has-[button]:gap-3">
      {label && <Label htmlFor={id}>{label}</Label>}
      {children}
      {error && <span className="text-red-700 text-sm">{error}</span>}
    </div>
  );
}
