"use client";

import { deleteUser } from "@/lib/actions/user.actions";
import { useTransition } from "react";

const DeleteButton = ({ id }: { id: number }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={async () => {
        startTransition(async () => {
          const res = await deleteUser(id);
        });
      }}
    >
      {isPending ? "Удаление..." : "Удалить"}
    </button>
  );
};

export default DeleteButton;
