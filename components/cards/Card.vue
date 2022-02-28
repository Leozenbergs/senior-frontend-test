<template>
  <div :class="['shadow-lg', 'shadow-black', `bg-${backgroundColor}`, 'rounded-lg', 'p-6', 'w-1/4', 'mx-auto', 'mb-10']">
    <slot name="content" />
  </div>
</template>

<script>

export default {
  props: {
    backgroundColor: {
      type: String,
      default: () => 'white'
    }
  },
  data () {
    return {
      // 
    };
  }
};
</script>