import { User } from "../../../generated/operations"

export type TableUser = {
  Player: User | null | undefined
  EnemyLeft: User | null | undefined
  EnemyRight: User | null | undefined
}
