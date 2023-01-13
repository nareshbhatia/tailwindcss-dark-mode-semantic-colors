# Tailwind Dark Mode using semantic colors

Demo of implementing dark mode using Tailwind CSS. This version uses semantic
color tokens instead of the `dark` variant provided by tailwind.

![Screenshot](assets/screenshot-light-mode.png)

![Screenshot](assets/screenshot-dark-mode.png)

### Context

This approach was outlined by the Figma team in their Config 2022 presentation
titled
[The hardest part about building dark mode is that people think it’s easy](https://www.youtube.com/watch?v=1DTnojio89Y).
The basic concept is to use a single semantic token to represent a color instead
two atomic tokens, one for light mode and another for dark mode. For example, a
single semantic token called `bg-brand` instead of two atomic tokens
`bg-blue-800` & `dark:bg-blue-600`. The advantage of such a system is that it
can scale to large teams by reducing the chance of picking inconsistent colors.

Here's an example of how I have been able to simplify my Hero banner which
should show a different shade of blue in light vs. dark mode:

```html
<!-- Before --->
<div className="bg-primary-800 dark:bg-primary-600 text-white flex flex-col items-center py-16">
  ...
</div>

<!-- After --->
<div className="bg-brand text-onbrand flex flex-col items-center py-16">
  ...
</div
```

### Implementation Approach

The implementation approach is based on a
[suggestion from Adam Wathan](https://github.com/tailwindlabs/tailwindcss/discussions/10274).
Basically I define a bunch of semantic colors in `tailwind.config.js` using CSS
variables, e.g.

```javascript
module.exports = {
  theme: {
    colors: {},
    backgroundColor: {
      default: 'var(--color-bg-default)',
      'default-hover': 'var(--color-bg-default-hover)',
      brand: 'var(--color-bg-brand)',
      'brand-hover': 'var(--color-bg-brand-hover)',
      secondary: 'var(--color-bg-secondary)',
      'secondary-hover': 'var(--color-bg-secondary-hover)',
    },
    ringColor: {
      brand: 'var(--color-ring-brand)',
      secondary: 'var(--color-ring-secondary)',
    },
    textColor: {
      default: 'var(--color-text-default)',
      onbrand: 'var(--color-text-onbrand)',
      onsecondary: 'var(--color-text-onsecondary)',
    },
    stroke: {
      default: 'var(--color-stroke-default)',
    },
  },
};
```

Then I define these CSS variables in `global.css`, once for each theme:

```css
@layer base {
  .theme-light {
    --color-bg-default: rgba(var(--color-white));
    --color-bg-default-hover: rgba(var(--color-neutral-900), 0.05);
    --color-bg-brand: rgba(var(--color-primary-800));
    --color-bg-brand-hover: rgba(var(--color-primary-700));
    --color-bg-secondary: rgba(var(--color-primary-100));
    --color-bg-secondary-hover: rgba(var(--color-primary-200));

    --color-ring-brand: rgba(var(--color-primary-500));
    --color-ring-secondary: rgba(var(--color-primary-500));

    --color-stroke-default: rgba(var(--color-neutral-900));

    --color-text-default: rgba(var(--color-black));
    --color-text-onbrand: rgba(var(--color-white));
    --color-text-onsecondary: rgba(var(--color-primary-700));
  }

  .theme-dark {
    --color-bg-default: rgba(var(--color-neutral-900));
    --color-bg-default-hover: rgba(var(--color-white), 0.05);
    --color-bg-brand: rgba(var(--color-primary-600));
    --color-bg-brand-hover: rgba(var(--color-primary-700));
    --color-bg-secondary: rgba(var(--color-primary-100));
    --color-bg-secondary-hover: rgba(var(--color-primary-200));

    --color-ring-brand: rgba(var(--color-primary-500));
    --color-ring-secondary: rgba(var(--color-primary-500));

    --color-stroke-default: rgba(var(--color-white));

    --color-text-default: rgba(var(--color-white));
    --color-text-onbrand: rgba(var(--color-white));
    --color-text-onsecondary: rgba(var(--color-primary-700));
  }
}
```

Now switching between the two themes is just a matter of switching the theme
class on the `<html>` element. This is done in the `ModeToggle` component.

## Development Build

```shell
# Run ci in the root directory to install dependencies
npm ci

# Run the app
npm run dev
```

Now point your browser to http://localhost:3000

### Production Build

```shell
npm run build
npm start
```
