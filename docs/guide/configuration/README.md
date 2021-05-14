---
sidebarDepth: 3
---

# Carousel Options

These options relate to the carousel as a whole

## images

type: `Array`

Array containing image urls of images to display in the carousel.
```javascript
[
    "https://images.unsplash.com/photo-1620953749696-38989c40eadb",
    "https://images.unsplash.com/photo-1620973366052-34415f7512c2",
    "https://images.unsplash.com/photo-1614138159368-242fb95e79e6",
    // ...
]
```

## height

type: `Number`

Set desired height of the carousel in pixel units
```vue
<v-dot-carousel
  :images="images"
  :height="200">
</v-dot-carousel>
```