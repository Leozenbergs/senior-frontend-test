<template>
  <main class="font-sans font-thin flex bg-background w-100 min-h-screen h-fit justify-center items-center">
    <div class="container mx-auto">
      <update-alert v-show="visibility" @close="closeAlert" />
      <h1 class="text-primary text-6xl text-center my-20">Offices</h1>
      <card background-color="primary">
        <template v-slot:header>
          <div class="flex justify-between items-center">
            <h2 class="text-white">Add New Location</h2>
            <span class="icon is-right cursor-pointer">
              <fa role="button" :icon="['fas', 'plus']" class="text-white" @click="$emit('create')" />
            </span>
          </div>
        </template>
      </card>
      <offices />
    </div>
  </main>
</template>

<script>
import Card from '@/components/cards/Card'
import Offices from '@/components/office/Offices'
import UpdateAlert from '@/components/alerts/UpdateAlert'
import AlertMixins from '@/mixins/AlertMixin'

export default {
  components: {
    Card,
    Offices,
    UpdateAlert
  },
  mixins: [AlertMixins],
  data() {
    return {
      // 
    }
  }
}
</script>