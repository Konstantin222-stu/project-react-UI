# 🎨 React UI Components Library (Учебный проект)

![React](https://img.shields.io/badge/React-18.2.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

Библиотека UI-компонентов, созданная в учебных целях для освоения React и принципов дизайна интерфейсов.

## 📌 Оглавление

- [Особенности](#особенности)
- [Компоненты](#компоненты)
- [Установка](#установка)
- [Использование](#использование)
- [Демо](#демо)
- [Разработка](#разработка)
- [Лицензия](#лицензия)

## ✨ Особенности

- Простые и понятные компоненты
- Поддержка различных состояний
- Гибкая настройка через пропсы
- Чистый и читаемый код
- Полностью на функциональных компонентах
- Кастомные хуки для работы с UI

## 🧩 Компоненты

### Кнопка (`<Button />`)
| Свойство       | Тип      | По умолчанию | Описание                  |
|----------------|----------|--------------|---------------------------|
| `variant`      | string   | -            | `outline`, `text`         |
| `size`         | string   | `md`         | `sm`, `md`, `lg`          |
| `color`        | string   | `default`    | `primary`, `secondary`, `danger` |
| `disabled`     | boolean  | `false`      | Блокировка кнопки         |
| `disableShadow`| boolean  | `false`      | Отключение тени           |

### Поле ввода (`<Input />`)
| Свойство       | Тип      | По умолчанию | Описание                  |
|----------------|----------|--------------|---------------------------|
| `error`        | boolean  | `false`      | Состояние ошибки          |
| `disabled`     | boolean  | `false`      | Блокировка поля           |
| `helperText`   | string   | -            | Подсказка под полем       |
| `startIcon`    | boolean  | `false`      | Иконка слева              |
| `endIcon`      | boolean  | `false`      | Иконка справа             |
| `size`         | string   | `md`         | `sm`, `md`                |
| `fullWidth`    | boolean  | `false`      | На всю ширину             |
| `multiline`    | boolean  | `false`      | Многострочный ввод        |
| `rows`         | number   | -            | Количество строк          |

## 🚀 Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/ваш-username/react-ui-components.git
cd react-ui-components
```

2. Установите зависимости:
```bash
npm install
```

## 💻 Использование

```jsx
import { Button, Input } from './components';

function App() {
  return (
    <div>
      <Button variant="outline" color="primary">
        Нажми меня
      </Button>
      
      <Input 
        placeholder="Введите текст"
        helperText="Обязательное поле"
        startIcon
      />
    </div>
  );
}
```

## 🖥️ Демо
Запустите демо-приложение:
```bash
npm start
```
Откройте http://localhost:3000 в браузере.


## 🔧 Разработка

Доступные скрипты в package.json:

|Скрипт|	Описание|
|------|----------|
| `start`| `Запуск dev-сервера`|
| `build`| `Сборка проекта`|
