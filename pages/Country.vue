<template>
  <div>

    <!-- Takes country name from url bar and displays on page -->
    Official name: {{ $route.params.country }}
    <!-- "countries[0]" gives 1st country in array (from api) -->

    <CountryDisplay
      :country="country[0]"
    />

  </div>
</template>

<script>
import axios from 'axios'
import CountryDisplay from '@/components/CountryDisplay'

export default {
  name: 'Country',
  components: {
    CountryDisplay
  },
  data() {
    return {
      country: []
    }
  },
  mounted() {
    axios
      .get(`https://restcountries.com/v3.1/name/${this.$route.params.country}?fullText=true`) // need to get only 1 country from api, use:{{$this.route.params.country}}
      .then((response) => {
        console.log(response.data);
        this.country = response.data;

      })
      .catch((error) => console.log(error));
  }
}
</script>

<style></style>