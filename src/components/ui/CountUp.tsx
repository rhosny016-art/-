import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

type CountUpProps = {
  /** Numeric value to count towards (e.g. 4.9, 300, 250). */
  value: number;
  /** Digits after the decimal point. Defaults to 0. */
  decimals?: number;
  /** Optional prefix, e.g. "+" or "-". Rendered LTR. */
  prefix?: string;
  /** Optional suffix, e.g. "%" or "K". */
  suffix?: string;
  /** Animation duration in seconds. Defaults to 1.6. */
  duration?: number;
  /** Extra Tailwind classes for the wrapper. */
  className?: string;
};

/**
 * Animated number that counts from 0 to `value` when scrolled into view.
 * Respects prefers-reduced-motion by rendering the final value immediately.
 */
export function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
}: CountUpProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => {
    const fixed = latest.toFixed(decimals);
    return `${prefix}${Number(fixed).toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`;
  });
  const [display, setDisplay] = useState(
    `${prefix}${(0).toFixed(decimals)}${suffix}`,
  );

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => setDisplay(latest));
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    if (reduceMotion || !inView) {
      setDisplay(`${prefix}${value.toFixed(decimals)}${suffix}`);
      return;
    }
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, decimals, prefix, suffix, duration, reduceMotion]);

  return (
    <span ref={ref} className={className} dir="ltr">
      {display}
    </span>
  );
}
