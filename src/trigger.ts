export namespace Trigger {
  export interface Event {
    type: number;
    parameter1: number;
    parameter2: number;
    parameter3?: string;
  }

  export interface Action {
    type: number;
    parameter1: number;
    parameter2: number;
    parameter3: number;
    parameter4: number;
    parameter5: number;
    parameter6: number;
    parameter7: number;
  }
  export interface Tag {
    id: string;
    persistence: 0 | 1 | 2;
    name: string;
  }

  export interface Trigger {
    id: string;
    tag: Tag;
    events: Event[];
    actions: Action[];

    add(event: Event);
    add(actions: Action);
  }
}
export type Trigger = Trigger.Trigger;
