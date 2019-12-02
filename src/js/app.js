// filter
$(function() {
  let filter = $("[data-filter]");

  filter.on("click", function(event) {
    event.preventDefault();

    let cat = $(this).data("filter");
    if (cat == "Все сайты") {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function() {
        let workCat = $(this).data("cat");
        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });

  //modal
  const modalClose = $("[data-close]");
  const modalCall = $("[data-modal]");

  modalCall.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data("modal");
    console.log(modalId);

    $(modalId).addClass("show");
    $("body").addClass("no-scroll");

    setTimeout(function() {
      $(modalId)
        .find(".modal__dialog")
        .css({ transform: "scale(1)" });
    }, 50);

    setTimeout(function() {
      $(modalId)
        .find(".modal__dialog_send")
        .css({ transform: "scale(1)" });
    }, 50);

    $("#worksSlider").slick("setPosition");
  });

  modalClose.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents(".modal");

    modalParent.find(".modal__dialog").css({ transform: "scale(0)" });
    modalParent.find(".modal__dialog_send").css({ transform: "scale(0)" });
    setTimeout(function() {
      modalParent.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 500);
  });

  $(".modal").on("click", function(event) {
    let $this = $(this);
    $this.find(".modal__dialog").css({ transform: "scale(0)" });
    $this.find(".modal__dialog_send").css({ transform: "scale(0)" });
    setTimeout(function() {
      $this.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 500);
  });

  $(".modal__dialog").on("click", function(event) {
    event.stopPropagation();
  });
  $(".modal__dialog_send").on("click", function(event) {
    event.stopPropagation();
  });

  //scroll
  $('a[data-target^="anchor"]').bind("click.smoothscroll", function() {
    let target = $(this).attr("href"),
      bl_top = $(target).offset().top - 70;
    $("body, html").animate({ scrollTop: bl_top }, 700);
    return false;
  });

  /*Slider
  ========================= */
  $("#worksSlider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });

  /*Burger
  ========================= */
  $(".header-item__burger").on("click", function(e) {
    e.preventDefault;
    $(this).toggleClass("header-item__active");
  });
});
