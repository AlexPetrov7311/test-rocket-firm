/**
 * Created by Alex on 22.02.16.
 */
(function() {
    'use strict';

    angular
        .module('testRocketFirm')
        .controller('LandingController', LandingController);

    /** @ngInject */
    function LandingController($timeout, webDevTec, toastr) {
        var vm = this;

        vm.itemsMenu = ['Страхование', 'Компания','Новости','Контакты'];

        vm.itemsMenuTwoLevel = ['Автострахование','Здоровье','Имещуство','Путешествия','Для бизнеса'];

        vm.itemsPropertyCover = [
            {caption:"КАСКО", text:"Добровольное страхование автомобиля от ухона, хулиганов и ДТП."},
            {caption:"ОГПО", text:"Обязательное страхование транспортных средств"},
            {caption:"Для перевозчиков", text:"Обязательное страхование гражданско-правовой ответственности перевозчика перед пасажирами"},
        ];
        vm.itemsAdventages = [
            {image: "assets/landing/advantages/car.svg",
              caption:"Доставим полис куда скажете",
              text:"Бесплатная доставка документов после заказа на сайте."},
            {image: "assets/landing/advantages/watch.svg",
              caption:"Оплачивайте как вам удобно",
              text:"Помесячно или за год сразу"},
            {image: "assets/landing/advantages/coin.svg",
              caption:"Скидка до 10% постоянным клиентам",
              text:"При оформлении нескольких полисов одновременно - 10% скидка!"},
        ];
        vm.itemsQA = [
            'Что можно застраховать?',
            'В каких случаях страховка выплачивается?',
            'Правила страхования КАСКО',
            'Правила страхования ОГПО',
            'Почему некоторые полисы нельзя купить олнайн?',
            'Как заказать полис, находясь в другой стране?'
        ];

        vm.itemsTypeInsurance = [
          {name:'Автомобиль',class: 'selected'},
          {name:'Здоровье',class: ''},
          {name:'Поездка',class: ''},
          {name:'Имущество',class: ''}
        ];

        vm.itemsInsurance = [
            'Транспортные средства',
            'Несчастные случаи и болезни',
            'Квартиры и дачи',
            'Путишествия'
        ];

        vm.links = [
            'О компании',
            'Новости',
            'Страховой случай',
            'Вопросы и ответы'
        ];

        vm.social = [
            {image:"facebook",link:"assets/landing/social/fb.svg"},
            {image:"twitter",link:"assets/landing/social/twi.svg"},
            {image:"instagram",link:"assets/landing/social/insta.svg"}
        ];

    }
})();
