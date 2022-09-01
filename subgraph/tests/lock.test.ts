import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { Withdrawal } from "../generated/schema"
import { Withdrawal as WithdrawalEvent } from "../generated/Lock/Lock"
import { handleWithdrawal } from "../src/lock"
import { createWithdrawalEvent } from "./lock-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let amount = BigInt.fromI32(234)
    let when = BigInt.fromI32(234)
    let newWithdrawalEvent = createWithdrawalEvent(amount, when)
    handleWithdrawal(newWithdrawalEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Withdrawal created and stored", () => {
    assert.entityCount("Withdrawal", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Withdrawal",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "Withdrawal",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "when",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
