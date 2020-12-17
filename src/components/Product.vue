<template>
  <div id="Product">
    <h2>
      Caracteristicas de  <span> {{ productid }}, </span> 
    </h2>
    <img :src='picture' alt="Producto" class='responsive'>
    <p>Nombre: {{productName}}</p>
    <p>Marca: {{brand}}</p>
    <p>Categoria: {{category}}</p>
    <p>Unidad: {{sellUnit}}</p>
    <p>Precio: {{price}}</p>
    <p>Cantidad disponible: {{qtyAvaliable}}</p>
    
    
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
      .get("http://localhost:8000/product/" + this.productid)
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
      })
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