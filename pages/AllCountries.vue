<template>
  <div class="body">
    <h1>All Countries</h1>

    <div class="flexContainer">
      <!-- this component only cares about a single country's details -->

      <CountryViewer
        class="flexItem"
        v-for="country in countries"
        :key="country.ccn3"
        :country="country"
      />

      <!-- "countries[0]" gives 1st country in array (from api) -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CountryViewer from "@/components/CountryViewer";

export default {
  name: "AllCountries",
  components: {
    CountryViewer,
  },
  data() {
    return {
      countries: [],
    };
  },
  mounted() {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        console.log(response.data);
        this.countries = response.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style>
.body {
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0px;
  padding: 0px;
}

h1 {
  line-height: 3em;
  margin: 0px 0px 10px 0px;

  color: #444444;
  background-color: whitesmoke;
}

.flexContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;

  background-color: #444444;
}

.flexItem {
  width: 13%;
  padding: 10px;
  margin: 10px;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  /* box-shadow: 0px 2px 10px rgba(27, 27, 27, 0.705);  */
  border: solid 5px #444444;
  background-color: whitesmoke;
}

.flexItem:hover {
  box-shadow: 0px 0px 10px lightpink;
  border: solid 5px lightpink;
  background-color: lightpink;
}
</style>