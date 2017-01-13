/* Some basic DOM functions that don't need to be in this HTML file */
function insertAfter( referenceNode, newNode )
{
    referenceNode.parentNode.insertBefore( newNode, referenceNode.nextSibling );
}
