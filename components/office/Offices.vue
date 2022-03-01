<template>
  <div v-if="officesData">
    <office-card  v-for="office in officesData" :key="office.id" :office="office">
      <template v-slot:editable>
        <office-card-form v-if="office.edit" :office="office"/>
      </template>
    </office-card>
  </div>
</template>

<script>
import OfficeCard from "./OfficeCard"
import OfficeCardForm from '@/components/forms/OfficeCardForm'
import OfficesMixin from '@/mixins/OfficesMixin'

export default {
  components: {
    OfficeCard,
    OfficeCardForm
  },
  mixins: [OfficesMixin]
}
</script>