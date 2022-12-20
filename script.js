function buttonpress(idin) {
    let element = document.getElementById(idin);
    let button = element.getElementsByTagName("button")[0];
    let image = element.getElementsByTagName("img")[0];
    let h4 = element.getElementsByTagName("h4")[0];
    let p = element.getElementsByTagName("p")[0];



    if (p.style.display == "block") {
        p.style.display = "none";
        h4.style.display = "block";
        image.style.display = "flex";
        element.style.backgroundColor = "var(--Sacramento-State-Green)";
        element.getElementsByTagName("div")[0].remove();
        button.classList.remove("button--pressed");
        return;
    }
    button.className += " button--pressed";
    button.classList.add("button--pressed");
    p.style.display = "block";
    h4.style.display = "none";
    image.style.display = "none";
    console.log(image);
    p.insertAdjacentHTML("afterend", `
                    <div class="footer__socials" style="padding: 0;">
                    <a><img src="../IMG/icon-twitter.svg" style="width:100%;height:100%;border:none; border-radius:0;" alt="twitter"></a>
                    <a><img src="../IMG/icon-linkedin.svg" style="width:100%;height:100%;border:none; border-radius:0;" alt="pinterest"></a>
                    </div> `);
}

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