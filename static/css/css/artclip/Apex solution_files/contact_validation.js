$(document).ready(function() {
    $('#service_path_form')
      .formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            service_path_name: {
                // The messages for this field are shown as usual
                validators: {
                    notEmpty: {
                        message: 'The Service Path Name is required'
                    },
                }
            },
            service_path_ip: {
                // Show the message in a tooltip
                err: 'tooltip',
                validators: {
                    notEmpty: {
                        message: 'The destination ip address is required'
                    },
                    ip: {
                        message: 'The ip address is not valid'
                    }
                }
            },
            service_path_enabled: {
                // Show the message in a tooltip
                err: 'tooltip',
                validators: {
                    notEmpty: {
                        message: 'Do you want this service path to be actively monitored?'
                    }
                }
            }
        }
      });
});
