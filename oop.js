class pageClass {
    #htmlTags = `<form id='formPendaftaran'>
    <label for="nama">Nama/Perusahaan</label><input type="text" name="nama" id="nama">
    <label for="alamat">Alamat</label><input type="text" name="alamat" id="alamat">
    <label for="telpon">No Telpon</label><input type="text" name="telpon" id="telpon">
    <button class="nextButton">Next >>></button>
    </form>`;    

    #htmlTable = `<table>
    <tbody>
    <tr><th>Nama/Perusahaan</th><td>Praditya</td></tr>
    <tr><th>Alamat</th><td>Baituna B8, Colomadu, Kranyar</td></tr>
    <tr><th>Telepon</th><td>08115660086</td></tr>
    </tbody>
    </table>`;
    
    constructor() {
        document.querySelector('.divChildForm').innerHTML = this.#htmlTags;
        document.querySelector('.divMainForm').innerHTML = this.#htmlTable;
        //let kontainer = document.querySelector('.kontainer');
    }
}

let newDiv = new pageClass();

// let div = new pageClass();
// div.kontainer;
// console.log(div.kontainer);
//div.kontainer;
//console.log(div.kontainer);
// let mhs = {
//     nama : 'Praditya',
//     umur : 39
// }

// console.log(mhs.nama);
// console.log(mhs.hasOwnProperty('nama'));

