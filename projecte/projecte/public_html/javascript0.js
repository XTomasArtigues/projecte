//Escena inicial y única del joc. Cada escena s'ha de definir com aquesta. En el nostre cas només tenim aquesta.
class Escena extends Phaser.Scene {

    //Funció que s'encarregarà de precarregar els recursoso que necessita el joc: imatges, sons, fitxers json, etc.
    preload() {
        console.log('preload');
    }

    //Aquesta funció només s'executa un cop, quan s'inicia el joc. S'encarrega de fer la configuració bàsica i afegir els objectes en pantalla
    create() {
        console.log('create');
    }

    //Aquesta funció s'executa diversos cops per segon. Gestiona els moviments dels personatges, les col·lisions entre ells i, en general, tot el que ha de ser avaluat de manera constant.
    update() {
        console.log('update');
    }
}

//Configuració del joc
const config = {
    //Renderitzat del joc. Els seus valors poden ser CANVAS, WEBGL, HEADLESS i AUTO. Auto seleciona la millor opció.
    type: Phaser.AUTO,
    //Midas del CANVAS per defecte - Rectangle on es desenvolupa el joc. Després es podrà modificar mantenint la proporció
    width: 960,
    height: 640,
    //Escenes del joc Si hi ha més d'una, es defineixen amb un array, on la primera escena del l'array, és l'escena inicial del joc
    scene: Escena,
};

new Phaser.Game(config); //Inicialització del joc amb la configuració config
