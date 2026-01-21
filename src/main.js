import './styles/style.css'
import {routes} from "./constants/routes.js"

document.body.addEventListener('click', (e)=>{
  // console.log(e);
  if (e.target.matches("[data-link]")){
    e.preventDefault()
    const route = e.target.getAttribute("href").replace("./", "")

    navigate(route)
  }
})

const navigate = async (pathname) => {
  const route = routes[pathname]

  const html = await fetch(route).then((resp)=>resp.text())
  console.log(html);

  document.querySelector('#app').innerHTML = html
}