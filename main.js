const app = Vue.createApp({
  data() {
    return {
      randomMails: [],
    }
  },
  methods: {
    callApi() {
      const generatedMails = []

      /* usa questa funzione n volte pari a counter */
      const callApiTimes = (counter) => {
        if (counter <= 0) {
          this.randomMails = generatedMails;
          return;
        }
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) => {
            console.log(response.data.response);
            generatedMails.push(response.data.response);
            callApiTimes(counter - 1);
          });
      }
      /* settiamo il counter a 10 */
      callApiTimes(10);
    }
  }
}).mount('#app')