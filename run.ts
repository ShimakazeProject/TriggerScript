import { Actions, Events, Trigger, Common } from "./src";

const triggerFile = process.argv[2];

const triggerFactories: Record<string, (trigger: Trigger) => Trigger> =
  await import(triggerFile);

const tagIni = (tag: Trigger.Tag, name: string) =>
  `${tag.id} = ${tag.name},${tag.persistence},${name}`;

const eventIni = (events: Trigger.Event[], name: string) => {
  return `${name} = ${events.length},`  + events
    .map((event) => {
      let result = `${event.type},${event.parameter1},${event.parameter2},`;
      if (event.parameter3 != null) result += `${event.parameter3},`;
      return result;
    })
    .join(",");
};

const actionIni = (actions: Trigger.Action[], name: string) => {
  return `${name} = ${actions.length},` + actions.map(
    (action) => `${action.type},${action.parameter1},${action.parameter2},${action.parameter3},${action.parameter4},${action.parameter5},${action.parameter6},${action.parameter7}`
  ).join(',');
};

const triggers = Object.entries(triggerFactories).map(
  ([name, triggerFactory]) => {
    const trigger: Trigger = {
      id: name,
      tag: {
        name: `tag_${name}`,
        id: `tag_${name}`,
        persistence: 0,
      },
      events: [],
      actions: [],

      add(obj: Trigger.Event | Trigger.Action) {
        if (Common.isAction(obj)) this.actions.push(obj);
        else this.events.push(obj);
      },
    };

    return triggerFactory(trigger);
  }
);

triggers.forEach(trigger => {
  console.log(tagIni(trigger.tag, trigger.id));
  console.log(eventIni(trigger.events, trigger.id));
  console.log(actionIni(trigger.actions, trigger.id));
})
