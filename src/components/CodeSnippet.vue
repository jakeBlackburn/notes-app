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
    padding: 5px;
}

pre, code {
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
}


</style>