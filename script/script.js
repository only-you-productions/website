jQuery(function($) {

  var formElement = $("form.contact-form")
      successElement = $('.contact-send-success');

  formElement.submit(function() {

    var email = $("form.contact-form .email");
    var name = $("form.contact-form .name");
    var message = $("form.contact-form .message");

    disableForm();

    $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
            'key': 'm61zGQpGJEpqY7m_ZDHiXQ',
            'message': {
                'from_email': email.val(),
                'from_name': name.val(),
                'headers': {
                    'Reply-To': email.val()
                },
                'subject': 'Website Contact Form Submission',
                'text': message.val(),
                'to': [
                {
                    'email': 'hello@onlyyouproductions.com',
                    'name': 'Only You Productions',
                    'type': 'to'
                }]
            }
        }
    })
    .done(function(response) {
      if (response[0].status == 'sent') {
        success();
      }
      else {
        error();
      }
    })
    .fail(function(response) {
        alert('Error sending message.');
    });
    return false; // prevent page refresh
  });

  function disableForm() {
    formElement.addClass('sending');
    formElement.find(':input').prop("disabled", true);
  }
  function enableForm() {
    formElement.removeClass('sending');
    formElement.find(':input').prop("disabled", false);
  }

  function success() {
    successElement.show();
    formElement.hide();
  }

  function error() {
    enableForm();
    alert('Sorry! Es gab einen Fehler beim versenden der Nachricht.');
  }








  /**
   * Smooth scrolling
   */
  $('a[href*=#]:not([href=#])').click(function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500, 'swing', function() {
        });
        window.history.pushState(null, null, hash);
        updateActiveLink();

        return false;
      }

    }
  });


  function updateActiveLink() {
    hash = window.location.hash;
    $('body > header nav a').removeClass('active');

    var link = $('body > header nav a[href="' + hash + '"]');

    if (hash != '#top' && link.length) {
      link.addClass('active');
    }

  }
  updateActiveLink();


});


