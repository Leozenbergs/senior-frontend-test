<template>
  <div role="alert" class="w-full bg-white text-center p-8 fixed top-0 left-0 text-xs">
    <span>
      <span class="icon is-left">
        <fa :icon="['fas', 'check']" class="text-primary" />
      </span>
      <span class="ml-6 uppercase" >The location has been updated</span>
    </span>
    <span class="icon is-right float-right cursor-pointer" @click="$emit('close')">
      <fa :icon="['fas', 'x']" class="text-gray-dark" />
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 
    }
  }
}
</script>