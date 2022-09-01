import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { Withdrawal } from "../generated/Lock/Lock"

export function createWithdrawalEvent(
  amount: BigInt,
  when: BigInt
): Withdrawal {
  let withdrawalEvent = changetype<Withdrawal>(newMockEvent())

  withdrawalEvent.parameters = new Array()

  withdrawalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawalEvent.parameters.push(
    new ethereum.EventParam("when", ethereum.Value.fromUnsignedBigInt(when))
  )

  return withdrawalEvent
}
