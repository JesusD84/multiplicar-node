
//Require archivos nuestros
const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');

let comando = argv._[0];
switch(comando) {
    case 'crear':
        crearArchivo(argv.base)
            .then((result) => {
                console.log("Archio creado: " + result);
            }).catch((err) => {
                console.log("Hubo un error: \n" + err);
            });
    break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
    break;
    default:
        console.log("Comando no reconocido");
}

