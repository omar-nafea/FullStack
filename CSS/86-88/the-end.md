Selector	Example	    Example description

element	         p or div	    Selects all p elements
*	           ex:*     	Selects all elements
#id	        #firstname	    Selects the element with id="firstname"
.class	    .intro	    Selects all elements with class="intro"

.class1.class2	    .name1.name2	Selects all elements with both name1 and name2 set within its class attribute
element.class	         p.intro	Selects all <p> elements with class="intro"
element,element	         div, p	    Selects all <div> elements and all <p> elements
element element	         div p  	Selects all <p> elements inside <div> elements
element>element        	 div > p	Selects all <p> elements where the parent is a <div> element
element+element	         div + p	Selects the first <p> element that is placed immediately after <div> elements
element1~element2	     p ~ ul	    Selects every <ul> element that is preceded by a <p> element

[attribute]	        [target]	Selects all elements with a target attribute
[attribute=value]	   [target=_blank]	    Selects all elements with target="_blank"
[attribute~=value]	    [title~=flower]	    Selects all elements with a title attribute containing the word "flower"
[attribute|=value]	    [lang|=en]	    Selects all elements with a lang attribute value equal to "en" or starting with "en-"
[attribute^=value]	    a[href^="https"]	Selects every <a> element whose href attribute value begins with "https"
[attribute$=value]	    a[href$=".pdf"]	    Selects every <a> element whose href attribute value ends with "
[attribute*=value]	    a[href*="w3schools"]	Selects every <a> element whose href attribute value contains the substring "w3schools"

:first-child	p:first-child	  Selects every <p> element that is the first child of its parent
::first-letter	p::first-letter	  Selects the first letter of every <p> element
::first-line	p::first-line	  Selects the first line of every <p> element
:first-of-type	p:first-of-type	  Selects every <p> element that is the first <p> element of its parent
:last-child	    p:last-child	  Selects every <p> element that is the last child of its parent
:last-of-type	p:last-of-type    Selects every <p> element that is the last <p> element of its parent

:not(selector)	:not(p)	Selects every element that is not a <p> element

:nth-child(n)	     p:nth-child(2)	    Selects every <p> element that is the second child of its parent
:nth-last-child(n)	    p:nth-last-child(2)	Selects every <p> element that is the second child of its parent, counting from the last child
:nth-last-of-type(n)	p:nth-last-of-type(2)	Selects every <p> element that is the second <p> element of its parent, counting from the last child
:nth-of-type(n)	     p:nth-of-type(2)	    Selects every <p> element that is the second <p> element of its parent
:only-of-type	     p:only-of-type	    Selects every <p> element that is the only <p> element of its parent
:only-child	         p:only-child	    Selects every <p> element that is the only child of its parent  