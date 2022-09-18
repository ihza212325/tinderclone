let database = [
  {
    nama: "Kayess",
    umur: 23,
    foto: "https://memora.id/wp-content/uploads/2021/05/Biodata-Kayess-Ewkharis-4.jpg",
    caption: "goooooo, ONIIIICC!!!",
    likes: 90,
  },
  {
    nama: "Lucinta",
    umur: 21,
    foto: "https://cdn1-production-images-kly.akamaized.net/x4KtTaUGdCi0cDpVdroStZG5DG4=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3988649/original/059918500_1649355911-Potret_lucinta_luna_pasca_operasi_plastik.jpeg",
    caption: "WOOOOII!!",
    likes: 50,
  },
  {
    nama: "Vior",
    umur: 19,
    foto: "https://assets.skor.id/crop/0x0:0x0/x/photo/2022/02/10/3894022157.jpeg",
    caption: "deeeeck deeck",
    likes: 190,
  },
  {
    nama: "Kobo Kanaeru",
    umur: 18,
    foto: "https://i.pinimg.com/736x/74/67/42/74674207aa86707cd55f53ed08d03c3e.jpg",
    caption: "Wants some ice?",
    likes: 999,
  },
  {
    nama: "Pakde Jonny G Plate",
    umur: 50,
    foto: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Menteri_Komunikasi_dan_Informatika%2C_Johnny_G._Plate.jpg",
    caption: "jadi apa? Prok prok prok",
    likes: -10,
  },
  {
    nama: "Enzy Storia Leoversia",
    umur: 30,
    foto: "https://cdn.discordapp.com/attachments/1019891644184678410/1020158914291052575/unknown.png",
    caption: "sekali putaran...",
    likes: 2123,
  },
  {
    nama: "Asmirandah",
    umur: 33,
    foto: "https://cdn.discordapp.com/attachments/1019891644184678410/1020159159129346160/unknown.png",
    caption: "hai",
    likes: 910,
  },
  {
    nama: "kim tae-hyung",
    umur: 32,
    foto: "https://cdn.discordapp.com/attachments/1019891644184678410/1020159281770811551/unknown.png",
    caption: "Dont be trapped in someone elses dream.",
    likes: 10000,
  },
  {
    nama: "jerry",
    umur: 16,
    foto: "https://cdn.discordapp.com/attachments/1019891644184678410/1020159359302516756/unknown.png",
    caption: "Gomawo yoo",
    likes: 555,
  },
  {
    nama: "Ade Rai",
    umur: 49,
    foto: "https://media.discordapp.net/attachments/1019891644184678410/1020192578890645584/ade_rei.jpg?width=530&height=662",
    caption: "Muscle of Iron, Bone of Steel.....",
    likes: 9056,
  },
  {
    nama: "John Snow",
    umur: 33,
    foto: "https://media.discordapp.net/attachments/1019891644184678410/1020192578613805076/john_snow.jpg?width=437&height=544",
    caption: "Nothing lasts forever, we can change the future",
    likes: 11111,
  },
  {
    nama: "Trafalgar",
    umur: 23,
    foto: "https://media.discordapp.net/attachments/1019891644184678410/1020192578223755274/deny.png?width=555&height=544",
    caption: "room, shambles",
    likes: 433,
  },
  {
    nama: "Gojo Freeman",
    umur: 67,
    foto: "https://media.discordapp.net/attachments/1019891644184678410/1020192577808502834/morgan_freeman.png",
    caption: "Yowai Mo",
    likes: 90,
  },
  {
    nama: "Celber",
    umur: 27,
    foto: "https://media.discordapp.net/attachments/1019891644184678410/1020192577359728680/sela.jpg",
    caption: "NO KOMEN",
    likes: 1274747,
  },
];

