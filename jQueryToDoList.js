/**
 * Toggles "done" class on <li> element
 */

// When an LI element is clicked,
$('li').click(function() {
  //toggle its "done" class
  $( this ).toggleClass(`done`)
})

/**
 * Delete element when delete link clicked
 */

// When a .delete A tag is clicked,
$('.delete').click(function() {
  // grab the LI that contains it
  const $unwantedItem = $(this).parent()
  // and delete it
  $unwantedItem.remove()
})

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();

  // rest here...
};

// add listener for add
