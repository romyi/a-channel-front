### a-channel-front

установите yarn версии ^3.2.2 локально.
для этого может потребоваться node -v ^16

yarn версии ^2 (berry) управляет зависимостями иначе чем версии =1. 
https://yarnpkg.com/features/pnp

Подход имел долгую адаптацию. Но сейчас вроде все более менее ок,
добавлена поддержка многих привычных вещей типа ESModules.

в корне проекта запустите
```
yarn install
```
затем запустите локально vite script
```
yarn dev
```

По-умолчанию в dev режиме Vite (сборщик) подгружает ES модули на клиент
как есть, т.е. не бандлит их (большинство современных браузеров ок с этим).
Поэтому не обращайте внимание на нетворк запросы к статично импортированным
компонентам.

Если вдруг проект откажется собираться или запускаться по каким то причинам,
можно попробовать подобрать зависимости из package.json с yarn classic
(версия 1>) или npm, предварительно удалив .lock
