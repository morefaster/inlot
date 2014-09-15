<!DOCTYPE html>
<html lang="ru">
<head>
    <meta name="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title>Список файлов</title>
    <meta name="X-UA-Compatible" content="IE=edge, chrome=1">
    
    <!-- include jQuery Library -->
    <script src="js/jquery-1.9.1.min.js" type="text/javascript"></script>
    <!--[if lt IE 9]>
        <script src="js/html5.js" type="text/javascript"></script>
        <script src="js/IE9.js" type="text/javascript"></script>
        <link href="css/ie.css" rel="stylesheet" type="text/css">
    <![endif]-->

    <!-- base style site -->
    <link href="css/reset.css" rel="stylesheet" type="text/css">
    <link href="css/main.css" rel="stylesheet" type="text/css">
    <!-- favicon -->
    <link rel="shortcut icon" href="img/favicon.ico">

    <!-- jQuery FormStyler -->
    <link href="js/formstyler/jquery.formstyler.css" rel="stylesheet" type="text/css">
    <script src="js/formstyler/jquery.formstyler.min.js" type="text/javascript"></script>

    <!-- modal Window -->
    <link href="js/articmodal/jquery.arcticmodal-0.3.css" rel="stylesheet" type="text/css">
    <link href="js/articmodal/simple.css" rel="stylesheet" type="text/css">
    <script src="js/articmodal/jquery.arcticmodal-0.3.min.js" type="text/javascript"></script>

    <script src="js/main.js" type="text/javascript"></script>
</head>
<body>
<div id="page_container">
<header>
    <div class="top_menu">
        <div class="container clearfix">
            <div class="flLeft">
                <a class="enter_site" href="">Вход</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Регистрация</a>
            </div>
            <div style="display: none;">
                <div class="box-modal" id="BoxModalLogin">
                    <div class="box-modal_close arcticmodal-close"></div>
                    <form action="#" method="post" class="modalEnter_toSiteForm">
                        <p>Войти через социальные сети</p>
                        <div class="socials clearfix">
                            <nav>
                                <a class="vk" href="#"></a>
                                <a class="fb" href="#"></a>
                                <a class="odn" href="#"></a>
                                <a class="mailru" href="#"></a>
                            </nav>
                        </div>
                        <div class="EnterSiteModal_form">
                            <h3 class="w_r_title">Войти</h3>
                            <p><input type="text" class="styled" style="width: 100%;" placeholder="E-mail"></p>
                            <p><input type="text" class="styled" style="width: 100%;" placeholder="E-mail"></p>
                            <div class="flLeft">
                                <a class="orange under" href="#">Забыли пароль?</a><br>
                                <a class="orange under" href="#">Зарегистрироваться?</a>
                            </div>
                            <div class="flRight">
                                <input type="submit" class="submit" value="Войти">
                            </div>
                            <div class="clear"></div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="flRight">
                <nav class="top_menu-right">
                    <a href="#">Мой кабинет</a>
                    <a href="#">Доставка и оплата</a>
                    <a href="#">Форум</a>
                    <a href="#">Помошь</a>
                    <a href="#">Корзина</a>
                </nav>
            </div>
        </div>
    </div>
    <div class="container cart clearfix">
        <div class="flLeft">
            <a class="h_logo" href="#"><img src="img/head_logo.png" width="132" height="34"></a>
        </div>
        <div class="flRight header_search_panel">
            <div class="h_search_panel">
                    <input class="styled header" type="text" value="" name="s">
                    <div class="menu-categories-header">
                        <a href="#">Все категории <span class="arrow"></span></a>
                        <div class="submenu">
                            <ul>
                                <li><a href="#">Транспорт и запчасти</a></li>
                                <li><a href="#">Электроника</a></li>
                                <li><a href="#">Недвижимость</a></li>
                                <li><a href="#">Готовый бизнес</a></li>
                                <li><a href="#">Одежда и обувь</a></li>
                                <li><a href="#">Украшения и часы</a></li>
                                <li><a href="#">Игры, музыка, фильмы</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Коллекционирование</a></li>
                                <li><a href="#">Искусство и антиквариат</a></li>
                                <li><a href="#">Книги</a></li>
                                <li><a href="#">Дом и сад</a></li>
                                <li><a href="#">Мебель</a></li>
                                <li><a href="#">Ремонт и строительство</a></li>
                                <li><a href="#">Товары для детей</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Товары для спорта</a></li>
                                <li><a href="#">Растения и животные</a></li>
                                <li><a href="#">Красота и здоровье</a></li>
                                <li><a href="#">Праздники и подарки</a></li>
                                <li><a href="#">Хобби</a></li>
                                <li><a href="#">Услуги</a></li>
                                <li><a href="#"></a></li>
                            </ul>
                        </div>
                    </div>
                    <input class="submit" type="submit" value="Поиск">
                </div>
            <div class="h_opt-search">
                <a class="orange" href="#">Расширенный поиск</a>
            </div>
        </div>
    </div>
