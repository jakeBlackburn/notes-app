<template>
<div class="note-container">
    <h2 class="title">{{isLoading ? 'Loading...' : this.note.title.replace(/-/g, " ")}}</h2>
    <div class="version">[{{isLoading ? '' : this.note.version}}]</div>
    <section class="overview">{{isLoading ? '' : this.note.overview}}</section>
    <div class="text" v-for="paragraph in note.text" :key="paragraph.id">
        <h4 class="text-title">{{isLoading ? '' : paragraph.title}}</h4>
        <p class="text" v-for="section in paragraph.text" :key="section.id" :style="{order: section.order}">{{isLoading ? '' : section.content}}</p>
        <CodeSnippet v-for="snippet in paragraph.code" :key="snippet.id" :style="{order: snippet.order}"  :code="{ caption: snippet.caption, code: snippet.content}" />
    </div>
</div>
</template>

<script>

import CodeSnippet from './CodeSnippet.vue'

export default {
    name: 'note',
    data() {
        return {
            title: 'about notes'
        }
    },
    components: {
        CodeSnippet
    },
    props: {
        note: Object,
        isLoading: Boolean
    },
    methods: {
        change_note(id) {
            this.note_text = `note ${id}`
        }
    },
    mounted() {
        this.title = this.note.title
    }


}
</script>


<style scoped>

.note-container {
    width: 100%;
    min-height: 500px;
    display: flex;
    position: relative;
    flex-direction: column;
    color: rgba(80, 10, 10);
    background-color:aliceblue;
    padding: 0 15px 100px 35px;
}

.title {
    font-family: teko;
    text-align: center;
    font-size: 3.3rem;
    margin: 20px 0;
    color: black;
    text-shadow: 1px 1px deeppink;
    text-transform: capitalize;
}

.text-title {
    font-family: monospace;
    margin-left: 5%;
    color: black;
    font-size: 1.4rem;
}

.overview {
    color: deeppink;
    text-align: center;
    font-size: 1.3rem;
    line-height: 30px;
    margin: 10px 5% 0 5%;
}

.version {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1rem;
    color: black
}

.text {
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
}


@media screen and (max-width: 900px) {
    .title {
        font-size: 2rem;
    }

    .overview {
        font-size: 1rem;
    }

    .text-title {
        font-size: 1.1rem;
    }

    .text {
        font-size: 0.9rem;
    }
}


@media screen and (max-width: 550px) {
    .note-container {
        padding: 50px 5% 0 5%;
        width: 90%;
    }

    .version {
        top: 70px;
        right: 75px;
    }

    .overview {
        line-height: 18px;
    }

    .title {
        font-size: 1.5rem;
    }

    .overview {
        font-size: 0.9rem;
    }

    .text-title {
        font-size: 1rem;
    }

    .text {
        font-size: 0.8rem;
    }
}

</style>