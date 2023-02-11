const form = document.querySelector('form')
const button = document.querySelector('header button')
const nlwSetup = new NLWSetup(form)

const add = () => {
  const today = new Date().toLocaleDateString('pt-br').slice(0, 5)
  // const today = '23/01'

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert('Dia já incluso 🔴')

    return
  }

  nlwSetup.addDay(today)
  alert('Adicionado com sucesso ✅')
}

const save = () => {
  window.localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

button.addEventListener('click', add)
form.addEventListener('change', save)

const data = JSON.parse(localStorage.getItem('NLWSetup@habits'))

if (data) {
  nlwSetup.setData(data)
  nlwSetup.load()
}
