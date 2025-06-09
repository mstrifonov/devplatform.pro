# Platform Engineering & IDP Documentation

📖 **Документация по Platform Engineering и Internal Developer Platform (IDP)**.  
В этом репозитории хранится исходный код сайта  
**Автор**: [@trifonovit](https://t.me/trifonovit)  


## 📝 Как редактировать документацию

Документация написана в формате **Markdown** и расположена в папке [`docs/`](./docs).  

### 1. **Структура файлов**
- Все страницы хранятся в:  
  ```
  docs/
  ├── intro.md              # Главная страница
  └── ...                   # Остальные разделы
  ```
- Изображения и диаграммы – в [`static/img/`](./static/img).  
å
### 2. **Формат Markdown**
Docusaurus поддерживает расширенный Markdown с React-компонентами.  

### 3. **Локальный просмотр изменений**
Чтобы проверить правки:  

1. Установите зависимости (если ещё не):  
   ```bash
   npm install
   ```

2. Запустите локальный сервер:  
   ```bash
   npm run start
   ```
   Сайт откроется на [http://localhost:3000](http://localhost:3000).  

3. Изменения **автоматически** применяются при сохранении файлов.  


## 🤝 Правила внесения изменений
1. **Ветка**: Создайте новую ветку (`git checkout -b docs/fix-typo`).  
2. **Коммит**:  
   ```bash
   git add .
   git commit -m "docs: исправлена опечатка в разделе CI/CD"
   ```
3. **Пушинг и PR**:  
   ```bash
   git push origin docs/fix-typo
   ```
   Затем откройте Pull Request в `main`.  

## 📜 Лицензия
MIT License.  

---
💬 **Вопросы?** Откройте [Issue](https://github.com/mstrifonov/issues) или напишите в TG ([@mstrifonov](https://t.me/mstrifonov)).  