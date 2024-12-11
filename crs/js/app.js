// card scripts
// Находим кнопки и карточки
const buttons = document.querySelectorAll('.portfolio_btn');
const cards = document.querySelectorAll('.portfolio-card');

// Добавляем обработчик события клика для каждой кнопки
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        // Получаем текст кнопки (тег) и приводим к нижнему регистру для сравнения
        const tag = button.textContent.trim().toLowerCase();

        // Удаляем активный класс у всех кнопок
        buttons.forEach(btn => btn.classList.remove('active'));
        // Добавляем активный класс к нажатой кнопке
        button.classList.add('active');

        // Показать или скрыть карточки в зависимости от тега
        cards.forEach(card => {
            // Получаем текст из поля `.portfolio-field` и приводим к нижнему регистру
            const field = card.querySelector('.portfolio-field').textContent.trim().toLowerCase();

            // Проверяем: показываем карточку, если тег совпадает или если выбран "Все"
            if (tag === 'все' || field === tag) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// FAQ scripts
document.querySelectorAll('.faq-item .question').forEach((item) => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;

    // Закрыть другие
    document.querySelectorAll('.faq-item').forEach((faq) => {
      if (faq !== parent) faq.classList.remove('active');
    });

    // Показать/скрыть текущий
    parent.classList.toggle('active');
  });
});