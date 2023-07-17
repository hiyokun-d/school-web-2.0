import { useEffect } from "react";

/**
 * Scrolls to animate an element based on intersection with the viewport.
 * @param {React.RefObject} elementRef - Reference to the element to observe.
 *
 * @param {CSSclass} animateClass - Animate class configuration object.
 * To use `animateClass`, simply pass it as an argument to the `ScrollAnimate` function.
 * If you want to animate the element, make sure to include the `animate` class from your CSS file
 * in the element's className attribute. The `animateClass` object represents the CSS class configuration
 * for animating the element.
 *
 * @example
 * Correct Usage: ScrollAnimate(..., YOUR_CSS) // correct!
 * Incorrect Usage: ScrollAnimate(..., YOUR_CSS.animate) // WRONG!
 *
 * @example
 * // To animate an element, add the `animate` class alongside any existing class names:
 * <element className={`${YOUR_CSS.animate} ...`}>CONTENT</element>
 *
 * @returns {void}
 */

export function ScrollAnimate(elementRef, animateClass) {
    useEffect(() => {
        const element = elementRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animateClass.animate);
                }
            });
        });

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [elementRef, animateClass]);
}
