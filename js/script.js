// Star rating plugin initialisation
$(".rating-block").rate();

// Changing content view
$("#switch").on("click", function(){
    if($("#switch").is(":checked")) {
        $('.doctors-list-section').removeClass('doctors-list-section--checked');
    } else {
        $('.doctors-list-section').addClass('doctors-list-section--checked');
    }
});

// Opening mobile menu
$(".btn-menu").on("click", function(){
    $('.drawer').toggleClass('drawer--active');
});