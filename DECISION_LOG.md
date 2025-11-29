o Where do you coerce mins to a number and why there?

o How did you implement the debounce and why did you choose that
approach?
 - I used lodash.debounce to debounce the function and improve performance by delaying the execution of the function until a certain amount of time has passed without any additional calls. This helps to prevent unnecessary function calls and improves overall performance. I like this approach because it allows me to control the frequency of function calls and optimize performance.
 
o If two sessions share the same popularity, what guarantees their relative order?
 - If two sessions have the same popularity, their relative order is preserved by using an originalIndex value. Each session is tagged with its position before sorting, and when popularity ties occur, the sorter compares these indexes. This ensures that items with equal popularity stay in the same order they originally appeared, giving you a stable and predictable sort across all browsers.

o What’s your approach to accessibility for the toggle?
 - I improved the accessibility of the toggle by turning it into a proper toggle button using aria-pressed so screen readers know whether it’s active (ascending or descending). I also added a dynamic aria-label that clearly announces what the button does and the current sort direction. Finally, I included aria-sort to expose the sorting state and added strong keyboard focus styles to make the toggle easy to see and operate without a mouse.
