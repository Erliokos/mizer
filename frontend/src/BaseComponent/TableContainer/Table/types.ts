import { User } from '../../../generated/operations';

export interface TableUser {
  Player: User | null | undefined;
  EnemyLeft: User | null | undefined;
  EnemyRight: User | null | undefined;
};
