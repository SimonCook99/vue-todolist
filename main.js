const app = new Vue({
    el: "#root",
    data: {
        itemList: [
            {
                text: "mangiare",
                done: false
            },
            {
                text: "bere",
                done: false
            },
            {
                text: "programmare",
                done: false
            },
            {
                text: "giocare",
                done: false
            },
            {
                text: "poltrire",
                done: false
            }
        ],

        //provando a mettere l'oggetto da aggiungere separatamente, l'oggetto viene aggiunto ma il testo viene sovrascritto ogni volta
        /* newToDo: {
            text: "",
            done: false
        }, */

        newTodoText: ""

    },
    methods: {

        addTask(){

            if(this.newTodoText == ""){
                alert("Inserisci un valore valido");
            }else{
                //this.newToDo.text = this.newTodoText;
                this.itemList.push({
                    text: this.newTodoText,
                    done: false
                });
                this.newTodoText = "";
                
            }
            
        },

        taskDone(index){
            this.itemList[index].done = !this.itemList[index].done;
        },

        removeTask(index){
            this.itemList.splice(index, 1);
        }
    }
});
