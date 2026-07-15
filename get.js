// 選択した花を取得
const flower = localStorage.getItem("selectedFlower");


// 花の画像
const flowerImages = {

    "桜":"images/sakura.PNG",

    "ひまわり":"images/hima.PNG",

    "紫陽花":"images/aji.png",

    "シロツメクサ":"images/siro.PNG",

    "ツツジ":"images/tutuji.PNG",

    "菜の花":"images/nanohana.PNG",

    "たんぽぽ":"images/tan.PNG",

    "ネモフィラ":"images/nemo.PNG",

    "コスモス":"images/kos.PNG",

    "スズラン":"images/suzurann.PNG",

    "チューリップ":"images/tyu.PNG",

    "スミレ":"images/sumire.PNG"

};



// 要素取得

const image = document.getElementById("flowerImage");

const title = document.getElementById("flowerTitle");



// 花が選択されている場合

if(flower){


    title.textContent =
    flower + " をゲット！";



    // 画像変更

    const imgPath = flowerImages[flower];


    if(imgPath){

        image.src = imgPath;

    }



    // ---------- スタンプ帳保存 ----------


    let collection =
    JSON.parse(
        localStorage.getItem("flowerCollection")
    ) || [];



    if(!collection.includes(flower)){


        collection.push(flower);



        localStorage.setItem(

            "flowerCollection",

            JSON.stringify(collection)

        );


    }


}



// スタンプ帳へ移動

function goStamp(){


    window.location.href="stamp.html";


}
