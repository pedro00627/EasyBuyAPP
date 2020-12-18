<template>
  <div id="Product">
    <h2>
      Caracteristicas de <span> {{ productid }}, </span>
    </h2>
    <img :src="picture" alt="Producto" class="responsive" />
    <input placeholder="id: " v-model="productid" />
    <input placeholder="Nombre: " v-model="productName" />
    <input placeholder="Marca:" v-model="brand" />
    <input placeholder="Categoria: " v-model="category" />
    <input placeholder="Unidad: " v-model="sellUnit" />
    <input placeholder="Precio: " v-model="price" />
    <input placeholder="Cantidad disponible: " v-model="qtyAvaliable" />
    <div>
      <input type="button" value="Consultar" v-on:click="getProduct" />
      <input type="button" value="Crear" v-on:click="createProduct" />
    </div>
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
  methods: {
    getProduct: function () {
      //this.productid = productid;
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
        })
        .catch((error) => {
          alert("ERROR Servidor" + error);
        });
    },

    createProduct: function () {
      let post = {
        "productId": parseInt(this.productid),
        "productName": this.productName,
        "category": this.category,
        "picture": this.picture,
        "sellUnit": this.sellUnit,
        "price": this.price,
        "qtyAvaliable": this.qtyAvaliable,
        "brand": this.brand
      };
      axios
        .post("https://g3m2-8-sprint2.herokuapp.com/product/create/", post, {
          headers: {},
        })
        .then((result) => {
          alert("Creación Correcta " + result.data);
        })
        .catch((error) => {
          alert("ERROR Creación");
        });
    },
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
img {
  max-width: 20%;
  max-height: 20%;
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