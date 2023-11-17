$(document).ready(function () {
  // modal
  const $imgModal = $("#imgModal");
  const $modalImg = $("#modalImg");
  const $images = $(".img-gallery img");
  const $close = $(".close");

  $images.on("click", function () {
    $imgModal.css("display", "flex");
    $modalImg.attr("src", $(this).attr("src"));
  });

  $close.on("click", function () {
    $imgModal.css("display", "none");
  });

  $(window).on("click", function (event) {
    if (event.target === $imgModal[0]) {
      $imgModal.css("display", "none");
    }
  });

  // Handle scroll event
  $(window).scroll(function () {
    var scrollPosition = $(document).scrollTop();
    // Check each section and update the active link
    $('section').each(function () {
      var sectionTop = $(this).offset().top - 400;
      var sectionId = $(this).attr('id');

      if (scrollPosition >= sectionTop) {
        $('.nav-link').removeClass('active');

        // Add active class to the link corresponding to the current section
        $('a[href="#' + sectionId + '"]').addClass('active');
      }
    });
  });

  // sroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(entry.target).addClass("show");
        observer.unobserve(entry.target);
      } else {
        $(entry.target).removeClass("show");
      }
    });
  });

  const $hiddenSections = $(".hidden");
  $hiddenSections.each(function () {
    observer.observe(this);
  });

  // loading
  const $loading = $("#loading");
  const $section1 = $(".section1");

  const imageUrl = "assets/img.webp";
  const image = new Image();

  $loading.css("display", "flex");

  image.onload = function () {
    $section1.css("background-image", `url(${imageUrl})`);
    $loading.css("display", "none");
  };

  image.src = imageUrl;
});




