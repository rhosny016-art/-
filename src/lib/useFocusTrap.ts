import { useEffect, type RefObject } from "react";

const FOCUSABLE_SELECTOR = [
  'a[href]:not([disabled])',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

/**
 * Trap keyboard focus inside the element referenced by `ref` while `active` is
 * true. Restores focus to the previously focused element on cleanup and keeps
 * Tab/Shift+Tab cycling within the container.
 *
 * Also returns the first focusable element so callers can move focus into the
 * trap on open (see useFocusRestore for the complementary behavior).
 */
export function useFocusTrap(
  ref: RefObject<HTMLElement | null>,
  active: boolean,
): void {
  useEffect(() => {
    if (!active || !ref.current) return;

    const container = ref.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    // Move focus to the first focusable child immediately.
    const focusables = () => container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    const moveIn = () => {
      const first = focusables()[0];
      if (first) first.focus();
    };
    moveIn();

    const onKeydown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const items = Array.from(focusables());
      if (items.length === 0) return;
      const current = document.activeElement as HTMLElement | null;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey) {
        if (current === first || !container.contains(current)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (current === last || !container.contains(current)) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    container.addEventListener("keydown", onKeydown);
    return () => {
      container.removeEventListener("keydown", onKeydown);
      previouslyFocused?.focus?.();
    };
  }, [active, ref]);
}
