const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject("La base no es un numero");
            return;
        }else if (!Number(limite)) {
            reject("El limite no es un numero");
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }
        resolve(data);
    });
}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if ( !Number(base)) {
            reject("No es un numero");
            return;
        }
        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}

