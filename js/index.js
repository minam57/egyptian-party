// * Header

const sideBarWidth = $(".side-bar").outerWidth();
$(".side-bar").css({ left: `-${sideBarWidth}px` });

$(".open").on("click", function () {
  $(".side-bar").animate({ left: "0px" });
  $(".open").addClass("opacity-0 z-n1");
});

$(".close").on("click", function () {
  $(".side-bar").animate({ left: `-${sideBarWidth}px` });
  $(".open").removeClass("opacity-0 z-n1");
});

// * Singers

$(".singers").click(function () {
  $(".singers-content").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});
$(document).ready(function () {
  $(".singers-content").hide();
  $(".para1").show();
});

// * Message

const maxLength = 100;

$(".message").on("input", function () {
  let length = $(".message").val().length;
  let final = maxLength - length;
  if (final <= 0) {
    $(".characters").html("Your Available Character Finished");
    $(".character-remain").addClass("d-none");
  } else {
    $(".characters").html(maxLength - length);
    $(".character-remain").removeClass("d-none");
  }
});

// * Count down

window.onload = function () {
  countDownToTime("10 october 2025 10:00:00");
};

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}
