function cambiarPokemon(nombre,tipo,especie,habilidad,vida,resistencia,ataque){
	this.nombre = nombre;
	this.tipo = tipo;
	this.especie = especie;
	this.habilidad = habilidad;
	this.vida = vida;
	this.resistencia = resistencia;
	this.ataque = ataque;
} 
function poke0(){
	var pokemon = new cambiarPokemon("Nombre : Samurott","Tipo : Agua",
		"Especie : Marino","Habilidad : Acuatico","Vida : 100%","Resistencia : 100%","Ataque : 80%");
	document.getElementById('poke1').src="Samurott.png";
	document.getElementById("pok").style.background="#6a85d0";	
	document.getElementById("cambio").className = "p";
	document.getElementById("cambio").innerHTML="<p>" + pokemon.nombre + "</p>" + "<p>" + pokemon.tipo + "</p>" 
	 + "<p>" + pokemon.especie + "</p>" + pokemon.habilidad + "<p>" + pokemon.vida + "</p>"
	  + "<p>" + pokemon.resistencia + "<p>" + "<p>" + pokemon.ataque + "</p>";
}

function poke7(){
	var pokemon = new cambiarPokemon("Nombre : Floatzel","Tipo : Agua",
		"Especie : Marino","Habilidad : Acuatico","Vida : 100%"
		,"Resistencia : 90%","Ataque : 70%"); 
	document.getElementById('poke1').src="Floatzel.png";
	document.getElementById("pok").style.background="#feb23f";	
	document.getElementById("cambio").innerHTML="<p>" + pokemon.nombre + "</p>" + "<p>" + pokemon.tipo + "</p>" 
	 + "<p>" + pokemon.especie + "</p>" + pokemon.habilidad + "<p>" + pokemon.vida + "</p>"
	  + "<p>" + pokemon.resistencia + "<p>" + "<p>" + pokemon.ataque + "</p>";
}
function poke2(){
	var pokemon = new cambiarPokemon("Nombre : Raichu","Tipo : Eléctrico",
		"Especie : Ratón","Habilidad : Electricidad Estática","Vida : 100%"
		,"Resistencia : 90%","Ataque : 70%"); 
	document.getElementById('poke1').src="Raichu.png";	
	document.getElementById("pok").style.background="#D9BF13";
	document.getElementById("cambio").innerHTML="<p>" + pokemon.nombre + "</p>" + "<p>" + pokemon.tipo + "</p>" 
	 + "<p>" + pokemon.especie + "</p>" + pokemon.habilidad + "<p>" + pokemon.vida + "</p>"
	  + "<p>" + pokemon.resistencia + "<p>" + "<p>" + pokemon.ataque + "</p>";
}
function poke3(){
	var pokemon = new cambiarPokemon("Nombre : Mienshao","Tipo : Lucha",
		"Especie : Arte Marcial","Habilidad : Regeneración, Foco interno","Vida : 100%"
		,"Resistencia : 100%","Ataque : 90%"); 
	document.getElementById('poke1').src="Mienshao.png";
	document.getElementById("pok").style.background="#B92786";
	document.getElementById("cambio").innerHTML="<p>" + pokemon.nombre + "</p>" + "<p>" + pokemon.tipo + "</p>" 
	 + "<p>" + pokemon.especie + "</p>" + pokemon.habilidad + "<p>" + pokemon.vida + "</p>"
	  + "<p>" + pokemon.resistencia + "<p>" + "<p>" + pokemon.ataque + "</p>";	
}
function poke4(){
	var pokemon = new cambiarPokemon("Nombre : Luxray","Tipo : Eléctrico",
		"Especie : Chispa ojos","Habilidad : Rivalidad,Intimidación","Vida : 100%"
		,"Resistencia : 100%","Ataque : 100%"); 
	document.getElementById('poke1').src="Luxray.png";	
	document.getElementById("pok").style.background="#AC9909";
	document.getElementById("cambio").innerHTML="<p>" + pokemon.nombre + "</p>" + "<p>" + pokemon.tipo + "</p>" 
	 + "<p>" + pokemon.especie + "</p>" + pokemon.habilidad + "<p>" + pokemon.vida + "</p>"
	  + "<p>" + pokemon.resistencia + "<p>" + "<p>" + pokemon.ataque + "</p>";	
}
function poke5(){
	var pokemon = new cambiarPokemon("Nombre : Arceus","Tipo : Normal",
		"Especie : Alfa","Habilidad : Multitipo","Vida : 100%"
		,"Resistencia : 100%","Ataque : 100%"); 
	document.getElementById('poke1').src="Arceus.png";	
	document.getElementById("pok").style.background="#c3c1c5";
	document.getElementById("cambio").innerHTML="<p>" + pokemon.nombre + "</p>" + "<p>" + pokemon.tipo + "</p>" 
	 + "<p>" + pokemon.especie + "</p>" + pokemon.habilidad + "<p>" + pokemon.vida + "</p>"
	  + "<p>" + pokemon.resistencia + "<p>" + "<p>" + pokemon.ataque + "</p>";	
}
function poke6(){
	var pokemon = new cambiarPokemon("Nombre : Giratina","Tipo : Fastasma,Dragón",
		"Especie : Renegado","Habilidad : Preción,Levitación","Vida : 100%"
		,"Resistencia : 100%","Ataque : 100%"); 
	document.getElementById('poke1').src="Giratina_modificada.png";
	document.getElementById("pok").style.background="#a78d85";		
	document.getElementById("cambio").innerHTML="<p>" + pokemon.nombre + "</p>" + "<p>" + pokemon.tipo + "</p>" 
	 + "<p>" + pokemon.especie + "</p>" + pokemon.habilidad + "<p>" + pokemon.vida + "</p>"
	  + "<p>" + pokemon.resistencia + "<p>" + "<p>" + pokemon.ataque + "</p>";	
}