//============= CREATE DATA ===================
function create() {
  let form = document.getElementById("formPost");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nama = e.target[0].value;
    let umur = e.target[1].value;
    let linkfoto = e.target[2].value;
    let caption = e.target[3].value;

    let obj = {
      nama: nama,
      umur: umur,
      linkfoto: linkfoto,
      caption: caption,
    };

    document.getElementById("kontener").innerHTML += `<div class="card">
<div class="headerCard">
    <div class="profilCard">
      <img width="70px" src="https://cdn.discordapp.com/attachments/1019891644184678410/1019929333843886180/unknown.png" alt="">
    </div>
    <div class="containerCard">

    <div class="nama">
      <!-- Nama dan UMUR atas -->
      <h3 class="namaOrang">${nama}</h3>
      <h3 class="namaOrang">${umur} tahun</h3>
      <!-- =================== -->

    </div>
    <div class="edit">
      <!-- === TITIK TIGA EDITT=== -->
      <img 
         class="trash"
        src="https://icon2.cleanpng.com/20180401/ztw/kisspng-renca-computer-icons-trash-recycle-bin-5ac1163329e985.7681847815226035711717.jpg"
        alt="titk tiga"
      />
      <img 
         class="titik3"
        src="https://cdn.icon-icons.com/icons2/2954/PNG/512/three_dots_vertical_menu_icon_184615.png"
        alt="titk tiga"
      />
      <!-- ====================== -->
    </div>
  </div>
</div>
<div class="imageCard">
      <!-- GAMBAR  -->
  <img 
    class="imageCard"
    src=${linkfoto}
    alt="kayes"
  />
  <!-- ============ -->
</div>
<!-- LOVE LOVE -->
<div class="love">
  <img  src="/assets/love.svg" alt="love">
  <div class='fullLove'>
  <img src="/assets/lovefull.png" alt="love">
  </div>
  <img src="https://cdn-icons-png.flaticon.com/128/5338/5338282.png" alt="love">
  <br> <label for="" style="font-weight: bold;">900 likes</label>
</div>
<!-- ============== -->
<!-- === CAPTION ===== -->
<div class="caption">${caption}</div>
<!-- ================ -->
</div>`;
    alert("DATA BERHASIL DI SIMPAN");
    return database.push(obj);
  });
}
create();
//=========== CREATE DATA ===============

//============== TAMPILAN AWAL ================
function card(data) {
  document.getElementById("kontener").innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let perData = data[i];
    let nama = perData.nama;
    let umur = perData.umur;
    let foto = perData.foto;
    let caption = perData.caption;
    let like = perData.likes;
    // console.log(foto);
    // console.log(nama);
    document.getElementById("kontener").innerHTML += `<div class="card">
<div class="headerCard">
    <div class="profilCard">
      <img  src="https://media.discordapp.net/attachments/1019891644184678410/1020192577548464178/nezuko.jpg" alt="">
    </div>
    <div class="containerCard">

    <div class="nama">
      <!-- Nama dan UMUR atas -->
      <h3 id="nama${i}" onclick='hapus(${i})' class="namaOrang">${nama}</h3>
      <h3 class="namaOrang">${umur} tahun</h3>
      <!-- =================== -->

    </div>
    <div class="edit">
      <!-- === TITIK TIGA EDITT=== -->
      
      <img onclick='hapus(${i})'
         class="trash"
        src="https://icon2.cleanpng.com/20180401/ztw/kisspng-renca-computer-icons-trash-recycle-bin-5ac1163329e985.7681847815226035711717.jpg"
        alt="titk tiga"
      />
      <a href='#popup2' name='${i}'}>
      <img onclick='edit(${i})'
         class="titik3"
        src="https://cdn.icon-icons.com/icons2/2954/PNG/512/three_dots_vertical_menu_icon_184615.png"
        alt="titk tiga"
      />
      </a>
      <!-- ====================== -->
    </div>
  </div>
</div>
<div class="imageCard">
      <!-- GAMBAR  -->
  <img
    class="imageCard"
    src=${foto}
    alt="kayes"
  />
  <!-- ============ -->
</div>
<!-- LOVE LOVE -->
<div class="love">

  <img src="/assets/love.svg" alt="love">
  <div class='fullLove'>
  <img src="/assets/lovefull.png" alt="love">
  </div>
  <img src="https://cdn-icons-png.flaticon.com/128/5338/5338282.png" alt="love">
  <br> <label for="" style="font-weight: bold;">${like} likes</label>
</div>
<!-- ============== -->
<!-- === CAPTION ===== -->
<div class="caption">${caption}</div>
<!-- ================ -->
</div>`;
  }
}

card(database);

//=========== END TAMPILAN AWAL ===================

