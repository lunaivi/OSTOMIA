
/////////////////////////////////////////Modulo 1 del codigo////////////////////////////////////////////
/////////////////////////////////////////class Product//////////////////////////////////////////////////
class Product{
    constructor( client,nombre,año,precio,pais){
        this.client = client;
        this.nombre=nombre;
        this.año=año;
        this.precio=precio;
        this.pais = pais;
    }
}
class UI //Creancion de los div y mesages por pantalla.
{
////////////////////////////////////////////Modulo 2 del codigo///////////////////////////////////////
////////////////////////////////////////////Metodo AddProduct////////////////////////////////////////////////
       AddProduct(product){
            const productList = document.getElementById('Product-list');
            //creacion de elemento element
            const element=document.createElement('div');
            element.innerHTML=`
            
            <div id="regist" class="card text-center mb-4 mt-4" id="MS"> 
                 <div class ="Card-body">
                    <strong><td>Client:</strong>${product.client}
                    <strong><td>Producto nombre:</strong>${product.nombre}
                    <strong>Año:</strong>${product.año}
                    <strong>ID-Pais:</strong>${product.pais}
                    <strong>Precio:</strong>${product.precio}
                    <a class ="btn btn-danger" name="delete" >Delete</a>
                   
                 </div>            
            </div>`;
            productList.appendChild(element);
///////////////////////////////////////////////Metodo ResetForm///////////////////////////////////////////////
        }
        resetForm(){
            document.getElementById("product-form").reset();
        }
///////////////////////////////////////////////Metodo deleteProduct//////////////////////////////////////////
        deleteProduct(element){
            if(element.name === 'delete'){
                alert("Estas Seguro que quieres Eliminar este Elemento");
                element.parentElement.parentElement.parentElement.remove(); 
                this.ShowProducto('Product Deleted Successfully','danger');
            }
        }
//////////////////////////////////////////////Metodo ShowProducto////////////////////////////////////////////
        ShowProducto(message, cssClass){
        const div =document.createElement('div');
        div.className= `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(message));
        //Show DOM
        const container =document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div,app);
 
        setTimeout(function () {
            document.querySelector('.alert').remove();},3000);
        }
}
/////////////////////////////////////////////Modulo 3 del codigo////////////////////////////////////////
/////////////////////////////////////////////DOM Events////////////////////////////////////////////////
document.getElementById('product-form').addEventListener('submit',function(e) {
    const client = document.getElementById('client').value
    const nombre = document.getElementById('nombre').value
    const año= document.getElementById('año').value
    const precio = document.getElementById('precio').value
    const pais = document.getElementById('pais').value
  
    const product = new Product( client,nombre,año,precio,pais);
    
   const ui = new UI();
  
   if(pais ===''||nombre ===''||precio === '')
   {
       ui.ShowProducto("Complete los Campos Por Favor ","danger");
   }

   else{
   ui.AddProduct(product);
   ui.resetForm();
   ui.ShowProducto('Product Added Successfully','alert alert-info'); 
   e.preventDefault();
   }
  
                                                 //success: es una clase de boosttra
} );
document.getElementById("Product-list").addEventListener("click",function (e) { 
    
    const ui =new UI();    
    ui.deleteProduct(e.target);  
   
  });
document.getElementById("Product-list").addEventListener("click",function(e) {
    
});