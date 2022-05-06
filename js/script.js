const fullname = document.getElementById('fullname')
const address = document.getElementById('address')
const number = document.getElementById('number')
const complement = document.getElementById('complement')
const cep = document.getElementById('cep')
const district = document.getElementById('district')
const city = document.getElementById('city')

const buttonReset = document.getElementById('reset')
const buttonSend = document.getElementById('send')

function clearForm() {
  //Limpa valores do formulário de cep.
  fullname.value = ''
  address.value = ''
  number.value = ''
  complement.value = ''
  cep.value = ''
  district.value = ''
  city.value = ''
}

buttonReset.addEventListener('click', event => {
  event.preventDefault()
  clearForm()
})

buttonSend.addEventListener('click', event => {
  event.preventDefault()

  if (fullname.value == '') {
    fullname.classList.add('errorInput')
  } else {
    fullname.classList.remove('errorInput')
  }

  if (address.value == '') {
    address.classList.add('errorInput')
  } else {
    address.classList.remove('errorInput')
  }

  if (number.value == '') {
    number.classList.add('errorInput')
  } else {
    number.classList.remove('errorInput')
  }

  if (complement.value == '') {
    complement.classList.add('errorInput')
  } else {
    complement.classList.remove('errorInput')
  }

  if (cep.value == '') {
    cep.classList.add('errorInput')
  } else {
    cep.classList.remove('errorInput')
  }

  if (district.value == '') {
    district.classList.add('errorInput')
  } else {
    district.classList.remove('errorInput')
  }

  if (city.value == '') {
    city.classList.add('errorInput')
  } else {
    city.classList.remove('errorInput')
  }

  // Validar o cep
  if (cep.value != '') {
    var newCep = cep.value.replace(/\D/g, '')
    var validacep = /^[0-9]{8}$/

    if (validacep.test(newCep)) {
      cep.classList.remove('errorInput')
    }
  } else {
    cep.classList.add('errorInput')
  }

  if (
    fullname.value != '' &&
    address.value != '' &&
    number.value != '' &&
    complement.value != '' &&
    cep.value != '' &&
    district.value != '' &&
    city.value != ''
  ) {
    fullname.classList.remove('errorInput')
    address.classList.remove('errorInput')
    number.classList.remove('errorInput')
    complement.classList.remove('errorInput')
    cep.classList.remove('errorInput')
    district.classList.remove('errorInput')
    city.classList.remove('errorInput')

    clearForm()
    let text = 'Dados enviados com sucesso!'
    alert(text)
  }
})
