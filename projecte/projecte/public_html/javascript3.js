//Escena inicial
class Inici extends Phaser.Scene {

    //Funció que s'encarregarà de precarregar els recursoso que necessita el joc: imatges, sons, fitxers json, etc.
    preload() {
        resize(); //Cridem a la funció per que al redimensionar la finestra, la imatge continui ocupant tota la pantalla
        window.addEventListener('resize', resize); //Es redimensiona la finestra mitjançant la funció resize quan fem l'acció de redimensionar-la
        this.load.image('inici', 'imatges/inici.jpg'); //Definim la imatge que volem mostrar per pantalla (nom = fons i ruta on es trova la imatge de l'espai)
        this.load.audio('musica', 'imatges/musica.mp3');
    }

    //Aquesta funció només s'executa un cop, quan s'inicia el joc. S'encarrega de fer la configuració bàsica i afegir els objectes en pantalla
    create() {

        this.add.sprite(480, 320, 'inici'); //Col.loca el centre de la imatge de fons en les coordenades 480 (960/2) i 320 (640/2) perquè la imatge espai estigui en el centre de la pantalla.

        //Definim la zona on l'usuari pot seleccionar el camí de la nau
        const opcioEscena = this.add.zone(85, 105, 190, 75); //Definim la zona on l'origen (centre) seran les coordenades x=140 i y=10, i que tindrà una amplada de 450px i una alçada de 410px
        opcioEscena.setOrigin(0); //Estableix l'origen de coordenades d'aquesta zona en la seva cantonada superior esquerra i no el seu centre
        opcioEscena.setName('fons'); //Dona un nom ('nau') a la zona interactiva opcioNau.
        opcioEscena.setInteractive(); //Fem que la zona sigui interactiva per reaccionar quan la seleccioni l'usuari
        opcioEscena.once('pointerdown', () => this.opcioPulsada(opcioEscena)); //Quan seleccionem aquesta zona s'activarà el mètode opcioPulsada passant-li com a paràmetre "opcioNau"
        this.add.graphics().lineStyle(2, 0x00ff00).strokeRectShape(opcioEscena); //Afegim un requadre vermell (0xff0000) de 2 píxels de gruix a la zona de la nau.

        //Definim la zona on l'usuari pot seleccionar el camí de la terra
        const opcioFi = this.add.zone(75, 299, 527, 85);
        opcioFi.setOrigin(0);
        opcioFi.setName('derrota'); //Dona un nom ('terra') a la zona interactiva opcioNau.
        opcioFi.setInteractive(); //Fem que la zona sigui interactiva per reaccionar quan la seleccioni l'usuari
        opcioFi.once('pointerdown', () => this.opcioPulsada(opcioFi)); //Quan seleccionem aquesta zona s'activarà el mètode opcioPulsada passant-li com a paràmetre "opcioMon"
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcioFi); ////Afegim un requadre verd (0x00ff00) de 2 píxels de gruix a la zona de la terra.  

        const musica = this.sound.add('musica');
        musica.play({
            volume: 1
        });
    }

    //Mètode que retorna diferents escenes segons l'àrea pulsa per l'usuari. 
    opcioPulsada(opcio) {
        if (opcio.name === 'fons') { //Àrea corresponent a la nau
            this.scene.start('fonsScene'); //Mostra l'escena de la nau
        } else { //Àrea corresponent a la casa
            this.scene.start('derrotaScene'); //Mostra l'escena de la casa
        }
    }
}



//Escena inicial. Cada escena s'ha de definir com aquesta.
class Escena extends Phaser.Scene {

    constructor() {
        super({key: 'fonsScene'}); //Construïm l'escena de la nau
    }

    //Funció que s'encarregarà de precarregar els recursoso que necessita el joc: imatges, sons, fitxers json, etc.
    preload() {
        resize(); //Cridem a la funció per que al redimensionar la finestra, la imatge continui ocupant tota la pantalla
        window.addEventListener('resize', resize); //Es redimensiona la finestra mitjançant la funció resize quan fem l'acció de redimensionar-la
        this.load.image('fons', 'imatges/espai.jpg'); //Definim la imatge que volem mostrar per pantalla (nom = fons i ruta on es trova la imatge de l'espai)
    }

