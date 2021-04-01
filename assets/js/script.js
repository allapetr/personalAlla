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
            age: {
                required: true,
                minlength: 1
            },
            country: {
                required: true,
                minlength: 2
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
            age: {
                required: "Please type your age",
                minlength: "Your age must consist of at least 1 character"
            },
            country: {
                required: "Please type your Country of Residence (State/City)",
                minlength: "It must consist of at least 2 characters"
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
