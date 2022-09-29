<template>
<figure class="code-snippet">
  <figcaption class="caption">{{code.caption}}</figcaption>
  <pre>
    <code>
      {{code.code}}
    </code>
  </pre>
</figure>

</template>


<script>


export default {
    props: {
        code: Object,
    },

}

</script>


<style scoped>

.code-snippet {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    position: relative;
}

pre, code {
    color: rgb(255, 215, 215);
    font-family: monospace, monospace;
    margin: 0 0 0 20px;
    padding: 0;
    font-size: 0.8rem;
}

.caption {
    color: grey;
    text-align: right;
    margin-right: 35px;
    font-size: 0.6rem;
    position: absolute;
    top: 5px;
    right: 5px;
}


@media screen and (max-width: 900px) {
  
}


</style>