    //Aquesta funció només s'executa un cop, quan s'inicia el joc. S'encarrega de fer la configuració bàsica i afegir els objectes en pantalla
    create() {

        this.add.sprite(480, 320, 'fons'); //Col.loca el centre de la imatge de fons en les coordenades 480 (960/2) i 320 (640/2) perquè la imatge espai estigui en el centre de la pantalla.

        //Definim la zona on l'usuari pot seleccionar el camí de la nau
        const opcioNau = this.add.zone(140, 10, 440, 400); //Definim la zona on l'origen (centre) seran les coordenades x=140 i y=10, i que tindrà una amplada de 450px i una alçada de 410px
        opcioNau.setOrigin(0); //Estableix l'origen de coordenades d'aquesta zona en la seva cantonada superior esquerra i no el seu centre
        opcioNau.setName('nau'); //Dona un nom ('nau') a la zona interactiva opcioNau.
        opcioNau.setInteractive(); //Fem que la zona sigui interactiva per reaccionar quan la seleccioni l'usuari
        opcioNau.once('pointerdown', () => this.opcioPulsada(opcioNau)); //Quan seleccionem aquesta zona s'activarà el mètode opcioPulsada passant-li com a paràmetre "opcioNau"
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcioNau); //Afegim un requadre vermell (0xff0000) de 2 píxels de gruix a la zona de la nau.

        //Definim la zona on l'usuari pot seleccionar el camí de la terra
        const opcioMon = this.add.zone(590, 240, 370, 410);
        opcioMon.setOrigin(0);
        opcioMon.setName('terra'); //Dona un nom ('terra') a la zona interactiva opcioNau.
        opcioMon.setInteractive(); //Fem que la zona sigui interactiva per reaccionar quan la seleccioni l'usuari
        opcioMon.once('pointerdown', () => this.opcioPulsada(opcioMon)); //Quan seleccionem aquesta zona s'activarà el mètode opcioPulsada passant-li com a paràmetre "opcioMon"
        //this.add.graphics().lineStyle(2, 0x00ff00).strokeRectShape(opcioMon); ////Afegim un requadre verd (0x00ff00) de 2 píxels de gruix a la zona de la terra.  
    }

    //Mètode que retorna diferents escenes segons l'àrea pulsa per l'usuari. 
    opcioPulsada(opcio) {
        if (opcio.name === 'nau') { //Àrea corresponent a la nau
            this.scene.start('nauScene'); //Mostra l'escena de la nau
        } else { //Àrea corresponent a la casa
            this.scene.start('casaScene'); //Mostra l'escena de la casa
        }
    }
}

//Escena de la nau
class EscenaNau extends Phaser.Scene {

    constructor() {
        super({key: 'nauScene'}); //Construïm l'escena de la nau
    }

    preload() {
        this.load.image('nau', 'imatges/nau.jpg'); //Definim la imatge que volem mostrar per pantalla (nom = nau i ruta on es trova la imatge de la nau)
    }

    create() {
        this.add.sprite(480, 320, 'nau'); //Col.loca el centre de la imatge de fons en les coordenades 480 (960/2) i 320 (640/2) perquè la imatge nau estigui en el centre de la pantalla.

        //Definim la zona on l'usuari pot seleccionar el camí del boss
        const opcioNau = this.add.zone(150, 170, 250, 370);
        opcioNau.setOrigin(0);
        opcioNau.setName('boss');
        opcioNau.setInteractive();
        opcioNau.once('pointerdown', () => this.opcioPulsada(opcioNau));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcioNau);

        //Definim la zona on l'usuari pot seleccionar el camí a casa
        const opcioMon = this.add.zone(530, 170, 250, 370);
        opcioMon.setOrigin(0);
        opcioMon.setName('casa');
        opcioMon.setInteractive();
        opcioMon.once('pointerdown', () => this.opcioPulsada(opcioMon));
        this.add.graphics().lineStyle(2, 0x00ff00).strokeRectShape(opcioMon);
    }

    opcioPulsada(opcio) {
        if (opcio.name === 'boss') {  //Àrea corresponent al boss
            this.scene.start('bossScene'); //Mostra l'escena del boss
        } else { //Àrea corresponent a la casa
            this.scene.start('casaScene'); //Mostra l'escena de la casa
        }
    }
}

//Escena de la casa
class EscenaCasa extends Phaser.Scene {

    constructor() {
        super({key: 'casaScene'}); //Construïm l'escena de la casa
    }

    preload() {
        this.load.image('casa', 'imatges/guanyar.jpg'); //Definim la imatge que volem mostrar per pantalla (nom = casa i ruta on es trova la imatge de la casa)
    }

    create() {
        this.add.sprite(480, 320, 'casa'); //Col.loca el centre de la imatge de fons en les coordenades 480 (960/2) i 320 (640/2) perquè la imatge casa estigui en el centre de la pantalla.
    }
}

//Escena del boss
class EscenaBoss extends Phaser.Scene {

    constructor() {
        super({key: 'bossScene'});
    }

