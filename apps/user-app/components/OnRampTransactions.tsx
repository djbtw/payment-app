import { Card } from "@repo/ui/card"

type Status = 'Success' | 'Failure' | 'Processing';

export const OnRampTransactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        // TODO: Can the type of `status` be more specific?
        status: Status,
        provider: string
    }[]
}) => {
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Recent Transactions">
        <div className="pt-2">
            {transactions.map(t => {
                let statusBgColor = '';

                if (t.status === 'Success') statusBgColor = 'bg-green-400';
                else if (t.status === 'Failure') statusBgColor = 'bg-red-500';
                else statusBgColor = 'bg-yellow-300';

                return (<div className="mb-3">
                    <div className="flex justify-between items-baseline">
                        <div className="text-sm">
                            Received INR
                        </div>
                        <div>
                            Rs {t.amount / 100}
                        </div>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <div className="text-slate-600 text-xs">
                            {t.time.toDateString()}
                        </div>
                        <div className="text-slate-600 text-xs">
                            <span className={`${statusBgColor} text-slate-700 font-bold px-1.5 py-0.5 rounded`}>{t.status}</span>
                        </div>
                    </div>
                </div>)
            })}
        </div>
    </Card>
}