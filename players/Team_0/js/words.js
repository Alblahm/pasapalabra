// Variables
// -----------------------------------------------------------------------------

var words = [
	new Word(0, "A", "Empieza por A:", " Relato breve de un acontecimiento extraño, curioso o divertido, generalmente ocurrido a la persona que lo cuenta.", "Anecdota"),
	new Word(1, "B", "Empieza por B:", " Pasta dulce y esponjosa, hecha con harina, huevos, levadura y otros ingredientes, que puede tener distintas formas", "Bollo"),
	new Word(2, "C", "Empieza por C:", " Corriente de agua que cae desde cierta altura a causa de un brusco desnivel en su cauce, especialmente en un rio", "Cascada"),
	new Word(3, "D", "Empieza por D:", " Arma blanca de hoja corta, ancha y puntiaguda, parecida a la espada pero de menor tamaño", "Daga"),
	new Word(4, "E", "Empieza por E:", " Resultado de una acción", "Efecto"),
	new Word(5, "F", "Contiene la F:", " Que está descompuesto o podrido por la acción de diversos factores y determinados microorganismos", "Putrefacto"),
	new Word(6, "G", "Empieza por G:", " Que se comporta de manera ruda, tosca o grosera", "Garrulo"),
	new Word(7, "H", "Contiene la H:", " Persona o animal que es grueso y de poca altura", "Rechoncho"),
	new Word(8, "I", "Empieza por I:", " Que está en el espacio existente entre dos astros, o que tiene relación con él", "Interestelar"),
	new Word(9, "J", "Empieza por J:", " Chile picante de unos 5 cm de largo, carnoso y de punta redonda, que se usa para condimentar ciertos guisos", "Jalapeño"),
	new Word(10, "L", "Contiene la L:", " Hombre pequeño y débil", "Homunculo"),
	new Word(11, "M", "Empieza por M:", " Persona que sufre o muere por defender su religión o sus ideales. ", "Martir"),
	new Word(12, "N", "Empieza por N:", " Tubo fluorescente que produce una luz brillante.", "Neon"),
	new Word(13, "Ñ", "Contiene la Ñ:", " Dar a una cosa un color distinto del que tiene.", "Teñir"),
	new Word(14, "O", "Empieza por O:", " Que conoce todas las cosas reales y posibles.", "Omnisciente"),
	new Word(15, "P", "Contiene la P:", " Calzado de lona, con suela de esparto, cáñamo o goma, que se sujeta al pie por presión o con unas cintas que se atan al tobillo.", "Alpargata"),
	new Word(16, "Q", "Empieza por Q:", " Que se puede romper fácilmente.", "Quebradizo"),
	new Word(17, "R", "Empieza por R:", " Operación quirúrgica para restaurar la nariz.", "Rinoplastia"),
	new Word(18, "S", "Contiene la S:", " Falta de cuidado en la forma de vestir y en el aseo personal.", "Desaliño"),
	new Word(19, "T", "Empieza por T:", " Persona alocada, bulliciosa y molesta.", "Tabardillo"),
	new Word(20, "U", "Contiene la U:", " Persona que rehúye el trato de otras personas y rechaza las atenciones y muestras de cariño.", "Huraño"),
	new Word(21, "V", "Empieza por V:", " Tributo que el vasallo pagaba a su señor o servicio que le prestaba según este vínculo.", "Vasallaje"),
	new Word(22, "X", "Contiene la X:", " Punto culminante o de mayor satisfacción de la excitación sexual en las zonas erógenas o sexuales.", "Climax"),
	new Word(23, "Y", "Contiene la Y:", " Toro castrado, que se utiliza como animal de tiro y del cual se aprovecha su carne.", "Buey"),
	new Word(24, "Z", "Contiene la Z:", " Que es tonto o tiene poca rapidez mental.", "Pazguato")
];

var PlayerNames = "Xulia y Toño";

// Functions
// -----------------------------------------------------------------------------

function Word(idNumber, letter, hint, definition, word, correct) {
	this.idNumber = idNumber;
	this.letter = letter;
	this.hint = hint;
	this.definition = definition;
	this.word = word;
	this.correct = null;
}
