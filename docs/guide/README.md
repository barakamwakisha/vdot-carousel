# Getting Started

## Installation

Install with npm:

```bash
npm install --save vdot-carousel
```

Install with yarn
```bash
yarn add vdot-carousel
```


Import globally in app:

```javascript
import VDotCarousel from 'vdot-carousel';

Vue.use(VDotCarousel);
```

**or** you can import into your component:
```js
import VDotCarousel from 'vdot-carousel';

// add to component
components: {
  VDotCarousel,
}
```


## Basic Example

<br/>

<basic-carousel />

```vue
<template>
  <div>
    <v-dot-carousel
      :width="'300px'"
      :height="'300px'"
      :images="images"/>
  </div>
</template>

<script>
export default {
  name: 'my-component',
  data(){
    return {
      images: [
       "https://images.unsplash.com/photo-1620935900933-2aadcf017c7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1620973366052-34415f7512c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        "https://images.unsplash.com/photo-1614138159368-242fb95e79e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
      ],
    };
  },
};
</script>
```

## Usage with Nuxt.js

Create your own plugin by creating a file called `vdot-carousel.js` inside your Nuxt `plugins` folder. Shoud look something like this:

```js
import Vue from 'vue'
import VDotCarousel from 'vdot-carousel';

Vue.use(VDotCarousel);
```

As you can see, the only difference from the normal installation is that we need to reference Vue using `import Vue from 'vue'`.

Next we need to declare the plugin inside your `nuxt.config.js` like so:

```js
plugins: [
  { src: '~/plugins/vdot-carousel', ssr: false }
],
```

This should now work as expected.