<template>
  <div class="carousel" :style="`height: ${height}; width: ${width}`">
    <button
      ref="leftButton"
      @click="slideLeft"
      class="carousel__button carousel__button--left"
      :style="`color: ${scrollButtonColor}; background: ${scrollButtonBackgroundColor}`"
    >
      <svg
        viewBox="0 0 16 16"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        style="height: 12px; width: 12px; display: block; fill: currentcolor"
      >
        <path
          d="m10.8 16c-.4 0-.7-.1-.9-.4l-6.8-6.7c-.5-.5-.5-1.3 0-1.8l6.8-6.7c.5-.5 1.2-.5 1.7 0s .5 1.2 0 1.7l-5.8 5.9 5.8 5.9c.5.5.5 1.2 0 1.7-.2.3-.5.4-.8.4"
        ></path>
      </svg>
    </button>
    <div class="carousel__track-container">
      <ul ref="carouselTrack" class="carousel__track">
        <li
          class="carousel__slide"
          v-for="(image, index) in images"
          :key="index"
          :ref="`vdot-slide-${index}`"
        >
          <img class="carousel__image" :src="image.src" :alt="image.alt"/>
        </li>
      </ul>
    </div>
    <button
      ref="rightButton"
      @click="slideRight"
      class="carousel__button carousel__button--right"
      :style="`color: ${scrollButtonColor}; background: ${scrollButtonBackgroundColor}`"
    >
      <svg
        viewBox="0 0 16 16"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        style="height: 12px; width: 12px; display: block; fill: currentcolor"
      >
        <path
          d="m5.3 16c .3 0 .6-.1.8-.4l6.8-6.7c.5-.5.5-1.3 0-1.8l-6.8-6.7c-.5-.5-1.2-.5-1.7 0s-.5 1.2 0 1.7l5.8 5.9-5.8 5.9c-.5.5-.5 1.2 0 1.7.2.3.5.4.9.4"
        ></path>
      </svg>
    </button>

    <div class="carousel__nav">
      <button
        v-for="(image, index) in images"
        :key="index"
        class="carousel__indicator"
        :class="currentSlideIndex == index ? 'current-slide' : ''"
        :style="`background: ${dotIndicatorColor}`"
        :ref="`vdot-indicator-${index}`"
        @click="moveToSlide(index)"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-dot-carousel",
  props: {
    /**
       * The width of the carousel
       * @examples 50%, 200px, 5vw, 3rem
    */
    width: { type: String, required: true },

    /**
       * The height of the carousel
       * @examples 50%, 200px, 5vw, 3rem
    */
    height: { type: String, required: true },

    /**
       * An array of objects containing image src and alt attributes to display on the carousel
       * @examples ["https://images.unsplash.com/photo-1620935900933-2aadcf017c7a", "..."]
    */
    images: { type: Array, required: true },

    /**
       * The color of the dot slide indicators at the bottom of the carousel
       * @examples red, #FFF, rgb(0, 0, 0)
    */
    dotIndicatorColor: { type: String, required: false, default: '#FFF' },

    /**
       * The color of the carets in the left and right carousel scroll buttons
       * @examples red, #FFF, rgb(0, 0, 0)
    */
    scrollButtonColor: { type: String, required: false, default: '#000' },

     /**
       * The background color of the left and right carousel scroll buttons
       * @examples red, #FFF, rgb(0, 0, 0)
    */
    scrollButtonBackgroundColor: { type: String, required: false, default: '#FFF' }
  },

  data() {
    return {
      currentSlideIndex: 0,
      x0: null,
    };
  },
  
  methods: {
    moveToSlide(targetSlideIndex) {
      const track = this.$refs.carouselTrack;
      const targetSlide = this.$refs[`vdot-slide-${targetSlideIndex}`][0];
      const amountToMove = targetSlide.style.left;

      track.style.transform = `translateX(-${amountToMove})`;
      this.currentSlideIndex = targetSlideIndex;
    },

    slideRight() {
      if (this.currentSlideIndex == this.images.length - 1) {
        this.currentSlideIndex = -1;
      }
      this.moveToSlide(this.currentSlideIndex + 1);
    },

    slideLeft() {
      if (this.currentSlideIndex == 0) {
        this.currentSlideIndex = this.images.length;
      }
      this.moveToSlide(this.currentSlideIndex - 1);
    },

    slide(e) {
      const dx = this.unify(e).clientX - this.x0, s = Math.sign(dx);
      if(s == -1 && this.currentSlideIndex != this.images.length - 1) {
        this.slideRight();
      } else if(s == 1 && this.currentSlideIndex != 0) {
        this.slideLeft();
      }
    },

    unify(e) {
      return e.changedTouches ? e.changedTouches[0] : e;
    },

    lock(e) {
      this.x0 = this.unify(e).clientX;
    }
  },

  mounted() {
    const track = this.$refs.carouselTrack;
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    slides.forEach((slide, index) => {
      slide.style.left = `${slideWidth * index}px`;
    });

    track.addEventListener('touchmove', e => e.preventDefault(), false);

    track.addEventListener('mousedown', this.lock, false);
    track.addEventListener('touchstart', this.lock, false);

    track.addEventListener('mouseup', this.slide, false);
    track.addEventListener('touchend', this.slide, false);
  },
};
</script>

<style>
.carousel {
  position: relative;
  margin: 0 auto;
}

.carousel__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.carousel__image::selection {
  background: none;
}

.carousel__track-container {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.carousel__track {
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
  height: 100%;
  transition: transform 250ms ease-in-out;
}

.carousel__slide {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

.carousel__button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transform: scale(0.9, 0.9);
  opacity: 0.85;
  border: 0;
  color: #000;
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  z-index: 1000;
  transition: all 100ms ease-in-out;
}

.carousel__button:hover {
  opacity: 1;
  transform: scale(1, 1);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.carousel__button--left {
  position: absolute;
  left: 0;
  margin-left: 24px;
}

.carousel__button--right {
  position: absolute;
  right: 0;
  margin-right: 24px;
}

.carousel__nav {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  position: absolute;
  width: 100%;
  z-index: 1000;
  bottom: 1rem;
}

.carousel__indicator {
  border: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0.6;
  margin: 0 8px;
  padding: 0;
  cursor: pointer;
}

.carousel__indicator.current-slide {
  opacity: 1;
}
</style>