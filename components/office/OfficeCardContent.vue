<template>
  <div class="divide-y divide-gray">
    <office-details :office="office" />
    <div class="flex justify-between items-center p-3 pb-0">
      <button class="icon is-left p-2">
        <fa :icon="['fas', 'pencil']" class="text-gray"/>
        <span class="uppercase text-xs text-gray">Edit</span>
      </button>
      <button class="icon is-right p-2">
        <fa :icon="['fas', 'trash-can']" class="text-danger" />
        <span class="uppercase text-danger text-xs">Delete</span>
      </button>
    </div>
  </div>
</template>

<script>
import OfficeDetails from './OfficeDetails.vue'

export default {
  components: {
    OfficeDetails
  },
  props: {
    office: {
      type: Object,
      default: () => {}
    }
  }
  
}
</script>