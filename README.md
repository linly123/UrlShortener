短網址產生器
====
用了Node.js及Express的網站，用作把自選原始網址轉換為短網址，方便使用

Features - 網站功能
----
1. 使用者可於首頁的表單輸入原始網址，然後取得經過回傳格式化後的短網址
2. 使用者可以在瀏覽器的網址列輸入該短網址，瀏覽器就會導向原本的網站

Environment SetUp - 環境建置
----
1.Node.js v12.18.3<br>2.Express v4.17.1<br>3.Express-Handlebars v5.1.0<br>4.Mongoose v5.9.25

Installing - 安裝流程
----
1.開啟terminal，Clone 此專案到本機電腦<br><pre>git clone https://github.com/linly123/UrlShortener.git</pre>
  
2.進入並存放此專案的資料夾<br><pre>cd URL_shortener</pre>
  
3.安裝 npm 套件<br><pre>於Terminal 輸入 npm install nodemon指令</pre>

4.安裝 nodemon 套件<br><pre>於Terminal 輸入 nodemon app.js 指令</pre>

5.啟動伺服器，執行 app.js 檔案<br><pre>nodemon app.js</pre>

6.成功及完成啟動<br><pre>當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結
App is running on http://localhost:3000</pre>
