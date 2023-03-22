const OPTIONS = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': 'b0ddc50431msh2e90357861a4959p1e7d0fjsnaa1dcf00032b',
      'X-RapidAPI-Host': 'ipstack1.p.rapidapi.com'
    }
  }

  const fetchIpInfo = ip => {
    return fetch('https://ipstack1.p.rapidapi.com/api.ipstack.com/${ip}', OPTIONS)
    .then (res => res.json())
    .catch(err => console,error(err))
  }

  const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $results = $('#results')

$form.addEventListener('submit', async (event) =>{
    event.preventDefault()
    const {value} = $input
    if (!value) return

  $submit.setAttribute('disabled', '')
  $submit.setAttribute('aria-busy', 'true')


    const ipInfo = await fetchIpInfo(value)

    if (ipInfo) {
      $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

  $submit.removeAttribute('disabled')
  $submit.removeAttribute('aria-busy')

})



























