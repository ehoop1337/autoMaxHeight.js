/**
* autoMaxHeight.js
* The function finds the element with the longest height 
* and brings all other elements to this height parameter
* @author Ruslan Sayfutdinov   https://github.com/ehoop1337/autoMaxHeight.js
* @param1 {string} selector    To which DOM element do we apply the function
*/

function autoMaxHeight(selector) {
    const items = document.querySelectorAll(selector),
        itemsCount = items.length;
    let maxHeight = 0;
    for (let i = 0; i < itemsCount; i++) {
        let itemHeight = parseInt(getComputedStyle(items[i], '').height);
        if (maxHeight < itemHeight) { maxHeight = itemHeight }
    }
    for (let i = 0; i < itemsCount; i++) {
        items[i].style.height = maxHeight + 'px';
    }
}