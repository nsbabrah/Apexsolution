$(document).ready(function() {
    // Generate a simple captcha
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));
    var $frm = $('#basicBootstrapForm');
    $frm.formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name2: {
                row: '.col-xs-5',
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    },
                        stringLength: {
                        min: 3,
                        max: 20,
                        message: 'The first must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'The first can only consist of alphabetical'
                    }
                }
            },
            name: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    stringLength: {
                    min: 3,
                    max: 20,
                    message: 'The first must be more than 6 and less than 30 characters long'
                },
                regexp: {
                    regexp: /^[a-zA-Z]+$/,
                    message: 'The first can only consist of alphabetical'
                  }
                }
            },

            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            contactno: {
                validators: {
                    notEmpty: {
                        message: 'contact number is required'
                    },

                        stringLength: {
                        min: 7,
                        max: 20,
                        message: 'The first must be more than 6 and less than 30 characters long'
                    },  regexp: {
                          regexp: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                          message: 'Not rigth format'
                      }
                }
            },


            message: {
                validators: {
                    notEmpty: {
                        message: 'contact number is required'
                    },

                        stringLength: {
                        min: 10,
                        max: 100,
                        message: 'The first must be more than 10 and less than 100 characters long'
                    }
                }
}
        }
    });
});

// google Map API
                        var contentString = '<div class="info-window">' +
                                                                          '<h3>Info Window Content<\/h3>' +
                                                                          '<div class="info-content">' +
                                                                          '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<\/p>' +
                                                                          '<\/div>' +
                                                                          '<\/div>';


var marker;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 43.73691, lng: -79.56456}
  });
  var geocoder = new google.maps.Geocoder;

  var infowindow = new google.maps.InfoWindow;
  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 43.73691, lng:-79.56456},
    content: contentString
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
}
    setTimeout(function(){ marker.setAnimation(null); }, 203);
  }
