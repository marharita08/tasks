1. Відкрити командний рядок та перейти у папку проєкту.
2. Ініціалізувати локальний репозиторій, виконавши команду:
   ```shell
   git init
   ```
3. Додати всі файли до репозиторію:
   ```shell
   git add .
   ```
4. Зробити коміт:
   ```shell
   git commit -m "Add code"
   ```
5. Прив'язати локальний репозиторій до віддаленого:
   ```shell
   git remote add origin https://git@example.com:example/test.git
   ```
6. Запушити код у гілку master віддаленого репозиторію:   
   ```shell
   git push origin master
   ```
