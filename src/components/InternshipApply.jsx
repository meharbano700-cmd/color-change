import { useEffect, useRef, useState } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { internshipApplyFormUrl, isOpenInternship } from "@/lib/internships";
import { cn } from "@/lib/utils";

/**
 * The "Apply Now" button used on the Home page and the Apply page.
 *
 *  - Open internships (the 6): opens the Google Form in a new tab.
 *  - Every other internship: shows a tiny "Coming soon" chip next to the button
 *    that disappears on its own after ~2 seconds. No dialog, no overlay.
 *
 * chipPlacement: "side" puts the chip to the right of the button (compact
 * buttons), "top" puts it just above (full-width buttons).
 */
export function ApplyButton({ title, className, fullWidth = false, withArrow = false, chipPlacement = "side" }) {
  const [chip, setChip] = useState(0); // 0 = hidden, otherwise a counter so a repeat click restarts the animation
  const timer = useRef(null);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const wrapperClass = cn("relative", fullWidth ? "flex w-full" : "inline-flex", className);
  const buttonClass = fullWidth ? "w-full" : undefined;
  const arrow = withArrow ? <ArrowRight /> : null;

  if (isOpenInternship(title)) {
    return <span className={wrapperClass}>
        <Button asChild variant="brand" size="sm" className={buttonClass}>
          <a href={internshipApplyFormUrl} target="_blank" rel="noreferrer">Apply Now {arrow}</a>
        </Button>
      </span>;
  }

  function showChip() {
    window.clearTimeout(timer.current);
    setChip(count => count + 1);
    timer.current = window.setTimeout(() => setChip(0), 1900);
  }

  return <span className={wrapperClass}>
      <Button type="button" variant="brand" size="sm" className={buttonClass} onClick={showChip}>
        Apply Now {arrow}
      </Button>
      {chip > 0 && <span key={chip} role="status" className={`coming-soon-chip coming-soon-chip-${chipPlacement}`}>
          <Clock aria-hidden="true" /> Coming soon
        </span>}
    </span>;
}
