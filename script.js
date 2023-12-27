/**
 * Gets reference to page content div, creates new h1 element, sets text content
 * of h1, and appends h1 to page content div.
 */

let pageContentChild = document.createElement('h1');
pageContentChild.textContent = 'Learning Enough JavaScript to be Dangerous';

let pageContent = document.getElementById('page-content');
pageContent.appendChild(pageContentChild);
