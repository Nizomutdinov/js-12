let products = [
    {
        id:1,
        name: 'Crazy',
        price: 31000,
        img: 'images/products/burger-1.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id:2,
        name: 'Light',
        price: 26000,
        img: 'images/products/burger-2.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id:3,
        name: 'CheeseBurger',
        price: 29000,
        img: 'images/products/burger-3.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id:4,
        name: 'dBurger',
        price: 24000,
        img: 'images/products/burger-4.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    }, 
    {
        id:5,
        name: 'Proweb burger',
        price: 54000,
        img: 'https://avatars.mds.yandex.net/i?id=b56a0d26f600111cc555ec2cecb6c7b6736cb5fa-10610468-images-thumbs&n=13',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
]

const wrapperList = document.querySelector('.wrapper__list')


function outBurgers() {
    products.forEach((item) => {
    let {id,name,price,img} = item

    wrapperList.innerHTML += ` <div class="wrapper__list-card" id=${id}>
                <p class="wrapper__list-count"></p>
                <img class="wrapper__list-image" src="${img}" alt="">
                <h3 class="wrapper__list-title">${name}</h3>
                <div class="wrapper__list-sub">
                    <p class="wrapper__list-text">${price}</p>
                    <button class="wrapper__list-btn"><img src="images/sell-icon.svg" alt=""></button>
                </div>
            </div>`
    })

}
outBurgers()    


const burgerBtns = document.querySelectorAll('.wrapper__list-btn'),
cartBtn = document.querySelector('.wrapper__navbar-btn'),
cartClose = document.querySelector('.wrapper__navbar-close'),
basket = document.querySelector('.wrapper__navbar-basket');

cartBtn.addEventListener('click', () => basket.classList.add('active'))
cartClose.addEventListener('click', () => basket.classList.remove('active'))

burgerBtns.forEach((btn) =>{
btn.addEventListener('click', () => addAmount(btn))
})

function addAmount(btn) {
    let id = btn.closest('.wrapper__list-card').getAttribute('id')
    let burger = products.find((item) => item.id == id) 
    burger.amount < 10 ?  burger.amount++ : alert('Слишком много')
    
    console.log(burger);
}


const title = document.querySelector('.title')
const wrapper__navbar = document.querySelector('.wrapper__nav')
const body = document.querySelector('body')


let i = 0
function count(){
    title.innerHTML = i
    if(i < 100){
        i++    
    }
    else if(i == 100){
        wrapper__navbar.style.background = 'rgb(156, 51, 12)'
        body.style.background = 'rgb(210, 241, 247)'
        title.classList.add('qwerty')
        title.innerHTML = i + ' lvl'
    }
    setTimeout(() => count(),100)
}

count()
