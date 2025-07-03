# css notes on some properties 

### Display

##### Block:

- take full width if you didn't specify it
- add line break
- respect padding, margin, width, height

##### Inline:

- take the width of it's content
- doesn't add line break, allow other element to be next to it
- doesn't respect width and height
- respect padding and margin but from left and right only

##### Inline-Block:

- take the width of it's content
- doesn't add line break, allow other element to be next to it
- respect padding, margin, width, height

##### Overflow
-> overflow-x
-> overflow-y
1) hidden
2) auto

### Nesting

- div.child{select the element is div and has child}
- .core.more{select the element has these two classes}
- div.child{select the .child element is in div}
- .parent.child{select the .child element is in .parent element}

### Word spacing

- `letter-spacing : 5px;`
- `word-spacing: 5px;`
- `white-space: nowrap; don't wrap, overflow text from box`
- `line-height: 1.6 or 160%;`
- `word-break: break; // break word in box don't overflow`
- `text-overflow: ellipsis; // put ... instead of overflow text`

### css units

- 1 em => is 1 time of parent font-size 
- 1 rem => is 1 time of HTML element font-size
- vw is viewport width of web page ( `1 vw` is `1%` the width of viewport of page if the page's width is `900px` that means `2` vw is `2 * (900 / 100) = 18`)
- Calc((100% - 50px) / 5);



### positions

- static: default value, you can't use top or right or anything with it
- relative: it moves the element left of top or whatever according to it position 
- absolute: it moves the element at any position according to it's parent position, the default parent is body but if you want to make the parent some div you have to set position of that div to relative
- fixed : it fix the position when scrolling
- sticky: the element at it's normal position but when scrolling it stick at (top or buttom or left or right ) by x px

### pseudo classes

- :hover
- :visited
- :focus
- :checked
- :active
- :empty

### pseudo elements

- ::first-letter
- ::first-line
- ::selection
- ::after
- ::before


### Transition

| property | duration | timing-function | delay |
|:--------:|:--------:|:---------------:|:-----:|
| width	   | 1.5s     | ease            |  .1s  |
| all      | 2s       | linear          | .5s   |

   		 
you can seperate properties by `,` comma
```css
transition: width 2s, margin 1s, color .5s  
transition: all 2s .5s linear
```


### margin collapse

two divs vertical to each others if margin buttom to blue is 30 and margin top to red is 20 the margin between them isn't 50 but its 30 because margin collapse to good of the bigger
- 🟦 <= margin-buttom: 30px
margin here is 30px
- 🟥 <= margin-top: 20px
- only vertical margins collapse
- larger margin rule the margin between them
- the collapse happens if 2 element right next each others (nothing between them)
- Nesting doesn't prevent collapse


### flex-box

```css
display: flex
// flex-direction: row
// flex-wrap: nowrap
=> shorthand
// flex-direction    flex-wrap
flex-flow: row  nowrap
justify-comtent: flex-start
 align-items: flex-start
align-content: flex-start
// items properties
flex-grow: 0
flex-shrink: 1
flex-basis: auto
=> shorthand
// grow   shrink   basis
flex: 0  1  auto;
order: 1
align-self: flex-start
pointer-event: none // delete the event of the element whether its clicking or hover 
```

### grid

```css
display: grid;
grid-template-columns and grid-template-rows
: 25% 25% 25% 25% or repeat(4, 25%)
: 25% 200px 100px auto
: repeat(4, auto)
: 100px, repeat(2, auto), 25%
: 100px, 1fr, 2fr, 1fr
=> auto is shy, fraction is greedy
: repeat(2, auto), repeat(2, 1fr)
```
the two column of auto will fit content and the other two that take 1fr will take the rest of space in parent container


justify-content: flex-start
align-content: flex-start
=> in these two properties the auto will only fit content
and not grow because you specify the content by justify and align 

```css
grid-template-areas:  "logo nav nav nav"   "content content content   sidebar"   "foot  foot  foot  foot";
footer{
  grid-area: foot
}
aside{
  grid-area: sidebar
}
section{
  grid-area: content
}
nav{
  grid-area: nav
}
h2{
  grid-area: logo
}
```
##### child properties

```css
grid-column: 1 / 5 or you can wtite (span   4)
/* is a shorthand for grid-column-start and end its value means start form column 1 to 4 the end not included */
grid-column: 3 / span 4
/* that means  start from 3rd column and take 4 columns the same concept applied on rows */
grid-area: grid-row-start  grid-column start  grid-row-end  grid-column-end
grid-area: 2 / 3 / 5 / 8
that means
grid-row-start: 2 // start this element from 2nd row
grid-column start: 3 // and start its column dir from 3rd column
grid-row-end: 5 // finish this element at 5th row (the end (5) not included) 
grid-column-end: 8  finish this element at 8th column (the end (8) not included) 
```
to make elements responsive
```css
grid-template-column: repeat(auto-fill, minmax(200px, 1fr)
```


Transform:
- scalex, scaley or shorthand scale(2, 3)
- rotate(90deg) or other units like (rad) or (turn)
- translate(x, y) units can be by px or %
=> transform: tarnslate(-50%, -50%)
- skew(x, y)units can be  rad or deg or turn
- matrix(scalex,skewy,  skewX, scaleY, translateX ,translateY)

Animation: 
make spin
```css
element{
	animation-name: spin;
	animation-duration: 1s;
	animation-iteration-count: ( infenite / number) ;
	animation-timing-function: linear;
	animation-direction: (reverse  / alternatre  / anternate-reverse)
	animation-delay: 2s; (if its negative value ( -1s) it means minus this one sec from the duration time
	animation-fil-mode: (forward- both - backward); take last mode
	animation-play-state: running;
/* => shorthand */
	animation: spin  3s  linear  2s infinite   reverse
}
@keyframes  spin{
0%{
	transform: rotate(0deg);
}
100%{
	transform: rotate(360deg);
}}
```
### CSS Selectores

- * = all elements
- element 
- .className
- #id-name
- .classOne.classTwo => element has these two classes it can be  div.class-name
- element   otherElement => otherElement is in element
- .parent  .child (it can be [.className  div] )child in parent
- .parent  > .child  => it's direct child (shouldn't be elements between them
- element + otherElement => (div + p) that means
- get secend element (p) the p element that is directly after div
- element ~ otherElements => (p ~ div) that means siblings
- ns all divs that is siblng ( means at same level not child to siblings)
- attribute (title / data-set / name element[attribute] and you can specify attr to value => element[title="header"] or input[type="radio"]
- [Attribute~=value]  => contains a word (sperate)
- [Attribute*=value] => contains a string (sub string in whole word)
- [Attribute^=value] => start with string
- element:first-child => the element that is first child to his parent
- element: last-child => the element thata is last child to his parent
- element:first-of-type
- element:last-of-type
- element: only-child
- element: only-of-type
- element: not(selector) every element exept selector
- element: nth-child => if div:nth-child(3) means select the 3rd child of div element and the value can be :nth-child(even or odd)
- element:nth-last-child() => it count from last child
- :nth-of-type(number)
- :nth-of-last-type()
- :root
- :checked
- :empty
(disapled -required - selection - focus - placeholder)


### Responsive Designing and Media queries

`@media` the value after that can be

- print => printing page on paper
- screen  => for mobile screen 
- min-width => means apply these style from min width x 
- max-width => means apply these styles until max width x

and you can very specify and write from x to y example
```css
@media (min-width: 768px) and (max-width: 991px){
	.container{
	font-size: 16px;
	}
}
```

this property (font-size on container) only applies if screen is more than 768px to less than 991px.