import prisma from "@/lib/db";
import Form from "./components/form";
import DeleteButton from "./components/delete-button";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md mb-8">
        <h1 className="font-bold">Список сотрудников</h1>
        <ul className="divide-y divide-gray-200">
          {users.map((user) => (
            <li className="py-4 flex justify-between" key={user.id}>
              <span>{user.name}</span>
              <DeleteButton id={user.id} />
            </li>
          ))}
        </ul>
      </div>

      <Form />
    </main>
  );
}
