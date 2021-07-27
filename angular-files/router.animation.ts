import {
  trigger,
  state,
  animate,
  style,
  transition,
} from "@angular/animations";

export function routerTransition() {
  return {
    slideToLeft: slideToLeft,
    slideToRight: slideToRight,
  };
}

export function slideToRight() {
  return trigger("routerTransition", [
    state(
      "void",
      style({
        height: "100%",
        backgroundColor: "#e6e5e5",
        zIndex: 1,
        position: "relative",
        width: "100%",
      })
    ),
    state(
      "*",
      style({
        height: "100%",
        backgroundColor: "#e6e5e5",
        zIndex: 1,
        position: "relative",
        width: "100%",
      })
    ),
    transition(":enter", [
      // before 2.1: transition('void => *', [
      style({
        height: "100%",
        backgroundColor: "#e6e5e5",
        zIndex: 1,
        transform: "translateX(-100%)",
        position: "relative",
        width: "100%",
      }),
      animate(".2s linear", style({ transform: "translateX(0%)" })),
    ]),
    transition(":leave", [
      // before 2.1: transition('* => void', [
      style({
        height: "100%",
        backgroundColor: "#e6e5e5",
        zIndex: 1,
        transform: "translateX(0%)",
        position: "relative",
        width: "100%",
      }),
      animate(".2s linear", style({ transform: "translateX(-100%)" })),
    ]),
  ]);
}

export function slideToLeft() {
  return trigger("routerTransition", [
    state(
      "void",
      style({
        height: "100%",
        backgroundColor: "white",
        position: "relative",
        width: "100%",
      })
    ),
    state(
      "*",
      style({
        height: "100%",
        backgroundColor: "white",
        position: "relative",
        width: "100%",
      })
    ),
    transition(":enter", [
      // before 2.1: transition('void => *', [
      style({
        height: "calc(100% - 50px)",
        backgroundColor: "white",
        transform: "translateX(100%)",
        position: "relative",
        width: "100%",
      }),
      animate(".2s linear", style({ transform: "translateX(0%)" })),
    ]),
    transition(":leave", [
      // before 2.1: transition('* => void', [
      style({
        height: "calc(100% - 50px)",
        backgroundColor: "white",
        transform: "translateX(0%)",
        position: "relative",
        width: "100%",
      }),
      animate(".2s linear", style({ transform: "translateX(100%)" })),
    ]),
  ]);
}
