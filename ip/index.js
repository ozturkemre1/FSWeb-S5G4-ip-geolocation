//axios import buraya gelecek
import axios from 'axios';

var benimIP;



// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek




const ipComponent = (data) => {
	const cardItem = document.createElement("div");
	cardItem.setAttribute("class", "card");

	const imgItem = document.createElement("img");
	imgItem.setAttribute = ("src",data.ülkebayrağı);
	cardItem.append(imgItem);

	const cardItem2 = document.createElement("div");
	cardItem2.setAttribute("class","card-info");
	cardItem.append(cardItem2);

	const h3Item = document.createElement("h3");
	h3Item.setAttribute("class","ip");
	h3Item.textContent = `IP: ${data.sorgu}`
	cardItem2.append(h3Item);

	const pItem = document.createElement("p");
	pItem.setAttribute("class", "ulke");
	pItem.textContent = `${data.ülke}(${data.ülkeKodu})`;
	cardItem2.append(pItem);

	const pItem2 = document.createElement("p");
	pItem2.textContent = `Enlem: ${data.enlem} Boylam: ${data.boylam}`;
	cardItem2.append(pItem2);

	const pItem3 = document.createElement("p");
	pItem3.textContent = `Şehir: ${data.şehir}`;
	cardItem2.append(pItem3);

	const pItem4 = document.createElement("p");
	pItem4.textContent = `Saat Dilimi: ${data.saatdilimi}`;
	cardItem2.append(pItem4);

	const pItem5 = document.createElement("p");
	pItem5.textContent = `Para Birimi: ${data.parabirimi}`;
	cardItem2.append(pItem5);

	const pItem6 = document.createElement("p");
	pItem6.textContent = `ISP: ${data.isp}`;
	cardItem2.append(pItem6);

	return cardItem;

}

const cards = document.querySelector(".cards");
const contention = async function (){
await ipAdresimiAl();
axios
.get(`https://apis.ergineer.com/ipgeoapi/${benimIP}`)
.then ((response) => {
	console.log(response.data)
	cards.append(ipComponent(response.data))
})
.catch((error)  => {
	console.log(`Error: ${error}`)
});
};
contention();




