// function scrollToTop() {
//   $(".pagetop img").click(function () {
//     $("html, body").animate(
//       {
//         scrollTop: 0,
//       },
//       500
//     );
//   });
// }
// scroll to top

function scrollToTop() {
  var isToppage = $('#index');
  var windowHeight = window.innerHeight;
  var bodyHeight = $('body').height();

  $(window).scroll(function(){
    var scrollHeight = $(this).scrollTop();
    if (isToppage.length > 0) {
      if (windowHeight <= scrollHeight - 100) {
          $('.page_top').show();
      } else {
          $('.page_top').hide();
      }
    } else {
      if (bodyHeight >= windowHeight && scrollHeight >= 5) {
        $('.page_top').show();
      } else {
        $('.page_top').hide();
      }
    }
  });

  $(".page_top").click(function() {
      $("html, body").animate({
          scrollTop: 0
      }, 500);
  });
}

function calculateTopPagePostion() {
  var windowWidth = window.innerWidth;
  var containerWidth = 1120;
  var conditionalWidth = containerWidth + 100;

  if(windowWidth >= conditionalWidth) {
      var right = (windowWidth - conditionalWidth) / 2 - 28;
      $('.page_top').css('right', right);
  } else {
      $('.page_top').css('right', 20);
  }
}

function toggleMenu() {
  $("#header .btn_toggle").on("click", function () {
    $("#gNav").toggleClass("open");
    $(this).toggleClass("change");
  });
}
function removeMemuOnSp() {
  var windowSize = window.innerWidth;
  if ($("#gNav.open").length > 0 && windowSize > 768) {
    $("#gNav").removeClass("open");
    $(".btn_toggle").removeClass("change");
  }
}
//menu

jQuery.validator.addMethod("emailRule", function(value, element) {
  return value.match(/^[\.!#%&\-_0-9a-zA-Z\?\/\+]+\@[!#%&\-_0-9a-zA-Z]+\.[!#%&\-_0-9a-zA-Z]+/);
},'入力に誤りがあります。');

$("#form").validate({
  invalidHandler: function(form, validator) {
    var errors = validator.numberOfInvalids();
    var offsetSize = $("header").innerHeight();
    if (errors) {                    
        var firstInvalidElement = $(validator.errorList[0].element);
        $('html,body').animate({
          scrollTop: firstInvalidElement.offset().top - offsetSize
        },500);
        firstInvalidElement.focus();
    }
  },
  normalizer: function(value) {
    // Trim the value of every element
    return $.trim(value);
  },
  rules: {
    'お名前': {
      required: true
    },
    'メールアドレス': {
      required: true,
      email: true,
      emailRule: true
    },
    'お問い合せ内容': {
      required: true,
    },
    'プライバシーポリシー': {
      required: true,
    }
  },
  messages: {
    'お名前': {
      required: "未入力です。",
    },
    'メールアドレス': {
      required: "未入力です。",
      email: "入力に誤りがあります。"
    },
    'お問い合せ内容': {
      required: "未入力です。",
    },
    'プライバシーポリシー': {
      required: "個人情報保護方針にご同意ください",
    },
  },

  // エラーメッセージ出力箇所
  errorPlacement: function (error, element) {
    var name = element.attr("name");
    if (element.attr("name") === name) {
      error.appendTo($(".is_error_" + name));
    }
    if ($(".table-contact input").find(".is-error")) {
      $(".table-contact tbody tr:nth-child(2) td").css("padding-top", "12px");
      $(".table-contact tbody tr:nth-child(2) td").css("padding-bottom", "12px");
      $(".table-contact tbody tr:nth-child(3) td").css("padding-top", "12px");
      $(".table-contact tbody tr:nth-child(3) td").css("padding-bottom", "12px")
    }
  },

  errorElement: "span",
  errorClass: "is-error",
});
//form

scrollToTop();
calculateTopPagePostion();
toggleMenu();
$(window).resize(function () {
  calculateTopPagePostion();
  removeMemuOnSp();
});
var $window = $(window);
var $body = $("body");
var $html = $("html");
var $bodyHtml = $("body,html");
var winwidth = window.innerWidth;
window.addEventListener("scroll", _handleScroll, false);
function _handleScroll() {
  $("#header").css({
    left: -window.scrollX + "px",
  });
}

function updateHeader() {
  var isToppage = $('#index');
  if (isToppage.length > 0) {
      $(window).scroll(function() {
          if ($(this).scrollTop() >= 100) {
              $("#header").addClass('activer');
          } else {
              $("#header").removeClass('activer');
          }
      });
  } else {
      $("#header").addClass('activer');
  }
}
updateHeader();
// Anchor link smooth
$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();
  var offsetSize = $("header").innerHeight() + 5;
  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - offsetSize
  }, 900);
});
