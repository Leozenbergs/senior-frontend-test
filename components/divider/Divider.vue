<template>
  <fieldset class="mb-10">
    <legend class="uppercase text-xs text-primary" >{{ legend }}</legend>
    <div class="w-full border-b border-gray-light mt-5"></div>
  </fieldset>
</template>

<script>
export default {
  props: {
    legend: {
      type: String,
      default: ""
    }
  }
}
</script>