<template>
    <div class="navBar">
        <router-link :to="{ name: 'Home' }">Home </router-link>
        <router-link :to="{ name: 'AllCountries'}">All </router-link>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style>
.navBar {
    text-align: center;
    margin: 10px auto; 
    height: 50px;
    
    background-color: #444444;  
}

.navBar a {   
    font-size: 1.3em;
    font-weight: bold;
    font-family:  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 15px;
    line-height: 50px; 
    text-decoration: none;

    color: whitesmoke;
}

.navBar a:hover {
    color: #444444;
    background-color: lightpink;
}

a {
    text-decoration: none;
}


</style>