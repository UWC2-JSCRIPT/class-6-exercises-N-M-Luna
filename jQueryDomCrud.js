$( document ).ready( function() {
    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    const $ctaElement = $('<a>')
        .text('Buy now!')
        .attr('id', 'cta')
    $('main').append($ctaElement) 

    // Access (read) the data-color attribute of the <img>,
    // log to the console
    const $img = $(`img`)
    const imgColor = $img.data(`color`)
    console.log(imgColor)

    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
    const $li = $('li')
    const thirdLI = $li[2]
    thirdLI.setAttribute('class', 'highlight')

    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    const $paragraphs = $('p')
    $paragraphs.remove()

    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    $ctaElement.click(function() {
        const $newText = $('<p>')
            .text('Added to cart')
        $('main').append($newText)
        $(this).remove()
    })
    /* This only replaces the text inside the #cta element.
    $ctaElement.click(function() {
        $(this).text('Added to cart')
    })*/
})