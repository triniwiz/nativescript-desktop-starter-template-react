import type { EventData } from '@nativescript/core';
import 'react';

// React's DOM typings already cover the HTML-shaped MasonKit elements (<div>,
// <section>, <span>, <button>, ...). These add what NativeScript brings on top.
// `onClick` is a NativeScript `tap`; any other `on<Event>` prop listens for the
// NativeScript event of that name (`onLoaded` → `loaded`).
declare module 'react' {
  interface HTMLAttributes<T> {
    /** The element joined the visual tree; `args.object` is its view. */
    onLoaded?: (args: EventData) => void;
    /** The element left the visual tree. */
    onUnloaded?: (args: EventData) => void;
    /** The element's laid-out size or position changed. */
    onLayoutChanged?: (args: EventData) => void;
  }

  namespace JSX {
    interface IntrinsicElements {
      /** MasonKit's scroll container. */
      scroll: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
