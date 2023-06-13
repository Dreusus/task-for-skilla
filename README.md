# **Frontend Test task**
----
## Задача
Разработать часть проекта на React
Основной момент - важно в работе показать умение правильно верстать по макету
- меню - статика без функционала, активный раздел "Звонки"
- листинг звонков с выборкой по датам
- выбор входящих, исходящих или всех звонков
- проигрывание записи (если есть)
- сортировка на клиенте
Данные можно взять с тестового API

## Stack
* HTML
* CSS
* React.js

##
Данные на гифках получены POST запросом с авторизацией через тестовый токен.  
date_start	- 01.06.2023   
date_end	- 11.06.2023  
in_out - ""  
Использованы кастомные функции форматирования даты, длительности разговора, номера телефона  

## Dropdown-menu
![](https://raw.githubusercontent.com/Dreusus/testtask-for-skilla/main/src/gif/dropdownmenu.gif)

## Custom Audio-player
![](https://raw.githubusercontent.com/Dreusus/testtask-for-skilla/main/src/gif/AudioPlayer.gif)  
(В ответе от сервера приходит пустой record, поэтому показывает длительность 00:00)    
![](https://raw.githubusercontent.com/Dreusus/testtask-for-skilla/main/src/gif/API.png)![](https://raw.githubusercontent.com/Dreusus/testtask-for-skilla/main/src/gif/server-response.png)

## Sidebar-buttons
![](https://raw.githubusercontent.com/Dreusus/testtask-for-skilla/main/src/gif/Sidebar%20hover%20active.gif)


## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.



