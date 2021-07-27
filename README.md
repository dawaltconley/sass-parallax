# sass-parallax

A small set of mixins for building pure CSS parallax websites. Based on [Keith
Clark's layout](https://keithclark.co.uk/articles/pure-css-parallax-websites/).

## Basic Use

```scss
@use 'node_modules/sass-parallax/mixins' as parallax with ($perspective: 100px);

body {
    @include parallax.body();
}

.parallax-page {
    @include parallax.page();
}

.parallax-group {
    @include parallax.group();
}

.parallax-bg-deep {
    @include parallax.bg(-200px);
}

.parallax-bg-middle {
    @include parallax.bg(-100px);
}

.parallax-bg-shallow {
    @include parallax.bg(-50px);
}
```

Document should look something like this:

```html
<body>
    <div class="parallax-page">
        <div class="parallax-group">
            <div class="parallax-bg-deep"></div>
            <div class="parallax-bg-middle"></div>
        </div>
        <div>
            Non-parallax content
        </div>
        <div class="parallax-group">
            <div class="parallax-bg-shallow"></div>
        </div>
    </div>
</body>
```

The mixins import also exposes the `support` mixin, which can be used to include
some content only if the browser supports CSS parallax.

```scss
.element {
    // some default styles
    @include parallax.support {
        // some parallax-only styles
    }
}
```

## Options

### `$perspective`

You can configure the depth of field when importing the mixins by setting the
`perspective` variable. The higher the value, the "further back" (more negative
pixels) will be required to slow the movement of an element. By default it is
`2000px`; pretty shallow.

The `$perspective` can also be individually set as a parameter in the `page` and
`bg` mixins, although this is not recommended, as any difference between them
will throw off the parallax alignment.

### `$IE`

In order for parallax layouts to display properly in Internet Explorer (as flat,
non-parallax pages) every immediate childe of a `group` element must have their
position set to either relative or absolute. This is off by default, to avoid
potential cascade issues, but can be applied by setting `$IE` to `true` when
importing the mixins, or when the `group` mixin.

```scss
@use 'node_modules/sass-parallax/mixins' as parallax with ($IE: true);

.parallax-group {
    @include parallax.group($IE: true);
}
```

### `$offset`

By default, an offset is applied to parallax groups, in order to avoid [issues caused by certain system scrollbars](https://dawaltconley.github.io/parallax-gap-fix/). This can be tweaked on import or include as well, but an offset of `100` is recommended for best performance on most browsers.