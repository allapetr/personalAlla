(function ($) {
    'use strict';

    /* ========================================================================= */
    /*   Contact Form Validating
    /* ========================================================================= */

    $('#contact-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
            },
        },
        messages: {
            name: {
                required: "Please type your name",
                minlength: "Your name must consist of at least 2 characters"
            },
            email: {
                required: "Please type your email address",
            },
            message: {
                required: "Please type your message",
                minlength: "Your message must consist of at least 2 characters"
            },
        }
    });


}(jQuery));