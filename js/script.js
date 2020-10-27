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
jQuery.validator.addMethod("phoneRule", function(value, element) {
  return value.match(/^[0-9]/);
},'未入力です。');
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
    '氏名': {
      required: true
    },
    'メールアドレス': {
      required: true,
      email: true,
      emailRule: true
    },
    'お問い合わせ内容': {
      required: true,
    },
    '電話番号': {
      required: true,
      phoneRule:true
    }
  },
  messages: {
    '氏名': {
      required: "未入力です。",
    },
    'メールアドレス': {
      required: "未入力です。",
      email: "入力に誤りがあります。"
    },
    'お問い合わせ内容': {
      required: "未入力です。",
    },
    '電話番号': {
      required: "未入力です。",
    },
  },

  // エラーメッセージ出力箇所
  errorPlacement: function (error, element) {
    var name = element.attr("name");
    if (element.attr("name") === name) {
      error.appendTo($(".is_error_" + name));
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


// Anchor link smooth
$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();
  var offsetSize = $("header").innerHeight() + 5;
  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - offsetSize
  }, 900);
});
form.addEventListener('input', () => {
  if(氏名.value.length > 0 &&
    メールアドレス.value.length > 0 && 
    電話番号.value.length > 0 && 
    お問い合わせ内容.value.length > 0) {
    submit.removeAttribute('disabled');
    submit.setAttribute('style', 'background-color: rgb(245,136,93);cursor: pointer;color: #ffffff');
  }else {
    submit.setAttribute('disabled', 'disabled');
    submit.setAttribute('style', 'background-color: rgb(175,175,175);cursor: default');
  }
})


requestForm.addEventListener('input', () => {
  if(contentRequest.value.length > 0 &&
    nameAnonymos.value.length > 0) {
    request_submit.removeAttribute('disabled');
    request_submit.setAttribute('style', 'background-color: rgb(245,136,93);cursor: pointer;color: #FFFFFF');
  }
})