    preload() {
        this.load.image('boss', 'imatges/boss.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'boss');//Definim la zona on l'usuari pot seleccionar el camí del boss

        //Zona interactiva ull
        const opcioUll = this.add.zone(270, 250, 75, 75);
        opcioUll.setOrigin(0);
        opcioUll.setName('ull');
        opcioUll.setInteractive();
        opcioUll.once('pointerdown', () => this.opcioPulsada(opcioUll));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcioUll);

        //Zona interactiva boca
        const opcioBoca = this.add.zone(400, 300, 200, 225);
        opcioBoca.setOrigin(0);
        opcioBoca.setName('boca');
        opcioBoca.setInteractive();
        opcioBoca.once('pointerdown', () => this.opcioPulsada(opcioBoca));
        this.add.graphics().lineStyle(2, 0x00ff00).strokeRectShape(opcioBoca);
    }

    opcioPulsada(opcio) {
        if (opcio.name === 'ull') {  //Àrea corresponent al ull
            this.scene.start('ullScene'); //Mostra l'escena de l'ull
        } else { //Àrea corresponent a la boca
            this.scene.start('bocaScene'); //Mostra l'escena de la boca
        }
    }
}

//Escena del ull
class EscenaUll extends Phaser.Scene {

    constructor() {
        super({key: 'ullScene'});
    }

    preload() {
        this.load.image('ull', 'imatges/ull.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'ull');

        const opcioFi = this.add.zone(240, 120, 480, 320);
        opcioFi.setOrigin(0);
        opcioFi.setName('derrota'); //Dona un nom ('terra') a la zona interactiva opcioNau.
        opcioFi.setInteractive(); //Fem que la zona sigui interactiva per reaccionar quan la seleccioni l'usuari
        opcioFi.once('pointerdown', () => this.opcioPulsada(opcioFi)); //Quan seleccionem aquesta zona s'activarà el mètode opcioPulsada passant-li com a paràmetre "opcioMon"
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcioFi); ////Afegim un requadre verd (0x00ff00) de 2 píxels de gruix a la zona de la terra.  
    }

    opcioPulsada(opcio) {
        if (opcio.name === 'derrota') {  //Àrea corresponent al ull
            this.scene.start('derrotaScene'); //Mostra l'escena de l'ull
        }
    }
}

//Escena del ull
class EscenaBoca extends Phaser.Scene {

    constructor() {
        super({key: 'bocaScene'});
    }

    preload() {
        this.load.image('boca', 'imatges/boca.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'boca');
        
        const opcioFi = this.add.zone(240, 120, 480, 320);
        opcioFi.setOrigin(0);
        opcioFi.setName('derrota'); //Dona un nom ('terra') a la zona interactiva opcioNau.
        opcioFi.setInteractive(); //Fem que la zona sigui interactiva per reaccionar quan la seleccioni l'usuari
        opcioFi.once('pointerdown', () => this.opcioPulsada(opcioFi)); //Quan seleccionem aquesta zona s'activarà el mètode opcioPulsada passant-li com a paràmetre "opcioMon"
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcioFi); ////Afegim un requadre verd (0x00ff00) de 2 píxels de gruix a la zona de la terra.  
    }

    opcioPulsada(opcio) {
        if (opcio.name === 'derrota') {  //Àrea corresponent al ull
            this.scene.start('derrotaScene'); //Mostra l'escena de l'ull
        }
    }
}

//Escena del final derrota
class EscenaDerrota extends Phaser.Scene {

    constructor() {
        super({key: 'derrotaScene'});
    }

    preload() {
        this.load.image('derrota', 'imatges/derrota.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'derrota');
    }
}


//Funció que fa que la imatge ocupi el 100% de la pantalla quan redimensionem la pantalla
function resize() {
    const canvas = document.querySelector("canvas"); //Selecciona l'element canvas del document HTML
    const windowWidth = window.innerWidth; //Obté l'amplada actual de la finestra del navegador i la guarda a la variable windowWidth
    const windowHeight = window.innerHeight; //Obté l'altura actual de la finestra del navegador i la guarda a la variable windowHeight

    canvas.style.width = windowWidth + 'px'; //Estableix l'amplada de l'element <canvas> igual a l'amplada de la finestra del navegador. Afegeix 'px' al final per indicar que es tracta de píxels.
    canvas.style.height = windowHeight + 'px'; //Estableix l'altura de l'element <canvas> igual a l'altura de la finestra del navegador. També afegeix 'px' al final.
}

//Configuració del joc
const config = {
//Renderitzat del joc. Els seus valors poden ser CANVAS, WEBGL, HEADLESS i AUTO. Auto seleciona la millor opció.
    type: Phaser.AUTO,
    //Midas del CANVAS per defecte - Rectangle on es desenvolupa el joc. Després es podrà modificar mantenint la proporció.
    width: 960,
    height: 640,
    //Escenes del joc Si hi ha més d'una, es defineixen amb un array, on la primera escena del l'array, és l'escena inicial del joc
    scene: [Inici, Escena, EscenaNau, EscenaCasa, EscenaBoss, EscenaUll, EscenaBoca, EscenaDerrota]
};

new Phaser.Game(config); //Inicialització del joc amb la configuració config
