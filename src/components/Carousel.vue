<template>
  <div class="carousel" :style="`height: ${height}px`">
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
          <img class="carousel__image" :src="image" alt="carousel image" />
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
    height: {
      type: Number,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    dotIndicatorColor: {
      type: String,
      required: false,
      default: '#FFF'
    },
    scrollButtonColor: {
      type: String,
      required: false,
      default: '#000'
    },
    scrollButtonBackgroundColor: {
      type: String,
      required: false,
      default: '#FFF'
    }
  },

  data() {
    return {
      currentSlideIndex: 0,
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
  },

  mounted() {
    const slides = Array.from(this.$refs.carouselTrack.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    slides.forEach((slide, index) => {
      slide.style.left = `${slideWidth * index}px`;
    });
  },
};
</script>

<style>
.carousel {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

.carousel__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  transition: transform 450ms ease-in-out;
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
  width: 4px;
  height: 6px;
  border-radius: 25%;
  opacity: 0.6;
  margin: 0 8px;
  cursor: pointer;
}

.carousel__indicator.current-slide {
  opacity: 1;
}
</style>