import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {toDo: "Get bridesmaid dress for Lu's wedding", isHighPriority: false},
        {toDo: "Write letters", isHighPriority: true},
        {toDo: "Book escape room for hen do", isHighPriority: true}
      ],
      newItem: ""
    },
    methods: {
      saveNewItem: function(){
        this.items.push({
          toDo: this.newItem,
          isHighPriority: false
        });
        this.newItem = "";
    }
  }
});
});
