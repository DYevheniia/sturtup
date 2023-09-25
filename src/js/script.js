const headerMenu = document.querySelector(".header-menu"),
    burger = document.querySelector(".burger"),
    headerLine = document.querySelector(".header-line"),
    latestWorksMenu = [...document.querySelectorAll(".latest-works-menu p")],
    productButton = [...document.querySelectorAll(".productButton")],
    servicesCode = document.querySelector(".servicesCode"),
    headerline = document.querySelectorAll(".headerline-services"),
    cross = document.querySelector(".cross"),
    authorization = document.querySelector(".authorization"),
    authorizationButton = document.querySelector("#authorization-button"),
    body = document.querySelector("#body"),
    resetButton = document.querySelector("#reset"),
    numberContainer = document.querySelector(".numbers"),
    container = document.querySelector('.container'),
    parallaxBg = document.querySelector('.parallax-bg'),
    yourProjectContainer = document.querySelector('.your-project-container'),
    recentPopapBg = document.querySelector(".recent-popap-bg"),
    yourProjectParallaxBg = document.querySelector(".your-project-parallax-bg")

let number = [...document.querySelectorAll(".number")],
    dropped = document.querySelectorAll(".drop"),
    activeNumberDiv
// HEADER
if (burger) {
    burger.addEventListener("click", function () {
        headerMenu.classList.toggle("burgerMenu")
        headerLine.classList.toggle("headerLineBg")
    })
}

container.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 10
    const y = (e.clientY / window.innerHeight) * 10
    parallaxBg.style.transform = `translate(-${x}%, -${y}%)`
    yourProjectParallaxBg.style.transform = `translate(-${x}%, -${y}%)`
})
yourProjectContainer.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 10
    const y = (e.clientY / window.innerHeight) * 10
    yourProjectParallaxBg.style.transform = `translate(-${x}%, -${y}%)`
})
// LOGIN
cross.addEventListener("click", function () {
    authorization.style.display = "none"
    body.style.overflow = "scroll"
    recentPopapBg.style.display = "none"
})
authorizationButton.addEventListener("click", function () {
    authorization.style.display = "block"
    // body.style.overflow = "hidden"
    recentPopapBg.style.display = "block"
})


number.forEach (num => {
    num.ondragstart = function () {
        activeNumberDiv = num
        console.log(activeNumberDiv);
        setTimeout(() => {
            this.style.opacity = "0"
            this.style.transition = "opacity 0 linear"
        }, 0)
    }
    num.ondragend = function () {
        this.style.opacity = "1"
    }
})
dropped.forEach (drop => {
    drop.ondragenter = function (e) {
        e.preventDefault()
        if (this.children.length === 0) {
            this.style.boxShadow = "0 3px 5px black"
        }
    }
    drop.ondragover = function (e) {
        e.preventDefault()
    }
    drop.ondragleave = function (e) {
        e.preventDefault()
        this.style.boxShadow = ""
    }
    drop.ondrop = function () {
        this.style.boxShadow = ""
        if (this.children.length === 0) {
            drop.insertAdjacentElement("afterbegin", activeNumberDiv)
        }
    }
})
console.log(number);

resetButton.addEventListener('click', function () {
    let newDropped = document.querySelectorAll(".drop")
    number.forEach (num => {
        num.ondragstart = function () {
            activeNumberDiv = num
            setTimeout(() => {
                this.style.opacity = "0"
                this.style.transition = "opacity 0 linear"
            }, 0)
        }
        num.ondragend = function () {
            this.style.opacity = "1"
        }
    })
    newDropped.forEach(drop => {
        while (drop.firstChild) {
            drop.firstChild.remove()
        }
    });
    this.draggable = true
    numberContainer.innerHTML = ""
    for (let i = 0; i <= 9; i++) {
        const div = document.createElement("div")
        div.className = "number"
        div.draggable = true
        const p = document.createElement("p")
        p.textContent = i
        div.appendChild(p)
        numberContainer.appendChild(div)
    }
    activeNumberDiv = null
});

