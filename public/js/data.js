// ds sản phẩm
let products = [
  {
    id: 1,
    name: " FLAMMY SKULL COACH JACKET",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0005.jpg?v=1639372166667",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0005.jpg?v=1639372166667",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0036-32a6b423-0ca7-43a8-b951-e57ddf74f136.jpg?v=1639372166667",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos? Exercitationem iure architecto temporibus aliquam, numquam, culpa aperiam placeat voluptatem tempora nemo alias? Similique, rerum eius. Et provident voluptatem tenetur.",
    price: 160000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/varsity-big-logo.jpg?v=1637729592287",
    sizes: ["S", "M", "L", "XL"],
    tag: "New Arrival",
    category: "Jacket",
  },
  {
    id: 2,
    name: " LEOPARD PUFFER JACKET",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/28-2.png?v=1658826002577",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/28-2.png?v=1658826002577",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/35.png?v=1658826002577",
    ],
    description:
      "Chất liệu: Chất gió chần bông Form dáng: Áo phao Gile Cảm hứng thiết kế: Hoạ tiết da báo với phối màu bắt mặt. Chữ  được in chuyển nhiệt ở mặt trước và sau. Hình thêu C-Star ở mặt trong phù hợp mặc cả hai mặt. Sản phẩm thuộc BST LEOPARD COLLECTION",
    price: 450000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/varsity-big-logo.jpg?v=1637729592287",
    sizes: ["S", "M", "L", "XL"],
    tag: "New Arrival",
    category: "Jacket",
  },
  {
    id: 3,
    name: " WORLDZ STAR KNIT SWEATER",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0006-e7e7e881-084f-4637-8ffe-208b82461f4f.jpg?v=1639234057693",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0007-2.jpg?v=1639234059653",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0024.jpg?v=1639234061050",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0027-bb32f50c-797b-4510-b9f8-4ee6448d4189.jpg?v=1639234063163",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0025-c4193980-e928-4adf-b655-cec4ff265788.jpg?v=1639234064970",
    ],
    description:
      "Chất liệu: vải len dệt 100% cotton Dáng áo: Oversize Graphic được dệt trực tiết trên bề mặt vải Giặt không sấy tránh co áo",
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/worldz-star-knit-sweater.jpg?v=1639373485536",
    price: 799000,
    sizes: ["S", "M", "L", "XL"],
    tag: "Hot Item",
    category: "Jacket",
  },
  {
    id: 4,
    name: " CYBER REFLECTIVE ANORAK JACKET",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0025.jpg?v=1642651246310",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0025.jpg?v=1642651246310",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/fcb9260c9212584c0103.jpg?v=1642651246310",
    ],
    description:
      "Chất liệu: vải gió (lót 2 lớp) Dáng xuông rộng, sử dụng khuy dập Mặt trước: Logo “ClownZ” - sử dụng công nghệ in phản quang chất lượng cao. Sử dụng vải nỉ thể thao kết hợp vải lót gió chống thấm nước, phù hợp với những ngày mưa",
    price: 579000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/varsity-big-logo.jpg?v=1637729592287",
    sizes: ["L", "XL"],
    tag: "New Arrival",
    category: "Jacket",
  },

  {
    id: 5,
    name: " AUGUSTUS TSHIRT",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/29.png?v=1658826002577",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0040-1-24eb8ec1-c830-48ac-9714-e4461f0d7669.jpg?v=1644815529293",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0040-1-24eb8ec1-c830-48ac-9714-e4461f0d7669.jpg?v=1644815529293",
    ],
    description:
      "Chất liệu: Chất gió chần bông Form dáng: Áo phao Gile Cảm hứng thiết kế: Hoạ tiết da báo với phối màu bắt mặt. Chữ  được in chuyển nhiệt ở mặt trước và sau. Hình thêu C-Star ở mặt trong phù hợp mặc cả hai mặt. Sản phẩm thuộc BST LEOPARD COLLECTION",
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/worldz-star-knit-sweater.jpg?v=1639373485536",
    price: 450000,
    sizes: ["S", "M", "L", "XL"],
    tag: "New Arrival",
    category: "Tshirt",
  },
  {
    id: 6,
    name: " AUGUSTUS TSHIRT",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/8-78a9a777-3e79-416c-a1b1-fc946ae497d8.png?v=1660796386763",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/8-78a9a777-3e79-416c-a1b1-fc946ae497d8.png?v=1660796386763",
    ],
    description:
      "Chất liệu: Chất gió chần bông Form dáng: Áo phao Gile Cảm hứng thiết kế: Hoạ tiết da báo với phối màu bắt mặt. Chữ  được in chuyển nhiệt ở mặt trước và sau. Hình thêu C-Star ở mặt trong phù hợp mặc cả hai mặt. Sản phẩm thuộc BST LEOPARD COLLECTION",
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/worldz-star-knit-sweater.jpg?v=1639373485536",
    price: 450000,
    sizes: ["S", "M", "L", "XL"],
    tag: "New Arrival",
    category: "Tshirt",
  },

  {
    id: 7,
    name: "MONOGRAM CAMO HOODED COACH",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0340.jpg?v=1637578318957",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0343.jpg?v=1637578318957",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0352.jpg?v=1637912082810",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0353.jpg?v=1637912089903",
    ],
    description: "Chất liệu: vải gió Dáng xuông Chống thấm nước khi đi mưa",
    price: 629000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/flamy-skull-hoodie.jpg?v=1638873147829",
    sizes: ["M", "L", "XL"],
    tag: "New Arrival",
    category: "Jacket",
  },

  {
    id: 8,
    name: "C-STAR BLACK LEATHER",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-219443e2-3c51-4874-9ab0-29dd8b318d6b.png?v=1660793561507",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-219443e2-3c51-4874-9ab0-29dd8b318d6b.png?v=1660793561507",
    ],
    description: "Chất liệu: vải gió Dáng xuông Chống thấm nước khi đi mưa",
    price: 629000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/flamy-skull-hoodie.jpg?v=1638873147829",
    sizes: ["M", "L", "XL"],
    tag: "New Arrival",
    category: "Tshirt",
  },

  {
    id: 9,
    name: "READY FOR BAD TRIP T-SHIRT",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/bt1.jpg?v=1652328376460",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/922a9728.png?v=1652328376460",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/922a9733.png?v=1652328376460",
    ],
    description:
      "Chất liệu: cotton 2 chiều Dáng suông, form rộng. Tag cao su chính hãng ở mép áo phải và tag phụ ở tay và mép áo trái Logo chú hề thương hiệu thêu ở chính giữa mặt trước",
    price: 299000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/bang-size-t-shirt-a9a35638-f098-43c9-a5e1-5ebd4959af11.jpg?v=1651827687547",
    sizes: ["M", "L", "XL"],
    tag: "New Arrival",
    category: "Tshirt",
  },

  {
    id: 10,
    name: "BIG KARMA T-SHIRT",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/xxx.jpg?v=1651123530597",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/136a9012-medium.png?v=1651123530597",
    ],
    description:
      "Chất liệu: cotton 2 chiều Dáng suông, form rộng. Tag cao su chính hãng ở mép áo phải và tag phụ ở tay và mép áo trái Logo chú hề thương hiệu thêu ở chính giữa mặt trước",
    price: 349000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/bang-size-t-shirt-a9a35638-f098-43c9-a5e1-5ebd4959af11.jpg?v=1651827687547",
    sizes: ["M", "L", "XL"],
    tag: "New Arrival",
    category: "Tshirt",
  },
  {
    id: 11,
    name: "BIG KARMA T-SHIRT",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-d64b73ff-2866-47c9-8fce-e5954fcbb668.png?v=1660793486343",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-d64b73ff-2866-47c9-8fce-e5954fcbb668.png?v=1660793486343",
    ],
    description:
      "Chi tiết sản phẩm:Vải cotton 2 chiều mềm mịn. Dáng xuông rộng.Mặt trước: hình in Graphic nhân vật Z-Bot. Sử dụng công nghệ in lưới chất lượng cao, bền, màu sắc tươi sáng.",
    price: 300000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/bang-size-t-shirt-a9a35638-f098-43c9-a5e1-5ebd4959af11.jpg?v=1651827687547",
    sizes: ["M", "L", "XL"],
    tag: "New Arrival",
    category: "Tshirt",
  },
  {
    id: 12,
    name: "Z-BOT ICON T-SHIRT",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/2.png?v=1651214396897",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/2a.png?v=1651214396897",
    ],
    description:
      "Chi tiết sản phẩm:Vải cotton 2 chiều mềm mịn. Dáng xuông rộng.Mặt trước: hình in Graphic nhân vật Z-Bot. Sử dụng công nghệ in lưới chất lượng cao, bền, màu sắc tươi sáng.",
    price: 299000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/bang-size-t-shirt-a9a35638-f098-43c9-a5e1-5ebd4959af11.jpg?v=1651827687547",
    sizes: ["M", "L", "XL"],
    tag: "New Arrival",
    category: "Tshirt",
  },

  {
    id: 13,
    name: "RACING TEAM T-SHIRT",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/untitled-1-05.jpg?v=1626671992090",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/untitled-1-01.jpg?v=1626671992090",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0321.jpg?v=1649240462847",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-f264d28e-0942-4c61-8fbb-4146a0d20fd3.jpg?v=1649240381003",

      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/4.jpg?v=1649240381003",
    ],
    description:
      "Chất liệu: Cotton định lượng 230 GSM. Chất liệu vải cotton chuyên biệt đạt chuẩn định lượng 230 GSM, dày dặn và tạo cảm giác thoáng mát. Kỹ thuật in lưới thủ công, thẩm thấu vào bề mặt vải tạo hiệu ứng chuyển màu và hình ảnh sắc nét.",
    price: 349000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/bang-size-t-shirt-a9a35638-f098-43c9-a5e1-5ebd4959af11.jpg?v=1651827687547",
    sizes: ["M", "L", "XL"],
    tag: "New Arrival",
    category: "Tshirt",
  },
  {
    id: 14,
    name: "SKELETAL LOGO T-SHIRT",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/11-3.png?v=1656491315327",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/10-3.png?v=1656491315327",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/7-3.png?v=1656491329583",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/8-3.png?v=1656491335803",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/9-3.png?v=1656491341397",
    ],
    description:
      "Chất liệu : Cotton. Form : Regular. Phong cách Grunge với thiết kế logo ClownZ được cách điệu bằng hoạ tiết hộp sọ. Sử dụng công nghệ in kéo lụa, bề mặt vải mềm mịn, trơn láng, thấm hút mồ hôi.",
    price: 349000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/bang-size-t-shirt-a9a35638-f098-43c9-a5e1-5ebd4959af11.jpg?v=1651827687547",
    sizes: ["M", "L", "XL"],
    tag: "New Arrival",
    category: "Tshirt",
  },

  {
    id: 15,
    name: "LAUGH NOW SHORT PANTS",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/clz3-4.jpg?v=1624876130497",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/quan-laugh-now.jpg?v=1624876128807",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/dt2.png?v=1651134655143",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/dt1.png?v=1651134655143",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/dt28.png?v=1651135101300",
    ],
    description:
      "- Chất liệu vải chính : Vải dù chống thấm trượt nước. Vải lót cũng được in lưới tỉ mỉ với họa tiết Camo x Monogram đặc trưng của CLOWNZ. Phối màu pastel pha xám cùng detail bộ sưu tập Cyber Jester. Quai đeo đệm mút với chức năng chống nhức mỏi khi đeo. Ngăn chống sốc vừa vặn với cả những mẫu laptop 15 inch. Thiết kế gồm :Bên trong : 1 ngăn chính lớn, 1 ngăn chống sốc Bên ngoài : 2 túi lớn phía trước, 2 túi phụ bên hông, lắp phủ rộng có khoá bấm bảo đảm an toàn khi di chuyển.",
    price: 349000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/bang-size-quan-short-gio-3e3649bc-787a-4e48-890b-3249d3157f23.jpg?v=1635435686866",
    tag: "New Arrival",
    sizes: ["S", "M", "L", "XL"],
    category: "Pants",
  },
  {
    id: 16,
    name: "STAR CARGO PANTS",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0024-dfd400d5-5bdd-48c8-b975-37613d853b72.jpg?v=1644817941577",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0025-dfcb7d4d-6949-4560-a924-1dda5a8faa0f.jpg?v=1644817943587",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0032.jpg?v=1644817948997",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0035-d3fe0441-b342-4ecc-8f66-a44ad0b12522.jpg?v=1644817950907",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0033-1bd48f91-3d98-468d-abdf-3b24bef288e7.jpg?v=1644817952690",
    ],
    description:
      ' Dáng xuông rộng Thiết kế: 2 túi hộp mặt trước may kèm tag chính hãng. Hình thêu "ClownZ Star" ở mặt trước làm điểm nhấn. Gấu quần: sử dụng khoá rip kéo tiện lợi tạo phong cách riêng. Độ bền cao, không sờn rách, không bạc màu khi giặt.',
    price: 549000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/star-cargo-pants.jpg?v=1645102652954",
    tag: "New Arrival",
    sizes: ["M", "L", "XL"],
    category: "Pants",
  },
  {
    id: 17,
    name: "C-STAR SHORT PANTS",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/26.png?v=1655864382643",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/18.png?v=1655864382643",
    ],
    description:
      "Chất liệu: Vải nỉ chân cua 330 gsm. Form dáng quần short ngắn trên đầu gối. Hình thêu 3D tỉ mỉ chữ C ở miệng túi. Quần cạp chun dây rút, hai túi ở mặt trước",
    price: 369000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/c-star-shortpants.jpg?v=1656320419767",
    tag: "New Arrival",
    sizes: ["M", "L", "XL"],
    category: "Pants",
  },
  {
    id: 18,
    name: "CORDUROY WORK PANTS",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-10.jpg?v=1648091472037",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-11.jpg?v=1648091472037",
    ],
    description:
      'Dáng xuông, ống đứng. Chữ "CLOWNZ" thêu mép quần, các đường chỉ vàng được khâu có chủ ý. Độ bền cao, không sờn rách, không bạc màu khi giặt.',
    price: 499000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/274550221-332538792246481-1442329021557829193-n.jpg?v=1647074028881",
    tag: "New Arrival",
    sizes: ["M", "L", "XL"],
    category: "Pants",
  },
  {
    id: 19,
    name: "JOGGER CARGO PANTS",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-15.jpg?v=1648091063930",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-17.jpg?v=1648091063930",
    ],
    description:
      "Dáng xuông form quần jogger. Quần chun túi hộp 2 bên. Độ bền cao, không sờn rách, không bạc màu khi giặt.",
    price: 449000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/cargo-pant.jpg?v=1646204132745",
    tag: "New Arrival",
    sizes: ["M", "L", "XL"],
    category: "Pants",
  },
  {
    id: 20,
    name: "CARGO PANTS",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-21.jpg?v=1648463780760",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-22.jpg?v=1648463780760",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-20.jpg?v=1648463780760",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0347.jpg?v=1648463780760",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0348.jpg?v=1648463780760",
    ],
    description:
      "Chất liệu: vải khaki. Cạp chun có dây rút. Túi sau: Tag chính hãng được may. Gấu quần: sử dụng strap dính",
    price: 399000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/cargo-pants-1.jpg?v=1637911462576",
    tag: "New Arrival",
    sizes: ["M", "L", "XL"],
    category: "Pants",
  },
  {
    id: 21,
    name: "FINISH LINE TRACK PANTS",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-04-e0274b24-7dce-498a-ac70-bb5e84465784.jpg?v=1651134389460",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-06-48c25632-a4af-4d5a-a2ca-f6ec0fb4c481.jpg?v=1651134389460",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-05.jpg?v=1651134389460",
    ],
    description:
      "• Dáng xuông, ống đứng. Họa tiết Finish Line đặc trưng chạy dọc 2 ống quần. Phần gấu quần có thêm khóa kéo, phù hợp với mọi cách phối giày. Quần cạp có dây rút. Độ bền cao, không sờn rách, không bạc màu khi giặt",
    price: 449000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/bang-size-quan-short-gio-3e3649bc-787a-4e48-890b-3249d3157f23.jpg?v=1635435686866",
    tag: "New Arrival",
    sizes: ["S", "M", "L", "XL"],
    category: "Pants",
  },

  {
    id: 22,
    name: "STRAIGHT PANTS",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/27.jpg?v=1648091850883",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-02-38b84ddc-7983-49fa-9599-5781536479aa.jpg?v=1648091850883",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-01.jpg?v=1648091850883",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-03-2f412292-686d-40d1-9d73-9e8d5a8759a8.jpg?v=1648091850883",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/straight-pants-ghi-1.jpg?v=1648091850883",
    ],
    description:
      'Chất liệu: vải Khaki Dáng xuông (quần ông đứng). 2 bên túi thêu nổi chữ và logo "ClownZ". Độ bền cao, không sờn rách, không bạc màu khi giặt',
    price: 649000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/straight-pants.jpg?v=1651634948469",
    tag: "New Arrival",
    sizes: ["M", "L", "S"],
    category: "Pants",
  },

  {
    id: 23,
    name: "Ví Da Dài Degrey",
    images: [
      "https://product.hstatic.net/1000281824/product/6fb464cd3eedfcb3a5fc_d81a6b3d15ef464fb00f6b8c95608f20_master.jpeg",
      "https://product.hstatic.net/1000281824/product/c206a63d9af258ac01e3_4b4c53a803c04b6dbf092df37dd852c4_master.jpeg",
      "https://product.hstatic.net/1000281824/product/fd6d6576ae88e855e03e217c49bf7297_acf5b5f071ae439a94de89e39bcc3d91_master.jpeg",
      "https://product.hstatic.net/1000281824/product/img_8321_90be40214f004266b332943481955ac8_master.jpeg",
      "https://product.hstatic.net/1000281824/product/d93ae87ab25a7004294b_e02b75fb2f214d51966c0569a1af5e39_master.jpeg",
    ],
    description:
      'Chất liệu: vải Khaki Dáng xuông (quần ông đứng). 2 bên túi thêu nổi chữ và logo "ClownZ". Độ bền cao, không sờn rách, không bạc màu khi giặt',
    price: 199000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/straight-pants.jpg?v=1651634948469",
    tag: "New Arrival",
    sizes: ["S", "M"],
    category: "ACCESSORY",
  },
  {
    id: 24,
    name: "Ví Da Ngắn Degrey",
    images: [
      "https://product.hstatic.net/1000281824/product/7b3ea166686433e630d4686d7c07815d_cc5e9aa068954f04be82e04ec106d69b_master.jpeg",
      "https://product.hstatic.net/1000281824/product/5bfa9bbfc19f03c15a8e_146affda4b9941148f7c646d21c1f595_master.jpeg",
      "https://product.hstatic.net/1000281824/product/1f25ba44868b44d51d9a_3e1b4e42caad431084593c6cf5d9eea1_master.jpeg",
      "https://product.hstatic.net/1000281824/product/4c962f7013bfd1e188ae_0b0b359d7b5d4b688bde8a2cf115759f_master.jpeg",
      "https://product.hstatic.net/1000281824/product/797742c57e0abc54e51b_9faef09856a64701aebb25609e55d7e9_master.jpeg",
    ],
    description:
      'Chất liệu: vải Khaki Dáng xuông (quần ông đứng). 2 bên túi thêu nổi chữ và logo "ClownZ". Độ bền cao, không sờn rách, không bạc màu khi giặt',
    price: 649000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/straight-pants.jpg?v=1651634948469",
    tag: "New Arrival",
    sizes: ["M"],
    category: "ACCESSORY",
  },

  {
    id: 25,
    name: "Túi bao tử",
    images: [
      "https://product.hstatic.net/1000281824/product/90fb77390c83cedd9792_fad29a03381042e7a8ebb9b1ea7bae7b_master.jpeg",
      "https://product.hstatic.net/1000281824/product/645fa9eed254100a4945_204b1939e64c4c2f9fc6edd0820ba7fb_master.jpeg",
      "https://product.hstatic.net/1000281824/product/ebea39db3e70dc22506f1d351ab8373b_09071e0ba1ea46449171d43637708658_master.jpeg",
      "https://product.hstatic.net/1000281824/product/58fe0d96-8db1-4d5c-98d4-72a7f28dfa34_b6e14b6961df469693d6f09189b06151_master.jpeg",
      "https://product.hstatic.net/1000281824/product/anh_chup_man_hinh_2022-08-19_luc_00.15.13_85f0d318132a4d758d516a3f8429bbf5_master.png",
    ],
    description:
      "- Chất liệu: Simili. Hoạ tiết: Được in trực tiếp lên sản phẩm.  Size: 20cm X 15cm X 5cm.  Thương hiệu: Degrey. Sản xuất: Việt Nam. Màu sắc và họa tiết được thiết kế riêng bởi team design DEGREY ",
    price: 290000,
    descriptionImg:
      "https://maybalogiare.com/wp-content/uploads/2019/06/kich-thuoc-balo-4-1.jpg",
    tag: "New Arrival",
    sizes: ["Nhỏ"],
    category: "ACCESSORY",
  },
  {
    id: 26,
    name: "Balo Đám Mây",
    images: [
      "https://product.hstatic.net/1000281824/product/d900f6f0407351312255b8e4e8f7e9fc_eceaaf0e088b4a99a895b0282aa84757_master.jpeg",
      "https://product.hstatic.net/1000281824/product/b8eb06ee325099db205699579dfd2aec_5932b5b25e56479a82b071d8b0c9ce4e_master.jpeg",
      "https://product.hstatic.net/1000281824/product/420149ee45693c0c23c7f08ef7fd471b_2a321dc8ee2f4593a0c4a846b644a0d9_master.jpeg",
      "https://product.hstatic.net/1000281824/product/87c15571a1014f23153687ad512c6690_0a8986f4832b414b918fa4cf2ce8b7dc_master.jpeg",
      "https://product.hstatic.net/1000281824/product/f02ebb4b098c986903dcd63cd8d6aaa7__1__7494ee665a984082be07c7d5a25b410a_master.jpeg",
    ],
    description:
      "- Chất liệu: Canvas pha Poly. Hoạ tiết: Được in trực tiếp lên sản phẩm.  Size: 40cm X 30cm X 12cm. Ngăn chống sốc đựng vừa laptop 15inch. Thương hiệu: Degrey.  Sản xuất: Việt Nam. Màu sắc và họa tiết được thiết kế riêng bởi team design DEGREY",
    price: 420000,
    descriptionImg:
      "https://maybalogiare.com/wp-content/uploads/2019/06/kich-thuoc-balo-4-1.jpg",
    tag: "New Arrival",
    sizes: ["L"],
    category: "ACCESSORY",
  },
  {
    id: 27,
    name: "BASIC HODDIE PLAN",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/4-31ee274b-3c12-42d9-ade4-f053aa5f8899.png?v=1660812066847",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/4-31ee274b-3c12-42d9-ade4-f053aa5f8899.png?v=1660812066847",
    ],
    description:
      "Chất liệu: vải khaki. Cạp chun có dây rút. Túi sau: Tag chính hãng được may. Gấu quần: sử dụng strap dính",
    price: 420000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/straight-pants.jpg?v=1651634948469",
    tag: "New Arrival",
    sizes: ["L"],
    category: "Pants",
  },
  {
    id: 28,
    name: " CO.RACING JACKET",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-1350bf44-84a8-40f8-8588-52320057b2fa.png?v=1660794085027",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-1350bf44-84a8-40f8-8588-52320057b2fa.png?v=1660794085027",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos? Exercitationem iure architecto temporibus aliquam, numquam, culpa aperiam placeat voluptatem tempora nemo alias? Similique, rerum eius. Et provident voluptatem tenetur.",
    price: 160000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/varsity-big-logo.jpg?v=1637729592287",
    sizes: ["S", "M", "L", "XL"],
    tag: "New Arrival",
    category: "Jacket",
  },
  {
    id: 29,
    name: " LEOPARD PUFFER JACKET",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/6-3dd1dff6-f997-48f5-bcfe-4a1c750e1e7d.png?v=1660812635007",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/6-3dd1dff6-f997-48f5-bcfe-4a1c750e1e7d.png?v=1660812635007",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos? Exercitationem iure architecto temporibus aliquam, numquam, culpa aperiam placeat voluptatem tempora nemo alias? Similique, rerum eius. Et provident voluptatem tenetur.",
    price: 160000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/varsity-big-logo.jpg?v=1637729592287",
    sizes: ["S", "M", "L", "XL"],
    tag: "New Arrival",
    category: "Jacket",
  },
  {
    id: 30,
    name: "Sleeveless Shirt",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-510ed511-2f0b-4224-8685-788dc907d76f.png?v=1660796852203",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-510ed511-2f0b-4224-8685-788dc907d76f.png?v=1660796852203",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos? Exercitationem iure architecto temporibus aliquam, numquam, culpa aperiam placeat voluptatem tempora nemo alias? Similique, rerum eius. Et provident voluptatem tenetur.",
    price: 160000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/varsity-big-logo.jpg?v=1637729592287",
    sizes: ["S", "M", "L", "XL"],
    tag: "New Arrival",
    category: "Tshirt",
  },
  {
    id: 31,
    name: "LEOPARD BIG LOGO",
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/6-185112d1-08c2-41c7-81d9-7f5fb0b3295f.png",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/6-185112d1-08c2-41c7-81d9-7f5fb0b3295f.png",
    ],
    description:
      'Chất liệu: vải Khaki Dáng xuông (quần ông đứng). 2 bên túi thêu nổi chữ và logo "ClownZ". Độ bền cao, không sờn rách, không bạc màu khi giặt',
    price: 649000,
    descriptionImg:
      "https://bizweb.dktcdn.net/100/414/728/files/straight-pants.jpg?v=1651634948469",
    tag: "New Arrival",
    sizes: ["M", "L", "S"],
    category: "Pants",
  },
];
