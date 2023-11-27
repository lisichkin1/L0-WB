let fName = document.querySelector('.form__recipient__fName');
let sName = document.querySelector('.form__recipient__SName');
let email = document.querySelector('.form__recipient__email');
let phone = document.querySelector('.form__recipient__phone');
let inn = document.querySelector('.form__recipient__inn');

let fNameError = document.querySelector('.fName__error');
let sNameError = document.querySelector('.sName__error');
let emailError = document.querySelector('.email__error');
let phoneError = document.querySelector('.phone__error');
let innError = document.querySelector('.inn__error');

let submit__button = document.querySelector('.submit__button');

const fNameValidation = (event) => {
  let fNameValue = fName.value.trim();
  const notErrorAlert = () => {
    fNameError.style.opacity = '0';
    fNameError.textContent = '';
    fName.style.color = '#9797af';
    fName.style.borderBottomColor = '#9797af';
  };
  const errorAlert = () => {
    fNameError.style.opacity = '1';
    fNameError.textContent = 'Укажите имя';
    fName.style.color = '#f55123';
  };
  if (event === 'blur' && fNameValue === '') {
    notErrorAlert();
  } else if (event === 'input') {
    notErrorAlert();
  } else if (event === 'blur' && fNameValue !== '') {
    notErrorAlert();
  } else {
    if (fNameValue === '') {
      errorAlert();
    } else {
      notErrorAlert();
    }
  }
};

const sNameValidation = (event) => {
  let sNameValue = sName.value.trim();
  const notErrorAlert = () => {
    sNameError.style.opacity = '0';
    sNameError.textContent = '';
    sName.style.color = '#9797af';
    sName.style.borderBottomColor = '#9797af';
  };
  const errorAlert = () => {
    sNameError.style.opacity = '1';
    sNameError.textContent = 'Укажите фамилию';
    sName.style.color = '#f55123';
    sName.style.borderBottomColor = '#f55123';
  };
  if (event === 'blur' && sNameValue === '') {
    notErrorAlert();
  } else if (event === 'input') {
    notErrorAlert();
  } else if (event === 'blur' && sNameValue !== '') {
    notErrorAlert();
  } else {
    if (sNameValue === '') {
      errorAlert();
    } else {
      notErrorAlert();
    }
  }
};
let errorEmail = false;
const emailValidation = (event) => {
  let emailValue = email.value.trim();
  let emailcheck = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)$/.test(emailValue);
  const notErrorAlert = () => {
    emailError.style.opacity = '0';
    emailError.textContent = '';
    email.style.color = '#9797af';
    email.style.borderBottomColor = '#9797af';
    errorEmail = false;
  };
  const errorAlert = () => {
    emailError.style.opacity = '1';
    emailError.textContent = 'Укажите почту';
    email.style.color = '#f55123';
    email.style.borderBottomColor = '#f55123';
    errorEmail = true;
  };
  if (event === 'blur' && emailValue === '') {
    notErrorAlert();
  } else if (event === 'input' && errorEmail === true) {
    if (!emailcheck) {
      errorAlert();
    } else {
      notErrorAlert();
    }
  } else if (event === 'input') {
    notErrorAlert();
  } else if (event === 'blur' && emailValue !== '' && !emailcheck) {
    if (!emailcheck) {
      errorAlert();
    } else {
      notErrorAlert();
    }
  } else {
    if (emailValue === '') {
      errorAlert();
    } else {
      notErrorAlert();
    }
  }
};
let errorPhone = false;
const phoneValidation = (event) => {
  let phoneValue = phone.value;
  let phonecheck = /^\+\d{1,3} \d{3} \d{3}-\d{2}-\d{2}$/.test(phoneValue);
  const notErrorAlert = () => {
    phoneError.style.opacity = '0';
    phoneError.textContent = '';
    phone.style.color = '#9797af';
    phone.style.borderBottomColor = '#9797af';
    errorPhone = false;
  };
  const errorAlert = () => {
    phoneError.style.opacity = '1';
    phoneError.textContent = 'Укажите телефон';
    phone.style.color = '#f55123';
    phone.style.borderBottomColor = '#f55123';
    errorPhone = true;
  };
  const addSymbol = () => {
    if (phone.value.length == 6) {
      phone.value += ' ';
    } else if (phone.value.length == 10) {
      phone.value += '-';
    } else if (phone.value.length == 13) {
      phone.value += '-';
    }
  };
  if (event === 'focus' && phoneValue === '') {
    phone.value = '+7 ';
  } else if (event === 'blur' && (phoneValue === '+7 ' || phoneValue === '')) {
    notErrorAlert();
    phone.value = '';
  } else if (event === 'input' && errorPhone === true) {
    if (!phonecheck) {
      errorAlert();
      addSymbol();
    } else {
      notErrorAlert();
      addSymbol();
    }
  } else if (event === 'input') {
    notErrorAlert();
    addSymbol();
  } else if (event?.key === 'Backspace') {
    if (phone.value.charAt(phone.value.length - 1) === ' ') {
      phone.value = phone.value.slice(0, -1);
    } else if (phone.value.charAt(phone.value.length - 1) === '-') {
      phone.value = phone.value.slice(0, -1);
    }
  } else if (event === 'blur' && phoneValue !== '' && !phonecheck) {
    if (phoneValue === '' || !phonecheck) {
      errorAlert();
    } else {
      notErrorAlert();
    }
  } else {
    if (phoneValue === '') {
      errorAlert();
    }
  }
};

let errorInn = false;
const innValidation = (event) => {
  let innValue = inn.value;
  let innCheck = /^\d{12}$/.test(innValue);
  const notErrorAlert = () => {
    innError.style.opacity = '0';
    innError.textContent = '';
    inn.style.color = '#9797af';
    inn.style.borderBottomColor = '#9797af';
    errorInn = false;
  };
  const errorAlert = () => {
    innError.style.opacity = '1';
    innError.textContent = 'Для таможенного оформления';
    inn.style.color = '#f55123';
    inn.style.borderBottomColor = '#f55123';
    errorInn = true;
  };
  if (event === 'blur' && innValue === '') {
    notErrorAlert();
  } else if (event === 'input' && errorInn === true) {
    if (!innCheck) {
      errorAlert();
    } else {
      notErrorAlert();
    }
  } else if (event === 'input') {
    notErrorAlert();
  } else if (event === 'blur' && innValue !== '' && !innCheck) {
    if (!innCheck) {
      errorAlert();
    } else {
      notErrorAlert();
    }
  } else {
    if (innValue === '') {
      errorAlert();
    } else {
      notErrorAlert();
    }
  }
};
fName.addEventListener('blur', () => fNameValidation('blur'));
sName.addEventListener('blur', () => sNameValidation('blur'));
email.addEventListener('blur', () => emailValidation('blur'));
phone.addEventListener('blur', () => phoneValidation('blur'));
inn.addEventListener('blur', () => innValidation('blur'));

phone.addEventListener('focus', () => phoneValidation('focus'));

fName.addEventListener('input', () => fNameValidation('input'));
sName.addEventListener('input', () => sNameValidation('input'));
email.addEventListener('input', () => emailValidation('input'));
phone.addEventListener('input', () => phoneValidation('input'));
inn.addEventListener('input', () => innValidation('input'));

phone.addEventListener('keydown', function (event) {
  phoneValidation(event);
});
submit__button.addEventListener('click', function (event) {
  event.preventDefault();
  fNameValidation();
  sNameValidation();
  emailValidation();
  phoneValidation();
  innValidation();
});
