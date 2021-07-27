import {
  trigger,
  state,
  animate,
  style,
  transition,
} from "@angular/animations";

export function showHideAnimations() {
  return {
    slideDown: slideDown,
    slideUp: slideUp,
    slideLeft: slideIn,
    slideInFromRight: slideInFromRight,
    slideInFromLeft: slideInFromLeft,
    slideInFromTop: slideInFromTop,
    slideDownExitOnly: slideDownExitOnly,
  };
}

// export function slideDown() {
//     return trigger('slideDown', [
//         state('false', style({ transform: 'translateY(-100%)', minHeight: '10px', maxHeight: '10px', top: '-400px' })),
//         state('true', style({ transform: 'translateY(0)', minHeight: '50px', maxHeight: '800px', top: '0px' })),
//         transition('false => true', animate('100ms ease-in')),
//         transition('true => false', animate('100ms ease-out'))
//     ]);
// }
export function slideDown() {
  return trigger("slideDown", [
    transition(":enter", [
      style({ minHeight: "0px", maxHeight: "0px" }),
      animate("200ms ease-in", style({ minHeight: "50px", maxHeight: "100%" })),
    ]),
    transition(":leave", [
      animate("200ms ease-out", style({ minHeight: "0px", maxHeight: "0px" })),
    ]),
  ]);
}
export function slideUp() {
  return trigger("slideUp", [
    transition(":enter", [
      style({ transform: "translateY(100%)" }),
      animate("200ms ease-in", style({ transform: "translateY(0)" })),
    ]),
    transition(":leave", [
      animate("200ms ease-out", style({ transform: "translateY(100%)" })),
    ]),
  ]);
}
export function slideInFromRight() {
  return trigger("slideInFromRight", [
    transition(":enter", [
      style({ transform: "translateX(100%)" }),
      animate("200ms ease-in", style({ transform: "translateX(0)" })),
    ]),
    transition(":leave", [
      animate("200ms ease-out", style({ transform: "translateX(100%)" })),
    ]),
  ]);
}
export function slideInFromLeft() {
  return trigger("slideInFromLeft", [
    transition(":enter", [
      style({ transform: "translateX(-100%)" }),
      animate("200ms ease-in", style({ transform: "translateX(0)" })),
    ]),
    transition(":leave", [
      animate("200ms ease-out", style({ transform: "translateX(-100%)" })),
    ]),
  ]);
}
export function slideInFromTop() {
  return trigger("slideInFromTop", [
    transition(":enter", [
      style({ transform: "translateY(-100%)" }),
      animate("200ms ease-in", style({ transform: "translateY(0)" })),
    ]),
    transition(":leave", [
      animate("200ms ease-out", style({ transform: "translateY(-100%)" })),
    ]),
  ]);
}
export function slideDownExitOnly() {
  return trigger("slideDownExitOnly", [
    transition(":enter", [
      style({ transform: "translateY(0)" }),
      animate("200ms ease-in", style({ transform: "translateY(0)" })),
    ]),
    transition(":leave", [
      animate("200ms ease-out", style({ transform: "translateY(100%)" })),
    ]),
  ]);
}

export function slideIn() {
  return trigger("slideIn", [
    state(
      "void",
      style({
        height: "calc(100% - 50px)",
        backgroundColor: "white",
        position: "relative",
        width: "100%",
        overflow: "auto",
        minWidth: "100%",
      })
    ),
    state(
      "*",
      style({
        height: "calc(100% - 50px)",
        backgroundColor: "white",
        position: "relative",
        width: "100%",
        overflow: "auto",
        minWidth: "100%",
      })
    ),
    transition(":enter", [
      // before 2.1: transition('void => *', [
      style({
        height: "calc(100% - 50px)",
        backgroundColor: "white",
        overflow: "auto",
        transform: "translateX(100%)",
      }),
      animate("2s linear", style({ transform: "translateX(0%)" })),
    ]),
    transition(":leave", [
      // before 2.1: transition('* => void', [
      style({
        height: "calc(100% - 50px)",
        backgroundColor: "white",
        overflow: "auto",
        transform: "translateX(0%)",
      }),
      animate("2s linear", style({ transform: "translateX(100%)" })),
    ]),
  ]);
}
export function slideOut() {
  return trigger("slideOut", [
    state(
      "void",
      style({
        height: "calc(100% - 50px)",
        backgroundColor: "white",
        position: "relative",
        width: "100%",
        overflow: "auto",
        minWidth: "100%",
      })
    ),
    state(
      "*",
      style({
        height: "calc(100% - 50px)",
        backgroundColor: "white",
        position: "relative",
        width: "100%",
        overflow: "auto",
        minWidth: "100%",
      })
    ),
    transition(":enter", [
      // before 2.1: transition('void => *', [
      style({
        height: "calc(100% - 50px)",
        backgroundColor: "white",
        transform: "translateX(0%)",
        overflow: "auto",
      }),
      animate("1s linear", style({ transform: "translateX(100%)" })),
    ]),
    transition(":leave", [
      // before 2.1: transition('* => void', [
      style({
        height: "calc(100% - 50px)",
        backgroundColor: "white",
        transform: "translateX(100%)",
        overflow: "auto",
      }),
      animate("1s linear", style({ transform: "translateX(0%)" })),
    ]),
  ]);
}
