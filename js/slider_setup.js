(function () {
	var html, imgMeta;

	imgMeta = [
    { img : 'jumbo.jpg', author : "Mark Meunch", title : "100 Years of National Parks: The South", dates : 'April 5 - June 26, 2006'},
    { img : 'bear.png', author : "Jennifer MaHarry", title : "Photoactivism: The work of Jennifer MaHarry", dates : " April 5, 2016 – June 5, 2016"},
    { img : 'mars.jpg', author : "xRez Studio", title : "From Earth to Mars: A 3D Journey", dates : "April 5, 2016 - June 26, 2016"}
  ];

	html = "";

	imgMeta.forEach(function(d){
		html += "<li>";
        html += "<div class='row slider max-width' style='background:url(\"/img/"+d.img+"\") center center no-repeat; background-size: 100%;'>";
        html += "</div>";  // end row slider
        html += "<div class='row jumbo-subheadings max-width'>";
        html += "<div class='columns six'>";
        html += "<h3 id='slider-author' class='jumbo-h3'>"+d.author+"</h3>";
        html += "</div>"; // end columns six
        html += "<div class='columns six'>";
        html += "<p id='slider-title' class='jumbo-subheading'>"+d.title+"</p>";
        html += "<p id='slider-dates' class='jumbo-subheading'>"+d.dates+"</p>";
        html += "</div>";  // end columns six
        html += "</div>";  // end jumbo-subheadings
        html += "</li>";
	});

  $('#slider ul').html(html);

})();