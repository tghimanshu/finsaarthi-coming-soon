
/**
 * Main JavaScript file for the Finsaarthi "Coming Soon" page.
 * Handles form validation and interaction logic using jQuery.
 *
 * @file This file contains the main logic for form validation and UI feedback.
 * @author Finsaarthi Team
 */
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    /**
     * Validates a single form input field.
     *
     * Checks if the input is empty or, if it is an email field,
     * whether it matches a standard email regex pattern.
     *
     * @param {HTMLElement} input - The DOM element of the input field to validate.
     * @returns {boolean|undefined} Returns `false` if validation fails. Returns `undefined` if validation passes.
     */
    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    /**
     * Displays a validation error message for a specific input field.
     *
     * Adds the 'alert-validate' class to the parent element of the input,
     * which triggers CSS rules to show the error warning.
     *
     * @param {HTMLElement} input - The DOM element of the input field to show the error for.
     * @returns {void}
     */
    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    /**
     * Hides the validation error message for a specific input field.
     *
     * Removes the 'alert-validate' class from the parent element of the input.
     * This is typically called when the user focuses on the input to correct the error.
     *
     * @param {HTMLElement} input - The DOM element of the input field to hide the error for.
     * @returns {void}
     */
    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    
    

})(jQuery);
