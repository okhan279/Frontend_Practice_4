This repository contains HTML, CSS and JavaScript source codes to mimic a restaurant website, Bar Gansa Restaurant.

Please note: Some elements were not possible to copy, such as font-family as the Oswald text has to be paid for. However, the purpose of this is to show the current extent of my knowledge of HTML and CSS principles.

My reason for choosing to mimic this website is that it was a good challenge for me and seemed like a fantastic learning opportunity with regards to HTML and CSS, which proved to be correct.

The website this code is based on is www.bargansa.co.uk/

********************************************************************
Some points to note about this source code:
1. In the 'Home' menu, I was unable to obtain the two GIFs (top of the page and next to 'Flmenco Sundays' lower down on the homepage). So I used a still image instead.
2. The 'Find a Table' in the 'Reservation' section leads to an external URL in the real website, I did not include this link in the URL.
3. The 'Book Now' under the 'Brunch', 'Friday Nights Live' and 'Flemenco Sundays' sections lead to an external URL in the main website, again, I did not include these URLs in my source code.
4. The Facebook and Snapchat links in all the sections do not link to their respective URLs, they link back to the top of the current page.
5. In 'menu.html' and 'wines.html' the food elements have been replicated for the mobile version, so you will find the elements twice. This is becuase the number of dots between the name and price are different, so a mobile version of those elements had to be created.
6. Certain elements in the 'menu.html' and 'wines.html' have classes labelled between a-z. When all the letters are used up, I switch to a1, a2, a3, etc...
********************************************************************

NOTES:
- I'm using 'margin-x' in the responsive design becuase the 'position: relative' is not working for whatever reason.
  -'About Us' exit button for the menu:
  Why is it that if I use the class 'exit-button', the element dissappears even if the CSS properties are empty? If I use any other class
  it works fine.
- In normal design, when moving the 'container-3-hr' element up or down, it alters the whole container. Why is that?
- In 'about_us.css' in 'nav ul li a' when using 'margin-top/margin-bottom', only the spaces between the achor text is manipulated. What should be happening is all the texts move up or down. WHY?!!!

IMPORTANT: - If I wish to change an element ONLY in firefox, I type the following:
'@-moz-document url-prefix() { [code here] }'. This can be seen in the 'main.css' file where the images in firefox were skewed, whereas in Chrome were perfectly fine.

To edit the placeholder in the <input> tag in the 'footer':
::placeholder { font-size: 20px; }

To do:
-The 'form' in menu.html in firefox needs to be cleaned up as elements are overlapping. DONE!
-In 'Menu', look at the class 'container-4-p' and change the name.
-In 'menu.html' in iPad resolution, cancel the transition property in the top menu. At the moment if a person hovers over the menu, the transition property, the background colour stays to white while the text stays black. I need learn how to cancel the orginal transition rather than alter it.
-In 'wines.css' change the borders of the menu at the top. At the moment the 'About Us' border is completely skewed and needs fixing. DONE!
-For all: Check the 'border-right' length of the menu between Chrome and Firefox. The lengths seem different.

- In 'main.html':
 1. Add email icon to the <input> tag.
 2. Expand the borders of the <li> objects at the top of the page.
 3. Sort the boxes in the 'reservation' area.

- In 'menu'html':
1. Find out why the page is scrolling sideways in laptop resolution.
2. Add letter spacing to the <span> english descriptions. DONE!

-In 'wines.html':
1. In IPAD: The 'position: fixed' is not working on the menu. Fix that error. DONE! (This is because there was a 'position: relative' in the <ul> tag but I did not add the 'position: fixed').
2. In IPHONE X: The whole webpage has squeezed in. WHY?????? I think it is because I need to adjust the <input> element in the footer. DONE!

-In 'about_us.html':

1. In IPAD: Fix the 'position: fixed' for the menu.
2. In IPHONE X: Adjust the position of the elements as they are skewed to oneside.
3. Fix position of the 'ham' menu.

index.html all resolutions are complete and fully done in Firefox.
menu.html all resolutions are complete and fully done in Firefox.

Checks:
index.html:
  laptop resolution all fine.
  ipad resolution all fine.

  For tomorrow: Located the 'x' button for main.html in iphone x resolution.