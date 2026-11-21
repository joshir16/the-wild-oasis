import { Button } from "grid-ui";

function PageNotFound() {
  // const moveBack = useMoveBack();

  return (
    <div className="h-screen bg-(--color-grey-50) flex items-center justify-center p-12">
      <div className="bg-(--color-grey-0) border border-(--color-grey-100) rounded-(--border-radius-md) w-full max-w-240 p-12 text-center">
        <h1 className="text-3xl font-semibold leading-snug mb-8">
          The page you are looking for could not be found 😢
        </h1>

        <Button size="lg">&larr; Go back</Button>
      </div>
    </div>
  );
}

export default PageNotFound;
