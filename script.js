const validate = new window.JustValidate("#form");
validate
    .addField(
        "#name",
        [
            {
                rule: "required",
                errorMessage: "Please enter your name",
            },
        ],
        {
            errorFieldCssClass: "error-field",
            errorLabelCssClass: "error-label",
            errorsContainer: "#name-errors",
        }
    )
    .addField(
        "#email",
        [
            {
                rule: "required",
                errorMessage: "Please enter your email",
            },
            {
                rule: "email",
                errorMessage: "email is not valid",
            },
        ],
        {
            errorFieldCssClass: "error-field",
            errorLabelCssClass: "error-label",
            errorsContainer: "#email-errors",
        }
    )
    .addField(
        "#comp-name",
        [
            {
                rule: "required",
                errorMessage: "Please enter your company name",
            },
        ],
        {
            errorFieldCssClass: "error-field",
            errorLabelCssClass: "error-label-comp-name",
            errorsContainer: "#comp-email-errors",
        }
    )
    .addField(
        "#title",
        [
            {
                rule: "required",
                errorMessage: "Please enter your title",
            },
        ],
        {
            errorFieldCssClass: "error-field",
            errorLabelCssClass: "error-label",
            errorsContainer: "#title-errors",
        }
    )
    .addField(
        "#msg",
        [
            {
                rule: "required",
                errorMessage: "Please enter your message",
            },
        ],
        {
            errorFieldCssClass: "error-field",
            errorLabelCssClass: "error-label-msg",
            errorsContainer: "#msg-errors",
        }
    );