'use server'

import { getServerSession } from "next-auth"
import { authOptions } from "../auth"

export async function p2pTransfer(to: number,amount: number) {
  const session = await getServerSession(authOptions);
  const userId = session.user.id;
  return;
}