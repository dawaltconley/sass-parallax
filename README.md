# sass-parallax

A small set of mixins for building pure CSS parallax websites. Based on [Keith
Clark's layout](https://keithclark.co.uk/articles/pure-css-parallax-websites/).

## Basic Use

```scss
@use 'node_modules/sass-parallax' with ($perspective: 100px);

body {
    @include sass-parallax.body();
}

.parallax {
    @include sass-parallax.page();
}

.parallax__group {
    @include sass-parallax.group();
}

.parallax__bg--deep {
    @include sass-parallax.bg(-200px);
}

.parallax__bg--middle {
    @include sass-parallax.bg(-100px);
}

.parallax__bg--shallow {
    @include sass-parallax.bg(-50px);
}
```

Document should look something like this:

```html
<body>
    <div class="parallax">
        <div class="parallax__group">
            <div class="parallax__bg--deep"></div>
            <div class="parallax__bg--middle"></div>
        </div>
        <div>
            Non-parallax content
        </div>
        <div class="parallax__group">
            <div class="parallax__bg--shallow"></div>
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
non-parallax pages) every immediate child of a `group` element must have their
position set to either relative or absolute. This is off by default, to avoid
potential cascade issues, but can be applied by setting `$IE` to `true` when
importing the mixins, or when using the `group` mixin.

```scss
@use 'node_modules/sass-parallax' with ($IE: true);

.parallax__group {
    @include sass-parallax.group($IE: true);
}
```

### `$css-properites`

Setting this to `true` will use CSS properties where possible. Rather than letting Sass handle most of the math during build, the `bg` function will output `calc` statements for the browser to render. This allows live editing of an element's parallax depth using the `--parallax-depth` property. This property is a unitless number, and calculates depth relative to the `--parallax-perspective` property.

```scss
@use 'node_modules/sass-parallax' with ($css-properties: true);

.parallax {
    @include sass-parallax.page(100px, $css-properties: true);
    // --parallax-perspective: 100px;
    // sets the perspective on this element
    // and is inherited by its children
}

.parallax__bg--deep {
    @include sass-parallax.bg(-2, $css-properties: true);
    // --parallax-depth: -2;
    // controls depth of this background element
    // relative to --parallax-perspective
}
```

### `$disable`

A boolean option, defaults to `false`. Setting this to `true` will omit any styles within the `support` mixin, mimicking the styles of an unsupported browser. Useful for testing.

## Pure CSS

This package outputs a pure CSS file, `dist/parallax.css`, with `.parallax`, `.parallax__group`, and `.parallax__bg` classes that style parallax elements using the above CSS properties.
