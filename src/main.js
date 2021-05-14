import VDotCarousel from './components/Carousel.vue';

const VDotCarouselPlugin = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    Vue.component(VDotCarousel.name, VDotCarousel);
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VDotCarouselPlugin);
}

export default VDotCarouselPlugin;