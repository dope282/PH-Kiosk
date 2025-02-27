import UgaalginNuntag from "../../../assets/UgaalginNuntag.jpg";
import jenga from "../../../assets/jenga.jpg";
import ayga from "../../../assets/ayga.jpg";
import suu from "../../../assets/suu.jpg";
import umd from "../../../assets/umd.png";
import hoolniisav from "../../../assets/hoolniisav.png";
import tavag from "../../../assets/tavag.jpg";
import bumbulug from "../../../assets/bumbulug.png";
import proc from "../../../assets/proc.jpg";
import jin from "../../../assets/jin.jpg";
import hurem from "../../../assets/hurem.jpg";
import hogtuugch from "../../../assets/hogtuugch.jpg";
import camera from "../../../assets/camera.png";
import tsag from "../../../assets/tsag.jpg";
import budag from "../../../assets/budag.jpg";
import waffle from "../../../assets/waffle.jpg";
import gutal from "../../../assets/gutal.jpg";
import alim from "../../../assets/Apple.webp";
const products = [
    { id: 1, name: "Сүүн хүчлийн бактери агуулсан пробиотек", code: "", price: 31100, img: suu, quantity: 60, cargo: 4500, status: "Хүлээж авсан" },
    { id: 2, name: "ArtiArt хос аяга", code: "", price: 23900, img: ayga, quantity: 2, cargo: 5000, status: "Хүлээж авсан" },
    { id: 3, name: "Намар өвөлд зориулсан дотортой өмд", code: 2, price: 23200, img: umd, quantity: 4, status: "Хүлээгдэж буй" },
    { id: 4, name: "Хоолны савны сет ", code: 3, price: 19000, img: hoolniisav, quantity: 9, status: "Хүлээгдэж буй" },
    { id: 5, name: "Самар , хатаасан жимс зуушны таваг", code: 1, price: 17100, img: tavag, quantity: 1, cargo: 4000, status: "Ирсэн бараа" },
    { id: 6, name: "Давстай банны бөмбөлөг", code: 2, price: 15100, img: bumbulug, quantity: 9, cargo: 3000, status: "Ирсэн бараа" },
    { id: 7, name: "YG300 Мини проектор", code: "", price: 41800, img: proc, quantity: 5, cargo: 7000, status: "Ирсэн бараа" },
    { id: 8, name: "Халуун хүйтэн жин тавигч ", code: "", price: 12000, img: jin, quantity: 3, cargo: 3000, status: "Цуцалсан" },
    { id: 9, name: "Загварлаг Кардиган  хүрэм ", code: 2, price: 55300, img: hurem, quantity: 1, cargo: 7000, status: "Ирсэн бараа" },  
    { id: 10, name: "Шинэ загварын үс, хог  /код-1/", code: [1,2,3], price: 12400, color:["Улаан","Шар","Ногоон"], img: hogtuugch, quantity: 4, cargo: 3000, description:"Цавуулаг материалтай, олон дахин хэрэглэх боломжтой, үс хялгасыг маш сайн түүдэг.", status: "PLAYHOUSE" },
    { id: 11, name: "Сүүлийн үеийн чанартай камер", code: 3, price: 61200, img: camera, quantity: 3, cargo: 6000, description: "Гар утастайгаа холбоод хаанаас л бол хаанаас харах боломжтой. К:1, К:3 WiFi дэмждэг. К:2 4G сим карт хийгээд WiFi сүлжээгүй газар ашиглах боломжтой гэсэн үг юм байна.", status: "PLAYHOUSE" },
    { id: 12, name: "Шинэ загварын Ухаалаг цаг ", code: 1, price: 33600, img: tsag, quantity: 1, cargo: 5000, description:"2024 оны шинэ загвар бөгөөд маш олон хэрэгтэй зүйлсийг өөртөө багтаасан юм байна. Англи хэлтэй, ойлгомжтой цэстэй. Утастай холбогдоно, Дуудлага хүлээж авна Эрүүл мэндийн олон функтэй Зүрхний цохилт, цусны даралт, хүчилтөрөгч хэмжинэ Нойр болон хөдөлгөөнөө хянах боломжтой Цагаа түгжиж, кодлох боломжтой", status: "PLAYHOUSE" },
    { id: 13, name: "Акрил фломастер 80ш өнгийн будаг-2", code: "", price: 20200, img: budag, quantity: 1, cargo: 3000, description:"Харшил өгөхгүй Амархан арилагдаг Цаас нэвтэрдэггүй Хана толь шил зурхад амархан арилдаг Үнэргүй , Спиртгүй Хүүхдийн сэтгэхүйг хөгжүүлэх хүссэн зураг зурхад бүх төрлийн өнгийн сонголттой .", status: "PLAYHOUSE" },
    { id: 14, name: "Waffle хийгч", code: "", price: 18200, img: waffle, quantity: 1, cargo: 3000, description:"Хэмжээ: 12*18см Жижигхэн авсаархан мөртлөө хүчин чадал сайтай хөөрхөн загвар байна шүү",status: "PLAYHOUSE" },
    { id: 15, name: "Сүүн хүчлийн бактери агуулсан пробиотек", code: "", price: 31100, img: suu, quantity: 60, cargo: 5500, description:"Хэмжээ: 100мл - Бидний хэлж заншсанаар гахайн сүү. Гэхдээ бол үнэндээ биш тиймээ. Кальц; ашигтай бактер; уураг; жимс; эслэгээр баялаг. Хоол боловсруулалтад өндөр ач холбогдолтой гэдгийг манайхан маш сайн мэддэг байх. Сүүнээс илүү өндөр кальц агуулдаг тул өдөрт 1-г тогтмол уудаг гэнээ. Тээвэрлэлтийн нөхцөл хамаарахгүй. Бүх насныхан хэрэглэхэд тохиромжтой Хадгалах хугацаа: 8 сар", status: "PLAYHOUSE" },
    { id: 16, name: "Охидын балерина", code: 4, price: 22200, img: gutal, quantity: 2, cargo: 5000, description:"Размер: 23-34 Гоёлын даашинзан доогуур өмсөхөд тохиромжтой, тухтай зөөлөн ултай.", status: "PLAYHOUSE" },
    { id: 17, name: "Pulaon угаалгын шингэн 2.5л*2ш", code: "",  price: 57900, img: UgaalginNuntag, quantity: 2, cargo: 6000, description:"Тос, соус, жимс, кофе, хөлс зэрэг шууд угаалтаар арилгахад хэцүү толбыг маш сайн арилгадаг гэсэн хэрэглэгчдийн сэтгэгдэл өндөр бүтээгдэхүүн байна. Мөн түүнчлэн угаалтын явцад угаалгын машинд наалдсан бохирдол, тос зэргийг хувцсанд наалдуулалгүйгээр маш сайн задлаж гэдгээрээ илүү онцлогтой", status: "COSTCO" },
    { id: 18, name: "Женга тоглоом", code: "", price: 12800, img: jenga, quantity: 13, cargo: 3000, description:"Нийт 54ширхэгтэй, өнгөт модон тоглоом нь: Тэвчээртэй хүлээцтэй байх чадвар Орон зайн баримжаа Локиг чадвар сайжруулах Тоглох заавар: Тоглоомын дүрэм тун энгийн бөгөөд тоглогч шоогоо хаяад буусан өнгийн блокийг зөвхөн нэг гараараа сугалж аван цамхаг дээр байрлуулна. Ингэж тоглож явсаар цамхагийг нураасан тоглогч хожигддог.", status: "PLAYHOUSE" },
    { id: 19, name: "ArtiArt хос аяга", code: "", price: 23900, img: ayga, quantity: 2, cargo: 5000, description:"Тус брэндийн патентлагдсан MAGIC SUCTION технологи нь хажуу талаас цохьсон ч унахаас сэргийлдэг, 100.000 удаа хэрэглэсэн ч татах чадвар нь муудахгүй сорох чадалтай суурьтай. Аяганы дотор болон гадар нь хүнсний зориулалттай PP, TPE, Silicone материалтай. урьдчилж авсан тоо бүрдэхээр захиалгаа хаая",status: "COSTCO" },
    { id: 20, name: "Алим", code: "", price: 15000, img: alim, quantity: 20, cargo: 5000, status: "FRESH FOOD" },
    ];
  export default products;