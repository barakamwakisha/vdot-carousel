<template>
  <div>
    <v-dot-carousel :width="'400px'" :height="'400px'" :images="images" />
  </div>
</template>

<script>
export default {
  name: "basic-carousel",
  data() {
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