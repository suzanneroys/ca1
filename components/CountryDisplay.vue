<template>
  <div>    
    <p>Common name: {{ country.name.common }}</p>
    <img :src="country.flags.png" />
    <p>Capital: {{ country.capital[0] }}</p>
    
    <p>Continent: {{ country.continents[0] }}</p>
    <p>Population: {{ country.population }}</p>

    <p v-if="country.independent == true">Independent: &#10003;</p>
    <p v-else-if="country.independent == false">Independent: &#x2717;</p>

    <p v-if="country.landlocked == true">Landlocked: &#10003;</p>
    <p v-else-if="country.landlocked == false">Landlocked: &#x2717;</p>

    <br/>
    <a :href="country.maps.googleMaps">Click to view map</a>
  </div>
</template>


<script>
export default {
  name: "CountryDisplay",
  props: {
    country: Object, //now accepts country object (from array) as a prop
  },
};
</script>

<style>
</style>