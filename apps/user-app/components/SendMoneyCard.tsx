'use client'
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";
import { useState } from 'react';


export default function SendMoneyCard() {
  const [amount,setAmount] = useState(0);
  const [number,setNumber] = useState(0);

  return (
    <Card title="Send Money">
      <div className="flex gap-4 items-end">
        <TextInput placeholder="Enter Number" onChange={(value) => setNumber(Number(value))} label="Number"></TextInput>
        <TextInput placeholder="Enter Amount" onChange={(value) => setAmount(Number(value))} label="Amount"></TextInput>
        <div>
          <Button onClick={async () => {
            const result = await p2pTransfer(number,amount);
          }}>
            Send
          </Button>
        </div>
      </div>
    </Card >
  )
}
