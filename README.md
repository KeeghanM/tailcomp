# Tailcomp - Tailwind Composer

Welcome to Tailcomp, the intuitive TypeScript library designed to make composing Tailwind CSS classes simpler and more efficient. Tailcomp leverages the power of Tailwind CSS, while enabling developers to define their styles in a structured, JavaScript object format. Say goodbye to long, hard-to-read class strings and hello to a cleaner, more organized approach to styling your Next.js projects.

`<div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">/* ... */</div>`

**_becomes_**

```
<div className={tc({
    base: {
        static: "flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow",
        hover: "bg-gray-100",
        dark: {
            static: "border-gray-700 bg-gray-800",
            hover: "bg-gray-700"
        }
    },
    md: {
        static: "flex-row max-w-xl"
    },
})}>
```

_Credit to Flowbite for the [card example](https://flowbite.com/docs/components/card/)._

## Introduction

Tailwind CSS has revolutionized the way we think about writing CSS, offering a utility-first approach that speeds up the development process as well as allowing for smaller bundle sizes. However, as projects grow, managing those utility classes can become cumbersome. Tailcomp aims to solve this by providing a simple yet powerful function, `tc()`, that lets you compose and manage Tailwind classes more elegantly.

By maintaining a consistent pattern of Media Query > Colour Scheme > Dynamic Style (hover, focus etc), you are able to easily and quickly identify what classes will be affecting what. This focus on clarity will make not only the DX (Developer Experience) better, but also other (often forgotten) elements of development like Code Reviews much smoother as well!

## Key Features

- **Simplicity**: Use JavaScript objects to define your styles, making them easier to read and manage.
- **Efficiency**: Reduce the verbosity of your HTML with the `tc()` function, streamlining your development workflow.
- **Flexibility**: Tailcomp is designed with extensibility in mind, ready to adapt to future changes in Tailwind CSS and support for other frameworks.

## Install steps

### The following steps are for Next.js projects, but can be adapted to other frameworks as well.

1. Ensure you have Tailwind CSS installed in your project already
2. Install Tailcomp via npm or yarn:

`npm -i tailcomp`

`yarn add tailcomp`

3. Add a prebuild step to your package.json to generate the Tailcomp types:

```
"scripts": {
    "prebuild": "node ./node_modules/tailcomp/dist/generateClasses.js",
}
```

4. To regenerate the types on the fly in dev mode, change your "dev" script to use nodemon

`npm install --save-dev nodemon`

```
"scripts": {
    "dev": "nodemon --watch \"src/**/*.{js,ts,tsx}\" --ignore \"src/styles/tailcomp.js\" --exec \"npm run prebuild && next dev\"",
}
```

## Get Involved

Tailcomp is an open-source project, and contributions are welcome. Whether you're looking to fix a bug, add a new feature, or improve the documentation, your help is appreciated.

## Stay Connected

For updates, follow me on Twitter: [@keeghanmcg](https://twitter.com/keeghanmcg)

---

Tailcomp is licensed under [MIT](https://mit-license.org/). Feel free to use, share, and contribute back!