</header>
<div id="wrapper">
    <div class="container">
        <nav class="navigation_cart">
            <a href="#">Аукцион</a>
            <a href="#">Самое популярное</a>
            <a href="#">Оптовые товары</a>
            <a href="#">Товары со скидками</a>
        </nav>
        <div class="w_content" style="padding-top: 30px;">
            <h3 class="w_r_title">Список страниц</h3>
            <style>
                .listing_files_proj li {
                    margin:0 0 10px;
                    list-style-position: inside; 
                    list-style-type: decimal;
                }
                .listing_files_proj li a { color: #333 !important; }
                .listing_files_proj li a:hover { color: #c00 !important; }
                .listing_files_proj li a:visited { color: #fa8002 !important; }
            </style>
            <ul class="listing_files_proj">
                <?php
                    $dir = opendir (".");
                    $i_files = 0;
                    while ( $file = readdir ($dir))
                    {
                        if (( $file != ".") && ($file != "..") && (!is_dir($file)) && ($file != '.htaccess')){
                            $i_files++;
                            echo "<li><a class='orange' href='$file'>$file</a></li>";

                        }
                    }
                    closedir ($dir);
                ?>
            </ul>
        </div>
    </div>
</div>
<footer>
        <div class="container">
            <div class="footer_cols clearfix">
                <div class="f_bl_line f_bl_line1">
                    <ul class="f_menu">
                        <li><a href="javascript:void(0)">Сервисы</a></li>
                        <li><a href="#">Доставка и оплата</a></li>
                        <li><a href="#">Возврат товаров</a></li>
                        <li><a href="#">Справка</a></li>
                        <li><a href="#">Правила торговой площадки</a></li>
                    </ul>
                </div>
                <div class="f_bl_line f_bl_line2">
                    <ul class="f_menu">
                        <li><a href="javascript:void(0)">Информация</a></li>
                        <li><a href="#">Пользовательское соглашение</a></li>
                        <li><a href="#">Программа защиты покупателей</a></li>
                        <li><a href="#">Программа защиты продавцов</a></li>
                        <li><a href="#">Конфидециальность</a></li>
                    </ul>
                </div>
                <div class="f_bl_line f_bl_line3">
                    <ul class="f_menu">
                        <li><a href="javascript:void(0)">О нас</a></li>
                        <li><a href="#">Информация о компании</a></li>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">Реклама на сайте</a></li>
                        <li><a href="#">Связаться с нами</a></li>
                    </ul>
                </div>
                <div class="f_bl_line f_bl_line4">
                    <div><b>Подписка на объявления</b></div>
                    <div class="form_subscribe-footer">
                        <form action="#" method="post">
                            <input type="text" class="styled f-subs" placeholder="Введите e-mail"><br>
                            <input type="submit" class="submit" value="Подписаться">
                        </form>
                    </div>
                    <div class="connect_us-footer">
                        <div><b>Присоединяйтесь</b></div>
                        <nav class="soc-icons_f">
                            <a href="#" class="vk" title="Вконтакте"></a>
                            <a href="#" class="fb" title="Facebook"></a>
                            <a href="#" class="tw" title="Twitter"></a>
                            <a href="#" class="in" title="Instagram"></a>
                            <a href="#" class="gp" title="Google Plus"></a>
                            <a href="#" class="od" title="Одноклассники"></a>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="foot_line2">
                <p>ООО “Инлот” 2013.</p>
            </div>
        </div>
    </footer>
</div>
</body>
</html>