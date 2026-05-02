import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 min-h-[60vh]">
      <Spinner size="xl" color="danger" />
    </div>
  );
};

export default loading;
