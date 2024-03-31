import { Card } from '@repo/ui/card'
import React from 'react'
import { getBalance } from '../app/lib/actions/getBalance'

export default async function P2PBalanceCard() {
  const userBalance = await getBalance();

  return (
    <Card title="Balance">
      <div className='mt-2 text-sm'>Wallet Balance</div>
      <div className='font-bold  text-sm'>{new Intl.NumberFormat('en-IN',{ style: 'currency',currency: 'INR' }).format(
        userBalance.amount,
      )}</div>
    </Card>
  )
}
