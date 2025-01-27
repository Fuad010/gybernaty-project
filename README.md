# Проект на React + Vite с использованием FSD-архитектуры

## 📦 Стек технологий

- **React**
- **Vite**
- **TypeScript**
- **Effector** для управления состоянием
- **@Emotion/styled** для стилизации компонентов
- **FSD (Feature-Sliced Design)** архитектура для структурирования проекта
- **Bun** в качестве менеджера пакетов

---

## 🚀 Установка и запуск проекта

### Предварительные требования

- Убедитесь, что на вашем компьютере установлен [Bun](https://bun.sh/) (версия 1.0 или выше).

### Установка зависимостей

```bash
bun install
```

### Запуск проекта в режиме разработки

```bash
bun run dev
```

После запуска проект будет доступен по адресу: `http://localhost:5173` (по умолчанию).

### Сборка проекта для продакшена

```bash
bun run build
```

Собранные файлы будут находиться в папке `dist`.

### Предварительный просмотр собранной версии

```bash
bun run preview
```

---

## 🗂️ Структура проекта

Проект организован в соответствии с принципами **Feature-Sliced Design**:

```plaintext
src/
├── app/            # Инициализация приложения (роутинг, контекст и т.д.)
├── shared/         # Общие модули (утилиты, хелперы, UI-компоненты, библиотеки)
├── entities/       # Бизнес-сущности приложения (например, User, Product и т.д.)
├── features/       # Реализация пользовательских фич (например, авторизация, поиск)
├── widgets/        # Группы компонентов для создания значительных частей интерфейса
├── pages/          # Страницы приложения, соединяющие виджеты, фичи и сущности
└── processes/      # Процессы, объединяющие несколько фич (например, оформление заказа)
```

---

## 🛠️ Скрипты проекта

- `bun install` — Установка зависимостей
- `bun run dev` — Запуск в режиме разработки
- `bun run build` — Сборка проекта
- `bun run preview` — Предпросмотр собранного проекта

---

## 📖 Полезные ссылки

- **Документация Feature-Sliced Design**: [feature-sliced.design](https://feature-sliced.design/)
- **Bun**: [bun.sh](https://bun.sh/)
