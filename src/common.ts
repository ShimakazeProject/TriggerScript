import { Trigger } from "./trigger";

export namespace Common {
  export function isAction(obj: Trigger.Event | Trigger.Action): obj is Trigger.Action {
    return "parameter7" in obj;
  }

  export const playerMap = {
    "Player A": 0,
    "Player B": 0,
  };
}
