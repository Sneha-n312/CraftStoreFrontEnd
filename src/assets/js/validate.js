$("#loginForm").validate({
    rules : {
                   loginEmail : {
                                  required : true,
                                  email : true
                   },
                   loginPassword : {
                                  required : true,
                                  minlength: 4
                   },
    },
    messages : {
                   loginEmail : {
                                  required : "Email is required",
                                  email : "Email should be in someone@domain.com"
                   },
                   loginPassword : {
                                  required : "Password is mandatory",
                                  minlength: "Password must be minimum 4 charecters long."
                   },
    },
    errorElement : 'div',
});


// registration form
$("#register-form").validate({
    rules: {
                   username: { required: true},
                   firstName: { required: true ,lettersonly: true},
                   lastName: { required: true,lettersonly: true },
                   companyName: { required: true,lettersonly: true },
                   email: { required: true, email: true },
                   pass: { required: true, minlength: 4 },
                   re_pass: { required: true, equalTo: "#pass", minlength: 4  },
    },
    messages: {
                   username: { required: "User name is required" },
                   firstName: { required: "First name is required",lettersonly: "First name can have only letters" },
                   lastName: { required: "Last name is required",lettersonly: "last name can have only letters"  },
                   companyName: { required: "First name is required",lettersonly: "Company name can have only letters" },
                   email: { required: "Email is required", email: "Email should be in someone@domain.com" },
                   pass: { required: "Password is mandatory", minlength: "Password must be minimum 4 charecters long." },
                   re_pass: { required: "Password confirmation is mandatory", equalTo: "Passwords do not match", minlength: "Password must be minimum 4 charecters long." },
    },
    errorElement: 'div',
});
