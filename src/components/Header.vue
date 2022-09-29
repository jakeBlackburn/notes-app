<template>
<div class="header-container">
    <h1>Jake's Notes</h1>
    <a href="https://github.com/jakeBlackburn/code-examples" target="_black">code examples repo</a>
</div>

</template>


<style scoped>
.header-container {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: -1;
}

h1 {
    margin: 0;
    width: 100%;
    text-align: center;
    color: black;
    text-shadow: 1px 1px whitesmoke;
    font-family: monospace;
    font-size: 2.2rem;
}

a {
    font-family: monospace;
    position: absolute;
    top: 15px;
    right: 10px;
    text-align: center;
    width: 80px;
    text-decoration: none;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    color: rgba(240, 248, 255, 0.8);
    border-radius: 3px;
}

@media screen and (max-width: 550px) {
    a {
        display: none;
    }

    .header-container {
        height: 50px;
        background-color: crimson;
        z-index: 1;
        border-bottom: 1px solid black;
    }

    h1 {
        font-size: 1.5rem;
    }
}
</style>