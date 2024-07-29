"use client";
import { createUser } from "@/lib/actions/user.actions";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import SubmitButton from "./submit-button";

const Form = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [data, action] = useFormState(createUser, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (data.success) {
      ref.current?.reset();
    }
  }, [data]);

  return (
    <form
      ref={ref}
      action={action}
      className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Добавить сотрудника
      </h2>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Имя
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          name="name"
          type="text"
          placeholder="Имя"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Пароль
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="confirmPassword"
        >
          Повторите пароль
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Повторите пароль"
        />
      </div>

      <div className="flex items-center justify-between">
        <SubmitButton />
      </div>

      {data.success && (
        <p className="text-green-500">Данные успешно добавлены</p>
      )}

      {data.message && <p className="text-red-500">{data.message}</p>}
    </form>
  );
};

export default Form;
