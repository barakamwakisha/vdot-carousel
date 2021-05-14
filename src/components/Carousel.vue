<template>
  <div class="carousel">
    <button class="carousel__button carousel__button--left">
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
      <ul class="carousel__track">
        <li class="carousel__slide">
          <img
            class="carousel__image"
            src="https://images.unsplash.com/photo-1620935900933-2aadcf017c7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="carousel image"
          />
        </li>
        <li class="carousel__slide">
          <img
            class="carousel__image"
            src="https://images.unsplash.com/photo-1620973366052-34415f7512c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
            alt="carousel image"
          />
        </li>
        <li class="carousel__slide">
          <img
            class="carousel__image"
            src="https://images.unsplash.com/photo-1614138159368-242fb95e79e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt="carousel image"
          />
        </li>
      </ul>
    </div>
    <button class="carousel__button carousel__button--right">
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
      <button class="carousel__indicator current-slide"></button>
      <button class="carousel__indicator"></button>
      <button class="carousel__indicator"></button>
    </div>
  </div>
</template>

<style>
.carousel {
  position: relative;
  height: 600px;
  width: 80%;
  margin: 0 auto;
}

.carousel__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel__track-container {
  background: lightgreen;
  height: 100%;
  position: relative;
}

.carousel__track {
  padding: 0;
  margin: 0;
  list-style: none;
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
  transform: scale(.9, .9);
  background: rgba(255,255,255, .85);
  border: 0;
  color: #000;
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  z-index: 1000;
  transition: all 100ms ease-in-out;
}

.carousel__button:hover {
    background: rgba(255,255,255, 1);
    transform: scale(1, 1);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.carousel__button--left {
    position: absolute;
    left: 0;
    margin-left: 16px;
}

.carousel__button--right {
    position: absolute;
    right: 0;
    margin-right: 16px;
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
    height: 4px;
    background: rgb(255, 255, 255);
    opacity: 0.6;
    margin: 0 4px;
}

.carousel__indicator.current-slide {
    opacity: 1; 
}
</style>