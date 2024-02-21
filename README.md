# Modal window for online shop

В модальному вікні реалізується порізка плиточних буд матеріалів, а також схематична візуалізація порізки.
При натисненні кнопки "ВІДПРАВИТИ ДО КОРЗИНИ" всі збережені деталі зберігаються до localStorage у вигляді масиву об'єктів:

- id - id деталі;
- productId - ід обраного продукту/товару
- width - бажана ширина деталі
- height - бажана висота деталі
- customAmount - кількість деталей потрібних для порізки
- comment - коментар до порізки
- count - порядковий номер деталі
- cutItemPrice - ціна однієї деталі
- edgeSide - вибрана сторона кромки
- edgeWidth - вибрана ширина кромки
- maxAmount - кількість листів для порізки
- patternDirection - напрям текстури
- possibleAmountOfPieces - кількість деталей з порізки 1 листа
- totalPrice - загальна вартість листів для порізки
- maxAmount - загальна кількість листів порізки

## Used technologies

- React
- Redux
- i18next
- styled-components
- intersection-observer
- toastify
