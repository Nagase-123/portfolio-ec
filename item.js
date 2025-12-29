// URLから ?id=◯ を取得
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// 商品データ
const products = {
  1: {
    title: "Wood Chair",
    image: "images/item1.png",
    description: "木製のシンプルなチェアです。",
    price: "¥30,000 +tax"
  },
  2: {
    title: "Modern Sofa",
    image: "images/item2.png",
    description: "ミニマルなデザインのソファです。",
    price: "¥80,000 +tax"
  },
  3: {
    title: "Low Living Table",
    image: "images/item3.png",
    description: "低めのリビングに合わせたローテーブル。圧迫感を抑えたデザインです。",
    price: "¥45,000 +tax"
  },
  4: {
    title: "Floor Light",
    image: "images/item4.png",
    description: "空間をやさしく照らすフロアライト。間接照明としても使用できます。",
    price: "¥28,000 +tax"
  },
  5: {
    title: "Leather Sofa",
    image: "images/item5.png",
    description: "茶色の本革を使用したソファ。使い込むほどに味が出ます。",
    price: "¥150,000 +tax"
  },
  6: {
    title: "Interior Green",
    image: "images/item6.png",
    description: "インテリア用の観葉植物。部屋に自然なアクセントを加えます。",
    price: "¥12,000 +tax"
  },
  7: {
    title: "Study Desk",
    image: "images/item7.png",
    description: "勉強や作業に適したデスク。シンプルで集中しやすい設計です。",
    price: "¥60,000 +tax"
  },
  8: {
    title: "Wall Poster",
    image: "images/item8.png",
    description: "壁に貼って楽しむポスター。空間の雰囲気を手軽に変えられます。",
    price: "¥5,000 +tax"
  },
  9: {
    title: "Counter Chair",
    image: "images/item9.png",
    description: "バーカウンターに合うカウンターチェア。程よい高さと安定感があります。",
    price: "¥35,000 +tax"
  },
  10: {
    title: "Dining Chair",
    image: "images/item10.png",
    description: "食事用テーブルと合わせやすいダイニングチェア。",
    price: "¥25,000 +tax"
  },
  11: {
    title: "Room Lamp",
    image: "images/item11.png",
    description: "部屋全体を照らすランプ。落ち着いた光でリラックス空間を演出します。",
    price: "¥22,000 +tax"
  },
  12: {
    title: "Single Floor Chair",
    image: "images/item12.png",
    description: "一人用の座椅子。コンパクトでくつろぎやすい設計です。",
    price: "¥18,000 +tax"
  }
};

// 表示処理
if (products[productId]) {
  document.getElementById("product-title").textContent =
    products[productId].title;

  document.getElementById("product-image").src =
    products[productId].image;

  document.getElementById("product-description").textContent =
    products[productId].description;

  document.getElementById("product-price").textContent =
    products[productId].price;
}
