function genereatBox(){
    var quotes = {
      "—Theodore Zeldin":
        "A dream is what makes people love life even when it is painful",
      "—Nicole Reed":
        "Sometimes the bad things that happen in our lives put us directly on the path to the best things that will ever happen to us.",
      "—Muhammad Ali":
        "Don’t quit. Suffer now and live the rest of your life as a champion.",
      "—Pele":
        "The more difficult the victory, the greater the happiness in winning.",
        "-Kanaram": "Mistakes are proof that you’re trying.",
        "-Nelson Mandela": "The greatest glory in living lies not in never falling, but in rising every time we fall. "
    };
  
    var authors = Object.keys(quotes);
  
    var author = authors[Math.floor(Math.random() * authors.length)];
  
  
    var quote = quotes[author];

  
    document.getElementById("quote").innerHTML = quote;
  
    document.getElementById("author").innerHTML = author;
}

function geneReat(){
  var textAuto = {
  "--John Wooden" : "If you want to achieve greatness stop asking for permission.",
  "--Anonymous" : "Things work out best for those who make the best of how things work out.", 
   " --Jim Rohn" :  "To live a creative life, we must lose our fear of being wrong.", 
  "--Walt Disney" :  "If you are not willing to risk the usual you will have to settle for the ordinary.",
   "--pele" : "Trust because you are willing to accept the risk, not because it's safe or certain."
  }

var author= Object.keys(textAuto);

var random =author[Math.floor(Math.random()*author.length)];


var quote=textAuto[random];


document.getElementById("Quote").innerHTML=quote;
document.getElementById("Author").innerHTML=random;
}

function Genereat(){
  var functionData = {
"paragraph(1)" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus illum saepe, minima sequi pariatur incidunt aspernatur cupiditate rem. Nesciunt eum ipsam non dolorem quos. Molestias, repellendus voluptate ipsa ex animi tempore rem neque quisquam soluta laudantium et ipsam? Vero repellendus optio rerum cupiditate soluta ullam, saepe deserunt quia alias molestias.",
"paragraph(2)" :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorum, iste consequatur veniam vel quos quo nam ducimus, aspernatur autem magnam illo error. Minima vero voluptatibus sint cumque ea, alias nulla atque tempora accusamus voluptate qui optio doloremque fuga odit autem harum dolores porro aspernatur officia. Sunt saepe sint vero." ,
"paragraph(3)" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur aliquam ut, dolorem fuga voluptatem fugit ullam quae nesciunt quos in perferendis voluptatibus perspiciatis inventore, quia facilis, blanditiis nihil voluptatum dolores obcaecati magni velit asperiores sit eum. Numquam excepturi beatae rerum temporibus, alias, non magnam, exercitationem vero consequatur aut animi.<"                
  }
  var authors=Object.keys(functionData);
  var random=authors[Math.floor(Math.random()*authors.length)];
  
  var Quote=functionData[random];
  
document.getElementById("name").innerHTML=random;
document.getElementById("paragraph").innerHTML=Quote;

}
function Genereat3(){
  Genereat();
  geneReat();
  genereat();
}