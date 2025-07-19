const fs = require('fs');

const fileReadCallback = (error, data) => {
    if(error){
        console.log("Gagal memuat berkas");
        console.log(error);
        return;
    }
    console.log(data);
};

fs.readFile('notes.txt', 'UTF-8', fileReadCallback);