/**
 * Entry point for users deleting tasks.
 * It is called each time the user clicks "delete" icon button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */
export const deleteTask = (event) => {
  const item = event.target;
  // DELETE ITEM
  if (item.classList[0] === 'delete_btn') {
    const deleteItem = item.parentElement;
    // ANIMATION TRANSITION
    deleteItem.classList.add('fall');
    deleteItem.classList.remove('transitionend');
  }
};
