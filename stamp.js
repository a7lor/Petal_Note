console.log(localStorage.getItem("flowerCollection"));

// 花一覧
const flowers = [

    {
        name:"桜",
        image:"images/sakura.PNG"
    },

    {
        name:"ひまわり",
        image:"images/hima.PNG"
    },

    {
        name:"紫陽花",
        image:"images/aji.PNG"
    },

    {
        name:"シロツメクサ",
        image:"images/siro.PNG"
    },

    {
        name:"ツツジ",
        image:"images/tutuji.PNG"
    },

    {
        name:"菜の花",
        image:"images/nanohana.PNG"
    },

    {
        name:"たんぽぽ",
        image:"images/tanpopo.PNG"
    },

    {
        name:"ネモフィラ",
        image:"images/nemo.PNG"
    },

    {
        name:"コスモス",
        image:"images/cosmos.PNG"
    },

    {
        name:"バラ",
        image:"images/rose.PNG"
    },

    {
        name:"スズラン",
        image:"images/suzuran.PNG"
    },

    {
        name:"チューリップ",
        image:"images/tulip.PNG"
    },

    {
        name:"スミレ",
        image:"images/sumire.PNG"
    }

];

// 保存されている花を取得
const collection =
JSON.parse(localStorage.getItem("flowerCollection")) || [];

const grid =
document.getElementById("stampGrid");

// カード作成
flowers.forEach(flower=>{

    const card=document.createElement("div");

    if(collection.includes(flower.name)){

        card.className="stamp";

        card.innerHTML=`

            <img src="${flower.image}" alt="${flower.name}">

            <h3>${flower.name}</h3>

            <p>ゲット済み🌸</p>

        `;

    }

    else{

        card.className="stamp locked";

        card.innerHTML=`

            <div class="question">？</div>

            <h3>？？？</h3>

            <p>まだ見つけていません</p>

        `;

    }

    grid.appendChild(card);

});