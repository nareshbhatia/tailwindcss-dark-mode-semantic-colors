# Tailwind Dark Mode using semantic colors

Demo of implementing dark mode using Tailwind CSS. This version uses semantic
color tokens instead of the `dark` variant provided by tailwind.

### Context

This approach was outlined by the Figma team in their Config 2022 presentation
titled
[The hardest part about building dark mode is that people think it’s easy](https://www.youtube.com/watch?v=1DTnojio89Y).
The basic concept is to use a single semantic token to represent a color instead
two atomic tokens, one for light mode and another for dark mode. For example, a
single semantic token called `bg-brand` instead of two atomic tokens
`bg-blue-800` & `dark:bg-blue-600`. The supposed advantage of such a system is
that it can scale to large teams by reducing the chance of picking inconsistent
colors.

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

My basic implementation approach is to introduce the semantic tokens as custom
utility classes in my global CSS. For example,

```css
@layer utilities {
  .bg-default {
    background-color: theme(colors.white);
  }
  .dark .bg-default {
    background-color: theme(colors.neutral.900);
  }

  .text-default {
    color: theme(colors.black);
  }
  .dark .text-default {
    color: theme(colors.white);
  }

  .bg-brand {
    background-color: theme(colors.primary.800);
  }
  .dark .bg-brand {
    background-color: theme(colors.primary.600);
  }

  .bg-brand-hover {
    background-color: theme(colors.primary.700);
  }

  .text-onbrand {
    color: theme(colors.white);
  }

  .bg-brand-secondary {
    background-color: theme(colors.primary.100);
  }

  .bg-brand-secondary-hover {
    background-color: theme(colors.primary.200);
  }

  .text-onbrand-secondary {
    color: theme(colors.primary.700);
  }

  .bg-default-hover {
    background-color: theme(colors.neutral.900 / 5%);
  }
  .dark .bg-default-hover {
    background-color: theme(colors.white / 5%);
  }
}
```

![Screenshot](assets/screenshot-light-mode.png)

![Screenshot](assets/screenshot-dark-mode.png)

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
