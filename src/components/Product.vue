<template>
  <div id="Product">
    <h2>
      Hola <span> {{ productid }}, </span> ¡Bienvenido!
    </h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Product",
  data: function () {
    return {
      productName: "",
      category: 0,
      picture: "",
      sellUnit: "",
      price: 0,
      qtyAvaliable: 0,
      brand: "",
      productid: 0,
    };
  },
  created: function () {
    this.productid = this.$route.params.productid;
    let self = this;
    axios
      .get("https://g3m2-8-sprint2.herokuapp.com/product/" + this.productid)
      .then((result) => {
        self.productName = result.data.productName;
        self.category = result.data.category;
        self.picture = result.data.picture;
        self.sellUnit = result.data.sellUnit;
        self.price = result.data.price;
        self.qtyAvaliable = result.data.qtyAvaliable;
        self.brand = result.data.brand;
        self.productid = result.data.productid;
      })
      .catch((error) => {
        alert("ERROR Servidor");
      })
      .finally((error) => {
        alert("ERROR Servidor");
      });
  },
};
</script>

<style>
#Product {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#Product h2 {
  font-size: 50px;
  color: #283747;
}
#Product span {
  color: crimson;
  font-weight: bold;
}
</style>