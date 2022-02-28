<template>
  <div class="shadow-lg shadow-black rounded rounded-lg mb-10 mx-auto xl:w-1/4 md:w-2/5 sm:w3/4">
    <div :class="[`bg-${backgroundColor}`, 'rounded', 'rounded-lg', 'p-6']">
      <slot name="header" />
    </div>
    <div>
      <slot name="content"/>
    </div>
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