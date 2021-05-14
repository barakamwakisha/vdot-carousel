<p align="center">
    <img height="50" src="./docs/.vuepress/public/vdc-logo-2x.png"
                    alt="Tarablade Logo" title="Tarablade Logo">
</p>

# vdot-carousel

An easy to use, elegant and fully customizable image carousel for VueJS 

## Installing

Install with npm:
```bash
npm install vdot-carousel
```

Install with yarn:
```bash
yarn add vdot-carousel
```

Import globally in app:

```javascript
import VDotCarousel from 'vdot-carousel';

Vue.use(VDotCarousel);
```

Import into your component
```js
import VDotCarousel from 'vdot-carousel';

// add to component
components: {
  VDotCarousel,
}
```

Import into your component using Typescript
```typescript
// add to component
components: {
  'v-dot-carousel': require('vdot-carousel').VDotCarousel,
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details