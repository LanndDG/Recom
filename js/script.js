
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

var $window = $(window);
var $body = $("body");
var $html = $("html");
var $bodyHtml = $("body,html");
var winwidth = window.innerWidth;

$(document).on('click', 'a[href^="*"]', function(event) {
  event.preventDefault();
  alert('送信いたしました！');
});
window.addEventListener('load', () => {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  if (page === 'company.html') {
    form.addEventListener('input', () => {
      if(氏名.value.length > 0 &&
        メールアドレス.value.length > 0 && 
        電話番号.value.length > 0 && 
        お問い合わせ内容.value.length > 0) {
        submit.removeAttribute('disabled');
        submit.setAttribute('style', 'background-color: rgb(245,136,93);cursor: pointer;color: #ffffff');
      }else {
        submit.setAttribute('disabled', 'disabled');
        submit.setAttribute('style', 'background-color: #cbcbcb;cursor: default');
      }
    })
  }
  if (page === 'detail.html') {
    var numItems = $('.request_box').length;
    $('.number').each(function(){
      if(numItems>0)
      {
          $(this).html(numItems);
      }
      numItems--;
    });
    formRating.addEventListener('input', () => {
      const checkboxes = document.querySelectorAll('input[name="rating"]:checked');
      if(コメント.value.length > 0 &&
        匿名可.value.length > 0 && 
        checkboxes.length > 0) {
        submit.removeAttribute('disabled');
        submit.setAttribute('style', 'background-color: rgb(245,136,93);cursor: pointer;color: #ffffff');
      }else {
        submit.setAttribute('disabled', 'disabled');
        submit.setAttribute('style', 'background-color: #cbcbcb;cursor: default');
      }
    })
  }
  if (page === 'request.html') {
    requestForm.addEventListener('input', () => {
      if(contentRequest.value.length > 0 &&
        nameAnonymos.value.length > 0) {
          requestSubmit.removeAttribute('disabled');
          requestSubmit.setAttribute('style', 'background-color: rgb(245,136,93);cursor: pointer;color: #FFFFFF');
      }else {
        requestSubmit.setAttribute('disabled', 'disabled');
        requestSubmit.setAttribute('style', 'background-color: #cbcbcb;cursor: default');
      }
    })
  }
})

