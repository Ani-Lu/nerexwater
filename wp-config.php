<?php

//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL cookie settings
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'gh429087_water' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'gh429087_water' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'b!R59eN-x3' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'gh429087.mysql.tools' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'gn27BF680y.!F*Qt4%dxrW.KLy&eJy3!cgxLhExw}0s=uKohLhURAAL!r8Q=N3)w' );
define( 'SECURE_AUTH_KEY',  'cJbC_m7J,~A8=g<aqcK&|Sa2N.5yb,hoW5;}0VCRS;&n@9[7(TI/tFr<.-_b6OMt' );
define( 'LOGGED_IN_KEY',    '$Am}_k3yPzU|TVZl ]a/~LX_2&V:}ER5];5fMVMPY`E@~.DAvn;=K<a/W!)mxH<]' );
define( 'NONCE_KEY',        ';ZN~X4c.WunjvJEWS|}u3XwJrk;$bP<Xo&9fN!Y.{U1ijm)x}1:zHd)(bV>w}9!O' );
define( 'AUTH_SALT',        't-Q-b.v#|Im5[=f4-QMEh~$y5Mt.J:jj6==t[khCwm:/kNfSQy4hDI@DH#P)D[OU' );
define( 'SECURE_AUTH_SALT', 'oF9]WNZ6p{EDSj^;D)Aegk B] zMbhb,{;SJ#2!3Vqu1rf!P$w1L;t:aNh<+jTK:' );
define( 'LOGGED_IN_SALT',   '21hkC1Cx$X6Dq?/bRQG)5fQ<~Qw]+nVtX]| t,)P7u6eq<ybAf_&!cF ,b`=jDd-' );
define( 'NONCE_SALT',       '92<cT5XIZrto2OU6)~[x+hWx;/p^$r@7WNqf_h@%dy0]si5%`6Dwo&=&uJan0D[z' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
