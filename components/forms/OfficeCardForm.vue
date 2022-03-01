<template>
  <form class="p-6 bg-white -mt-2 rounded-lg">
    <office-card-form-input
      v-model="details.title"
      type="text"
      name="office-name"
      placeholder="Office name"
      label="Title"
    />
    <office-card-form-input
      v-model="details.address"
      type="text"
      name="address" 
      placeholder="address" 
      label="Adress"
    />
    <divider legend="Contact Information" />
    <office-card-form-input
      v-model="details.name"
      type="text"
      name="name" 
      placeholder="Full name"
      label="Full name"
      />
    <office-card-form-input
      v-model="details.jobPosition"
      type="text"
      name="job-position"
      placeholder="Job position"
      label="Job Position"
    />
    <office-card-form-input
      v-model="details.email"
      type="mail"
      name="email"
      placeholder="Email"
      label="Email"
    />
    <office-card-form-input
      v-model="details.phone"
      type="phone"
      name="phone"
      placeholder="Phone"
      label="Phone"
    />
    <div class="w-full flex justify-start items-center">
      <button class="bg-gray-light text-white py-2 px-4 rounded-lg" @click.prevent="$nuxt.$emit('editOffice', details)">
        Save
      </button>
    </div>
  </form>
</template>

<script>
import Divider from '@/components/divider/divider'
import OfficeCardFormInput from '@/components/forms/OfficeCardFormInput'

export default {
  components: {
    Divider,
    OfficeCardFormInput
  },
  props: {
    office: {
      type: Object,
      default: () => ({ 
        id: null,
        title: 'Headquarters',
        address: '3763 W. Dallas St.',
        name: '',
        jobPosition: '',
        email: '',
        phone: ''
      }),
    }
  },
  data() {
    return {
      details: {
        id: this.office.id,
        title: this.office.title,
        address: this.office.address,
        name: this.office.name,
        jobPosition: this.office.jobPosition,
        email: this.office.email,
        phone: this.office.phone,
      }
    }
  }
}
</script>