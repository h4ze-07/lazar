const categories = [
    {
        id: 1,
        title: 'спортзал',
        img: '',
        description: '',
    },
    {
        id: 2,
        title: 'кафе',
        img: '',
        description: '',
    },
    {
        id: 3,
        title: 'лаунж зона та басейн',
        img: '/assets/images/pool.jpg',
        description: 'Лаунж зона та басейн на даху – це найкраща зона для вайбу: лише уявіть вдень ви насолоджуєтесь часом з друзями або рідними, а ввечері – споглядаєте на чарівне зоряне небо…',
    },
    {
        id: 4,
        title: 'дитячий майданчик',
        img: '',
        description: '',
    },
    {
        id: 5,
        title: 'підземний паркінг',
        img: '',
        description: '',
    },
    {
        id: 6,
        title: 'закрита територія',
        img: '',
        description: '',
    },
    {
        id: 7,
        title: 'охорона',
        img: '',
        description: '',
    },
    {
        id: 8,
        title: 'бомбосховище',
        img: '',
        description: '',
    },
]

const   categoriesDiv = document.getElementById('categories'),
        photo = document.getElementById('aboutPhoto'),
        description = document.getElementById('aboutText');




document.addEventListener('DOMContentLoaded', function() {
    addCategories();
    const categoriesList = [...document.querySelectorAll('#category')];
    let activeCategory = categories[2];
    let activeCategoryText = activeCategory.title;
    setPhotoAndDescription(activeCategory.img, activeCategory.description)

    categoriesList.forEach(item => {
        if (item.textContent === activeCategoryText) {
            item.classList.add('active')
        } else {
            item.classList.remove('active');
        }

        item.addEventListener('click', function () {
            clearActiveCategories(categoriesList)
            activeCategoryText = item.textContent;
            item.classList.add('active')
            activeCategory = categories.filter(i => i.title === activeCategoryText)[0];
            setPhotoAndDescription(activeCategory.img, activeCategory.description) 
        })
    })
})

function setPhotoAndDescription(url, text) {
    photo.setAttribute('src', url);
    description.textContent = text;
}


function clearActiveCategories(arr) {
    arr.forEach(i => i.classList.remove('active'))
}

function addCategories() {
    console.log('Content loaded');
    categories.forEach(item => {
        categoriesDiv.insertAdjacentHTML(
            'beforeend',
            `<button class='about__category' id='category'>${item.title}</button>`
        )
    })
}