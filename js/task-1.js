const liElem = document.querySelectorAll('li.item');
console.log('Number of categories:', liElem.length);

liElem.forEach((item) => {
    console.log('Category:', item.firstElementChild.textContent.trim());
    console.log('Elements:', item.lastElementChild.children.length);
})