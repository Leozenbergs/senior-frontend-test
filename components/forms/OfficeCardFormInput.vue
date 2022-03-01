<template>
  <label :for="$attrs.name">
    <div class="peer-invalid:text-red-500"> {{ label }}*</div>
    <input
      v-bind="$attrs"
      v-model="detail"
      class="w-full p-2 border rounded-lg focus:outline focus:outline-primary"
    />
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid {{ label }}.
    </p>
  </label>
</template>

<script>

export default {
  props: {
    label: {
      type: String,
      default: () => ''
    },
    value: {
      type: [String, Number],
      default: () => ''
    },
  },
  data() {
    return {
      detail: this.value
    }
  },
  watch: {
    detail: {
      immediate: true,
      handler() {
        this.$emit('input', this.detail)
      }
    },
    value: {
      immediate: true,
      handler() {
        this.detail = this.value
      }
    } 
  }
}
</script>