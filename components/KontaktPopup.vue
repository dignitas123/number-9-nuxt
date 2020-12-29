<template>
  <div>
    <b-modal
      id="modal-center"
      centered
      title="Kontaktformular"
      size="lg"
      hide-footer
    >
      <!-- <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScXwGlhOstNHIeaf2NL4ufChAVfFVBYcIc9GqjJAbY1fA240A/viewform?embedded=true"
        width="640"
        height="836"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        >Loading…</iframe
      > -->

      <b-form v-if="show" @submit="onSubmit" @reset="onReset" method="POST">
        <b-form-group
          id="input-group-1"
          label="Email:"
          label-for="input-1"
          description="Wir teilen deine Email mit niemandem."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Email Adresse eingeben.."
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            required
            placeholder="Namen eingeben.."
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Thema:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.anliegen"
            :options="anliegenAuswahl"
            required
          ></b-form-select>

          <b-form-textarea
            id="input-4"
            v-model="form.text"
            placeholder="Nachricht.."
            rows="5"
            max-rows="10"
            class="mt-3"
          ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="primary" block>Senden</b-button>
      </b-form>
      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        anliegen: null,
        // checked: [],
      },
      anliegenAuswahl: [
        { text: 'Auswählen', value: null },
        'Webseite',
        'Mobile App entwickeln',
        'Desktopanwendung erstellen',
        'Modernisierung',
        'E-Commerce',
        'Social Media',
        'Anderes',
      ],
      show: true,
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$axios
        .post('https://www.algoinvest.online/mailapi/sendmessage', {
          msg: {
            sender: this.form.email,
            subject: this.form.anliegen,
            text: `Name: ${this.form.name}\n\nMail: ${this.form.email}\n\nAnliegen: \n\n${this.form.text}`,
          },
        })
        .then((res) => console.log(res))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.anliegen = null
      this.form.text = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
  // async created() {
  //   await this.$auth.loginWith('google')
  // },
}
</script>

<style scoped></style>
