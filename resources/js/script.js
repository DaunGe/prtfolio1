/******************************************
                SERVICES
******************************************/



/* =========================================
 *  WOW js
 *  =======================================*/


/* using short form ready method */
$(function() {
  new WOW().init();
});


/* =========================================
   							easypiechart
  =======================================*/


$('.chart').easyPieChart({
	scaleColor: false,
	lineWidth: 10,
	lineCap: 'butt',
	barColor: '#3DFAFF',
	trackColor:	"#646b70",
	size: 160,
	animate: 5000
});



/* =========================================
   							WORK
  =======================================*/

  /* Active ISOTOPE */

  $(".isotope-main").isotope( {
    itemSelector: ".item",
    layoutMode: "fitRows"
  });

  /* ISOTOPE Click Function */
  $(".isotope-nav ul li").click(function() {
    $('.isotope-nav ul li').removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    $(".isotope-main").isotope( {
      filter: selector
    });
    return false;
  });
