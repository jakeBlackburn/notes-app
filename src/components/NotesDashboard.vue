<template>
    <div class="notes-dashboard">
        <img class="toggle-arrow horizontal" :src="toggled ? require('../assets/right-arrow.png') : require('../assets/left-arrow.png')" @click="toggleNav()">
        <img class="toggle-arrow vertical" :src="toggled ? require('../assets/down-arrow.png') : require('../assets/up-arrow.png')" @click="toggleNav()">
        <div class="notes-nav" :class="navClass"  :style="{ display: toggled ? 'none' : 'block'}">
            <div class="notes-list" :class="listClass" >
                <h3 class="note" v-for="title in notes" :key="title" @click="this.getNote(title.toLowerCase())">{{title.replace(/-/g, " ")}}</h3>
            </div>
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
            navClass: undefined,
            listClass: undefined,
            notes: ['About-Notes', 'Web-Development', 'Javascript', 'HTML', 'CSS', 'React', 'Vue.js', 'SQL', 'Data-Structures-and-Algorithms']
        }
    },
    methods: {
        async getNote(title) {
            this.isLoading = true
            try {
                const res = await axios.get(`https://jakes-notes.herokuapp.com/api/v1/notes/${title}`)
                this.note = res.data.note
                this.isLoading = false
            } catch (err) {
                console.log(err)
            }
        },
        toggleNav() {
            if (this.toggled == false) {
                this.listClass = 'fading'
                this.navClass = 'exiting'
                setTimeout(() => {
                    this.toggled = !this.toggled
                }, 1000)
            } else {
                this.navClass = undefined
                this.listClass = undefined
                this.toggled = !this.toggled
            }
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
    border-bottom: 1px solid black;
    margin-top: 80px;
    border-top: 1px solid black;
    position: relative;
    box-shadow: 10px -4px 50px #6f838f;
}

.notes-nav {
    width: 22%;
    background-color: rgba(215, 215, 245);
    color: rgba(0, 0, 0, 0.8);
    border-right: 1px solid black;
    padding: 0 20px 0 45px;
    animation: enter 1s ease-in-out;
}

.exiting {
    animation: exit 1s ease-in-out;
}


.notes-list {
    animation: fade-in 1.5s;
    position: sticky;
    top: 15px;
}

.fading {
    animation: fade-out 350ms forwards;
}
.note:hover {
    cursor: pointer;
    color:slateblue;
}

.toggle-arrow {
    position: fixed;
    width: 25px;
    height: 30px;
    padding: 5px;
    z-index: 2;
}

.toggle-arrow:hover {
    cursor: pointer;
    background-color: rgba(255, 192, 203, 0.5);
}

.horizontal {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 0 5px 5px 0;
    left: 0;
    top: 40%;
}

.vertical {
    display: none;
    top: 51px;
    right: 10px;
    border-radius: 0 0 5px 5px;
    background-color: rgba(255, 255, 255, 0.3);
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    66% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fade-out {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@keyframes enter {
    0% {
        width: 0;
        padding: 0;
    }

}

@keyframes exit {
    100% {
        width: 0;
        padding: 0;
    }
}


@keyframes vert_enter {
    0% {
        height: 0;
    }

}

@keyframes vert_exit {
    100% {
        height: 0;
    }
}

@media screen and (max-width: 1000px) {
    .notes-nav {
        font-size: 0.8rem;
    }

}

@media screen and (max-width: 550px) {
    .notes-dashboard {
        margin-top: 1px;
        border-top: none;
        flex-direction: column;
    }

    .notes-nav {
        border-right: none;
        border-bottom: 1px solid black;
        position: fixed;
        top: 51px;
        z-index: 1;
        height: 165px;
        width: 100%;
        padding: 0;
        animation: vert_enter 1s ease-in-out;
    }

    .exiting {
        animation: vert_exit 1s ease-in-out;
    }

    .notes-list {
        margin: 10px 0;
        text-align: center;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .note {
        margin: 6px;
    }

    .vertical {
        display: block;
    }

    .horizontal {
        display: none;
    }
}

</style>