import { Withdrawal as WithdrawalEvent } from "../generated/Lock/Lock"
import { Withdrawal } from "../generated/schema"

export function handleWithdrawal(event: WithdrawalEvent): void {
  let entity = new Withdrawal(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.amount = event.params.amount
  entity.when = event.params.when
  entity.save()
}
