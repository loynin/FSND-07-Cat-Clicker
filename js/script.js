//Here's your API Key for the Article Search API: ec202935015943daa3b5e015e4d9f8e9
/* 
$('#cat1-click').click(function(e) {
  //the element has been clicked... do stuff here
  var $cat1_textbox = $('#cat1-count');
  var cat1_count = $('#cat1-count').val();
  var cat1_newCount = Number(cat1_count) + 1;
  

  $cat1_textbox.val(cat1_newCount);

});

$('#cat2-click').click(function(e) {
  //the element has been clicked... do stuff here
  var $cat2_textbox = $('#cat2-count');
  var cat2_count = $('#cat2-count').val();
  var cat2_newCount = Number(cat2_count) + 1;
  

  $cat2_textbox.val(cat2_newCount);

}); */

// clear the screen for testing
document.body.innerHTML = '';


var catnames = ['toto','hello','akii','susi','jumpy'];
var catpics = ['mycat.jpg','mycat2.jpg','mycat3.jpg','mycat4.jpg','mycat5.jpg'];
//var num_clicks = [0,0,0,0,0];

// Let's loop over the numbers in our array
for (var i = 0; i < catnames.length; i++) {

    // This is the number we're on...
    var catname = catnames[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = catname;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(catnameCopy) {
        return function() {
            alert(catnameCopy);
        };
    })(catname));

    document.body.appendChild(elem);
};
