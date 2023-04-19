const {createApp} = Vue;

createApp({
  data(){
    return {
      filter: '',
      counter: 0,
      newMsgText: '',
      answers: [
        'ok!',
        'sono al telefono',
        'ciao',
        'va bene',
        'gianfranco',
        'basta'
      ],
      contacts: [
        {
          name: 'Michele',
          avatar: 'img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              hour: '15:30',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              hour: '15:50',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              hour: '16:15',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: 'img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              hour: '16:30',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              hour: '16:30',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              hour: '16:35',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              hour: '10:10',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              hour: '10:20',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              hour: '16:15',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              hour: '15:30',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              hour: '15:50',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              hour: '15:30',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              hour: '15:50',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              hour: '15:30',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              hour: '15:50',
              message: 'Non ancora',
              status: 'received'
            },
            {
              hour: '15:51',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              hour: '15:40',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              hour: '15:50',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          avatar: './img/avatar_8.jpg',
          visible: true,
          messages: [
            {
              hour: '15:30',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              hour: '15:50',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              hour: '15:51',
              message: 'OK!!',
              status: 'received'
            }
          ],
        }
      ]
    }
  },
  methods: {
    pushMsg() {
      // --------------------------------------------
      const msgDate = new Date();
      const hours = msgDate.getHours();
      const minutes = msgDate.getMinutes() > 9 ? msgDate.getMinutes() : '0' + msgDate.getMinutes();

      const newMsg = {
        hour: hours + ':' + minutes,
        message: this.newMsgText,
        status: 'sent'
      };
      this.contacts[this.counter].messages.push(newMsg)
      console.log(newMsg.date);
      // --------------------------------------------
      this.newMsgText = '';
      setTimeout(() => {
        const newAnswer = {
          hour: hours + ':' + minutes,
          message: this.answers[Math.floor(Math.random() * 6)],
          status: 'received'
        };
        this.contacts[this.counter].messages.push(newAnswer)
      },2000)
    },
    chatFilter() {
      this.contacts.forEach(contact => {
        if(!contact.name.toLowerCase().includes(this.filter.toLowerCase())){
          contact.visible = false;
        }else{
          contact.visible = true;
        }
        
      });
    }
  },
  mounted() {

  }
}).mount('#app')