//====================== FUNGSI RESET SAAT CREATE DATA ===============
function createSatu(data) {
  document.getElementById("kontener").innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let perData = data[i];
    let nama = perData.nama;
    let umur = perData.umur;
    let foto = perData.foto;
    let caption = perData.caption;

    document.getElementById("kontener").innerHTML += `<div class="card">
<div class="headerCard">
<div class="profilCard">
  <img width="70px" src="https://cdn.discordapp.com/attachments/1019891644184678410/1019929333843886180/unknown.png" alt="">
</div>
<div class="containerCard">

<div class="nama">
  <!-- Nama dan UMUR atas -->
  <h3 id="nama${i}" onclick='hapus(${i})' class="namaOrang">${nama}</h3>
  <h3 class="namaOrang">${umur} tahun</h3>
  <!-- =================== -->

</div>
<div class="edit">
  <!-- === TITIK TIGA EDITT=== -->
  <a href='#popup2' name='${i}'}>
  <img onclick='hapus(${i})'
         class="trash"
        src="https://icon2.cleanpng.com/20180401/ztw/kisspng-renca-computer-icons-trash-recycle-bin-5ac1163329e985.7681847815226035711717.jpg"
        alt="titk tiga"
      />
  <img onclick='edit(${i})'
     class="titik3"
    src="https://cdn.icon-icons.com/icons2/2954/PNG/512/three_dots_vertical_menu_icon_184615.png"
    alt="titk tiga"
  />
  </a>
  <!-- ====================== -->
</div>
</div>
</div>
<div class="imageCard">
  <!-- GAMBAR  -->
<img
class="imageCard"
src=${foto}
alt="kayes"
/>
<!-- ============ -->
</div>
<!-- LOVE LOVE -->
<div class="love">
<img  src="/assets/love.svg" alt="love">
<div class='fullLove'>
  <img  src="/assets/lovefull.png" alt="love">
  </div>
<img  src="https://cdn-icons-png.flaticon.com/128/5338/5338282.png" alt="love">
<br> <label for="" style="font-weight: bold;">900 likes</label>
</div>
<!-- ============== -->
<!-- === CAPTION ===== -->
<div class="caption">${caption}</div>
<!-- ================ -->
</div>`;
  }
}
//============ END RESET SAAT  CREATE DATA ================

// ============ DELETE ==================
// let count=0
function hapus(dapatIndex) {
  let afterdelete = [];
  for (let i = 0; i < database.length; i++) {
    let perIndexData = database[i];
    if (i === Number(dapatIndex)) {
      continue;
    }
    afterdelete.push(perIndexData);
  }

  console.log(">>>>>>>>>>>>>>>>>>>>", dapatIndex);
  console.log(afterdelete);
  database = afterdelete;
  document.getElementById("kontener").innerHTML = ``;

  for (let i = 0; i < database.length; i++) {
    let perData = database[i];
    let nama = perData.nama;
    let umur = perData.umur;
    let foto = perData.foto;
    let caption = perData.caption;
    document.getElementById("kontener").innerHTML += `<div class="card">
<div class="headerCard">
<div class="profilCard">
  <img width="70px" src="https://cdn.discordapp.com/attachments/1019891644184678410/1019929333843886180/unknown.png" alt="">
</div>
<div class="containerCard">

<div class="nama">
  <!-- Nama dan UMUR atas -->
  <h3 id="nama${i}" onclick='hapus(${i})' class="namaOrang">${nama}</h3>
  <h3 class="namaOrang">${umur} tahun</h3>
  <!-- =================== -->

</div>
<div class="edit">
  <!-- === TITIK TIGA EDITT=== -->
  <a href='#popup2' name='${i}'}>
  <img onclick='hapus(${i})'
         class="trash"
        src="https://icon2.cleanpng.com/20180401/ztw/kisspng-renca-computer-icons-trash-recycle-bin-5ac1163329e985.7681847815226035711717.jpg"
        alt="titk tiga"
      />
  <img onclick='edit(${i})'
     class="titik3"
    src="https://cdn.icon-icons.com/icons2/2954/PNG/512/three_dots_vertical_menu_icon_184615.png"
    alt="titk tiga"
  />
  </a>
  <!-- ====================== -->
</div>
</div>
</div>
<div class="imageCard">
  <!-- GAMBAR  -->
<img
class="imageCard"
src=${foto}
alt="kayes"
/>
<!-- ============ -->
</div>
<!-- LOVE LOVE -->
<div class="love">
<img src="/assets/love.svg" alt="love">
<div class='fullLove'>
  <img  src="/assets/lovefull.png" alt="love">
  </div>
<img  src="https://cdn-icons-png.flaticon.com/128/5338/5338282.png" alt="love">
<br> <label for="" style="font-weight: bold;">900 likes</label>
</div>
<!-- ============== -->
<!-- === CAPTION ===== -->
<div class="caption">${caption}</div>
<!-- ================ -->
</div>`;
  }
  alert("DATA BERHASIL DI HAPUS");
}

