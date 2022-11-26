/**
 * Toggles "done" class on <li> element
 */

//Get all LI elements
const $li = $('li')

//Click event listener
$li.click(function() {
  $( this ).toggleClass(`done`)
})

/**
 * Delete element when delete link clicked
 */

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();

  // rest here...
};

// add listener for add
