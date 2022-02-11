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

        newToDo: ""

    }
});