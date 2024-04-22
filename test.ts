import { Actions, Events, Trigger } from "./src";

export const 触发1 = (trigger: Trigger) => {
  trigger.add(Events.金钱数大于("Player A", 1500));

  trigger.add(Actions.失败者是("Player A"));

  return trigger;
};

export const 触发2 = (trigger: Trigger) => {
  trigger.add(Events.金钱数大于("Player B", 30000));

  trigger.add(Actions.失败者是("Player A"));

  return trigger;
};
