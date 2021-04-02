let url = window.location.search
console.log(url)
let urlParams = new URLSearchParams(url)
let id = urlParams.get('id')
console.log(id)