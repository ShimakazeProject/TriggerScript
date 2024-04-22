import { Common } from "./common";
import { Trigger } from "./trigger";
export namespace Events {
  const event = (t: number, p1: number = 0, p2: number = 0, p3?: string) =>
    ({
      type: t,
      parameter1: p1,
      parameter2: p2,
      parameter3: p3,
    } satisfies Trigger.Event);

  export const 金钱数大于 = (p: "Player A" | "Player B", n: number) =>
    event(0, Common.playerMap[p], n);
}
