/**
 * Entry point for users marking tasks as complete.
 * It is called each time the user clicks the "check" icon button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */
export const checkTask = (event) => {
  const item = event.target;
  // COMPLETE ITEM
  if (item.classList[0] === 'complete_btn') {
    const checkItem = item.parentElement;
    checkItem.classList.toggle('completedItem');
  }
};
