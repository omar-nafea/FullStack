/*
=== === === === === === === === === === === === === === = ==
Variables And Concatenation Challenge ==
    ===
    === === === === === === === === === === === === === =

    [1] Create 3 Variables[Title, Desctiption, Date]
    --All In One Statement
    --Variable Name Must Be Two Words
    --Title Content Is "Elzero"
    --Description Content Is "Elzero Web School"
    --Date Content Is "25/10" [2] Create Variable Contains Div And This Div Contains
    --H3 For Title
    --P For Paragraph
    --Span For Time[3] Add This Card To Page 4 Times[4] Use Template Literals For Concatenate

Extra
    -
    Use ES6 Repeat

    const chorus = 'Because I\'m happy. ';

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "
*/

let title = "elzeroWeb",
    describtion = "elzero web school",
    date = " 25/10";

const card = `
<div class="card">
    <div class="child">
        <h2>${title}</h2>
        <p>${describtion}</p>
        <span>${date}</span>
    </div>
</div>
`
document.write(card.repeat(4));