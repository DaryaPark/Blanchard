var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");


im.mask(selector);

new JustValidate('.footer-form ', {
  rules: {
    username: {
      required: true,
      minLength: 3,
      maxLength: 30,

    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.Inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required: true,
      email: true
    },
  },

  messages: {
    name: {
      minLength: "слишком короткое имя",
      maxLength: "слишком длинное имя",
      required: 'Как вас зовут?',
    },

    tel: {
      required: 'Укажите ваш телефон'
    },

    mail: {
      required: 'Укажите ваш e-mail'
    },
  }
})

