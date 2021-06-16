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

## width

type: `String`

Set desired width of the carousel in any valid css units
```vue
<v-dot-carousel
  ...
  :width="'100%'">
</v-dot-carousel>
```

## height

type: `String`

Set desired height of the carousel in any valid css units
```vue
<v-dot-carousel
  ...
  :height="'200px'">
</v-dot-carousel>
```

## dotIndicatorColor (Optional)

type: `String`

default: `#FFF`

Set the bottom dot indicators color. You can provide a valid css color e.g 'red', a hex value e.g '#EC7123' or an rgb value e.g rgb(200, 40, 75).
```vue
<v-dot-carousel
  :images="images"
  :height="200"
  :dotIndicatorColor="#ec7123">
</v-dot-carousel>
```

## scrollButtonColor (Optional)

type: `String`

default: `#000`

Set the left and right scroll buttons' arrow color.
```vue
<v-dot-carousel
  :images="images"
  :height="200"
  :scrollButtonColor="#2AA249">
</v-dot-carousel>
```

## scrollButtonBackgroundColor (Optional)

type: `String`

default: `#FFF`

Set the left and right scroll buttons' background color.
```vue
<v-dot-carousel
  :images="images"
  :height="200"
  :scrollButtonBackgroundColor="transparent">
</v-dot-carousel>
```