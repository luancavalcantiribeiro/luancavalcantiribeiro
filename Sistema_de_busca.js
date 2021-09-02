<script src="sistema_de_busca.js">
pesquisa_input = document.querySelectorAll(".pesquisa"); 	for(i in pesquisa_input){ 		 			pesquisa_input[i].onkeyup=function(e){ 				reg = new RegExp(this.value.toLowerCase(),"g") 				lis = this.parentElement.querySelector(".lista") 				console.log(lis) 				for(j of lis.children){ 					if( !j.getAttribute("nome").match(reg) ) 						j.style.display="none" 					else 						j.removeAttribute("style") 				} 			} 	}
<div class="h-100-p">

	<input class="pesquisa" placeholder="index.html">

	<ul class="lista">

		<li nome="cachorro"><img src="imgs/cachorro.jpg"> Cachorro</li>

		<li nome="cavalo"><img src="imgs/cavalo.jpg"> Cavalo</li>

		<li nome="coelho"><img src="imgs/coelho.jpg"> Coelho</li>

		<li nome="gato"><img src="imgs/gato.jpg"> Gato</li>

		<li nome="passaro"><img src="imgs/passaro.jpg"> Pássaro</li>

		<li nome="peixe"><img src="imgs/peixe.jpg"> Peixe</li>

		<li nome="tigre"><img src="imgs/tigre.jpg"> Tigre</li>

		<li nome="aranha"><img src="imgs/aranha.jpg"> Aranha</li>

		<li nome="urso"><img src="imgs/urso.jpg"> Urso</li>

		<li nome="sapo"><img src="imgs/sapo.jpg"> Sapo</li>

		<li nome="rato"><img src="imgs/rato.jpg"> Rato</li>

		<li nome="tartaruga"><img src="imgs/tartaruga.jpg"> Tartaruga</li>

		<li nome="mico"><img src="imgs/mico.jpg"> Mico</li>

		<li nome="furao"><img src="imgs/furao.jpg"> Furao</li>

		<li nome="chinchila"><img src="imgs/chinchila.jpg"> Chinchila</li>

		<li nome="esquilo"><img src="imgs/esquilo.jpg"> Esquilo</li>
