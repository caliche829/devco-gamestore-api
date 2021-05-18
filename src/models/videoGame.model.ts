/*
Los datos interesantes para la empresa son (con un ej): 
|NOMBRE|CONSOLA|FECHA-INGRESO|FECHA-EGRESO|FECHA-LANZAMIENTO|DESCRIPCION
|pokemon espada|switch|02-02-2020||15-11-2019|Nuevo juego de pokemon al estilo tradicional
*/
export interface IVideoGame {
    serialNumber: string;
    name: string;
    console: string;
    entryDate: string;
    outDate: string;
    launchDate: string;
    description: string;
}