<template>
  <q-page class="flex column">
    <q-banner class="bg-grey-4 text-center">
      User is offline.
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message 
        v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer elevated>
      <q-toolbar class="glossy">
        <q-form 
        @submit.prevent="sendMessage"
        class="full-width" >
          <q-input
            outlined 
            rounded
            bg-color="white"
            v-model="newMessage" 
            label="Message" 
            dense >
            <template v-slot:after>
              <q-btn
                color="white" 
                round 
                dense 
                flat 
                icon="send"
                type="submit" 
                @click="sendMessage"/>
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
  export default {
    data() { 
      return {
        newMessage: '',
        messages: [
          {
            text: 'hey, how are you?',
            from: 'me'
          },
          {
            text: 'doing fine, how r you?',
            from: 'them'
          }
        ]
      }
    },
    methods: {
      sendMessage() {
        this.messages.push({
          text: this.newMessage,
          from: 'me'
        });
        this.newMessage = '';
      }
    }
    
  }

</script>
