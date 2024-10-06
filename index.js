const app = Vue.createApp({
  data(){
    return{
      newTitle: "",
      newContent:"",
      notes: JSON.parse(localStorage.getItem("notes")) || []
    };
  },

  methods: {

    addNote(){
      if (this.newTitle.trim() === "" || this.newContent.trim() === ""){
        alert("Enter a Note");
        return;
      }

      this.notes.push({
        title: this.newTitle,
        content: this.newContent
      });

      localStorage.setItem("notes", JSON.stringify(this.notes));

      this.newTitle="";
      this.newContent = "";
    },

    deleteNote(index) {
      this.notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(this.notes));
    }
  },
  mounted(){
    if (localStorage.getItem("notes")){
      this.notes = JSON.parse(localStorage.getItem("notes"));
    }
  }
});

app.mount("#app");

