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

figure {
  overflow: auto;
}

.code-snippet {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    position: relative;
}

pre, code {
    color: rgb(150, 215, 250);
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


@media screen and (max-width: 1100px) {
  figure {
    margin: 10px;
  }
  pre, code {
    margin: 0 0 0 15px;
    font-size: 0.75rem;
  }
}

@media screen and (max-width: 950px) {
  figure {
    margin: 5px 0;
  }

  pre, code {
    margin: 0 10px;
    font-size: 0.65rem;
  }

}

@media screen and (max-width: 550px) {
  pre, code {
    margin: 0 5px;
    font-size: 0.6rem;
  }
}

</style>