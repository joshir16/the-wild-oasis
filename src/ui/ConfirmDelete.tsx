import { Button } from "grid-ui";

function ConfirmDelete({ resourceName, onConfirm, disabled = true }) {
  return (
    <div className="w-40rem flex flex-col gap-6">
      <h3 className="text-3xl font-medium ">Delete {resourceName}</h3>
      <p className="text-(--color-grey-500) mb-6">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-6">
        <Button variant="secondary" disabled={disabled}>
          Cancel
        </Button>
        <Button variant="danger" disabled={disabled}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
