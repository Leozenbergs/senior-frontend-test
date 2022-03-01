<template>
  <div class="flex justify-between items-center">
    <div v-show="!edit">
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
    <span v-show="edit" />
    <span class="icon is-right cursor-pointer">
      <fa v-if="!expanded && !edit" :icon="['fas', 'chevron-down']" class="text-primary" @click="$emit('expand')" />
      <fa v-else-if="expanded && !edit" :icon="['fas', 'chevron-up']" class="text-white" @click="$emit('close')" />
      <fa v-else-if="edit" :icon="['fas', 'x']" class="text-white" @click="$nuxt.$emit('closeForm', office.id)" />
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
    edit: {
      type: Boolean,
      default: () => false
    }
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