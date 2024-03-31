'use server'

import prisma from "@repo/db/client";
import { authOptions } from "../auth"
import { getServerSession } from "next-auth";

export async function createOnRampTransaction(provider: string,amount: number) {
  const session = await getServerSession(authOptions);
  const userId = session.user.id;
  const token = Math.floor(Math.random() * 100000000000).toString();

  if (!userId) {
    return {
      message: "User not logged in"
    }
  }

  await prisma.onRampTransaction.create({
    data: {
      status: 'Processing',
      token,
      provider,
      amount: amount,
      userId: Number(userId),
      startTime: new Date()
    }
  })

  return {
    message: 'Transaction initiated',
  }

}