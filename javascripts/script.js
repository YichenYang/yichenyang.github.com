// ascii art by http://ascii.co.uk/art/rainbow

(function($) {
$(document).ready(function(){

  // putting lines by the pre blocks
  $("pre").each(function(){
    var pre = $(this).text().split("\n");
    var lines = new Array(pre.length+1);
    for(var i = 0; i < pre.length; i++) {
      var wrap = Math.floor(pre[i].split("").length / 70)
      if (pre[i]==""&&i==pre.length-1) {
        lines.splice(i, 1);
      } else {
        lines[i] = i+1;
        for(var j = 0; j < wrap; j++) {
          lines[i] += "\n";
        }
      }
    }
    $(this).before("<pre class='lines'>" + lines.join("\n") + "</pre>");
  });

  var headings = [];

  var collectHeaders = function(){
    headings.push({"top":$(this).offset().top - 15,"text":$(this).text()});
  }

  if($(".markdown-body h1").length > 1) $(".markdown-body h1").each(collectHeaders)
  else if($(".markdown-body h2").length > 1) $(".markdown-body h2").each(collectHeaders)
  else if($(".markdown-body h3").length > 1) $(".markdown-body h3").each(collectHeaders)

  $(window).scroll(function(){
    if(headings.length==0) return true;
    var scrolltop = $(window).scrollTop() || 0;
    if(headings[0] && scrolltop < headings[0].top) {
      $(".current-section").css({"opacity":0,"visibility":"hidden"});
      return false;
    }
    $(".current-section").css({"opacity":1,"visibility":"visible"});
    for(var i in headings) {
      if(scrolltop >= headings[i].top) {
        $(".current-section .name").text(headings[i].text);
      }
    }
  });

  $(".current-section a").click(function(){
    $(window).scrollTop(0);
    return false;
  })

  var spells = ['Hi there, \n 
    This is Yichen Yang, a passion girl that dreams to be a geek one day :) \n
    I am now a master student in Columbia University and I am looking for a entry-level software development engineer position.
    I have to say that I am enormously charmed by solving technology problems based on the knowledge I got from universities.
    And I am more than pleasant to answer any questions you may have. You can reach me through the links below!\n' , 'hi'];


  //var hour = (new Date).getHours();
  $('#spell').html(spells[0]);

  var song = [
    'Why are there so many',
    'Songs about rainbows?',
    'And what\'s on the other side',
    '',
    'Rainbows are visions',
    'But only illusions',
    'And rainbows have nothing to hide',
    '',
    'So we\'ve been told',
    'And some choose to believe it',
    'I know they\'re wrong wait and see',
    '',
    'Someday we\'ll find it',
    'The rainbow connection',
    'The lovers, the dreamers and me',
    '',
    '',
    '',
    "                   \\       \\      `      /         /",
    "                                              '",
    "             \\      `    \\     `     '    /     /   `   '",
    "     \                       .  *  *  *  *  *  .     /",
    // holy shit. WHAT is going on??
    "          `     \\    `    *  *  *  *  *  *  *  *  *       /",
    "    \\                  * * * * * * * * * * * * * * *  '",
    "        \\     `     @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @   /",
    " \\  `             * * * * *             * * * * * * * * *   '  /",
    "            `   @ @ @ @ *                 '@@@@@@@@@@@@@@@",
    // wtf???
    "       \\      * * * * *                     * * * * * * * *  '",
    "   `        @ @ @ @ @        Come            @@@@@@@@@@@@@@@    /",
    "           * * * **      sit under the         * * * * * * * *",
    " \\   `   @ @ @ @ @      rainbow & 'sides       @@@@@@@@@@@@@@@  '",
    "       * * * * *         the Pot of Gold        * * * * * * * * /",
    "  `   @ @ @ @ @             with me.            @@@@@@@@@@@@@@@ .",
    "     * * * * *                                  * * * * * * * *.",
    // holy shit
    " \\  @ @ @ @ @                                   @@@@@@@@@@@@@@@@",
    "   * * * * *      \\---,                           `  `    '  '",
    "  @ @ @ @ @  ____/' \\  /                        `   \\   @   / '",
    " * * * * * /`  _ .~ ./\\                           `   @ @ @  ' '",
    "   __    /  \\ \\   ^ '                           ` \\ `@_@_@_@'/ '",
    "  (x \\ ( \\ _  \\_\\  \\_\\                             (         )",
    "     \\ \\/ / \\/ `-'__`-'         _       `'          \ $ $ $ /",
    // how could one programmer be so powerful?
    "  - - ~'- - - - (   @  )- --`'-   -  -    - -  - `'- --  ------",
    "          -    --``~~~''--          --            -",
    "                              -            ---        - -",
    "     --_-   ___  -      ---          --                  ---",
    "                   --             -       - -"

/*
    '',
    'Who said that ev\'ry wish',
    'Would be heard and answered',
    'When wished on the morning star',
    '',
    'Somebody thought of that',
    'And someone believed it',
    'Look what it\'s done so far',
    '',
    'What\'s so amazing',
    'That keeps us star-gazing?',
    'And what do we think we might see',
    '',
    'Someday we\'ll find it',
    'The rainbow connection',
    'The lovers, the dreamers and me'
*/
  ];

  var line = 0;

  var sing = function () {
    console.log(song[line%song.length]);
    line++;
    setTimeout(sing, 1500);
  };

  setTimeout(sing, 10000);

});
})(jQuery)
