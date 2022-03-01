<template>
  <card :background-color="backgroundColor">
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h2 :class="[titleColor]"><strong>{{ title }}</strong></h2>
        <span v-if="!formVisibility" class="icon is-right cursor-pointer">
          <fa role="button" :icon="['fas', 'plus']" class="text-white" @click="showCreateOfficeForm" />
        </span>
        <span v-else class="icon is-right cursor-pointer">
          <fa role="button" :icon="['fas', 'x']" class="text-gray" @click="closeCreateOfficeForm" />
        </span>
      </div>
    </template>
    <template v-slot:editable>
      <office-card-form v-if="formVisibility" @send="closeCreateOfficeForm" />
    </template>
  </card>
</template>

<script>
import Card from '@/components/cards/Card'
import OfficeCardForm from '@/components/forms/OfficeCardForm'

export default {
  components: {
    Card,
    OfficeCardForm
  },
  data() {
    return {
      formVisibility: false
    }
  },
  computed: {
    backgroundColor() {
      return this.formVisibility ? 'white' : 'primary'
    },
    title() {
      return this.formVisibility ? 'New Location' : 'Add New Location'
    },
    titleColor() {
      return this.formVisibility ? 'text-title' : 'text-white'
    }
  },
  methods: {
    showCreateOfficeForm() {
      this.formVisibility = true
    },
    closeCreateOfficeForm() {
      this.formVisibility = false
    }
  }
  
}
</script>