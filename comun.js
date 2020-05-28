function comprobacionNumero (e){
	var numero = e.key.replace(/[^\d0-9]/g, '');

	if (numero == '')
		return false;
}
function cargarEvento (){

	var element = document.getElementById("idMarcaCombustible");
		if(element!=null)
			element.addEventListener("click", function(){
				window.location="index.html";
			});
		
	element = document.getElementById("idPropietarioOcupacion");
		if(element!=null)
			element.addEventListener("click", function(){
				window.location="1.html";
			});
	element = document.getElementById("idMatriculacionCarne");
		if(element!=null)
			element.addEventListener("click", function(){
				window.location="2.html";
			});
	element = document.getElementById("idKilometros");
		if(element!=null)
			element.addEventListener("click", function(){
				window.location="3.html";
			});
	element = document.getElementById("idProcedencia");
		if(element!=null)
			element.addEventListener("click", function(){
				window.location="4.html";
			});
	element = document.getElementById("idDatosPersonales");
		if(element!=null)
			element.addEventListener("click", function(){
				window.location="5.html";
			});
	element = document.getElementById("idDireccion");
		if(element!=null)
			element.addEventListener("click", function(){
				window.location="6.html";
			});

	jQuery('.alert').hide();
}