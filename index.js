const button = document.querySelector('.btn')
const card = document.querySelector('.card')

button.addEventListener('click', function(){
    if(card.classList.contains('content-hidden')){
        card.classList.remove('content-hidden');
        button.textContent = 'Закрити блок';
    }
    else{
        card.classList.add('content-hidden');
        button.textContent = 'Відкрити блок';
    }
})

const acordeonTitle = document.querySelectorAll('[data-name="acordeon-title"]')

acordeonTitle.forEach(function(item){
    item.addEventListener('click', function(){
        this.nextElementSibling.classList.toggle('acordeon-body-hidden');
    })
})

const tabHeaders = document.querySelectorAll('[data-tab]');
const tabCards = document.querySelectorAll('[data-tab-content]');


tabHeaders.forEach(function(item){
    item.addEventListener('click', function(){
        const tabNum = this.dataset.tab;
        const infoCard = document.querySelector('#' + tabNum);
        
        tabCards.forEach(function(item){
            item.classList.add('hidden-tab');
        })

        infoCard.classList.remove('hidden-tab');
    })
})

const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');
const body = document.getElementsByTagName('body');

// Кнопки - Открыть Модалку
modalButtons.forEach(function (item) {
    item.addEventListener('click', function () {
		const modalId = this.dataset.modalButton;
		const modal = document.querySelector('#' + modalId);
		modal.classList.remove('hidden-modal');

		// Находим внутри открываемой модалки блок .modal-window и запрещаем ему передавать клики "наверх"
		modal.querySelector('.modal-window').addEventListener('click', function (e) {
			e.stopPropagation();
		});

        body[0].classList.add('body-block-sckroll');
	})
})

// Кнопки - Закрыть Модалку
modalClosebuttons.forEach(function (item) {
    item.addEventListener('click', function () {
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden-modal');
        body[0].classList.remove('body-block-sckroll');
    })
})

// Закрытие модалок по фейду
allModals.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.add('hidden-modal');
        body[0].classList.remove('body-block-sckroll');
	});
});
