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
  // Create the description element,
  const text = $('input').val();
  const $description = $('<span>')
    .text(text)

  // and the delete element.
  const $deleteBtn = $('<a>')
    .text('Delete') 
    .addClass('delete')

  // Build the new element.
  const $newItem = $('<li>')
    .append($description)
    .append($deleteBtn)

  // Place it at the end of the UL tag
  $( 'ul' ).append( $newItem )
};

// Add listener for .add-item A tag
$('.add-item').click(addListItem)