<template>
  <span v-waypoint="{ active: true, callback: waypointHandler }">
    <span v-if="!showText"></span>
    <span v-for="(char, index) in text" :key="index" v-if="showText"
      class="text-char block uppercase text-[14px] tracking-[2px] font-semibold text-[#45f882] leading-none mt-0 mb-[7px] mx-0"
      :style="{ animationDelay: index * 0.08 + 's' }">
      {{ char === ' ' ? '\u00a0' : char }}
    </span>
  </span>
</template>

<script>
export default {
  props: {
    text: ''
  },
  data() {
    return {
      showText: false,
    };
  },
  methods: {
    waypointHandler({ going, direction }) {
      if (going === 'in') {
        this.showText = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.text-container {
  overflow: hidden;
  white-space: nowrap;
}

.text-char {
  display: inline-block;
  opacity: 0;
  animation: textRunAnimation 0.8s ease both;
}

@keyframes textRunAnimation {
  0% {
    opacity: 0;
  }

  65% {
    opacity: 1;
    text-shadow: 0 0 25px #45f882;
  }

  75% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}
</style>
