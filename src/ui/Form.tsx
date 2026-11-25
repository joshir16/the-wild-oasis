import type { ComponentProps } from "react";

type FormProps = ComponentProps<"form"> & {
  type?: "regular" | "modal";
};

function Form({ type = "regular", className = "", ...props }: FormProps) {
  const variantStyles =
    type === "modal"
      ? "w-[50rem]"
      : "px-10 py-6 bg-(--color-grey-0) border border-(--color-grey-100) rounded-(--border-radius-md)";

  return (
    <form
      className={`overflow-hidden text-sm ${variantStyles} ${className}`}
      {...props}
    />
  );
}

export default Form;