for (let i = 0; i < database.length; i++) {
  document.getElementById(`nama${i}`).addEventListener("click", (e) => {
    e.preventDefault();
    // count++
    // console.log(count);
    console.log(e);
    console.log(e.target.id);
    let hapus = e.target.id;
    let dapatIndex = "";
    for (let i = 0; i < hapus.length; i++) {
      let perKarakter = hapus[i];

      if (Number(perKarakter)) {
        dapatIndex += perKarakter;
      }
    }
    console.log(dapatIndex);

    // document.getElementById('kontenerdelete').innerHTML=`><><><><>`

    document.getElementById("kontener").innerHTML = ``;
    for (let i = 0; i < database.length; i++) {
      let perData = database[i];
      let nama = perData.nama;
      let umur = perData.umur;
      let foto = perData.foto;
      let caption = perData.caption;
      document.getElementById("kontener").innerHTML += `<div class="card">
<div class="headerCard">
<div class="profilCard">
  <img width="70px" src="https://cdn.discordapp.com/attachments/1019891644184678410/1019929333843886180/unknown.png" alt="">
</div>
<div class="containerCard">

<div class="nama">
  <!-- Nama dan UMUR atas -->
  <h3 id="nama${i}" onclick='hapus(${i})' class="namaOrang">${nama}</h3>
  <h3 class="namaOrang">${umur} tahun</h3>
  <!-- =================== -->

</div>
<div class="edit">
  <!-- === TITIK TIGA EDITT=== -->
  <img onclick='hapus(${i})'
         class="trash"
        src="https://icon2.cleanpng.com/20180401/ztw/kisspng-renca-computer-icons-trash-recycle-bin-5ac1163329e985.7681847815226035711717.jpg"
        alt="titk tiga"
      />
  <a href='#popup2' name='${i}'}>
  <img onclick='edit(${i})'
     class="titik3"
    src="https://cdn.icon-icons.com/icons2/2954/PNG/512/three_dots_vertical_menu_icon_184615.png"
    alt="titk tiga"
  />
  </a>
  <!-- ====================== -->
</div>
</div>
</div>
<div class="imageCard">
  <!-- GAMBAR  -->
<img
class="imageCard"
src=${foto}
alt="kayes"
/>
<!-- ============ -->
</div>
<!-- LOVE LOVE -->
<div class="love">
<img  src="/assets/love.svg" alt="love">
<div class='fullLove'>
  <img  src="/assets/lovefull.png" alt="love">
  </div>
<img  src="https://cdn-icons-png.flaticon.com/128/5338/5338282.png" alt="love">
<br> <label for="" style="font-weight: bold;">900 likes</label>
</div>
<!-- ============== -->
<!-- === CAPTION ===== -->
<div class="caption">${caption}</div>
<!-- ================ -->
</div>`;
    }
  });
}

//================== END DELETE ======================

//================== SHUFFLE =================

// document.getElementById("shuffle").onclick=filter(database,23)
function filter() {
  let shuffle = Math.floor(Math.random() * database.length);
  console.log(shuffle);
  document.getElementById("kontener").innerHTML = "";

  for (let i = 0; i < database.length; i++) {
    let perData = database[i];
    let nama = perData.nama;
    let umur = perData.umur;
    let foto = perData.foto;
    let caption = perData.caption;

    if (i === shuffle) {
      document.getElementById("kontener").innerHTML += `<div class="card">
<div class="headerCard">
<div class="profilCard">
  <img width="70px" src="https://cdn.discordapp.com/attachments/1019891644184678410/1019929333843886180/unknown.png" alt="">
</div>
<div class="containerCard">

<div class="nama">
  <!-- Nama dan UMUR atas -->
  <h3 id="nama${i}" onclick='hapus(${i})' class="namaOrang">${nama}</h3>
  <h3 class="namaOrang">${umur} tahun</h3>
  <!-- =================== -->

</div>
<div class="edit">
  <!-- === TITIK TIGA EDITT=== -->
  <img onclick='hapus(${i})'
         class="trash"
        src="https://icon2.cleanpng.com/20180401/ztw/kisspng-renca-computer-icons-trash-recycle-bin-5ac1163329e985.7681847815226035711717.jpg"
        alt="titk tiga"
      />
  <a href='#popup2' name='${i}'}>
  <img onclick='edit(${i})'
     class="titik3"
    src="https://cdn.icon-icons.com/icons2/2954/PNG/512/three_dots_vertical_menu_icon_184615.png"
    alt="titk tiga"
  />
  </a>
  <!-- ====================== -->
</div>
</div>
</div>
<div class="imageCard">
  <!-- GAMBAR  -->
<img
class="imageCard"
src=${foto}
alt="kayes"
/>
<!-- ============ -->
</div>
<!-- LOVE LOVE -->
<div class="love">
<img  src="/assets/love.svg" alt="love">
<div class='fullLove'>
  <img src="/assets/lovefull.png" alt="love">
  </div>
<img  src="https://cdn-icons-png.flaticon.com/128/5338/5338282.png" alt="love">
<br> <label for="" style="font-weight: bold;">900 likes</label>
</div>
<!-- ============== -->
<!-- === CAPTION ===== -->
<div class="caption">${caption}</div>
<!-- ================ -->
</div>`;
    }
  }
}
//=============== END FILTER =================