// SERVICES BLOCK
let clickCount = 0;
const hack = document.querySelectorAll("#hack"),
    hackNo = document.querySelectorAll("#hackNo")

hack.forEach(Hack => {
    Hack.addEventListener("click", function () {
        clickCount++
        if (clickCount === 3) {
            headerline.forEach(head => {
                head.style.color = "#c0301c"
                head.style.fontWeight = "bold"
                head.innerText = "Hack This Site"
            })
        clickCount = 0
        }
    })
})
hackNo.forEach(HackNo => {
    HackNo.addEventListener("click", function () {
        clickCount = 0
    })
})
// ABOUT US BLOCK



// LATEST WORKS BLOCK
productButton.forEach (prod => {
    document.getElementById(prod.id).addEventListener("click", function () {
        for (i = 0; i<latestWorksMenu.length; i++) {
            latestWorksMenu[i].classList.remove("active")
        }
        latestWorksMenu[productButton.indexOf(prod)].classList.add("active")
        if (prod.id == "all") {
            showAllProducts()
        } else {
            filterProducts(prod.id)
        }
        saveActiveFilterToLocalStorage("activeFilter", prod.id)
    })
})
function filterProducts (category) {
    const products = document.querySelectorAll('.product')
    products.forEach(product => {
        if (product.getAttribute('data-category') === category) {
            product.style.display = 'block'
        } else {
            product.style.display = 'none'
        }
    })
}
function showAllProducts() {
    const products = document.querySelectorAll('.product')
    products.forEach(product => {
        product.style.display = 'block'
    })
}
function saveActiveFilterToLocalStorage(key, category) {
    localStorage.setItem(key, category)
}
window.addEventListener('load', function () {
    const activeFilter = localStorage.getItem('activeFilter')
    if (activeFilter) {
        const filterButton = document.getElementById(activeFilter)
        if (filterButton) {
            filterButton.click()
        }
    }
})

// YOUR PROJECT BLOCK



// RECENT BLOG BLOCK
let recentPopap = document.querySelector(".recent-popap"),
    recentBlogRead = document.querySelectorAll(".recent-blog-read"),
    recentBlogCross = document.querySelector(".recent-blog-cross")


recentBlogRead.forEach(read => {
    read.addEventListener("click", function () {
        recentPopapBg.style.display = "block"
        recentPopap.style.display = "block"
        body.style.overflow = "hidden"
    })
})
recentBlogCross.addEventListener("click", function () {
    recentPopapBg.style.display = "none"
    recentPopap.style.display = "none"
    body.style.overflow = "scroll"
})

// PARTNER BLOCK



// GET TOUCH BLOCK

const send = document.getElementById("send"),
    senderBlock = document.getElementById("sender-block"),
    inputForm = [...document.querySelectorAll(".inputForm")],
    Name = document.querySelector(".name"),
    email = [...document.getElementsByClassName("email")],
    subject = [...document.getElementsByClassName("subject")],
    company = [...document.getElementsByClassName("company")],
    message = [...document.getElementsByClassName("message")]
inputForm.forEach(FormInput => {
    FormInput.addEventListener("input", function () {
        // console.log(FormInput.id);
        // saveActiveFilterToLocalStorage(FormInput.value, FormInput.id)
        // console.log(FormInput.value);
    })
})
send.addEventListener("click", function (e) {
    e.preventDefault()
    let Input = 0
    console.log(inputForm);
    inputForm.forEach(input => {
        if (input.value == "") {
            Input++
        }
        console.log(Input);
    })
    if (Input === 0) {
        let nameTag = inputForm[0].value
        //     emailTag = inputForm[1].value,
        //     subjectTag = inputForm[2].value,
        //     companyTag = inputForm[3].value,
        //     messageTag = inputForm[4].value
        console.log("Name " + Name);
        console.log("NameTag " + nameTag);
        recentPopapBg.style.display = "block"
        senderBlock.style.display = "block"
        // saveActiveFilterToLocalStorage(input.id, input.value)
    } else {
        alert("ldkdjlkj")
    }
})
// saveActiveFilterToLocalStorage("activeFilter", prod.id)


