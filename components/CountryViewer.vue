<template>
  <div>
    <br />
    <router-link
      :to="{ name: 'Country', params: { country: country.name.official } }"    >
      <p class="countryName">{{ country.name.common }}</p>
    </router-link>
    <p class="flagImage">{{ country.flag }}</p>
  </div>
</template>

<script>
export default {
  name: "CountryViewer",
  props: {
    country: Object //now accepts country object (from array) as a prop
  }
};
</script>

<style>
.countryName {
  padding: 0px;
  margin-bottom: 10px;
  line-height: 1em;

  color: #444444;
}

.flagImage {
  font-size: 5em;
  padding: 0px;
  margin: 0px;
  line-height: 1em;
}
</style>