import { Router } from "./router.js"
import "./Change-color-of-the-item-already-clicked.js"
import "./Style-change.js"
import "./Image-swap.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/The-Universe", "/pages/The-Universe.html")
router.add("/Exploitation", "/pages/Exploitation.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()

window.route = () => router.route()
