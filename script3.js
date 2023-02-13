function Method1(){
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
  
    var authorr = authors[Math.floor(Math.random() * authors.length)];
    var authorr1 = authors[Math.floor(Math.random() * authors.length)];
    var authorr2 = authors[Math.floor(Math.random() * authors.length)];
    var quotee = quotes[authorr];
    var quotee1 = quotes[authorr];
    var quotee2 = quotes[authorr];
    document.getElementById("quote").innerHTML = quotee;
  
    document.getElementById("author").innerHTML =authorr;


   
     document.getElementById("paragraph").innerHTML=quotee1;
     document.getElementById("name").innerHTML=authorr1;

     document.getElementById("quote1").innerHTML=quotee2;
 document.getElementById("Author").innerHTML=authorr2;
}

