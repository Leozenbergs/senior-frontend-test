<template>
  <div class="flex justify-between items-center">
    <div>
      <h1
        :class="[
          !!color ? color.title : 'text-title',
          'text-4xl'
        ]"
      >
        <strong>
          {{ office.title }}
        </strong>
      </h1>
      <div :class="[!!color ? color.address : 'text-gray', 'text-base']">{{ office.address }}</div>
    </div>
    <span class="icon is-right">
      <font-awesome-icon v-if="!expanded" :icon="['fas', 'chevron-down']" class="text-primary" @click="$emit('expand')" />
      <font-awesome-icon v-else :icon="['fas', 'chevron-up']" class="text-white" @click="$emit('close')" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    office: {
      type: Object,
      default: () => {}
    },
    expanded: {
      type: Boolean,
      default: () => false
    },
  },
  computed: {
    color() {
      return this.expanded ? {
        title: 'text-white',
        address: 'text-white'
      } : {
        title: 'text-title',
        address: 'text-gray'
      }
    }
  }
}
</script>