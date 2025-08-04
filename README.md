eleven labs voice kullanabilirsin.

first time login için neler yapabilirm???
aklıma gelen şeyler neler...

başlangıçta hangi planı seçeceğini sorarız
sonra stripe ekranına göndeririz
kullanıcıya hangi kategorileri sevdiğini sorarız
- firts time user signs up user will redirectted to stripe screen (you don't need to do anything about that i will handle it)
- after user signsup it will redirect to /first-time-login

in this page here is what we are going to do:
- in here user is going to choose what things are his interests
    - categories are:
        - Electronics
        - Computers
        - Audio
        - Gaming
        - Fashion
        - Home
        - Sports
        - Books
        - Cars
- user needs to select at least 3 categories and continue button will be gray until it comes to 3 (and max 10)
    - and for example if user sellected 2 category it will write 2/3 on button after that it will write Contine
- after user sellects done