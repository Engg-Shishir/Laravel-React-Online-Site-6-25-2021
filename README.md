# Laravel-React-Online-Site 6/25-2021
<br><br><br><br>


+ Install Laravel `composer create-project laravel/laravel blog`
+ Laravel Ui `composer require laravel/ui`
+ ui React `php artisan ui react`
+ ui bootstrap `php artisan ui bootstrap`
+ Go webpack.mix.js
```javascript
mix.js('resources/js/Main.js', 'public/js').react()
    .sass('resources/sass/main.scss', 'public/css')
    .sourceMaps();
```
+ Genarel view setup
```html
<!-- index.blade.php -->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel & React Course Site</title>
        <!-- this is public folder file -->
        <link rel="stylesheet" href="{{asset('css/main.css')}}">
    </head>
    <body>
        <!-- This root call from Index.js file & Index.js file call from Main.js file. At last Main.js file transfer everything in public folder using Laravel Mix-->
        <div id="root"></div>

        <!-- this is public folder file -->
        <script type="text/javascript" src="{{asset('js/Main.js')}}"></script>
    </body>
</html>
```

+ Run `npm install`
+ Install React Bootstrap `npm install react-bootstrap bootstrap`
+ Install `reportWebVitals.js`
+ Run `npm run dev` sometimes we need to run again

+ Attention Please : If you folow react original pure file folder  structure , Sometimes you find error when `npm run dev` is fire.Such that `reportWebVitals.js in Laravel8`But dont wory.Read error carefully.If there is called some module is not found.Go and install it and alaways follow Laravel official documentation.




+ 
 
