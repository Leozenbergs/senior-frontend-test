import convertLayerAtRulesToControlComments from "tailwindcss/lib/lib/convertLayerAtRulesToControlComments"

export default {
  data() {
    return {
      offices: [
        { 
          id: 1,
          title: 'Headquarters',
          edit: false,
          address: '3763 W. Dallas St.',
          name: 'Helena John',
          jobPosition: 'Software Tester',
          email: 'georgia.young@example.com',
          phone: '(808) 555-0111'
        },
        { 
          id: 2,
          title: 'Headquarters',
          edit: false,
          address: '3763 W. Dallas St.',
          name: 'Helena John',
          jobPosition: 'Software Tester',
          email: 'georgia.young@example.com',
          phone: '(808) 555-0111'
        },
        { 
          id: 3,
          title: 'Headquarters',
          edit: false,
          address: '3763 W. Dallas St.',
          name: 'Helena John',
          jobPosition: 'Software Tester',
          email: 'georgia.young@example.com',
          phone: '(808) 555-0111'
        },
        { 
          id: 4,
          title: 'Headquarters',
          edit: false,
          address: '3763 W. Dallas St.',
          name: 'Helena John',
          jobPosition: 'Software Tester',
          email: 'georgia.young@example.com',
          phone: '(808) 555-0111'
        }
      ],
    }
  },
  created() {
    this.$nuxt.$on('edit', this.showForm)
    this.$nuxt.$on('closeForm', this.closeForm)
    this.$nuxt.$on('editOffice', this.editOffice)
    this.$nuxt.$on('removeOffice', this.removeOffice)
    this.$nuxt.$on('createNewOffice', this.createNewOffice)
  },
  beforeDestroy(){
    this.$nuxt.$off('edit')
    this.$nuxt.$off('closeForm')
    this.$nuxt.$off('editOffice')
    this.$nuxt.$off('removeOffice')
    this.$nuxt.$off('createNewOffice')
  },
  computed: {
    officesData() {
      return this.offices
    }
  },
  methods: {
    showForm(officeId) {
      let formToShow = this.offices.find(item => item.id === officeId)
      formToShow.edit = true
    },
    closeForm(officeId) {
      let formToHide = this.offices.find(item => item.id === officeId)
      formToHide.edit = false
    },
    editOffice(office) {
      let officeToUpdate = this.offices.find(item => item.id === office.id)
      let index = this.offices.indexOf(officeToUpdate)
      this.offices[index] = office
      this.$nuxt.$emit('closeForm', office.id)
      this.$nuxt.$emit('showAlert')
      this.$forceUpdate()
    },
    removeOffice(officeId) {
      let office = this.offices.find(item => item.id === officeId)
      let index = this.offices.indexOf(office)
      this.offices.splice(index, 1)
      this.$nuxt.$emit('showAlert')
      this.$forceUpdate()
    },
    createNewOffice(office) {
      office.id = this.offices.length + 1
      office.edit = false

      this.offices.push(office)
      this.$nuxt.$emit('showAlert')
      this.$forceUpdate()
    }
  }
}