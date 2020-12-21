<template>
  <div id="Product">
      <label>
        Consulta por id: <input placeholder="Id" v-model="productid" />
      </label><br/>
      <input type="button" value="Consultar" v-on:click="getProduct" />
      <h3 v-show="show">Caracteristicas del producto <span> {{ productid }} </span></h3>
      <img v-show="show" :src="picture" alt="Producto" class="responsive" />
      <label v-show="show">
        Nombre:&emsp;&emsp;<input placeholder="Nombre del producto" v-model="productName" /><br/>
      </label>
      <label v-show="show">
        Marca:&emsp;&emsp;&nbsp;&nbsp;&nbsp;<input placeholder="Marca del producto" v-model="brand" /><br/>
      </label>
      <label v-show="show">
        Categoria:&emsp;&nbsp;&nbsp;<input placeholder="Categoria del producto" v-model="category" /><br/>
      </label>
      <label v-show="show">
        Unidad:&emsp;&emsp;&nbsp;&nbsp;<input placeholder="Unidad de venta" v-model="sellUnit" /><br/>
      </label>
      <label v-show="show">
        Precio:&emsp;&emsp;&nbsp;&nbsp;&nbsp;<input placeholder="Precio" v-model="price" /><br/>
      </label>
      <label v-show="show">
        Inventario:&emsp;&nbsp;<input placeholder="Cantidad disponible" v-model="qtyAvaliable" /><br/>
      </label>
      <label v-show="show">
        URL Imagen:<input placeholder="UrlImagen" v-model="picture" /><br/>
      </label>
      <br/>
      <div v-show="show">
        <input v-if="creacion" type="button" value="Crear" v-on:click="createProduct" />
        <input v-if="creacion===false" type="button" value="Actualizar" v-on:click="updateProduct" />
        <!--<input type="button" value="Borrar" v-on:click="createProduct" /> -->
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Product",
  data: function () {
    return {

      creacion: false,
      show: false,
      productName: "",
      category: "",
      picture: "",
      sellUnit: "",
      price: "",
      qtyAvaliable: "",
      brand: "",
      productid: "",
    };
  },
  methods: {
    reiniciar: function(){
          self.productName = "";
          self.category = "";
          self.picture = "";
          self.sellUnit = "";
          self.price = "";
          self.qtyAvaliable = "";
          self.brand = "";
    },
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
          self.creacion=false;
          self.show=true;
        })
        .catch((error) => {
          if (error=404) {
            alert("El producto no existe, a continuacion puedes crearlo");
            self.show=true;
            self.creacion=true;
            self.productName = "";
            self.category = "";
            self.picture = "";
            self.sellUnit = "";
            self.price = "";
            self.qtyAvaliable = "";
            self.brand = "";
          }else{
            alert("ERROR Servidor" + error);
          } 
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
          alert("Creación Correcta");
            self.productName = "";
            self.category = "";
            self.picture = "";
            self.sellUnit = "";
            self.price = "";
            self.qtyAvaliable = "";
            self.brand = "";
            self.creacion=false;
            self.show=false;
        })
        .catch((error) => {
          alert("ERROR Creación");
        });
    },
    updateProduct: function () {
      let put = {
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
        .put("https://g3m2-8-sprint2.herokuapp.com/product/update/", put, {
          headers: {},
        })
        .then((result) => {
          alert("Actualizacion Correcta");
          self.creacion=false;
          self.show=false;
          self.productName = "";
          self.category = "";
          self.picture = "";
          self.sellUnit = "";
          self.price = "";
          self.qtyAvaliable = "";
          self.brand = "";
        })
        .catch((error) => {
          alert("ERROR Actualizacion");
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
#Product button {
  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 20px;
}
#Product button:hover {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #283747;
}
img {
  max-width: 30%;
  max-height: 30%;
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