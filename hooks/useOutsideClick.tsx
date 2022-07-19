import { RefObject } from "react";

import useEventListener from "./useEventListener";

type Handler = (event: MouseEvent) => void;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: "mousedown" | "mouseup" = "mousedown"
): void {
  useEventListener(mouseEvent, (event) => {
    const el = ref?.current;

    console.log(event.target);
    console.log(el);

    // Do nothing if clicking ref's element or descendent elements
    if (el?.contains(event.target as Node)) {
      console.log("devo fechar");
      handler(event);
      return;
    }
    console.log("nao vou fechar");

    return;
  });
}

export default useOnClickOutside;
