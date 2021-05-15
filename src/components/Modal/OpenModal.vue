<template>
  <div class="login-modal">
    <ConversationalForm @submit="submit" id="vcf">
      <fieldset>
        <label for="name" >What's your name?</label>
        <input required data-question="Hi there! What's your name? " type="text" name="name" id="name">
      </fieldset>

      <fieldset>
        <label for="isAne">isAne</label>
        <select data-question='Great to meet you, {name}! Have you played "Ane Rouge"?' name="isAne" id="isAne" >
          <option value="0">No</option>
          <option value="1">Yes</option>
        </select>
      </fieldset>

      <fieldset>
        <label for="isVol">isVol</label>
        <select data-question='Got it! And have you played "Volant Volant"?' name="isVol" id="isVol" >
          <option value="0">No</option>
          <option value="1">Yes</option>
        </select>
      </fieldset>

      <fieldset>
        <label for="isPitch">isPitch</label>
        <select data-question='Ok ! Have you played "Pitch pot"?' name="isPitch" id="isPitch" >
          <option value="0">No</option>
          <option value="1">Yes</option>
        </select>
      </fieldset>

      <!-- <fieldset>
        <label for="score">score</label>
        <input data-question="{name}, nice! What's your score now?" type="text" name="score" id="score">
      </fieldset> -->

      <fieldset>
        <label for="telephone">What's your telephone number?</label>
        <input data-question="{name}, nice! Could you please give us ur telephone number?" type="text" name="telephone" id="telephone">
      </fieldset>

      <fieldset>
        <label for="email">Email</label>
        <input pattern=".+\@.+\..+" data-invalid="E-mail not correct" data-question="Please give me your email."
          type="email" name="email" id="your-email">
      </fieldset>

      <fieldset>
        <label for="loc">loc</label>
        <input data-question="Could you please tell us where u live?"
          type="text" name="loc" id="your-location">
      </fieldset>

      <fieldset>
        <label for="thats-all">Are you ready to submit the form?</label>
        <button data-question="Are you ready to submit the form?" data-success="Submited! Yay! 😄" name="submit" type="submit" data-cancel="Nope" @click="submit">Yup</button>
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
</style>