console.log(database);

//============== EDIT ===============

function edit(dapatIndex) {
  for (let i = 0; i < database.length; i++) {
    let perIndexData = database[i];
    let nama = perIndexData.nama;
    let umur = perIndexData.umur;
    let foto = perIndexData.foto;
    let caption = perIndexData.caption;
    let like = perIndexData.likes;

    // console.log(nama);
    if (i === dapatIndex) {
      document.getElementById("namaEdit").value = nama;
      document.getElementById("umurEdit").value = umur;
      document.getElementById("alamatEdit").value = foto;
      // document.getElementById('captainEdit').value=caption
      let form = document.getElementById("formEditt");
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        let namae = e.target[0].value;
        let umura = e.target[1].value;
        let linkfotoa = e.target[2].value;
        let captiona = e.target[3].value;

        database[i].nama = namae;
        database[i].umur = umura;
        database[i].foto = linkfotoa;
        database[i].caption = captiona;
        // console.log(namae,umura,linkfotoa,caption);
        // console.log(database[i].nama);
      });
    }
    // afterdelete.push(perIndexData)
    // create()
  }

  // return database
}
console.log(database);
function editLoad() {
  document.getElementById("kontener").innerHTML = "";

  for (let i = 0; i < database.length; i++) {
    let perData = database[i];
    let nama = perData.nama;
    let umur = perData.umur;
    let foto = perData.foto;
    let caption = perData.caption;
    let like = perData.likes;

    document.getElementById("kontener").innerHTML += `<div class="card">
        <div class="headerCard">
            <div class="profilCard">
              <img width="70px" src="https://cdn.discordapp.com/attachments/1019891644184678410/1019929333843886180/unknown.png" alt="">
            </div>
            <div class="containerCard">
        
            <div class="nama">
              <!-- Nama dan UMUR atas -->
              <h3 id="nama${i}" onclick='hapus(${i})' class="namaOrang">${nama}</h3>
              <h3 class="namaOrang">${umur} tahun</h3>
              <!-- =================== -->
        
            </div>
            <div class="edit">
              <!-- === TITIK TIGA EDITT=== -->
              
              <img onclick='hapus(${i})'
                 class="trash"
                src="https://icon2.cleanpng.com/20180401/ztw/kisspng-renca-computer-icons-trash-recycle-bin-5ac1163329e985.7681847815226035711717.jpg"
                alt="titk tiga"
              />
              <a href='#popup2' name='${i}'}>
              <img onclick='edit(${i})'
                 class="titik3"
                src="https://cdn.icon-icons.com/icons2/2954/PNG/512/three_dots_vertical_menu_icon_184615.png"
                alt="titk tiga"
              />
              </a>
              <!-- ====================== -->
            </div>
          </div>
        </div>
        <div class="imageCard">
              <!-- GAMBAR  -->
          <img
            class="imageCard"
            src=${foto}
            alt="kayes"
          />
          <!-- ============ -->
        </div>
        <!-- LOVE LOVE -->
        <div class="love">
        
          <img src="/assets/love.svg" alt="love">
          <div class='fullLove'>
          <img src="/assets/lovefull.png" alt="love">
          </div>
          <img src="https://cdn-icons-png.flaticon.com/128/5338/5338282.png" alt="love">
          <br> <label for="" style="font-weight: bold;">${like} likes</label>
        </div>
        <!-- ============== -->
        <!-- === CAPTION ===== -->
        <div class="caption">${caption}</div>
        <!-- ================ -->
        </div>`;
  }
  alert("DATA BERHASIL DI EDIT");
}
