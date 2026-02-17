/**
 * МОДАИ МО - Магазин одежды
 * Скрипт для переключения языков (русский/таджикский)
 */

// Ждём полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  
  // Получаем все кнопки переключения языка
  const langButtons = document.querySelectorAll('.lang-btn');
  
  // Текущий язык (по умолчанию русский)
  let currentLang = 'ru';
  
  /**
   * Функция переключения языка
   * @param {string} lang - код языка ('ru' или 'tg')
   */
  function setLanguage(lang) {
    // Обновляем активный класс у кнопок
    langButtons.forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    // Находим все элементы с переводами
    const translatableElements = document.querySelectorAll('[data-ru], [data-tg]');
    
    // Меняем текст в зависимости от выбранного языка
    translatableElements.forEach(element => {
      if (lang === 'ru' && element.dataset.ru) {
        element.textContent = element.dataset.ru;
      } else if (lang === 'tg' && element.dataset.tg) {
        element.textContent = element.dataset.tg;
      }
    });
    
    // Сохраняем текущий язык
    currentLang = lang;
    
    // Можно добавить уведомление в консоль (для отладки)
    console.log(`Язык изменён на: ${lang === 'ru' ? 'русский' : 'таджикский'}`);
  }
  
  // Назначаем обработчики событий на кнопки
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const selectedLang = this.dataset.lang;
      // Меняем язык только если выбран другой
      if (selectedLang !== currentLang) {
        setLanguage(selectedLang);
      }
    });
  });
  
  // Устанавливаем русский язык по умолчанию
  setLanguage('ru');
  
  // Дополнительная функция: анимация при наведении на карточки (опционально)
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.3s, box-shadow 0.3s';
    });
  });
  
  // Обработка клика по кнопке "Добавить"
  const addButtons = document.querySelectorAll('.btn-add');
  addButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      // Здесь можно добавить логику добавления в корзину
      // Пока просто показываем уведомление
      const buttonText = this.querySelector('span')?.textContent || 'Добавить';
      alert(`Товар ${buttonText} в корзину (демо-режим)`);
    });
  });
  
});