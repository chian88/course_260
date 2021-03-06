$(function() {
  $('nav').on('click', 'a', function(e) {
    e.preventDefault();
    var $e = $(e.currentTarget),
        idx = $e.attr("href");

    switchPage(idx);

    history.pushState({idx : idx}, $e.text(), location.pathname + idx);
  });

  $(window).on("popstate", function(e) {
    debugger;
    var state = e.originalEvent.state;

    switchPage(state === null ? "#page_1" : state.idx);
  });

  function switchPage(idx) {
    $(".active").removeClass("active");
    $("nav a[href='" + idx + "']").addClass("active");
    $("article").hide().filter(idx).show();
  }
});