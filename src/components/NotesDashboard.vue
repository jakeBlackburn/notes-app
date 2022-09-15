<template>
    <div class="notes-dashboard">
        <img class="toggle-arrow" :src="toggled ? require('../assets/right-arrow.png') : require('../assets/left-arrow.png')" @click="toggleNav()">
        <div class="notes-nav" :style="{ display: toggled ? 'none' : 'block', position: toggled ? 'absolute' : 'static' }">
            <h3 class="note" v-for="title in notes" :key="title" @click="this.getNote(title.toLowerCase())">{{title.replace(/-/g, " ")}}</h3>
        </div>
        <Note :note="note" :isLoading="isLoading" />
    </div>
</template>

<script>
import Note from './Note.vue'
import axios from 'axios'

export default {
    name: 'notes-dashboard',
    components: {
        Note
    },
    data() {
        
        return {
            isLoading: true,
            note: {},
            toggled: false,
            notes: ['About-Notes','Web-Development', 'Frontend', 'Backend', 'Javascript', 'HTML', 'CSS', 'React', 'Angular', 'Vue.js', 'Express']
        }
    },
    methods: {
        async getNote(title) {
            this.isLoading = true
            try {
                const res = await axios.get(`http://localhost:3000/api/v1/notes/${title}`)
                this.note = res.data.note
                this.isLoading = false
            } catch (err) {
                console.log(err)
            }
        },
        toggleNav() {
            this.toggled = !this.toggled
        }
    },
    created() {
        this.getNote('about-notes')
    }
}
</script>

<style scoped>
.notes-dashboard {
    background-color: white;
    display: flex;
    border-bottom: 1px solid darkorchid;
    margin-top: 80px;
    border-top: 1px solid black;
}

.notes-nav {
    min-width: 18%;
    background-color: rgba(105, 90, 205, 0.2);
    color: black;
    border-right: 1px solid black;
    padding-left: 45px;
}

.note:hover {
    cursor: pointer;
    color:slateblue;
}

.toggle-arrow {
    position: fixed;
    left: 0;
    top: 40%;
    width: 25px;
    height: 30px;
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 0 5px 5px 0;
    z-index: 1;
}

.toggle-arrow:hover {
    cursor: pointer;
    background-color: rgba(255, 192, 203, 0.5);

}

</style>