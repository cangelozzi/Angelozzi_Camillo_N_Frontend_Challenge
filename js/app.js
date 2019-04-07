(() => {

  console.log("Welcome to my Northern Frontend Challenge");

  // VUE instance
  const vm = new Vue({

    el: "#app",

    data: {
      title: 'Internship Signup Form',
      description: 'Prepare for your career with a Project Management, Web-Development, Graphic design, or Digital Marketing Internship at Northern',
      btn_text: 'Sign Up Now',
      thank_msg: 'Thanks for your interest!',
      final_msg: 'We will review your application and contact you for addition information should your background and experience meet the requirements of one of our openings.',
      content_visible: true,
      msg_visible: false,
      iconHidden: false,
      emailErrorMsg: false,
      selectErrorMsg: false,
      email: '',
      selected: '',
      disableSubmit: false
    },

    methods: {

      formSubmit: function () {

        // https://tylermcginnis.com/validate-email-address-javascript/
        let isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);

        if (isEmailValid === false) {
          this.emailErrorMsg = true;
          this.email = '';
        } else if (this.selected === '') {
          this.selectErrorMsg = true;
          this.emailErrorMsg = false;
        } else {
          this.selectErrorMsg = false;
          this.emailErrorMsg = false;
          console.log('Email field: ' + this.email);
          console.log('Interest field: ' + this.selected);
          this.showThankYou();
        }

      },

      showThankYou: function () {

        this.btn_text = 'Submitting...';
        this.iconHidden = true;

        // avoid double submission
        this.disableSubmit = true;

        let scope = this;
        setTimeout(function () {
          scope.content_visible = false;
          scope.msg_visible = true;
        }, 2000);
      }

    }

  });

})();