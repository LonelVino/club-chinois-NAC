<template>
  <div class="login-modal">
    <ConversationalForm @submit="submit" id="vcf">
      <fieldset>
        <label for="name" >What's your name?</label>
        <input required data-question="Hi there! Please make sure you submit the form at last! What's your name? " type="text" name="name" id="name">
      </fieldset>

      <fieldset>
        <label for="pays">Where do you come from?</label>
        <input required data-question="Great to meet you, {name}! Where do you come from?     (Afrique? Allemagne? Bresil? Chili? Chine? Espagne? France-Bretagne? France-Grand Est? France-Ile de France? France-Nord de France? France-Sud de France? Italie? Maroc? Tunisie? Autre?)" type="text" name="pays" id="pays">
      </fieldset>

      <fieldset>
        <label for="email">Email</label>
        <input pattern=".+\@.+\..+" data-invalid="E-mail not correct" data-question="Please give me your email."
          type="email" name="email" id="your-email">
      </fieldset>

      <fieldset>
        <label for="thats-all">Are you ready to submit the form?</label>
        <button data-question="Are you ready to submit the form?" data-success="Submited! Yay! 😄 Click outside to close this dialog." name="submit" type="submit" data-cancel="Nope" @click="submit">Yup</button>
      </fieldset>

      <fieldset>
        <label for="thats-all">Want to start over?</label>
        <button data-question="Want to start over?" name="reset" type="reset" data-cancel="No">Yes, let's go again</button>
      </fieldset>
    </ConversationalForm>
  </div>
</template>

<script>
import ConversationalForm from '@/components/ConversationForm/ConversationalForm.vue'

  export default {
    name: "LoginModal",
    data() {
      return {
      }
    },
    mounted() {
    },
    components: {
      ConversationalForm,
    },
    methods: {
      submit (o) {
        console.log('Submit:')
      }
    }
  }
</script>

<style lang="scss">
.login-modal {
  width: 656px;
  height: 400px;
  background-color: #222;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 8px 100px -4px rgba(0, 0, 0, 0.5);
  padding-bottom: 10vw;

      
  fieldset {
    background: #fff;
  }
  #vcf .vcf-container,
  form {
    box-shadow: 0 4px 5px -1px rgba(0, 0, 0, .1), 0 7px 8px 0 rgba(0, 0, 0, .07), 0 1px 18px 0 rgba(0, 0, 0, .06);
    border-radius: 5px;
    overflow: hidden;
  }
}
@media screen and (max-width: 800px) {
    .login-modal {
      transition: 3s;
      transform: scale(0.95);
      padding-bottom: 20vw;
    }
}
@media screen and (max-width: 600px) {
    .login-modal {
      transform: scale(0.9);
      padding-bottom: 25vw;
      padding-left: -20vw;
    }
}
@media screen and (max-width: 400px) {
    .login-modal {
      transform: scale(0.85);
    }
}
</style>
