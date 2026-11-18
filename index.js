const hamburger = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.mobile-nav')
let con = document.querySelector('.blog-con')
let isOpen = false

hamburger.addEventListener('click', () => {
    if (isOpen === false) {
        isOpen = true
        mobileNav.style.height = '100vh'
        hamburger.innerHTML = '<i class="ri-close-line"></i>'
    } else {
        mobileNav.style.height = 0
        isOpen = false
        hamburger.innerHTML = '<i class="ri-menu-4-line"></i>'
    }

})

const posts = [
    { img: 'post.avif', title: 'Blog Post 1', des: 'Lorem ipsum dolor sit amet consectetur.' },
    { img: 'post.avif', title: 'Blog Post 2', des: 'Lorem ipsum dolor sit amet consectetur.' },
    { img: 'post.avif', title: 'Blog Post 3', des: 'Lorem ipsum dolor sit amet consectetur.' },
    { img: 'post.avif', title: 'Blog Post 4', des: 'Lorem ipsum dolor sit amet consectetur.' },
    { img: 'post.avif', title: 'Blog Post 5', des: 'Lorem ipsum dolor sit amet consectetur.' },
    { img: 'post.avif', title: 'Blog Post 5', des: 'Lorem ipsum dolor sit amet consectetur.' },
    { img: 'post.avif', title: 'Blog Post 5', des: 'Lorem ipsum dolor sit amet consectetur.' },
    { img: 'post.avif', title: 'Blog Post 5', des: 'Lorem ipsum dolor sit amet consectetur.' },
]

posts.forEach(item => {
    let div = document.createElement('div')

    div.classList = "col-span-1 row-span-1 overflow-hidden shadow-lg shadow-gray-600 rounded-xl relative group"

    div.innerHTML = `<img src="${item.img}" alt="nature" class="h-full w-full object-cover object-center pointer-event-none">
                <div class="absolute -bottom-full left-0 h-[10vh] w-full bg-white/50 backdrop-blur-md p-2 group-hover:bottom-0 duration-300">
                    <h1 class="text-xl font-bold">${item.title}</h1>
                    <p>${item.des}</p>
                </div>`


    con.appendChild(div)
})