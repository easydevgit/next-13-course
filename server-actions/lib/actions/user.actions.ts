"use server";

import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import type { FormCheckResult } from "@/lib/types";
import { createUserSchema } from "../validator";
import { ZodError } from "zod";

export async function createUser(
  prevState: FormCheckResult,
  data: FormData
): Promise<FormCheckResult> {
  try {
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");

    const user = createUserSchema.parse({
      name,
      email,
      password,
      confirmPassword,
    });
    const hashedPassword = await bcrypt.hash(user.password, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
      },
    });

    revalidatePath("page");
    return {
      success: true,
      message: "",
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        success: false,
        message: error?.issues[0]?.message,
      };
    } else {
      console.log(error);
      return {
        success: false,
        message: "Something went wrong",
      };
    }
  }
}

export async function deleteUser(id: number): Promise<FormCheckResult> {
  try {
    await prisma.user.delete({ where: { id } });
    revalidatePath("page");
    return {
      success: true,
      message: "",
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}
