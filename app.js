const app = Vue.createApp({
    // template: '<h1>Hello {{firstName}}</h1>',
    // data is a funtion that returns an object
    data(){
        return{
            firstName: "Daniel",
            lastName: "Sumah",
            email: "danielsumah@xyz.com",
            dp :'https://randomuser.me/api/portraits/men/73.jpg',
            gender : 'male'

        }
    },

    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            // console.log(results)
            this.firstName= results[0].name.first
            this.lastName= results[0].name.last
            this.email = results[0].email
            this.dp = results[0].picture.large
            this.gender = results[0].gender
        }
    }
})


app.mount('#app')