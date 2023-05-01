<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit714bd2d3e3580ac66e249ecd1f3b4bf2
{
    public static $prefixLengthsPsr4 = array (
        'N' => 
        array (
            'NovaPoshta\\' => 11,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'NovaPoshta\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'NovaPoshta\\Vendor\\Auryn\\CachingReflector' => __DIR__ . '/../..' . '/vendor_prefixed/CachingReflector.php',
        'NovaPoshta\\Vendor\\Auryn\\ConfigException' => __DIR__ . '/../..' . '/vendor_prefixed/ConfigException.php',
        'NovaPoshta\\Vendor\\Auryn\\Executable' => __DIR__ . '/../..' . '/vendor_prefixed/Executable.php',
        'NovaPoshta\\Vendor\\Auryn\\InjectionException' => __DIR__ . '/../..' . '/vendor_prefixed/InjectionException.php',
        'NovaPoshta\\Vendor\\Auryn\\Injector' => __DIR__ . '/../..' . '/vendor_prefixed/Injector.php',
        'NovaPoshta\\Vendor\\Auryn\\InjectorException' => __DIR__ . '/../..' . '/vendor_prefixed/InjectorException.php',
        'NovaPoshta\\Vendor\\Auryn\\ReflectionCache' => __DIR__ . '/../..' . '/vendor_prefixed/ReflectionCache.php',
        'NovaPoshta\\Vendor\\Auryn\\ReflectionCacheApc' => __DIR__ . '/../..' . '/vendor_prefixed/ReflectionCacheApc.php',
        'NovaPoshta\\Vendor\\Auryn\\ReflectionCacheArray' => __DIR__ . '/../..' . '/vendor_prefixed/ReflectionCacheArray.php',
        'NovaPoshta\\Vendor\\Auryn\\Reflector' => __DIR__ . '/../..' . '/vendor_prefixed/Reflector.php',
        'NovaPoshta\\Vendor\\Auryn\\StandardReflector' => __DIR__ . '/../..' . '/vendor_prefixed/StandardReflector.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit714bd2d3e3580ac66e249ecd1f3b4bf2::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit714bd2d3e3580ac66e249ecd1f3b4bf2::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit714bd2d3e3580ac66e249ecd1f3b4bf2::$classMap;

        }, null, ClassLoader::class);
    }
}
