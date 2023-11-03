const chooseColors = document.querySelectorAll('.choose-color__btn')
const contentItems = document.querySelectorAll('.content-item')

chooseColors.forEach((el) => {
    el.addEventListener('click', changeColor)
})

function changeColor(e) {
    const target = e.currentTarget
    const btn = target.dataset.button
    console.log(target)
    const contentActive = document.querySelectorAll(`.${btn}`)

    chooseColors.forEach((i) => i.classList.remove('choose-color__btn--active'))
    target.classList.add('choose-color__btn--active')

    contentItems.forEach((item) => {
        item.classList.remove('content-item--active')
    })

    contentActive.forEach((el) => el.classList.add('content-item--active'))
}
