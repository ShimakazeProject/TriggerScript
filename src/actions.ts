import { Common } from "./common";
import { Trigger } from "./trigger";
export namespace Actions {
  const action = (
    t: number,
    p1: number = 0,
    p2: number = 0,
    p3: number = 0,
    p4: number = 0,
    p5: number = 0,
    p6: number = 0,
    p7: number = 0
  ) =>
    ({
      type: t,
      parameter1: p1,
      parameter2: p2,
      parameter3: p3,
      parameter4: p4,
      parameter5: p5,
      parameter6: p6,
      parameter7: p7,
    } satisfies Trigger.Action);

  export const 失败者是 = (n: "Player A" | "Player B") =>
    action(0, Common.playerMap[n]);
}
