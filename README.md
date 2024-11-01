# Echogardiner.dk

## Guide to editing echogardiner.dk

[Astro documentation](https://docs.astro.build/en/getting-started/)

---

Clone the repo and then:

`npm install`

### Adding blocks

Import a component and insert inside the `Layout` component in index.astro. The syntax is identical to React components

### Editing blocks

These function a lot like react components. You can find them in src/components and they end in .astro.

The file is divided into the parts:

1. The top part (between the two lines of ---) is code that runs when the component is rendered - so only once. This is where you setup props, import content and so on

2. The middle part is the content. Like react, you need to wrap all the content in a single div/section/acticle

3. The bottom part is the styling. Open and close a `<style>` tag and write plain css in here. The css will be scoped to the specific component, and will not cascade to others. So you can use the same classnames on different components, and have different css properties for each

#### Styling

[Docs](https://docs.astro.build/en/guides/styling/)

I have styled the project with a combination of Tailwind and plain css - 95% of the project is tailwind, it is mostly colors that are created with with custom classes.

##### Layout.astro

In the _src/layouts_ folder, you find the Layout.astro file. This is the wrapper for the whole page:

```html
<body>
    <main class="min-h-screen bg-main-white mx-auto">
        <slot />
    </main>
</body>
```

All the content of the page is put inside the `<slot />` element. So if you need to edit the layout of the entire page, you need to edit this element.

##### Style in Layout.astro

The styles in the layout tag are global - you can see this by the tag having the `is:global` attribute. This is where you define fonts, colors and and other global properties.

##### Using props as styles

The site uses props to change colors of the background and text, with the properties `bg_color` and `text_color`. The useable colors can be found in the style tag in Layout.astro. The syntax i have used to combine Tailwind utility classes and custom classes, is as follows:

```html
<element class:list={["tailwind classes"]} class={prop}></element>
```

The reason for this, is that i am a bad developer, and I could not figure out how to have them on the same line.

##### Description of each prop

-   title: Title of text (h2) - string
-   content: Paragraph (p) - string
-   bg_color: Background color of element - string
-   text_color: Color of text elements - string
-   order: Decides whether image or text is first. Use `true` if image is to be first, leave out if not - boolean
-   imagePath: Path to image. use `"/src/assets/imagefilename.jpg"` - string

#### Scripting

[Docs](https://docs.astro.build/en/guides/client-side-scripts/)

Insert a `<script>` tag below the html in the component, and write javascript as normal

### If anything breaks

Feel free to call me

### Launching

Run `npm run build` and upload the dist folder to webdock.
