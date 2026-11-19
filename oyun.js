/* 8bitfen · Luna'nın Bilim Koşusu — 5-8. sınıf ünite maceraları. Sayfada id="lunaGame" olan bir kutu ister. */
(function(){
const ROOT=document.getElementById("lunaGame");if(!ROOT)return;
const QB={
"5-1":[
 ["Güneş'in yüzeyindeki lekelerin günler içinde yer değiştirdiği gözleniyor. Bu gözlem neyi gösterir?","Güneş'in kendi ekseni etrafında döndüğünü","Güneş'in Dünya etrafında dolandığını","Güneş'in giderek küçüldüğünü","Güneş lekelerinin kayması, Güneş'in kendi ekseni etrafında döndüğünü gösterir."],
 ["Güneş'in yapısıyla ilgili hangisi doğrudur?","Katı bir yüzeyi yoktur, sıcak gazlardan oluşur.","Yüzeyi Ay gibi kayalıktır.","Merkezi soğuk, dış kısmı sıcaktır.","Güneş sıcak gazlardan oluşur. En sıcak bölümü merkezidir."],
 ["Güneş, Ay'dan çok daha büyük olduğu hâlde gökyüzünde Ay ile neredeyse aynı boyda görünür. Neden?","Güneş, Ay'dan çok daha uzakta olduğu için","Güneş'in ışığı gözümüzü kamaştırdığı için","Ay, aslında Güneş'ten büyük olduğu için","Uzaktaki cisimler küçük görünür. Güneş, Ay'dan yaklaşık 400 kat daha uzaktadır."],
 ["Güneş ışığı Dünya'ya yaklaşık 8 dakikada ulaşır. Bu bilgi bize ne söyler?","Güneş'in Dünya'dan çok uzak olduğunu","Güneş'in küçük bir yıldız olduğunu","Işığın çok yavaş yol aldığını","Işık çok hızlıdır. Buna rağmen 8 dakika sürmesi, Güneş'in çok uzak olduğunu gösterir."],
 ["Bir öğrenci 'Ay geceleri parlıyor, demek ki ışık kaynağıdır.' diyor. Bu öğrenciye ne söylenmeli?","Ay, Güneş'ten aldığı ışığı yansıtır; ışık kaynağı değildir.","Ay yalnızca geceleri ışık üretir.","Ay'ın ışığı sokak lambalarından yansır.","Ay kendi ışığını üretmez. Gördüğümüz ışık, Ay'dan yansıyan Güneş ışığıdır."],
 ["Ay'da gündüzleri çok sıcak, geceleri çok soğuk olur. Bunun en önemli nedeni nedir?","Ay'da ısıyı tutacak bir atmosfer olmaması","Ay'ın Güneş'e çok yakın olması","Ay'ın kendi ışığını üretmesi","Atmosfer olmadığı için Ay'ın yüzeyi gündüz çok ısınır, gece hızla soğur."],
 ["Ay'ın yüzeyindeki kraterlerin çoğu nasıl oluşmuştur?","Göktaşlarının çarpmasıyla","Rüzgârın aşındırmasıyla","Akarsuların oymasıyla","Ay'da rüzgâr ve akarsu yoktur. Kraterleri çarpan göktaşları oluşturmuştur."],
 ["Hangisi Ay'ı Dünya'dan ayıran bir özelliktir?","Atmosferi ve sıvı suyu yoktur.","Kendi ekseni etrafında döner.","Güneş'ten ışık alır.","Dünya da Ay da döner ve Güneş'ten ışık alır. Ay'da ise atmosfer ve sıvı su yoktur."],
 ["Ay, kendi ekseni etrafında bir tur dönerken Dünya etrafında kaç tur dolanır?","1 tur","Hiç dolanmaz","27 tur","Ay'ın dönme ve dolanma süreleri eşittir; ikisi de yaklaşık 27,3 gündür."],
 ["Ay'ın Dünya'dan hiç görünmeyen arka yüzü için hangisi doğrudur?","O yüz de Güneş ışığı alır ve aydınlanır.","O yüz hiç aydınlanmaz, hep karanlıktır.","O yüzde hiç krater yoktur.","Ay döndükçe her yüzü sırayla Güneş ışığı alır. Arka yüzü sadece Dünya'dan görünmez."],
 ["Bir öğrenci 'Ay'ın evreleri, Dünya'nın gölgesi Ay'a düştüğü için oluşur.' diyor. Bu görüş için ne söylenebilir?","Yanlıştır; evreler, Ay'ın aydınlık yarısının ne kadarını gördüğümüze bağlıdır.","Doğrudur.","Sadece dolunayda doğrudur.","Dünya'nın gölgesinin Ay'a düşmesi Ay tutulmasıdır. Evreleri ise Ay'ın konumu oluşturur."],
 ["Yeni Ay evresinde Ay nerededir?","Güneş ile Dünya'nın arasında","Dünya'nın, Güneş'e göre arka tarafında","Güneş'in arkasında","Yeni Ay'da Ay, Güneş ile Dünya arasındadır. Aydınlık yüzü Dünya'ya bakmaz."],
 ["Dolunay evresinde Güneş, Dünya ve Ay nasıl sıralanır?","Güneş – Dünya – Ay","Güneş – Ay – Dünya","Ay – Güneş – Dünya","Dolunayda Dünya ortadadır. Ay'ın aydınlık yüzünün tamamı Dünya'ya bakar."],
 ["Bugün gökyüzünde ilk dördün görüldü. Yaklaşık 1 hafta sonra hangi evre görülür?","Dolunay","Yeni Ay","Son dördün","Sıra: Yeni Ay → İlk dördün → Dolunay → Son dördün. Aralarda yaklaşık 1 hafta vardır."],
 ["Bugün dolunay var. Yaklaşık 2 hafta sonra hangi evre görülür?","Yeni Ay","İlk dördün","Dolunay","Dolunaydan 1 hafta sonra son dördün, 2 hafta sonra Yeni Ay görülür."],
 ["Türkiye'den bakınca sağ yarısı aydınlık bir yarım Ay görülüyor. Bu hangi evredir?","İlk dördün","Son dördün","Dolunay","Türkiye'den bakınca ilk dördünde sağ yarı, son dördünde sol yarı aydınlık görünür."],
 ["Türkiye'den bakınca sol yarısı aydınlık bir yarım Ay görülüyor. Bundan sonra gelen ana evre hangisidir?","Yeni Ay","Dolunay","İlk dördün","Sol yarısı aydınlık yarım Ay son dördündür. Ondan sonra Yeni Ay gelir."],
 ["Ay'ın evrelerinin bir tam döngüsü yaklaşık ne kadar sürer?","Yaklaşık 29,5 gün","Yaklaşık 7 gün","Yaklaşık 365 gün","Yeni Ay'dan bir sonraki Yeni Ay'a yaklaşık 29,5 gün geçer."],
 ["Hem kendi ekseni etrafında dönen hem de bir gezegenin etrafında dolanan gök cismi hangisidir?","Ay","Güneş","Dünya","Ay kendi ekseni etrafında döner ve Dünya'nın etrafında dolanır."],
 ["Güneş etrafında dolanan, kendi ekseni etrafında dönen ve bir doğal uydusu olan gök cismi hangisidir?","Dünya","Ay","Güneş","Dünya, Güneş'in etrafında dolanır ve doğal uydusu Ay'dır."],
 ["Dünya'nın kendi ekseni etrafında dönmesinin sonucu hangisidir?","Gece ve gündüzün oluşması","Ay'ın evrelerinin oluşması","Ay tutulmasının oluşması","Dünya döndükçe Güneş'e bakan yüzde gündüz, diğer yüzde gece yaşanır."],
 ["Ay, Dünya etrafında dolanırken Güneş'e göre ne yapar?","Dünya ile birlikte Güneş etrafında dolanır.","Olduğu yerde sabit durur.","Güneş'ten giderek uzaklaşır.","Ay, Dünya'nın çevresinde dolanırken Dünya ile birlikte Güneş'in çevresinde de dolanır."],
 ["Güneş, Dünya ve Ay'ı temsil etmek için hangi üç top seçilmelidir?","Plaj topu – nohut – toplu iğne başı","Basketbol topu – tenis topu – futbol topu","Tenis topu – plaj topu – nohut","Model kurarken büyüklük farkı korunmalı: Güneş çok büyük, Dünya küçük, Ay daha da küçük."],
 ["Ay'daki astronotların ayak izleri neden milyonlarca yıl bozulmadan kalabilir?","Ay'da rüzgâr ve yağmur olmadığı için","Ay'ın yüzeyi çok sert olduğu için","Ay'da yer çekimi hiç olmadığı için","İzleri silecek rüzgâr ve yağmur yoktur. Ay'da yer çekimi vardır, ama Dünya'dakinden azdır."],
 ["Dünya'dan bakınca Ay'ın hep aynı yüzünü görmemizin nedeni nedir?","Ay'ın dönme ve dolanma sürelerinin eşit olması","Ay'ın kendi ekseni etrafında hiç dönmemesi","Dünya'nın Ay'dan daha hızlı dönmesi","Ay bir tur dolanırken kendi etrafında da tam bir tur döner. Bu yüzden hep aynı yüzü bize bakar."]
],
"5-2":[
 ["Bir dinamometreye 2 N'luk cisim asılınca yay 4 cm uzuyor. Aynı yaya 4 N'luk cisim asılırsa yay kaç cm uzar?","8 cm","4 cm","2 cm","Kuvvet 2 katına çıkarsa yayın uzaması da 2 katına çıkar."],
 ["Dinamometrenin yayının esnek olması neden önemlidir?","Kuvvet kalkınca eski hâline dönebilmesi için","Daha ağır olması için","Isıyı iyi iletmesi için","Esnek yay, cisim çıkarılınca eski boyuna döner. Böylece dinamometre tekrar kullanılabilir."],
 ["Ölçüm sınırı 10 N olan bir dinamometreye 25 N'luk cisim asılırsa ne olur?","Yay zarar görebilir, doğru ölçüm yapılamaz.","Dinamometre 25 N gösterir.","Yay kısalır.","Her dinamometrenin bir ölçüm sınırı vardır. Sınırı aşan kuvvet yayı bozabilir."],
 ["3 N'luk bir kalem kutusunun ağırlığını en hassas ölçmek için hangi dinamometre seçilmelidir?","0–5 N","0–100 N","0–1 N","Ölçülecek kuvvetten biraz büyük sınırı olan dinamometre en hassas sonucu verir. 0–1 N yetmez."],
 ["Hangisi kuvvetin etkilerinden biri değildir?","Cismin kütlesini değiştirmek","Hareket eden cismin yönünü değiştirmek","Cismin şeklini değiştirmek","Kuvvet cismin şeklini, hızını ve yönünü değiştirebilir; kütlesini değiştirmez."],
 ["Kütlesi 60 kg olan bir astronot Ay'a gidiyor. Ay'daki kütlesi kaç kg olur?","60 kg","10 kg","0 kg","Kütle madde miktarıdır ve bulunduğu yere göre değişmez."],
 ["Dünya'da ağırlığı 600 N olan bir astronotun Ay'daki ağırlığı yaklaşık kaç N olur? (Ay'ın çekimi Dünya'nınkinin yaklaşık 6'da 1'i)","100 N","600 N","3600 N","600 N'un 6'da 1'i 100 N eder. Ağırlık azalır, kütle aynı kalır."],
 ["Bir cisim eşit kollu terazide hem Dünya'da hem Ay'da ölçülüyor. Sonuç ne olur?","İki yerde de aynı kütle bulunur.","Ay'da daha az bulunur.","Ay'da daha çok bulunur.","Eşit kollu terazi kütleyi ölçer. Kütle değişmediği için sonuç aynıdır."],
 ["Aynı cisim hem Dünya'da hem Ay'da dinamometreyle ölçülüyor. Sonuç ne olur?","Ay'da daha küçük değer gösterir.","İki yerde aynı değeri gösterir.","Ay'da daha büyük değer gösterir.","Dinamometre ağırlığı ölçer. Ay'ın çekimi az olduğu için ağırlık daha küçük çıkar."],
 ["Kütle ve ağırlık için hangisi doğrudur?","Kütle madde miktarıdır, ağırlık ise bir kuvvettir.","İkisi de newton ile ölçülür.","İkisi de bulunulan yere göre değişir.","Kütle (kg) yere göre değişmez. Ağırlık (N) yer çekimine göre değişir."],
 ["Yer çekiminin çok az olduğu bir uzay aracındaki astronotun kütlesi ve ağırlığı için ne söylenebilir?","Ağırlığı çok azalır, kütlesi değişmez.","İkisi de sıfır olur.","Kütlesi azalır, ağırlığı değişmez.","Kütle her yerde aynıdır. Ağırlık ise yer çekimi azaldıkça azalır."],
 ["Masadaki bir kitap sağa doğru itiliyor. Kitaba etki eden sürtünme kuvveti hangi yöndedir?","Sola","Sağa","Yukarı","Sürtünme kuvveti her zaman harekete zıt yönde etki eder."],
 ["Aynı kutu tahta, halı ve buz zeminde aynı kuvvetle itiliyor. Kutu en uzağa hangi zeminde gider?","Buz","Halı","Tahta","Buz en az pürüzlü yüzeydir. Sürtünme az olduğu için kutu en uzağa gider."],
 ["Aynı oyuncak araba aynı hızla üç farklı zemine bırakılıyor. En kısa sürede hangi zeminde durur?","Çakıllı yol","Fayans","Buz","Çakıllı yol en pürüzlü zemindir. Sürtünme en fazla olduğu için araba en çabuk durur."],
 ["Sürtünme hiç olmasaydı hangisi yaşanırdı?","Yürürken ayaklarımız kayardı.","Ayakkabılarımız daha çabuk aşınırdı.","Bisiklet frenleri daha iyi tutardı.","Yürümek için ayakkabı ile yer arasındaki sürtünmeye ihtiyacımız var."],
 ["Kışın araç lastiklerine zincir takılmasının amacı nedir?","Lastik ile yol arasındaki sürtünmeyi artırmak","Sürtünmeyi azaltmak","Aracı hafifletmek","Zincir yüzeyi pürüzlü yapar. Sürtünme artar, araç buzda kaymaz."],
 ["Futbolcuların kramponlu ayakkabı giymesinin amacı nedir?","Sürtünmeyi artırıp kaymamak","Sürtünmeyi azaltıp hızlanmak","Ayakkabıyı hafifletmek","Kramponlar zemine tutunmayı, yani sürtünmeyi artırır."],
 ["Kayakçıların kayaklarının altını mumlamasının amacı nedir?","Sürtünmeyi azaltmak","Sürtünmeyi artırmak","Kayakları ağırlaştırmak","Mum yüzeyi kaygan yapar, sürtünme azalır ve kayakçı daha kolay kayar."],
 ["Hangisinde sürtünme istenmeyen bir durumdur?","Makine parçalarının sürtünüp aşınması","Kibritin kutuya sürtülerek yakılması","Silginin kâğıttaki yazıyı silmesi","Kibrit ve silgi sürtünme sayesinde çalışır. Makine parçalarının aşınması ise zarardır."],
 ["Aynı kumaştan biri açık paraşüt, diğeri top gibi buruşturulmuş iki parça aynı yükseklikten bırakılıyor. Hangisi yere daha geç düşer?","Açık paraşüt","Buruşturulmuş kumaş","İkisi aynı anda düşer.","Açık paraşüt havayla daha geniş yüzeyle karşılaşır. Hava direnci artar, daha yavaş düşer."],
 ["Aynı boyda iki kâğıttan biri buruşturuluyor, diğeri düz bırakılıyor. Aynı yükseklikten bırakılınca hangisi önce yere düşer?","Buruşturulmuş kâğıt","Düz kâğıt","İkisi aynı anda düşer.","Buruşturulmuş kâğıdın havayla temas eden yüzeyi küçüktür. Hava direnci az olduğu için önce düşer."],
 ["Su direnci için hangisi doğrudur?","Suda hareket eden cisme, harekete zıt yönde etki eder.","Cismi hareket yönünde iter.","Sadece suda duran cisimlere etki eder.","Su direnci de bir sürtünme çeşididir ve harekete karşı koyar."],
 ["Bir yüzücü suda daha hızlı ilerlemek için ne yapmalıdır?","Vücudunu ince uzun tutup su direncini azaltmalı.","Kollarını yana açıp yüzeyi genişletmeli.","Bol ve geniş kıyafet giymeli.","Suya karşı gelen yüzey küçüldükçe su direnci azalır."],
 ["Bir bisikletli hızlandıkça ona etki eden hava direnci nasıl değişir?","Artar.","Azalır.","Değişmez.","Cisim hızlandıkça karşılaştığı hava direnci de artar."],
 ["Paraşütçü paraşütünü açtığında yer çekimi kuvvetine ne olur?","Yer çekimi devam eder; yavaşlamasını hava direnci sağlar.","Yer çekimi ortadan kalkar.","Yer çekimi artar.","Yer çekimi hep vardır. Açılan paraşüt hava direncini artırır ve düşüşü yavaşlatır."],
 ["Bir otomobil üreticisi aracının daha az yakıt harcamasını istiyor. Aracın şekli nasıl olmalıdır?","Hava direncini azaltan, yuvarlatılmış bir şekilde","Hava direncini artıran, köşeli ve düz bir şekilde","Şeklin hiçbir önemi yoktur.","Hava direnci az olan araç daha kolay ilerler ve daha az yakıt harcar."]
],
"6-1":[
 ["Güneş'e en yakın gezegen hangisidir?","Merkür","Venüs","Mars","Merkür, Güneş'e en yakın gezegendir."],
 ["Güneş sistemindeki en büyük gezegen hangisidir?","Jüpiter","Satürn","Neptün","Jüpiter, Güneş sisteminin en büyük gezegenidir."],
 ["Güneş'e en uzak gezegen hangisidir?","Neptün","Uranüs","Satürn","Gezegen sırası Merkür'den başlar ve Neptün ile biter."],
 ["Hangisinde yalnızca iç (karasal) gezegenler verilmiştir?","Merkür, Venüs, Dünya, Mars","Jüpiter, Satürn, Uranüs, Neptün","Merkür, Venüs, Jüpiter, Satürn","İç gezegenler Güneş'e yakın olan dört kayalık gezegendir."],
 ["Dış (gazsal) gezegenler için hangisi doğrudur?","Çoğunlukla gazlardan oluşurlar ve halkaları vardır.","Yüzeyleri katı ve kayalıktır.","Hiçbirinin uydusu yoktur.","Jüpiter, Satürn, Uranüs ve Neptün gaz devleridir; dördünün de halkası vardır."],
 ["İç gezegenleri dış gezegenlerden ayıran yapı hangisidir?","Asteroit kuşağı","Kuyruklu yıldızlar","Ay","Asteroit kuşağı Mars ile Jüpiter arasındadır ve iki grubu ayırır."],
 ["Halkası en belirgin olan gezegen hangisidir?","Satürn","Mars","Venüs","Satürn'ün halkaları buz ve kaya parçalarından oluşur, teleskopla bile kolayca görülür."],
 ["Venüs, Güneş'e Merkür'den daha uzak olduğu hâlde en sıcak gezegendir. Neden?","Kalın atmosferi ısıyı hapsettiği için","Güneş'e en yakın gezegen olduğu için","Kendi ışığını ürettiği için","Venüs'ün çok kalın atmosferi, gelen ısının dışarı çıkmasını engeller."],
 ["Yüzeyindeki demir oksit nedeniyle 'kızıl gezegen' denen gezegen hangisidir?","Mars","Jüpiter","Venüs","Mars'ın kırmızı rengi, yüzeyindeki paslı (demir oksitli) tozdan gelir."],
 ["Gezegenlerin Güneş'e uzaklığı arttıkça Güneş etrafındaki bir tur dolanma süreleri nasıl değişir?","Uzar.","Kısalır.","Değişmez.","Uzaktaki gezegenin yörüngesi daha uzundur. Neptün'ün bir turu yaklaşık 165 yıl sürer."],
 ["Güneş sistemi modeli hazırlarken hangisi bir sınırlılıktır?","Büyüklükler ve uzaklıklar aynı ölçekte gösterilemez.","Gezegenler sıraya dizilemez.","Güneş en küçük çizilmelidir.","Gerçek ölçekte yapılan bir modelde gezegenler toz tanesi kadar kalır, aralar kilometrelerce olur."],
 ["Güneş tutulması sırasında Güneş, Dünya ve Ay nasıl sıralanır?","Güneş – Ay – Dünya","Güneş – Dünya – Ay","Ay – Güneş – Dünya","Güneş tutulmasında Ay, Güneş ile Dünya'nın arasına girer."],
 ["Ay tutulması sırasında Güneş, Dünya ve Ay nasıl sıralanır?","Güneş – Dünya – Ay","Güneş – Ay – Dünya","Dünya – Güneş – Ay","Ay tutulmasında Dünya ortadadır ve gölgesi Ay'a düşer."],
 ["Güneş tutulması hangi Ay evresinde gerçekleşebilir?","Yeni Ay","Dolunay","İlk dördün","Ay'ın Güneş ile Dünya arasına girdiği evre Yeni Ay'dır."],
 ["Ay tutulması hangi Ay evresinde gerçekleşebilir?","Dolunay","Yeni Ay","Son dördün","Dünya'nın Güneş ile Ay arasına girdiği evre dolunaydır."],
 ["Güneş tutulmasında hangi gök cisminin gölgesi hangisinin üzerine düşer?","Ay'ın gölgesi Dünya'ya","Dünya'nın gölgesi Ay'a","Güneş'in gölgesi Ay'a","Güneş tutulmasında Ay'ın gölgesi Dünya'nın bir bölgesine düşer."],
 ["Her Yeni Ay'da Güneş tutulması olmaz. Bunun nedeni nedir?","Ay'ın yörüngesi biraz eğik olduğu için üçü her ay tam aynı doğrultuya gelmez.","Ay her Yeni Ay'da görünmez olduğu için","Güneş her ay biraz küçüldüğü için","Tutulma için Güneş, Ay ve Dünya'nın tam aynı doğrultuya gelmesi gerekir."],
 ["Ay tutulması, Güneş tutulmasından daha geniş bir bölgeden izlenebilir. Neden?","O sırada Ay'ı görebilen her yerden izlenebildiği için","Ay, Güneş'ten büyük olduğu için","Ay tutulması gündüz olduğu için","Ay tutulmasını Dünya'nın gece yaşanan yarısındaki herkes görebilir."],
 ["Güneş tutulmasını izlerken ne yapılmalıdır?","Tutulma gözlüğü gibi uygun filtreler kullanılmalı.","Güneş'e çıplak gözle bakılmalı.","Güneş gözlüğüyle bakılmalı.","Güneş gözlüğü gözü korumaz. Yalnızca tutulma için yapılmış filtreler güvenlidir."],
 ["Tam Güneş tutulmasında gündüz kısa bir süre karanlık olur. Neden?","Ay, Güneş ışığının o bölgeye ulaşmasını engellediği için","Güneş kısa süre söndüğü için","Dünya'nın gölgesi o bölgeye düştüğü için","Ay'ın gölgesindeki bölgeye Güneş ışığı ulaşamaz."],
 ["Dünya, Güneş'e uzaklık sırasına göre kaçıncı gezegendir?","3.","2.","4.","Sıra: Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs, Neptün."]
],
"6-2":[
 ["Bir cisme etki eden kuvvetlerin yaptığı etkiyi tek başına yapabilen kuvvete ne ad verilir?","Bileşke kuvvet","Sürtünme kuvveti","Ağırlık","Birden fazla kuvvetin toplam etkisini tek başına yapan kuvvet bileşke kuvvettir."],
 ["Bir kutuya aynı yönde, sağa doğru 10 N ve 5 N'luk iki kuvvet uygulanıyor. Bileşke kuvvet nedir?","Sağa doğru 15 N","Sağa doğru 5 N","Sola doğru 15 N","Aynı yönlü kuvvetler toplanır: 10 + 5 = 15 N, yönü aynı kalır."],
 ["Bir kutuya sağa doğru 12 N, sola doğru 4 N kuvvet uygulanıyor. Bileşke kuvvet nedir?","Sağa doğru 8 N","Sola doğru 8 N","Sağa doğru 16 N","Zıt yönlü kuvvetler çıkarılır: 12 − 4 = 8 N, büyük kuvvetin yönündedir."],
 ["Duran bir cisme aynı doğrultuda, zıt yönde 20'şer N'luk iki kuvvet etki ediyor. Cisim ne yapar?","Durmaya devam eder.","Kuvvetlerden birinin yönünde hareket eder.","Giderek hızlanır.","Kuvvetler eşit ve zıt yönlü olduğu için bileşke kuvvet sıfırdır."],
 ["Halat çekme yarışında halat hiç hareket etmiyor. Kuvvetler için ne söylenebilir?","Dengelenmiştir.","Dengelenmemiştir.","Bir takım hiç kuvvet uygulamamaktadır.","İki takımın kuvveti eşittir, bileşke kuvvet sıfırdır."],
 ["Halat çekmede A takımı 300 N, B takımı 250 N kuvvet uyguluyor. Halat ne olur?","A takımı yönünde hareket eder.","B takımı yönünde hareket eder.","Hiç hareket etmez.","Bileşke kuvvet 300 − 250 = 50 N'dur ve A takımı yönündedir."],
 ["Dengelenmiş kuvvetlerin etkisindeki hareketli bir cisim ne yapar?","Aynı yönde sabit süratle hareketine devam eder.","Hemen durur.","Giderek hızlanır.","Bileşke kuvvet sıfırsa hareketli cismin sürati ve yönü değişmez."],
 ["Dengelenmemiş kuvvetin etkisindeki bir cisim için hangisi doğrudur?","Sürati ya da hareket yönü değişir.","Duruyorsa durmaya devam eder.","Hiçbir değişiklik olmaz.","Bileşke kuvvet sıfır değilse cismin hareketi değişir."],
 ["Bir cisme zıt yönlü iki kuvvet etki ediyor ve cisim sola doğru hızlanıyor. Hangisi doğrudur?","Sola doğru olan kuvvet daha büyüktür.","İki kuvvet eşittir.","Sağa doğru olan kuvvet daha büyüktür.","Cisim bileşke kuvvet yönünde hızlanır. Bileşke sola doğrudur."],
 ["Birim zamanda alınan yola ne ad verilir?","Sürat","Kuvvet","Kütle","Sürat = alınan yol ÷ geçen süre."],
 ["Hız ile sürat arasındaki fark nedir?","Hızın yönü vardır, süratin yönü yoktur.","Süratin yönü vardır, hızın yönü yoktur.","Aralarında hiçbir fark yoktur.","Hız, sürate yön bilgisinin eklenmiş hâlidir."],
 ["Hangisi bir hız bilgisidir?","Araba kuzeye doğru 60 km/h ile gidiyor.","Araba 60 km/h ile gidiyor.","Araba 2 saattir yolda.","Hız bilgisi yön içerir. Yalnızca 60 km/h demek sürat bilgisidir."],
 ["300 m'lik yolu 60 saniyede sabit süratle alan bisikletlinin sürati kaçtır?","5 m/s","18 000 m/s","0,2 m/s","Sürat = 300 m ÷ 60 s = 5 m/s."],
 ["Sürati 20 m/s olan bir araç sabit süratle 10 saniyede kaç m yol alır?","200 m","2 m","30 m","Yol = sürat × süre = 20 × 10 = 200 m."],
 ["A aracı 120 km'lik yolu 2 saatte, B aracı aynı yolu 3 saatte alıyor. Hangisi daha süratlidir?","A aracı","B aracı","İkisi eşittir.","Aynı yolu daha kısa sürede alan daha süratlidir. A: 60 km/h, B: 40 km/h."],
 ["Sabit süratle hareket eden bir cisim için hangisi doğrudur?","Eşit zaman aralıklarında eşit yollar alır.","Her saniye bir öncekinden daha fazla yol alır.","Hiç yol almaz.","Sabit süratte her saniye aynı uzunlukta yol alınır."],
 ["Yol–zaman grafiği başlangıçtan geçen eğik bir doğru olan cisim nasıl hareket etmektedir?","Sabit süratle hareket ediyor.","Duruyor.","Sürekli yavaşlıyor.","Eğik düz çizgi, eşit sürelerde eşit yollar alındığını gösterir."],
 ["Yol–zaman grafiği yatay bir çizgi olan cisim için ne söylenebilir?","Duruyordur.","Sabit süratle gidiyordur.","Hızlanıyordur.","Zaman geçtiği hâlde alınan yol değişmiyorsa cisim duruyordur."],
 ["Bir koşucu pistte bir tur atıp başladığı noktaya dönüyor. Yer değiştirmesi nedir?","Sıfır","Pistin uzunluğu kadar","Pistin yarısı kadar","Yer değiştirme başlangıç ile bitiş noktası arasındaki uzaklıktır."],
 ["Hangisi bir kuvveti tanımlamak için gereken özelliklerden biri değildir?","Sıcaklık","Büyüklük","Yön","Kuvvet; büyüklüğü, yönü, doğrultusu ve uygulama noktası ile tanımlanır."],
 ["Bileşke kuvveti sıfır olan duran bir cisim için hangisi doğrudur?","Durmaya devam eder.","Kendiliğinden harekete başlar.","Ağırlığı sıfır olur.","Dengelenmiş kuvvetler duran cismi harekete geçiremez."]
],
"7-1":[
 ["Hangisi uzaya yerleştirilmiş bir teleskoptur?","Hubble Uzay Teleskobu","Doğu Anadolu Gözlemevi teleskobu","TÜBİTAK Ulusal Gözlemevi teleskobu","Hubble, Dünya'nın çevresinde dolanan bir uzay teleskobudur. Diğer ikisi yer tabanlıdır."],
 ["Uzay teleskoplarının yer teleskoplarına göre en önemli üstünlüğü nedir?","Atmosferin bozucu etkisi olmadan gözlem yapabilmeleri","Daha ucuz olmaları","Tamirlerinin kolay olması","Atmosfer ışığı bozar ve bazı ışınları tutar. Uzaydaki teleskop bu sorunu yaşamaz."],
 ["Teleskopların gök bilimine en önemli katkısı nedir?","Çıplak gözle göremediğimiz uzak gök cisimlerini görmemizi sağlaması","Gök cisimlerini Dünya'ya yaklaştırması","Yıldızların sayısını artırması","Teleskop uzaktan gelen ışığı toplar; böylece sönük ve uzak cisimleri görebiliriz."],
 ["Gözlemevleri neden genellikle şehirlerden uzak ve yüksek yerlere kurulur?","Işık kirliliğinden uzak ve havanın daha ince olduğu yerler olduğu için","Güneş'e daha yakın olmak için","Daha kolay ulaşılabildiği için","Şehir ışıkları ve kalın hava tabakası gözlemi zorlaştırır."],
 ["Şehirlerde gece gökyüzünde çok az yıldız görülmesinin nedeni nedir?","Işık kirliliği","Hava direnci","Yer çekimi","Yapay ışıklar gökyüzünü aydınlatır, sönük yıldızlar görünmez olur."],
 ["Türkiye'nin ilk astronotu kimdir?","Alper Gezeravcı","Tuva Cihangir Atasever","Cahit Arf","Alper Gezeravcı 2024'te Uluslararası Uzay İstasyonu'na giden ilk Türk astronottur."],
 ["Yerli gözlem uydumuz İMECE'nin temel görevi nedir?","Yeryüzünün yüksek çözünürlüklü görüntülerini almak","Televizyon yayını iletmek","Yıldızların yaşını ölçmek","İMECE bir yer gözlem uydusudur; haritacılık ve afet gibi alanlarda kullanılır."],
 ["TÜRKSAT uydularının temel görevi nedir?","Haberleşme ve televizyon yayını iletmek","Ay'ın yüzeyini incelemek","Göktaşlarını yok etmek","TÜRKSAT uyduları haberleşme uydularıdır."],
 ["Yakıtını yakarak itme kuvveti oluşturan ve araçları uzaya taşıyan teknoloji hangisidir?","Roket","Teleskop","Uydu","Uydular ve uzay araçları uzaya roketlerle gönderilir."],
 ["Görevi biten uydular ve roket parçaları uzayda hangi soruna yol açar?","Uzay çöpü oluşturur, çalışan uydulara çarpabilir.","Güneş'in ışığını azaltır.","Dünya'nın yer çekimini artırır.","Çok hızlı hareket eden küçük bir parça bile çarptığı uyduya zarar verebilir."],
 ["Işık yılı için hangisi doğrudur?","Işığın bir yılda aldığı yoldur; uzaklık birimidir.","Bir zaman birimidir.","Bir yıldızın yaşıdır.","Adında 'yıl' geçse de ışık yılı bir uzaklık birimidir."],
 ["Bir yıldızın ışığı Dünya'ya 10 yılda ulaşıyor. Bu yıldızın uzaklığı nedir?","10 ışık yılı","1 ışık yılı","10 kilometre","Işık 10 yılda ne kadar yol alırsa yıldız o kadar uzaktadır."],
 ["Yıldızların oluştuğu dev gaz ve toz bulutuna ne ad verilir?","Bulutsu (nebula)","Süpernova","Kara delik","Yıldızlar bulutsulardaki gaz ve tozun bir araya toplanmasıyla doğar."],
 ["Çok büyük kütleli bir yıldızın yaşamının sonunda şiddetle patlamasına ne ad verilir?","Süpernova","Bulutsu","Beyaz cüce","Süpernova, büyük kütleli yıldızların sonundaki dev patlamadır."],
 ["Güneş gibi orta büyüklükteki bir yıldız yaşamının sonunda neye dönüşür?","Beyaz cüce","Kara delik","Süpernova","Güneş önce kırmızı deve dönüşecek, sonunda beyaz cüce olarak kalacaktır."],
 ["Çok büyük kütleli bir yıldız süpernova patlamasından sonra neye dönüşebilir?","Kara delik ya da nötron yıldızı","Gezegen","Kuyruklu yıldız","Patlamadan geriye kalan çekirdek çok yoğunsa kara delik ya da nötron yıldızı oluşur."],
 ["Güneş sistemimizin içinde bulunduğu galaksi hangisidir?","Samanyolu","Andromeda","Büyükayı","Güneş, Samanyolu galaksisindeki milyarlarca yıldızdan biridir."],
 ["Güneş için hangisi doğrudur?","Samanyolu'ndaki milyarlarca yıldızdan biridir.","Evrendeki en büyük yıldızdır.","Bir galaksidir.","Güneş orta büyüklükte bir yıldızdır; çok daha büyük yıldızlar vardır."],
 ["Büyükten küçüğe sıralama hangisinde doğrudur?","Evren > Galaksi > Yıldız","Galaksi > Evren > Yıldız","Yıldız > Galaksi > Evren","Evren galaksileri, galaksiler de yıldızları içerir."],
 ["Gökyüzünde belirli bir şekil oluşturduğu düşünülen yıldız grubuna ne ad verilir?","Takımyıldız","Galaksi","Bulutsu","Büyükayı ve Avcı (Orion) bilinen takımyıldızlardır."],
 ["Andromeda nedir?","Bir galaksi","Bir takımyıldız","Bir gezegen","Andromeda, Samanyolu'na en yakın büyük sarmal galaksidir."]
],
"7-2":[
 ["Hangisinde fen bilimleri açısından iş yapılmıştır?","Yerdeki çantayı kaldırıp masaya koymak","Duvarı ittiği hâlde yerinden oynatamamak","Elinde çantayla hiç kıpırdamadan beklemek","İş için kuvvet uygulanmalı ve cisim kuvvet yönünde yer değiştirmelidir."],
 ["İş ve enerjinin birimi hangisidir?","Joule (J)","Newton (N)","Kilogram (kg)","İş ve enerji joule ile ölçülür."],
 ["Fiziksel iş hangi iki niceliğe bağlıdır?","Kuvvet ve kuvvet yönündeki yer değiştirme","Kütle ve sıcaklık","Hacim ve zaman","Kuvvet ya da yer değiştirme büyüdükçe yapılan iş artar."],
 ["Bir duvarı bütün gücüyle itip yerinden oynatamayan kişi için ne söylenebilir?","Fiziksel anlamda iş yapmamıştır.","Çok iş yapmıştır, çünkü yorulmuştur.","Duvar ona iş yapmıştır.","Yer değiştirme olmadığı için fiziksel anlamda iş yapılmaz."],
 ["Elinde 20 N'luk çantayla yatay yolda 10 m yürüyen öğrenci, çantayı taşıyan kuvvetle fiziksel anlamda iş yapar mı?","Hayır; kuvvet yukarı doğru, yer değiştirme yataydır.","Evet, 200 J iş yapar.","Evet, 30 J iş yapar.","Çantayı tutan kuvvet yukarı doğrudur. Çanta bu yönde yer değiştirmediği için iş yapılmaz."],
 ["10 N'luk bir kutuyu yerden 2 m yukarı kaldıran öğrenci kaç J iş yapar?","20 J","5 J","12 J","İş = kuvvet × yer değiştirme = 10 N × 2 m = 20 J."],
 ["Kinetik enerji hangi iki niceliğe bağlıdır?","Kütle ve sürat","Kütle ve yükseklik","Sürat ve sıcaklık","Kinetik enerji hareket enerjisidir; kütle ve sürat arttıkça artar."],
 ["Çekim potansiyel enerjisi hangi iki niceliğe bağlıdır?","Kütle (ağırlık) ve yükseklik","Kütle ve sürat","Sürat ve zaman","Cisim ne kadar ağır ve ne kadar yüksekteyse çekim potansiyel enerjisi o kadar fazladır."],
 ["Gerilmiş bir lastikte ya da sıkıştırılmış bir yayda hangi enerji depolanır?","Esneklik potansiyel enerjisi","Çekim potansiyel enerjisi","Kinetik enerji","Şekli değiştirilen esnek cisimler esneklik potansiyel enerjisi depolar."],
 ["Aynı süratle giden bir kamyon ile bir bisikletten hangisinin kinetik enerjisi daha fazladır?","Kamyonun","Bisikletin","İkisi eşittir.","Sürat aynıysa kütlesi büyük olanın kinetik enerjisi daha fazladır."],
 ["Bir kitaplığın farklı raflarındaki özdeş kitaplardan hangisinin çekim potansiyel enerjisi en fazladır?","En üst raftakinin","En alt raftakinin","Hepsi eşittir.","Kütleleri aynı olduğu için en yüksekte olanın enerjisi en fazladır."],
 ["Duran bir cismin kinetik enerjisi ne kadardır?","Sıfırdır.","En fazladır.","Kütlesine eşittir.","Sürati olmayan cismin kinetik enerjisi yoktur."],
 ["Kinetik ve potansiyel enerjinin ortak özelliği hangisidir?","İkisinin de birimi joule'dür.","İkisi de yalnızca yüksekliğe bağlıdır.","İkisi de yalnızca hareketli cisimlerde bulunur.","Bütün enerji türleri joule ile ölçülür."],
 ["Yukarı doğru atılan bir top yükselirken enerjisi nasıl değişir? (Sürtünme önemsiz)","Kinetik enerji azalır, potansiyel enerji artar.","Kinetik enerji artar, potansiyel enerji azalır.","İkisi de artar.","Top yükseldikçe yavaşlar; hareket enerjisi yükseklik enerjisine dönüşür."],
 ["Ağaçtan düşen bir elmanın enerjisi düşerken nasıl dönüşür?","Potansiyel enerji kinetik enerjiye dönüşür.","Kinetik enerji potansiyel enerjiye dönüşür.","Hiçbir dönüşüm olmaz.","Elma alçaldıkça hızlanır; yükseklik enerjisi hareket enerjisine dönüşür."],
 ["Salıncak en yüksek noktadayken hangi enerjisi en fazladır?","Çekim potansiyel enerjisi","Kinetik enerji","Esneklik potansiyel enerjisi","En yüksek noktada salıncak bir an durur; potansiyel enerji en fazladır."],
 ["Salıncak en alçak noktadan geçerken hangi enerjisi en fazladır?","Kinetik enerji","Çekim potansiyel enerjisi","Esneklik potansiyel enerjisi","En alçak noktada salıncak en süratli hâlindedir."],
 ["İtilmeden bırakılan bir salıncak zamanla durur. Enerjisine ne olmuştur?","Sürtünme nedeniyle ısı enerjisine dönüşmüştür.","Yok olmuştur.","Kütleye dönüşmüştür.","Enerji yok olmaz. Hava ve bağlantı yerlerindeki sürtünme onu ısıya dönüştürür."],
 ["Sürtünmeli bir yüzeyde kayan kutunun kinetik enerjisinin bir kısmı neye dönüşür?","Isı enerjisine","Kütleye","Esneklik potansiyel enerjisine","Sürtünen yüzeyler ısınır; hareket enerjisinin bir kısmı ısıya dönüşür."],
 ["Oyuncak tabancada sıkıştırılan yay bırakılınca top fırlar. Hangi enerji dönüşümü olur?","Esneklik potansiyel enerjisi → kinetik enerji","Kinetik enerji → esneklik potansiyel enerjisi","Isı enerjisi → kinetik enerji","Yayda depolanan enerji topun hareket enerjisine dönüşür."],
 ["Enerjinin korunumu ile ilgili hangisi doğrudur?","Enerji yoktan var edilemez, yok edilemez; bir türden diğerine dönüşür.","Enerji kullanıldıkça yok olur.","Enerji yoktan var edilebilir.","Toplam enerji değişmez, yalnızca biçim değiştirir."]
],
"8-1":[
 ["Mevsimlerin oluşmasının temel nedeni nedir?","Dünya'nın eksen eğikliği ve Güneş etrafında dolanması","Dünya'nın Güneş'e uzaklığının değişmesi","Dünya'nın kendi ekseni etrafında dönmesi","Eksen eğik olduğu için yıl boyunca Güneş ışınlarının geliş açısı değişir."],
 ["Dünya, Güneş'e en yakın konumdayken (ocak başı) Kuzey Yarım Küre'de hangi mevsim yaşanır?","Kış","Yaz","İlkbahar","Mevsimler uzaklıktan değil, ışınların geliş açısından oluşur."],
 ["21 Haziran'da Kuzey Yarım Küre'de hangisi yaşanır?","Yılın en uzun gündüzü","Yılın en uzun gecesi","Gece ve gündüzün eşit olması","21 Haziran'da Güneş ışınları Yengeç Dönencesi'ne dik gelir."],
 ["21 Haziran'da Güney Yarım Küre'de hangisi yaşanır?","Yılın en uzun gecesi","Yılın en uzun gündüzü","Gece ve gündüzün eşit olması","İki yarım kürede yaşananlar birbirinin tersidir."],
 ["21 Mart ve 23 Eylül'de Güneş ışınları hangi noktaya dik gelir?","Ekvator","Yengeç Dönencesi","Oğlak Dönencesi","Bu tarihlerde ışınlar Ekvator'a dik gelir."],
 ["21 Aralık'ta Güneş ışınları hangi noktaya dik gelir?","Oğlak Dönencesi","Yengeç Dönencesi","Ekvator","21 Aralık'ta Güney Yarım Küre'de yaz başlar, ışınlar Oğlak Dönencesi'ne dik gelir."],
 ["21 Haziran'da Güneş ışınları hangi noktaya dik gelir?","Yengeç Dönencesi","Oğlak Dönencesi","Ekvator","21 Haziran'da Kuzey Yarım Küre'de yaz başlar."],
 ["21 Mart ve 23 Eylül'de gece ve gündüz süreleri için ne söylenebilir?","Dünya'nın her yerinde yaklaşık eşittir.","Kuzey Yarım Küre'de gündüz daha uzundur.","Güney Yarım Küre'de gece daha uzundur.","Işınlar Ekvator'a dik geldiği için aydınlanma çizgisi kutuplardan geçer."],
 ["Güneş ışınlarının dik geldiği yerde birim yüzeye düşen enerji için ne söylenebilir?","Daha fazladır.","Daha azdır.","Eğik geldiği yerle aynıdır.","Dik gelen ışık daha küçük bir alana yayılır, bu yüzden daha çok ısıtır."],
 ["Türkiye'de yaz yaşanırken Avustralya'da hangi mevsim yaşanır?","Kış","Yaz","İlkbahar","Avustralya Güney Yarım Küre'dedir; mevsimler ters yaşanır."],
 ["Kuzey Yarım Küre'de 21 Aralık'tan 21 Haziran'a doğru gündüz süresi nasıl değişir?","Uzar.","Kısalır.","Değişmez.","21 Aralık en kısa, 21 Haziran en uzun gündüzdür."],
 ["Dünya'nın dönme ekseni eğik olmasaydı hangisi olurdu?","Mevsimler oluşmazdı.","Gece ve gündüz oluşmazdı.","Dünya, Güneş etrafında dolanmazdı.","Eksen eğikliği olmasa ışınların geliş açısı yıl boyunca değişmezdi."],
 ["Geniş bir bölgede uzun yıllar boyunca gözlenen hava olaylarının ortalamasına ne ad verilir?","İklim","Hava durumu","Meteoroloji","İklim, en az 30–35 yıllık gözlemlerin ortalamasıdır."],
 ["Hava olaylarını inceleyen bilim dalı hangisidir?","Meteoroloji","Klimatoloji","Astronomi","Meteoroloji hava olaylarını, klimatoloji iklimi inceler."],
 ["İklim bilimcilere ne ad verilir?","Klimatolog","Meteorolog","Jeolog","İklimi inceleyen bilim dalı klimatoloji, uzmanı klimatologdur."],
 ["Hangisi iklimle ilgili bir ifadedir?","Akdeniz kıyılarında yazlar sıcak ve kurak, kışlar ılık ve yağışlı geçer.","Bugün İzmir'de hava güneşli.","Yarın Ankara'da kar bekleniyor.","İklim uzun yılların ortalamasıdır; tek bir günü anlatmaz."],
 ["\"Yarın Ankara'da yağmur bekleniyor.\" ifadesi neyle ilgilidir?","Hava durumu","İklim","Mevsimlerin oluşumu","Kısa süreli ve dar bir bölgedeki durum hava durumudur."],
 ["Rüzgârın oluşma nedeni nedir?","Havanın yüksek basınç alanından alçak basınç alanına hareket etmesi","Havanın alçak basınç alanından yüksek basınç alanına hareket etmesi","Bulutların yer değiştirmesi","Basınç farkı ne kadar büyükse rüzgâr o kadar hızlı eser."],
 ["Isınan havanın yoğunluğu ve oluşturduğu basınç için ne söylenebilir?","Yoğunluğu azalır, yükselir ve alçak basınç oluşur.","Yoğunluğu artar, alçalır ve yüksek basınç oluşur.","Hiçbir değişiklik olmaz.","Isınan hava hafifler ve yükselir; bulunduğu yerde basınç düşer."],
 ["Hava durumu ile iklim arasındaki fark nedir?","Hava durumu kısa sürede değişir, iklim uzun yıllarda değişir.","İklim her gün değişir.","İkisi aynı anlama gelir.","Hava durumu saatler içinde değişebilir; iklim uzun yılların ortalamasıdır."]
],
"8-2":[
 ["DNA'nın yapı birimi nedir?","Nükleotit","Amino asit","Kromozom","DNA, nükleotitlerin art arda dizilmesiyle oluşur."],
 ["Hangisi bir nükleotidin yapısında bulunmaz?","Amino asit","Fosfat","Deoksiriboz şekeri","Nükleotit; fosfat, şeker ve bir organik bazdan oluşur."],
 ["DNA'da adenin bazı hangi bazla eşleşir?","Timin","Guanin","Sitozin","Adenin–timin, guanin–sitozin eşleşir."],
 ["Bir DNA molekülünde 300 adenin bazı varsa kaç timin bazı vardır?","300","150","600","Adenin timinle eşleştiği için sayıları eşittir."],
 ["Bir DNA molekülünde 200 guanin bazı varsa kaç sitozin bazı vardır?","200","100","400","Guanin sitozinle eşleştiği için sayıları eşittir."],
 ["1000 nükleotitli bir DNA'da 300 adenin varsa kaç guanin vardır?","200","300","400","A = T = 300, toplam 600. Kalan 400 nükleotidin yarısı guanin: 200."],
 ["Kalıtsal bir özelliği belirleyen DNA bölümüne ne ad verilir?","Gen","Kromozom","Nükleotit","Genler, DNA üzerindeki özellik bilgisini taşıyan bölümlerdir."],
 ["Küçükten büyüğe sıralama hangisinde doğrudur?","Nükleotit → Gen → DNA → Kromozom","Gen → Nükleotit → DNA → Kromozom","Nükleotit → DNA → Gen → Kromozom","Nükleotitler genleri, genler DNA'yı oluşturur; DNA kıvrılıp kromozomu oluşturur."],
 ["DNA eşlenmesi ne zaman gerçekleşir?","Hücre bölünmeden önce","Hücre bölündükten sonra","Hücre öldükten sonra","Bölünmeden önce DNA kendini eşler; böylece yeni hücrelerin her biri DNA alır."],
 ["DNA eşlenirken ne olur?","İki zincir ayrılır, her birinin karşısına yeni zincir kurulur.","DNA tamamen yeniden üretilir, eski DNA yok olur.","İki DNA birleşip tek DNA olur.","Eşlenme sonunda her yeni DNA'da bir eski, bir yeni zincir bulunur."],
 ["Saf döl uzun (UU) bezelye ile kısa (uu) bezelye çaprazlanırsa oluşan bezelyelerin hepsi nasıl olur?","Uzun","Kısa","Yarısı uzun, yarısı kısa","Hepsi Uu olur. Uzunluk geni baskın olduğu için hepsi uzun boylu olur."],
 ["Aa × Aa çaprazlamasında aa genotipli birey oluşma olasılığı nedir?","1/4","1/2","3/4","Olası genotipler: AA, Aa, Aa, aa. Dörtte biri aa'dır."],
 ["Aa × aa çaprazlamasında çekinik özellik gösteren birey oluşma olasılığı nedir?","1/2","1/4","0","Olası genotipler: Aa, Aa, aa, aa. Yarısı aa'dır."],
 ["Baskın gen için hangisi doğrudur?","Heterozigot (Aa) bireyde de etkisini gösterir.","Yalnızca homozigot olunca etkisini gösterir.","Hiçbir zaman etkisini göstermez.","Baskın gen tek başına bile özelliği ortaya çıkarır."],
 ["Güneş altında kalan birinin teninin bronzlaşması gibi kalıtsal olmayan değişikliklere ne ad verilir?","Modifikasyon","Mutasyon","Adaptasyon","Modifikasyon çevrenin etkisiyle olur, genleri değiştirmez, sonraki nesle aktarılmaz."],
 ["Mutasyon için hangisi doğrudur?","DNA'daki kalıcı değişikliktir; üreme hücrelerinde olursa yavrulara aktarılır.","Hiçbir zaman kalıtsal değildir.","Çevrenin etkisiyle oluşan geçici bir değişikliktir.","Vücut hücrelerindeki mutasyon aktarılmaz, üreme hücrelerindeki aktarılır."],
 ["Hangisi mutasyona neden olabilir?","Radyasyon ve bazı kimyasal maddeler","Bol su içmek","Düzenli spor yapmak","Radyasyon, bazı kimyasallar ve yüksek sıcaklık DNA'ya zarar verebilir."],
 ["Modifikasyon ile mutasyon arasındaki fark nedir?","Modifikasyon kalıtsal değildir; mutasyon genlerde olur ve kalıtsal olabilir.","İkisi de kalıtsaldır.","Modifikasyon genlerde olur, mutasyon olmaz.","Modifikasyon genleri değiştirmez, mutasyon değiştirir."],
 ["Çöl tilkisinin büyük kulakları sayesinde fazla ısıyı atabilmesi neye örnektir?","Adaptasyon","Modifikasyon","Mutasyon","Canlının yaşadığı ortama uyum sağlamasını kolaylaştıran özellik adaptasyondur."],
 ["Bakterilere gen aktarılarak insülin üretilmesi hangi alana örnektir?","Biyoteknoloji (genetik mühendisliği)","Klimatoloji","Meteoroloji","Genlerle çalışarak canlılardan ürün elde etmek biyoteknolojinin konusudur."]
]
};
/* bölüm sonu canavarı Newton'un ilk soruları */
const NEWTON_Q={
 "5-1":["Newton, ağaçtan düşen elmayı ve Ay'ı Dünya'nın çevresinde tutan kuvvetin aynı kuvvet olduğunu düşündü. Bu kuvvet hangisidir?","Kütle çekimi (yer çekimi)","Sürtünme kuvveti","Mıknatıs kuvveti","Elmayı yere çeken ve Ay'ı yörüngede tutan kuvvet, kütle çekimidir."],
 "5-2":["Kuvvetin birimi olan newton (N), adını hangi bilim insanından alır?","Isaac Newton","Albert Einstein","Galileo Galilei","Kuvvet birimi newton, Isaac Newton'un adından gelir."],
 "6-1":["Gezegenleri Güneş'in çevresinde yörüngede tutan kuvvet hangisidir?","Güneş'in kütle çekimi","Sürtünme kuvveti","Mıknatıs kuvveti","Newton, gezegenleri Güneş'in çevresinde tutan kuvvetin kütle çekimi olduğunu gösterdi."],
 "6-2":["Duran bir cismin harekete geçmesi için ne gerekir?","Dengelenmemiş bir kuvvet","Dengelenmiş kuvvetler","Hiçbir şey, kendiliğinden harekete geçer","Bileşke kuvvet sıfır olmadıkça duran cisim durmaya devam eder."],
 "7-1":["Newton'un geliştirdiği, mercek yerine ayna kullanan teleskop türü hangisidir?","Yansıtmalı (aynalı) teleskop","Kırılmalı (mercekli) teleskop","Radyo teleskop","Newton 1668'de ışığı aynayla toplayan ilk kullanışlı yansıtmalı teleskobu yaptı."],
 "7-2":["1 joule'lük iş nasıl yapılır?","1 N'luk kuvvetle cismi kuvvet yönünde 1 m hareket ettirerek","1 kg'lık cismi elde tutarak","1 m yolu 1 saniyede yürüyerek","İş = kuvvet × yer değiştirme. 1 N × 1 m = 1 J."],
 "8-1":["Dünya'yı Güneş'in çevresindeki yörüngesinde tutan kuvvet hangisidir?","Güneş'in kütle çekimi","Rüzgâr","Sürtünme kuvveti","Dünya, Güneş'in kütle çekimi sayesinde yörüngesinde kalır."],
 "8-2":["Ben fizikçiyim, kalıtımın babası değilim! Bezelyelerle kalıtım deneyleri yapan bilim insanı kimdir?","Gregor Mendel","Isaac Newton","Albert Einstein","Mendel, bezelyelerle yaptığı çaprazlamalarla kalıtımın temel kurallarını buldu."]};


/* ================= MACERALAR =================
   Yeni bir ünite açmak için: o ünitenin satırına open:true ve tema bilgilerini ekle,
   QB içine "sınıf-ünite" anahtarıyla soruları koy. */
const GRADES={
5:{c:"#3ee6b0",units:[
 {u:1,ad:"Gökyüzündeki Komşularımız ve Biz",open:1,world:"GÖKYÜZÜ",kisa:"Gökyüzü",theme:"space",icons:"phase",ground:"moon",enemy:"meteor",coin:"star",chip:"#4cc9f0"},
 {u:2,ad:"Kuvveti Tanıyalım",open:1,world:"KUVVET",kisa:"Kuvvet",theme:"force",enemy:"ruf",coin:"N",chip:"#ff9f43"},
 {u:3,ad:"Canlıların Yapısına Yolculuk"},{u:4,ad:"Işığın Dünyası"},{u:5,ad:"Maddenin Doğası"},{u:6,ad:"Yaşamımızdaki Elektrik"},{u:7,ad:"Sürdürülebilir Yaşam ve Geri Dönüşüm"}]},
6:{c:"#4cc9f0",units:[
 {u:1,ad:"Güneş Sistemi ve Tutulmalar",open:1,world:"GEZEGENLER",kisa:"Gezegenler",theme:"space",icons:"planet",ground:"mars",enemy:"meteor",coin:"star",chip:"#b388ff"},
 {u:2,ad:"Kuvvetin Etkisinde Hareket",open:1,world:"HAREKET",kisa:"Hareket",theme:"force",enemy:"ruf",coin:"N",chip:"#ff9f43"},
 {u:3,ad:"Canlılarda Sistemler"},{u:4,ad:"Işığın Yansıması ve Renkler"},{u:5,ad:"Maddenin Ayırt Edici Özellikleri"},{u:6,ad:"Elektriğin İletimi ve Direnç"},{u:7,ad:"Sürdürülebilir Yaşam ve Etkileşim"}]},
7:{c:"#ff9f43",units:[
 {u:1,ad:"Uzay Çağı",open:1,world:"UZAY ÇAĞI",kisa:"Uzay Çağı",theme:"space",icons:"rocket",ground:"pad",enemy:"junk",coin:"star",chip:"#4cc9f0"},
 {u:2,ad:"Kuvvet ve Enerjiyi Keşfedelim",open:1,world:"ENERJİ",kisa:"Enerji",theme:"force",enemy:"ruf",coin:"J",chip:"#ffd23f"},
 {u:3,ad:"Vücudumuzdaki Sistemler"},{u:4,ad:"Işığın Kırılması ve Mercekler"},{u:5,ad:"Maddenin Doğasına Yolculuk"},{u:6,ad:"Elektriklenme"},{u:7,ad:"Sürdürülebilir Yaşam ve Geri Dönüşüm"}]},
8:{c:"#ff5fa2",units:[
 {u:1,ad:"Mevsimler ve İklim",open:1,world:"MEVSİMLER",kisa:"Mevsimler",theme:"weather",enemy:"cloud",coin:"sun",chip:"#3ee6b0"},
 {u:2,ad:"DNA ve Genetik Kod",open:1,world:"DNA",kisa:"DNA",theme:"dna",enemy:"germ",coin:"ATGC",chip:"#b388ff"},
 {u:3,ad:"Basınç"},{u:4,ad:"Madde ve Endüstri"},{u:5,ad:"Basit Makineler"},{u:6,ad:"Enerji Dönüşümleri ve Çevre Bilimi"},{u:7,ad:"Elektrik Yükleri ve Elektrik Enerjisi"}]}};
const SKY={space:["#070620","#1c1852","#40266e"],force:["#170b06","#4a1f0e","#8a3a16"],weather:["#041a22","#0b3a48","#145a5e"],dna:["#120822","#2a1048","#4a1a66"]};

/* ================= STİL ================= */
const st=document.createElement("style");st.textContent=`
.lg-stage{position:relative;width:100%;height:100%;border-radius:14px;overflow:hidden;border:3px solid #000;box-shadow:0 0 0 3px rgba(255,255,255,.08),0 25px 60px rgba(0,0,0,.5);background:#0b0a26;user-select:none;-webkit-user-select:none;touch-action:manipulation;font-family:'Nunito',system-ui,sans-serif;color:#f4f1ff;container-type:size;line-height:1.35;text-align:center}
.lg-stage *{box-sizing:border-box}
.lg-stage canvas{position:absolute;inset:0;width:100%;height:100%;image-rendering:pixelated}
.lg-hud{position:absolute;top:8px;left:10px;right:50px;display:flex;justify-content:space-between;align-items:center;gap:6px;font-family:'Pixelify Sans',monospace;font-weight:700;font-size:15px;font-size:clamp(12px,3.4cqw,20px);color:#fff;text-shadow:2px 2px 0 #000;z-index:2;pointer-events:none;white-space:nowrap}
.lg-hud .lg-sc{color:#ffd23f}.lg-hud .lg-pg{color:#3ee6b0}.lg-hud .lg-ht{color:#ff5fa2;letter-spacing:1px}
.lg-hud svg{height:.78em;width:auto;margin:0 .05em;vertical-align:-.02em;fill:currentColor;shape-rendering:crispEdges}
.lg-mute{position:absolute;top:6px;right:8px;z-index:5;background:rgba(0,0,0,.45);border:2px solid rgba(255,255,255,.3);border-radius:8px;width:34px;height:30px;font-size:14px;cursor:pointer;line-height:1;padding:0}
.lg-ov{position:absolute;inset:0;z-index:4;display:flex;flex-direction:column;padding:12px;background:rgba(14,11,34,.86);backdrop-filter:blur(3px);overflow-y:auto}
.lg-ov.lg-hide,.lg-hide{display:none!important}
.lg-in{margin:auto 0;width:100%;display:flex;flex-direction:column;align-items:center;gap:8px}
.lg-h{font-family:'Pixelify Sans',monospace;font-weight:700;font-size:26px;font-size:clamp(20px,6.4cqw,40px);line-height:1.02;color:#ffd23f;text-shadow:3px 3px 0 #000;margin:0}
.lg-p{font-weight:800;font-size:14px;font-size:clamp(13px,3.1cqw,17px);margin:0;color:#ece8ff}
.lg-s{font-weight:700;font-size:12px;font-size:clamp(11px,2.5cqw,14px);color:#bdb6e6;margin:0}
.lg-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:'Pixelify Sans',monospace;font-weight:700;font-size:17px;font-size:clamp(15px,3.6cqw,21px);padding:7px 18px;border:3px solid #000;border-radius:7px;box-shadow:0 4px 0 #000;cursor:pointer;color:#1a1530;background:#ffd23f;text-decoration:none;transition:transform .1s}
.lg-btn:hover{transform:translateY(2px);box-shadow:0 2px 0 #000}
.lg-btn.lg-ghost{background:rgba(255,255,255,.12);color:#fff;border-color:rgba(255,255,255,.35)}
.lg-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap}
.lg-tab{font-family:'Pixelify Sans',monospace;font-weight:700;font-size:15px;font-size:clamp(13px,3.2cqw,18px);padding:4px 10px;border:3px solid #000;border-radius:8px;background:rgba(255,255,255,.12);color:#fff;cursor:pointer;box-shadow:0 3px 0 #000}
.lg-tab.on{background:var(--c);color:#1a1530}
.lg-list{display:flex;flex-direction:column;gap:7px;width:100%;max-width:420px}
.lg-unit{display:flex;align-items:center;gap:8px;text-align:left;font-family:inherit;font-weight:900;font-size:14px;font-size:clamp(12.5px,3.1cqw,17px);padding:7px 10px;border:3px solid #000;border-radius:9px;background:#fff;color:#1a1530;box-shadow:0 4px 0 #000;cursor:pointer;line-height:1.2;transition:transform .1s}
.lg-unit:hover{transform:translateY(-2px)}
.lg-unit b{font-family:'Pixelify Sans',monospace;font-size:12px;font-size:clamp(11px,2.6cqw,14px);background:var(--c);padding:2px 8px;border-radius:999px;white-space:nowrap;border:2px solid #000}
.lg-unit.lg-full{background:#ffd23f}
.lg-lock{display:flex;flex-wrap:wrap;gap:5px;justify-content:center;max-width:460px}
.lg-lock span{font-size:11px;font-size:clamp(10.5px,2.4cqw,13px);font-weight:800;color:#bdb6e6;border:1px dashed rgba(255,255,255,.3);border-radius:999px;padding:1px 9px}
.lg-chip{font-family:'Pixelify Sans',monospace;font-weight:700;font-size:12px;font-size:clamp(11px,2.7cqw,15px);color:#1a1530;padding:2px 12px;border-radius:999px;border:2px solid #000}
.lg-q{font-weight:900;font-size:15px;font-size:clamp(14px,3.6cqw,22px);line-height:1.3;max-width:620px}
.lg-qbtns{display:grid;gap:7px;width:100%;max-width:460px}
.lg-qb{font-family:inherit;font-weight:900;font-size:14px;font-size:clamp(13px,3.2cqw,18px);padding:7px 10px;border:3px solid #000;border-radius:9px;background:#fff;color:#1a1530;box-shadow:0 4px 0 #000;cursor:pointer;line-height:1.25;transition:transform .1s}
.lg-qb:hover:not(:disabled){transform:translateY(-2px)}.lg-qb:disabled{cursor:default}
.lg-qb.ok{background:#3ee6b0}.lg-qb.no{background:#ff6b6b;color:#fff}
.lg-res{font-family:'Pixelify Sans',monospace;font-weight:700;font-size:18px;font-size:clamp(16px,4.2cqw,26px);text-shadow:2px 2px 0 #000;min-height:1em}
.lg-exp{max-width:560px;background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.18);border-radius:10px;padding:6px 12px;font-weight:800;font-size:13px;font-size:clamp(12px,2.9cqw,16px);margin:0}
.lg-toast{position:absolute;left:0;right:0;top:30%;font-family:'Pixelify Sans',monospace;font-weight:700;font-size:24px;font-size:clamp(20px,6cqw,38px);color:#ffd23f;text-shadow:3px 3px 0 #000;z-index:2;pointer-events:none;opacity:0;padding:0 10px}
.lg-toast.on{animation:lgT 1.5s ease-out}
@keyframes lgT{0%{opacity:0;transform:scale(.7)}15%{opacity:1;transform:scale(1.06)}25%{transform:scale(1)}75%{opacity:1}100%{opacity:0;transform:translateY(-16px)}}
.lg-hint{position:absolute;left:0;right:0;top:15%;font-family:'Pixelify Sans',monospace;font-weight:700;font-size:15px;font-size:clamp(13px,3.4cqw,22px);text-shadow:2px 2px 0 #000;z-index:2;pointer-events:none;opacity:0}
.lg-hint.on{animation:lgH 2.2s ease-out}
@keyframes lgH{0%{opacity:0}12%{opacity:1}80%{opacity:1}100%{opacity:0}}
.lg-link{color:#3ee6b0;font-weight:900;font-size:13px;font-size:clamp(12px,2.8cqw,15px)}
`;document.head.appendChild(st);

/* ================= DOM ================= */
const KAYNAK=ROOT.dataset.kaynak||"https://8bitfen.github.io/#kaynaklar";
ROOT.innerHTML=`<div class="lg-stage">
 <canvas aria-label="Luna'nın Bilim Koşusu oyunu"></canvas>
 <div class="lg-hud lg-hide"><span class="lg-wn"></span><span class="lg-pg"></span><span class="lg-ht"></span><span class="lg-sc">★ <span class="lg-scn"></span></span></div>
 <button class="lg-mute" aria-label="Sesi aç/kapat">🔊</button>
 <div class="lg-ov lg-menu"><div class="lg-in">
  <h3 class="lg-h">LUNA'NIN<br>BİLİM KOŞUSU</h3>
  <p class="lg-s">Sınıfını seç, maceranı başlat! En sonda seni Isaac Newton bekliyor.</p>
  <div class="lg-tabs"></div>
  <div class="lg-list"></div>
  <div class="lg-lock"></div>
  <p class="lg-s">Zıplamak için dokun ya da boşluk tuşuna bas; havada bir kez daha zıplayabilirsin. Canavarın tepesine zıplarsan onu yenersin.</p>
  <p class="lg-s lg-best"></p>
 </div></div>
 <div class="lg-ov lg-quiz lg-hide"><div class="lg-in">
  <span class="lg-chip"></span><div class="lg-q"></div><div class="lg-qbtns"></div>
  <div class="lg-res"></div><p class="lg-exp lg-hide"></p><button class="lg-btn lg-next lg-hide">DEVAM ▶</button>
 </div></div>
 <div class="lg-ov lg-clear lg-hide"><div class="lg-in">
  <h3 class="lg-h">LEVEL<br>COMPLETE!</h3><p class="lg-p lg-ctxt"></p><button class="lg-btn lg-go"></button>
 </div></div>
 <div class="lg-ov lg-end lg-hide"><div class="lg-in">
  <h3 class="lg-h lg-et"></h3><p class="lg-p lg-etxt"></p>
  <div class="lg-tabs"><button class="lg-btn lg-again">↻ Tekrar</button><button class="lg-btn lg-ghost lg-tomenu">Macera seç</button></div>
  <a class="lg-link" href="${KAYNAK}">Konuyu pekiştir: ücretsiz çalışma kâğıtları →</a>
 </div></div>
 <div class="lg-toast"></div><div class="lg-hint"></div>
</div>`;
const Q=s=>ROOT.querySelector(s);
const stage=Q(".lg-stage"),cv=Q("canvas"),cx=cv.getContext("2d");
const ovM=Q(".lg-menu"),ovQ=Q(".lg-quiz"),ovC=Q(".lg-clear"),ovE=Q(".lg-end"),hud=Q(".lg-hud");

/* net piksel rakamlar */
const DIG={"0":[".###.","#...#","#..##","#.#.#","##..#","#...#",".###."],"1":["..#..",".##..","..#..","..#..","..#..","..#..",".###."],"2":[".###.","#...#","....#","...#.","..#..",".#...","#####"],"3":["####.","....#","....#",".###.","....#","....#","####."],"4":["...#.","..##.",".#.#.","#..#.","#####","...#.","...#."],"5":["#####","#....","####.","....#","....#","#...#",".###."],"6":["..##.",".#...","#....","####.","#...#","#...#",".###."],"7":["#####","....#","...#.","..#..",".#...",".#...",".#..."],"8":[".###.","#...#","#...#",".###.","#...#","#...#",".###."],"9":[".###.","#...#","#...#",".####","....#","...#.",".##.."]};
function px(el,t){el.setAttribute("aria-label",t);el.innerHTML=[...t].map(c=>DIG[c]?`<svg viewBox="0 0 5 7" aria-hidden="true">${DIG[c].map((r,y)=>[...r].map((ch,x)=>ch=="#"?`<rect x="${x}" y="${y}" width="1.03" height="1.03"/>`:"").join("")).join("")}</svg>`:c.replace(/&/g,"&amp;").replace(/</g,"&lt;")).join("")}

/* ================= PİKSEL ÇİZİM ================= */
const PAL={K:"#1a1530",W:"#ffffff",G:"#cfcbe8",H:"#ffffff",Y:"#ffd23f",y:"#d99b00",O:"#ff9f43",R:"#ff4d6d",P:"#ff9fc4",
 A:"#ffb020",E:"#3fa9ff",k:"#1a1530",D:"#8f89ad",d:"#5d577f",N:"#8a5a3b",n:"#c98a4f",B:"#4cc9f0",b:"#2a6fdb",M:"#3ee6b0",m:"#1f9e6e",
 w:"#eeeaf6",g:"#b9b3cc",s:"#f2c39b",S:"#d99e74",c:"#6b4226",C:"#4a2c17"};
/* Luna: beyaz kedi, sol göz kehribar (A), sağ göz mavi (E) */
const LUNA=["..K..........K..",".KWK........KWK.",".KWPK......KPWK.",".KWWWKKKKKKWWWK.","KWWWWWWWWWWWWWWK","KWWWWWWWWWWWWWWK","KWWAAWWWWWWEEWWK","KWWAkWWWWWWEkWWK","KWWWWWWPPWWWWWWK","KGWWWWWKKWWWWWGK",".KGWWWKWWKWWWGK.","..KGGWWWWWWGGK..","..KKKKKKKKKKKK..",".KWWWK....KWWWK.",".KWGWK....KWGWK.","..KKK......KKK.."];
const LUNA_RUN=LUNA.slice(0,13).concat(["..KWWWK..KWWWK..","..KWGWK..KWGWK..","...KKK....KKK..."]);
const LUNA_BLINK=LUNA.map((r,i)=>i==6?"KWWWWWWWWWWWWWWK":i==7?"KWWKKWWWWWWKKWWK":r);
const EN={
 meteor:[["...KKKKK....","..KDDGDDKK..",".KDGGDDGDdK.","KDGDdDDDGDdK","KDDDDDGDDDdK","KGDdDDDdDDdK","KDDDDDDDDddK",".KdDDdDDddK.","..KKddddKK..","....KKKK...."]],
 ruf:[[".KKKKKKKKKK.","KNnNnNnNnNnK","KnNnNnNnNnNK","KNWWKnNWWKnK","KnWKKNnWKKNK","KNnNnNnNnNnK","KnNKKKKKKnNK","KNnNnNnNnNnK",".KKKKKKKKKK.",".KK......KK."],
      [".KKKKKKKKKK.","KNnNnNnNnNnK","KnNnNnNnNnNK","KNWWKnNWWKnK","KnWKKNnWKKNK","KNnNnNnNnNnK","KnNKKKKKKnNK","KNnNnNnNnNnK",".KKKKKKKKKK.","..KK....KK.."]],
 junk:[["....KK......","...KBBK.....","..KBbBK.KK..",".KKKKKKKDDK.","KDDGDDDDGDK.","KDGGDDKDDDK.","KDDDDDDDDdK.",".KKdDDDKKK..","...KdK.KBBK.","....K..KbbK."]],
 cloud:[["...KKKK.....","..KDDDDKKK..",".KDDDDDDDDK.","KDDWKDDWKDDK","KDDKKDDKKDDK","KDdddddddDDK",".KKKKKKKKKK.","....KYK.....","...KYK......","...KK......."]],
 germ:[["..m..m..m..",".mMm.mMm.m.","..MMMMMMMm.",".MMWKMMWKMm","mMMMMMMMMMm",".MMMKKKKMM.","..MMMMMMMm.",".m.mMMm.m..","...m..m...."],
       [".m..m..m...","..mMm.mMm.m","..MMMMMMMm.",".MMWKMMWKMm","mMMMMMMMMMm",".MMMKKKKMM.","..MMMMMMMm.","..m.mMMm.m.","..m..m....."]]};
const STAR=["...KK...","..KYYK..","KKKYYKKK","KYYHYYYK",".KYYYYK.",".KYYYYK.","KYYKKYYK","KK....KK"];
/* bölüm sonu canavarı: Isaac Newton (bukleli peruk, kahverengi ceket, beyaz kravat) */
const NEWTON=["....KKKKKKKKKK....","...KwwwwwwwwwwK...","..KwwgwwwwwwgwwK..",".KwwwwKKKKKKwwwwK.",".KwgwKssssssKwgwK.",".KwwwKsKssKsKwwwK.",".KwgwKssSSssKwgwK.",".KwwwKsKKKKsKwwwK.",".KwgwKKssssKKwgwK.",".KwwwwKKKKKKwwwwK.",".KwgwwwKWWKwwwgwK.","..KKwwKWWWWKwwKK..","...KccKWWWWKccK...","..KccccKWWKccccK..",".KccccccKKccccccK.",".KcCccccYYccccCcK.","KsKcCccccccccCKsK.",".KKcCccccccccCcKK.","..KcccccYYcccccK..","..KKKKKKKKKKKKKK..","...KWWK....KWWK...","..KKKKK....KKKKK.."];
const NEWTON_HAPPY=NEWTON.map((r,i)=>i==7?".KwwwKKssssKKwwwK.":i==8?".KwgwKsKKKKsKwgwK.":r);

const H=240;let W=384,GY=H-30,grad=null;
function fit(){const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return;W=Math.max(240,Math.round(H*w/h));cv.width=W;cv.height=H;cx.imageSmoothingEnabled=false;grad=null}
fit();addEventListener("resize",fit);
function spr(rows,x,y,sc){rows.forEach((r,j)=>{for(let i=0;i<r.length;i++){const c=PAL[r[i]];if(c){cx.fillStyle=c;cx.fillRect(Math.round(x+i*sc),Math.round(y+j*sc),sc,sc)}}})}
function circ(x0,y0,r,col,s){cx.fillStyle=col;for(let y=-r;y<=r;y+=s)for(let x=-r;x<=r;x+=s)if(x*x+y*y<=r*r)cx.fillRect(Math.round(x0+x),Math.round(y0+y),s,s)}
function phase(x0,y0,r,ph,s){for(let y=-r;y<=r;y+=s)for(let x=-r;x<=r;x+=s){if(x*x+y*y>r*r)continue;const lit=ph==3||(ph==2&&x>=0)||(ph==1&&x>r*.45);cx.fillStyle=lit?"#fff3c4":"#3b3566";cx.fillRect(Math.round(x0+x),Math.round(y0+y),s,s)}}
function txt(t,x,y,size,col,al){cx.font=`bold ${size}px 'Pixelify Sans',monospace`;cx.fillStyle=col;cx.textAlign=al||"left";cx.fillText(t,x,y);cx.textAlign="left"}

/* ================= SES: yumuşak üçgen/sinüs dalga, sert kare dalga yok ================= */
let AC=null,muted=false;
function tone(f,d,type="triangle",v=.07,to=null,delay=0){if(muted)return;try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();if(AC.state==="suspended")AC.resume();
 const t=AC.currentTime+delay,o=AC.createOscillator(),g=AC.createGain();o.type=type;o.frequency.setValueAtTime(f,t);
 if(to)o.frequency.exponentialRampToValueAtTime(to,t+d);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.015);
 g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g).connect(AC.destination);o.start(t);o.stop(t+d+.05)}catch(e){}}
const SFX={jump:()=>tone(420,.16,"sine",.06,760),coin:()=>{tone(988,.09,"triangle",.06);tone(1319,.18,"triangle",.06,null,.08)},
 ok:()=>[523,659,784,1047].forEach((f,i)=>tone(f,.25,"triangle",.07,null,i*.09)),no:()=>{tone(330,.22,"sine",.07);tone(262,.3,"sine",.07,null,.18)},
 hit:()=>tone(300,.25,"sine",.08,140),stomp:()=>{tone(520,.08,"triangle",.07,260);tone(880,.12,"sine",.05,null,.07)},
 fan:()=>[523,659,784,1047,784,1047,1319].forEach((f,i)=>tone(f,.28,"triangle",.065,null,i*.11)),
 boss:()=>[392,330,262,196].forEach((f,i)=>tone(f,.35,"triangle",.07,null,i*.2)),
 end:()=>[523,440,349,262].forEach((f,i)=>tone(f,.3,"sine",.07,null,i*.16))};
Q(".lg-mute").onclick=e=>{e.stopPropagation();muted=!muted;Q(".lg-mute").textContent=muted?"🔇":"🔊"};
function track(n){try{if(window.track)window.track(n);else if(window.goatcounter&&window.goatcounter.count)window.goatcounter.count({path:n,title:n,event:true})}catch(e){}}

/* ================= DURUM ================= */
let state="idle",grade=5,seq=[],idx=0,cfg=null,correct=0,target=5,score=0,lives=3,t=0,inv=0,spawnT=60,qT=300,shake=0,flagOut=false,spd=2.2,base=2.2,surf="",boss=null,asked=new Set(),lastMode="full";
try{grade=+localStorage.getItem("8bitfen_grade")||5;if(!GRADES[grade])grade=5}catch(e){}
const L={x:52,y:0,vy:0,w:32,h:32,jumps:0,onG:true};
let ents=[],parts=[],stars=[],icons=[],segs=[];
for(let i=0;i<55;i++)stars.push({x:Math.random()*700,y:Math.random()*(H-60),z:Math.random()<.3?.6:.25,tw:Math.random()*6});
const key=u=>grade+"-"+u.u;
function bestKey(){return "8bitfen_best_g"+grade}
function getBest(){try{return +localStorage.getItem(bestKey())||0}catch(e){return 0}}
function setHud(){px(Q(".lg-scn"),String(score).padStart(6,"0"));
 Q(".lg-ht").textContent="♥".repeat(Math.max(0,lives))+"♡".repeat(3-Math.max(0,lives));
 Q(".lg-wn").textContent=grade+". SINIF · "+(cfg?cfg.world:"");
 px(Q(".lg-pg"),boss?"NEWTON "+boss.hp+"/"+boss.max:"? "+correct+"/"+target)}
function say(m,col){const e=Q(".lg-toast");e.textContent=m;e.style.color=col||"#ffd23f";e.classList.remove("on");void e.offsetWidth;e.classList.add("on")}
function hint(m,col){const e=Q(".lg-hint");e.textContent=m;e.style.color=col||"#fff";e.classList.remove("on");void e.offsetWidth;e.classList.add("on")}
function hideAll(){[ovM,ovQ,ovC,ovE].forEach(o=>o.classList.add("lg-hide"))}

/* ================= MENÜ ================= */
function menu(){state="idle";hideAll();hud.classList.add("lg-hide");boss=null;ents=[];parts=[];
 const G=GRADES[grade];cfg=G.units.find(u=>u.open)||G.units[0];setupTheme();
 Q(".lg-menu .lg-tabs").innerHTML=Object.keys(GRADES).map(g=>`<button class="lg-tab${+g===grade?" on":""}" data-g="${g}" style="--c:${GRADES[g].c}">${g}. SINIF</button>`).join("");
 const open=G.units.filter(u=>u.open);
 let h="";
 if(open.length>1)h+=`<button class="lg-unit lg-full" data-m="full" style="--c:${G.c}"><b>TAM MACERA</b><span>${open.map(u=>u.kisa).join(" + ")} + Newton</span></button>`;
 open.forEach(u=>h+=`<button class="lg-unit" data-m="${u.u}" style="--c:${u.chip}"><b>${u.u}. ÜNİTE</b><span>${u.ad}</span></button>`);
 Q(".lg-list").innerHTML=h;
 const locked=G.units.filter(u=>!u.open);
 Q(".lg-lock").innerHTML=locked.length?`<span style="border:0">🔒 Yakında:</span>`+locked.map(u=>`<span>${u.u}. ${u.ad}</span>`).join(""):"";
 const b=getBest();Q(".lg-best").textContent=b?grade+". sınıf en yüksek puanın: "+b:"";
 Q(".lg-menu .lg-tabs").querySelectorAll("button").forEach(x=>x.onclick=e=>{e.stopPropagation();grade=+x.dataset.g;try{localStorage.setItem("8bitfen_grade",grade)}catch(_){}tone(660,.08,"triangle",.05);menu()});
 Q(".lg-list").querySelectorAll("button").forEach(x=>x.onclick=e=>{e.stopPropagation();start(x.dataset.m)});
 ovM.classList.remove("lg-hide")}

function start(m){lastMode=m;const open=GRADES[grade].units.filter(u=>u.open);
 seq=m==="full"?open:open.filter(u=>String(u.u)===String(m));
 target=seq.length>1?5:7;score=0;lives=3;asked=new Set();track("oyun/"+grade+"-"+m);try{window.dispatchEvent(new CustomEvent("lunagame-start"))}catch(e){}startWorld(0);tone(0,0)}
function startWorld(i){idx=i;cfg=seq[i];correct=0;flagOut=false;boss=null;t=0;inv=60;spawnT=70;qT=240;ents=[];parts=[];
 L.y=GY-L.h;L.vy=0;L.jumps=0;L.onG=true;base=2.2;spd=2.2;setupTheme();
 state="run";hideAll();hud.classList.remove("lg-hide");setHud();say(cfg.world+" DÜNYASI",cfg.chip)}
function setupTheme(){grad=null;icons=[];for(let i=0;i<14;i++)icons.push({x:Math.random()*W,y:24+Math.random()*(GY-80),z:Math.random()<.4?1:.55,k:i%4,a:Math.random()*6});
 segs=[];surf="";if(cfg&&(cfg.theme==="force"||cfg.theme==="weather")){const ty=cfg.theme==="force"?"tahta":"yaz";segs=[{x:0,len:W+200,type:ty}];surf=ty}}

/* ================= KONTROL ================= */
function jump(){if(state!=="run")return;if(L.onG){L.vy=-8.6;L.jumps=1;L.onG=false;SFX.jump()}else if(L.jumps<2){L.vy=-7.4;L.jumps=2;SFX.jump()}}
stage.addEventListener("pointerdown",e=>{if(e.target.closest("button,a"))return;jump()});
let inView=true;try{new IntersectionObserver(es=>{inView=es[0].isIntersecting},{threshold:.3}).observe(stage)}catch(e){}
addEventListener("keydown",e=>{if(!inView||/INPUT|TEXTAREA|SELECT/.test((document.activeElement||{}).tagName||""))return;
 if((e.code==="Space"||e.code==="ArrowUp"||e.code==="KeyW")&&state==="run"){e.preventDefault();jump();return}
 if(state==="quiz"){const nx=Q(".lg-next");
  if((e.code==="Enter"||e.code==="Space")&&!nx.classList.contains("lg-hide")){e.preventDefault();nx.click();return}
  const n={Digit1:0,Digit2:1,Digit3:2,KeyA:0,KeyB:1,KeyC:2,Numpad1:0,Numpad2:1,Numpad3:2}[e.code];
  if(n!=null){const b=Q(".lg-qbtns").children[n];if(b&&!b.disabled){e.preventDefault();b.click()}}}});

/* ================= SORU ================= */
function pickQ(k){const bank=QB[k];let av=bank.map((_,i)=>i).filter(i=>!asked.has(k+"#"+i));
 if(!av.length){[...asked].forEach(x=>{if(x.startsWith(k+"#"))asked.delete(x)});av=bank.map((_,i)=>i)}
 const i=av[Math.floor(Math.random()*av.length)];asked.add(k+"#"+i);return bank[i]}
let qBoss=false;
function quiz(isBoss){state="quiz";qBoss=!!isBoss;let item;const chip=Q(".lg-chip");
 if(qBoss){const u=seq[Math.floor(Math.random()*seq.length)];
  if(!boss.asked){boss.asked=1;item=NEWTON_Q[key(seq[seq.length-1])]||pickQ(key(u))}else item=pickQ(key(u));
  chip.textContent="BÖLÜM SONU · NEWTON'UN SORUSU";chip.style.background="#ff5fa2"}
 else{item=pickQ(key(cfg));chip.textContent=grade+". SINIF · "+cfg.u+". ÜNİTE";chip.style.background=cfg.chip}
 const [q,ok,w1,w2,exp]=item;
 Q(".lg-q").textContent=q;Q(".lg-res").textContent="";Q(".lg-exp").classList.add("lg-hide");Q(".lg-next").classList.add("lg-hide");
 const box=Q(".lg-qbtns");box.innerHTML="";
 [ok,w1,w2].sort(()=>Math.random()-.5).forEach((o,i)=>{const b=document.createElement("button");b.className="lg-qb";b.textContent="ABC"[i]+") "+o;
  b.onclick=ev=>{ev.stopPropagation();box.querySelectorAll("button").forEach(x=>{x.disabled=true;if(x.textContent.slice(3)===ok)x.classList.add("ok")});
   const r=Q(".lg-res");
   if(o===ok){SFX.ok();r.style.color="#3ee6b0";
    if(qBoss){boss.hp--;boss.hitT=50;score+=300;r.textContent=boss.hp>0?"DOĞRU! Newton'a 1 vuruş! +300":"DOĞRU! NEWTON'U YENDİN! +300"}
    else{score+=100;correct++;r.textContent="DOĞRU! +100"}}
   else{b.classList.add("no");r.style.color="#ff9fc4";
    if(qBoss){lives--;SFX.hit();r.textContent=lives>0?"Yanlış! Newton bir canını aldı.":"Yanlış! Canın kalmadı."}
    else{SFX.no();r.textContent="Bu sefer olmadı!"}}
   const ex=Q(".lg-exp");ex.textContent=exp;ex.classList.remove("lg-hide");Q(".lg-next").classList.remove("lg-hide");setHud()};
  box.appendChild(b)});
 ovQ.classList.remove("lg-hide");ovQ.scrollTop=0}
Q(".lg-next").onclick=e=>{e.stopPropagation();ovQ.classList.add("lg-hide");
 if(lives<=0){over();return}
 state="run";inv=Math.max(inv,45);
 if(boss&&boss.hp<=0&&!boss.dead){boss.dead=1;SFX.fan();say("NEWTON YENİLDİ!","#3ee6b0");ents=ents.filter(x=>x.k!=="ap");return}
 if(correct>=target&&!flagOut)hint(idx<seq.length-1?"Bayrağa koş!":"Dikkat! Bir şey geliyor...","#ffd23f")};

function clearWorld(){state="clear";SFX.fan();score+=200;setHud();const nx=seq[idx+1];
 Q(".lg-ctxt").innerHTML=cfg.kisa+" Dünyası tamam! Bonus <b>+200</b>";
 Q(".lg-go").textContent="▶ "+(idx+2)+". DÜNYA: "+nx.world;ovC.classList.remove("lg-hide")}
Q(".lg-go").onclick=e=>{e.stopPropagation();startWorld(idx+1)};
function saveBest(){const b=getBest();if(score>b){try{localStorage.setItem(bestKey(),score)}catch(e){}}return Math.max(b,score)}
function win(){state="end";const b=saveBest();Q(".lg-et").textContent="TEBRİKLER!";hud.classList.add("lg-hide");
 Q(".lg-etxt").innerHTML=(seq.length>1?"Bütün dünyaları bitirdin ve Newton'u yendin!":"Dünyayı bitirdin ve Newton'u yendin!")+"<br>Puanın: <b>"+score+"</b> · En yüksek: <b>"+b+"</b>";ovE.classList.remove("lg-hide");track("oyun-kazandi/"+grade)}
function over(){state="end";SFX.end();const b=saveBest();Q(".lg-et").textContent="OYUN BİTTİ";hud.classList.add("lg-hide");
 Q(".lg-etxt").innerHTML="Puanın: <b>"+score+"</b><br>En yüksek: <b>"+b+"</b>";ovE.classList.remove("lg-hide")}
Q(".lg-again").onclick=e=>{e.stopPropagation();start(lastMode)};
Q(".lg-tomenu").onclick=e=>{e.stopPropagation();menu()};

/* ================= BOSS ================= */
function startBoss(){boss={x:W+40,tx:W-82,y:GY-66,hp:4,max:4,throwT:170,qT:260,hitT:0,talk:260,dead:0,arm:0};SFX.boss();say("BÖLÜM SONU CANAVARI!","#ff5fa2");setHud()}
function throwApple(){boss.arm=18;ents.push({k:"ap",x:boss.x-4,y:boss.y+22,vx:-(2.4+Math.random()*1.6),vy:-(2.5+Math.random()*3),w:14,h:14,b:0});tone(600,.12,"sine",.05,300)}

/* ================= OYUN DÖNGÜSÜ ================= */
const SURF={tahta:{m:1,top:"#c47a3a",top2:"#b06a2e",low:"#6e3d1c",lbl:"TAHTA"},buz:{m:1.35,top:"#d6f3ff",top2:"#b5e4fb",low:"#5aa6cf",lbl:"BUZ"},kum:{m:.72,top:"#f0c674",top2:"#e2b55e",low:"#a8793a",lbl:"KUM"},
 yaz:{m:1,top:"#5fcf5f",top2:"#4cb84c",low:"#6e4a2a",lbl:"YAZ"},kis:{m:1,top:"#f2f8ff",top2:"#dbe9f5",low:"#8aa3ba",lbl:"KIŞ"},sonbahar:{m:1,top:"#e0892f",top2:"#c9732a",low:"#6e4a2a",lbl:"SONBAHAR"},ilkbahar:{m:1,top:"#8fe07a",top2:"#7ccc68",low:"#6e4a2a",lbl:"İLKBAHAR"}};
const ENSZ=()=>{const r=EN[cfg.enemy][0];return {w:r[0].length*2,h:r.length*2}};
function spawn(){const r=Math.random(),z=ENSZ();
 if(r<.42)ents.push({k:"en",x:W+10,y:GY-z.h,w:z.w,h:z.h,ph:Math.random()*6,l:letter()});
 else if(r<.72){const hy=Math.random()<.5?GY-26:GY-72,n=3+Math.floor(Math.random()*3);for(let i=0;i<n;i++)ents.push({k:"c",x:W+10+i*22,y:hy,w:16,h:16,l:letter()})}
 else{const n=3+Math.floor(Math.random()*3),py=GY-62;ents.push({k:"p",x:W+10,y:py,w:n*16,h:10});
  for(let i=0;i<n;i++)ents.push({k:"c",x:W+14+i*16,y:py-20,w:16,h:16,l:letter()});
  if(Math.random()<.45)ents.push({k:"en",x:W+10+n*8,y:GY-z.h,w:z.w,h:z.h,ph:0})}
 spawnT=Math.max(48,100-base*9)+Math.random()*55}
function letter(){const c=cfg.coin;return c.length>1&&c!=="star"&&c!=="sun"?c[Math.floor(Math.random()*c.length)]:c}

function update(){t++;
 base=Math.min(4.2,2.2+correct*.22+t/6000);let m=1;
 if(segs.length){segs.forEach(s=>s.x-=spd);segs=segs.filter(s=>s.x+s.len>-20);
  const kinds=cfg.theme==="force"?["tahta","buz","kum"]:["yaz","sonbahar","kis","ilkbahar"];
  let last=segs[segs.length-1];
  while(last.x+last.len<W+60){let nt;
   if(cfg.theme==="force"){const others=kinds.filter(x=>x!==last.type);nt=Math.random()<.5&&last.type!=="tahta"?"tahta":others[Math.floor(Math.random()*others.length)]}
   else nt=kinds[(kinds.indexOf(last.type)+1)%4];
   segs.push({x:last.x+last.len,len:220+Math.random()*220,type:nt});last=segs[segs.length-1]}
  const cur=segs.find(s=>L.x+16>=s.x&&L.x+16<s.x+s.len);
  if(cur&&cur.type!==surf){surf=cur.type;
   if(surf==="buz")hint("BUZ: sürtünme az, kayıyorsun!","#bfe8ff");else if(surf==="kum")hint("KUM: sürtünme çok, yavaşladın!","#ffd98a")}
  m=SURF[surf]?SURF[surf].m:1}
 spd+=(base*m-spd)*.06;
 const prevBottom=L.y+L.h;L.vy+=.42;L.y+=L.vy;L.onG=false;
 if(L.y>GY-L.h){L.y=GY-L.h;L.vy=0;L.jumps=0;L.onG=true}
 if(inv>0)inv--;
 if(!flagOut){if(--spawnT<=0)spawn();
  if(--qT<=0){ents.push({k:"q",x:W+10,y:GY-104,w:22,h:22,used:false});qT=430+Math.random()*260;spawnT=Math.max(spawnT,75)}
  if(correct>=target){flagOut=true;if(idx<seq.length-1)ents.push({k:"flag",x:W+90,y:GY-130,w:10,h:130});else startBoss()}}
 if(boss){if(boss.x>boss.tx)boss.x-=1.3;
  else if(!boss.dead){if(--boss.throwT<=0){throwApple();boss.throwT=Math.max(62,135-(boss.max-boss.hp)*20)+Math.random()*45}
   if(--boss.qT<=0){ents.push({k:"q",x:W+10,y:GY-104,w:22,h:22,used:false,boss:true});boss.qT=330+Math.random()*120}}
  if(boss.hitT>0)boss.hitT--;if(boss.talk>0&&boss.x<=boss.tx)boss.talk--;if(boss.arm>0)boss.arm--;
  if(boss.dead&&++boss.dead>200){win();return}}
 const lb={x:L.x+6,y:L.y+4,w:L.w-12,h:L.h-6};
 for(const e of ents){
  if(e.k==="ap"){e.x+=e.vx-spd*.35;e.vy+=.26;e.y+=e.vy;if(e.y+e.h>GY){e.y=GY-e.h;if(e.b<2){e.vy=-Math.abs(e.vy)*.45;e.b++}else e.vy=0}}
  else e.x-=spd;
  if(e.k==="p"&&L.vy>=0&&prevBottom<=e.y+1&&L.y+L.h>=e.y&&L.x+24>e.x&&L.x+8<e.x+e.w){L.y=e.y-L.h;L.vy=0;L.jumps=0;L.onG=true}
  if(e.k==="c"&&!e.got&&hitBox(lb,e)){e.got=true;score+=10;SFX.coin();burst(e.x+8,e.y+8,"#ffd23f");setHud()}
  if((e.k==="en"||e.k==="ap")&&!e.dead&&hitBox(lb,e)){
   if(L.vy>0&&prevBottom<=e.y+8){e.dead=true;L.vy=-6.2;L.jumps=1;score+=50;SFX.stomp();burst(e.x+10,e.y+8,e.k==="ap"?"#ff4d6d":"#cfcbe8",12);setHud()}
   else if(inv===0){e.dead=true;lives--;inv=80;shake=10;SFX.hit();burst(e.x+10,e.y+8,"#ff5fa2",10);setHud();if(lives<=0){over();return}}}
  if(e.k==="q"&&!e.used&&hitBox(lb,e)){e.used=true;e.bump=8;if(L.vy<0)L.vy=1.5;burst(e.x+11,e.y+11,"#ffd23f");quiz(e.boss);return}
  if(e.k==="flag"&&L.x+20>=e.x){clearWorld();return}
  if(e.bump)e.bump--}
 ents=ents.filter(e=>e.x>-120&&!(e.k==="c"&&e.got)&&!((e.k==="en"||e.k==="ap")&&e.dead));
 if(cfg.enemy==="meteor"&&t%3===0)ents.forEach(e=>{if(e.k==="en")parts.push({x:e.x+e.w,y:e.y+4+Math.random()*12,vx:1+Math.random(),vy:-.2,l:16,c:Math.random()<.5?"#ff9f43":"#ffd23f"})});
 if(surf==="buz"&&L.onG&&t%4===0)parts.push({x:L.x+4,y:GY-2,vx:-1,vy:-.6,l:14,c:"#ffffff"});
 if(surf==="kum"&&L.onG&&t%4===0)parts.push({x:L.x+4,y:GY-2,vx:-1,vy:-1,l:16,c:"#e2b55e"});
 if(surf==="kis"&&t%6===0)parts.push({x:Math.random()*W,y:-4,vx:-.6,vy:.6,l:200,c:"#ffffff"});
 parts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.l<100)p.vy+=.12;p.l--});parts=parts.filter(p=>p.l>0&&p.y<GY+4);
}
function hitBox(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y}
function burst(x,y,c,n=8){for(let i=0;i<n;i++)parts.push({x,y,vx:(Math.random()-.5)*3,vy:-Math.random()*3,l:28,c})}

/* ================= ÇİZİM ================= */
function drawIcon(ic,y){const s=ic.z>.9?1:.65,x=ic.x,th=cfg.theme;cx.globalAlpha=ic.z>.9?.26:.16;
 if(th==="space"){
  if(cfg.icons==="phase")phase(x,y,ic.z>.9?8:5,ic.k,ic.z>.9?2:1);
  else if(cfg.icons==="planet"){const cols=["#ff7a4d","#e0b07a","#5b8cff","#e8d27a"];circ(x,y,(ic.k===1?9:6)*s,cols[ic.k],2);if(ic.k===3){cx.fillStyle="#e8d27a";cx.fillRect(x-12*s,y,24*s,2)}}
  else{if(ic.k%2){cx.fillStyle="#e6e2ff";cx.fillRect(x,y,6*s,14*s);cx.fillStyle="#ff4d6d";cx.fillRect(x-2*s,y+10*s,10*s,4*s);cx.fillRect(x+1*s,y-3*s,4*s,3*s)}
   else{cx.fillStyle="#4cc9f0";cx.fillRect(x-10*s,y+2*s,7*s,5*s);cx.fillRect(x+7*s,y+2*s,7*s,5*s);cx.fillStyle="#e6e2ff";cx.fillRect(x-3*s,y,10*s,9*s)}}}
 else if(th==="force"){cx.fillStyle="#ffe2b0";cx.strokeStyle="#ffe2b0";cx.lineWidth=2;
  if(ic.k===0){cx.fillRect(x,y,22*s,3);cx.beginPath();cx.moveTo(x+22*s,y-5);cx.lineTo(x+30*s,y+1.5);cx.lineTo(x+22*s,y+8);cx.fill()}
  else if(ic.k===1){cx.beginPath();cx.moveTo(x,y);for(let i=1;i<=7;i++)cx.lineTo(x+(i%2?8:0)*s,y+i*4*s);cx.stroke()}
  else if(ic.k===2)txt(cfg.coin,x,y,Math.round(20*s),"#ffe2b0");
  else{cx.fillRect(x,y+4*s,18*s,12*s);cx.fillRect(x+6*s,y,6*s,4*s)}}
 else if(th==="weather"){
  if(ic.k===0){cx.fillStyle="#ffffff";cx.fillRect(x-6*s,y,12*s,2);cx.fillRect(x-1,y-6*s,2,12*s);cx.fillRect(x-4*s,y-4*s,2,2);cx.fillRect(x+3*s,y+3*s,2,2);cx.fillRect(x+3*s,y-4*s,2,2);cx.fillRect(x-4*s,y+3*s,2,2)}
  else if(ic.k===1)circ(x,y,6*s,"#ffd23f",2);
  else if(ic.k===2){circ(x,y,6*s,"#e6f2ff",2);circ(x+7*s,y+2,5*s,"#e6f2ff",2);circ(x-7*s,y+2,4*s,"#e6f2ff",2)}
  else{cx.fillStyle="#ff9f43";cx.beginPath();cx.ellipse(x,y,8*s,4*s,.6,0,6.3);cx.fill()}}
 else{ // dna
  if(ic.k<2){for(let i=0;i<8;i++){const yy=y+i*4*s,a=Math.sin(i*.8+ic.a)*7*s;cx.fillStyle="#ff9fc4";cx.fillRect(x+a,yy,3,3);cx.fillStyle="#4cc9f0";cx.fillRect(x-a,yy,3,3);if(i%2){cx.fillStyle="#e6e2ff";cx.fillRect(Math.min(x+a,x-a),yy+1,Math.abs(2*a),1)}}}
  else{circ(x,y,7*s,"#ff9fc4",2);circ(x+1,y,3*s,"#b388ff",2)}}
 cx.globalAlpha=1}
function drawBg(){const th=cfg.theme,sk=SKY[th];
 if(!grad){grad=cx.createLinearGradient(0,0,0,H);grad.addColorStop(0,sk[0]);grad.addColorStop(.55,sk[1]);grad.addColorStop(1,sk[2])}
 cx.fillStyle=grad;cx.fillRect(0,0,W,H);const mv=state==="run"?spd:.3;
 if(th==="space"||th==="dna"){stars.forEach(s=>{if(state==="run"||state==="idle")s.x-=mv*s.z*.4;if(s.x<0)s.x+=W+20;const a=.45+.4*Math.sin(t/20+s.tw);
   cx.fillStyle=`rgba(255,255,255,${(s.z>.5?a:a*.6)*(th==="dna"?.5:1)})`;const z=s.z>.5?2:1;cx.fillRect(Math.round(s.x)%(W+20),Math.round(s.y),z,z)})}
 if(th==="space"){
  if(cfg.icons!=="rocket"){const sx=W*.16,sy=44;cx.globalAlpha=.16;circ(sx,sy,40,"#ffb020",4);cx.globalAlpha=.28;circ(sx,sy,32,"#ffd23f",4);cx.globalAlpha=1;
   circ(sx,sy,24,"#ffb020",3);circ(sx-2,sy-2,19,"#ffd23f",3);circ(sx-7,sy-8,6,"#fff3a0",3)}
  if(cfg.icons==="phase"){const mx=W*.8,my=46;circ(mx,my,17,"#d9d4ec",3);circ(mx+3,my+2,15,"#c3bddb",3);circ(mx-6,my-4,4,"#9f98bd",2);circ(mx+6,my+5,3,"#9f98bd",2);circ(mx+1,my-9,2,"#9f98bd",2)}
  else if(cfg.icons==="planet"){const mx=W*.8,my=48;circ(mx,my,16,"#e8c77a",3);cx.fillStyle="#c9a35a";cx.fillRect(mx-15,my-3,30,3);cx.fillRect(mx-13,my+5,26,2);
   cx.fillStyle="#f3e0a8";cx.fillRect(mx-30,my,60,3);cx.fillStyle="#1a1530";cx.fillRect(mx-30,my+3,60,1)}
  else{const mx=W*.82,my=44;circ(mx,my,20,"#2a6fdb",3);circ(mx-5,my-4,8,"#3ee6b0",3);circ(mx+8,my+6,6,"#3ee6b0",3);circ(mx+2,my-12,4,"#ffffff",2);
   cx.fillStyle="#cfcbe8";cx.fillRect(mx-46+Math.sin(t/60)*6,my-26,8,5);cx.fillStyle="#4cc9f0";cx.fillRect(mx-54+Math.sin(t/60)*6,my-25,7,3);cx.fillRect(mx-37+Math.sin(t/60)*6,my-25,7,3)}}
 else if(th==="weather"){ // eğik eksenli Dünya
  const mx=W*.82,my=48;circ(mx,my,20,"#2a6fdb",3);circ(mx-6,my-3,7,"#3ee6b0",3);circ(mx+7,my+7,5,"#3ee6b0",3);
  cx.strokeStyle="#ffd23f";cx.lineWidth=2;cx.beginPath();const a=23.5*Math.PI/180;cx.moveTo(mx-Math.sin(a)*30,my-Math.cos(a)*30);cx.lineTo(mx+Math.sin(a)*30,my+Math.cos(a)*30);cx.stroke();
  txt("23,5°",mx-46,my-24,10,"#ffd23f")}
 icons.forEach(ic=>{if(state==="run")ic.x-=mv*.18*ic.z;if(ic.x<-30){ic.x=W+30;ic.y=24+Math.random()*(GY-80)}drawIcon(ic,ic.y+Math.sin(t/40+ic.a)*3)})}
function drawGround(){const g=cfg.ground,th=cfg.theme;
 if(segs.length){segs.forEach(s=>{const S=SURF[s.type],x0=Math.round(s.x),len=Math.ceil(s.len)+1;
  cx.fillStyle=S.top;cx.fillRect(x0,GY,len,6);cx.fillStyle=S.low;cx.fillRect(x0,GY+6,len,H-GY-6);
  for(let x=0;x<len;x+=16){cx.fillStyle=S.top2;if((x/16)%2)cx.fillRect(x0+x,GY,16,6);
   if(s.type==="tahta"){cx.fillStyle="#5a3016";cx.fillRect(x0+x,GY+6,1,H-GY-6)}
   if(s.type==="buz"){cx.fillStyle="rgba(255,255,255,.6)";cx.fillRect(x0+x+3,GY+1,6,2)}
   if(s.type==="kum"){cx.fillStyle="#8a6229";cx.fillRect(x0+x+4,GY+12,2,2);cx.fillRect(x0+x+11,GY+18,2,2)}
   if(s.type==="ilkbahar"&&(x/16)%3===0){cx.fillStyle="#ff9fc4";cx.fillRect(x0+x+5,GY-3,3,3)}
   if(s.type==="sonbahar"&&(x/16)%2===0){cx.fillStyle="#ffd23f";cx.fillRect(x0+x+8,GY-2,3,2)}}
  if(s.x>-60&&s.x<W)txt(S.lbl,x0+5,GY+22,11,"rgba(0,0,0,.55)")});return}
 const off=Math.floor((t*spd)%16);
 const P=th==="dna"?["#e07ab0","#cc6aa0","#6e2a5a","#8a3a72"]:g==="mars"?["#d47a4a","#c26a3c","#6e2f1c","#5a2414"]:g==="pad"?["#9aa9c4","#8494b2","#3a4560","#2c3550"]:["#a7a2c4","#948fb5","#5d577f","#4a456a"];
 for(let x=-off;x<W;x+=16){const i=Math.floor((x+off+t*spd)/16);cx.fillStyle=i%2?P[0]:P[1];cx.fillRect(x,GY,16,6);cx.fillStyle=P[2];cx.fillRect(x,GY+6,16,H-GY-6);
  cx.fillStyle=P[3];if(g==="pad"){cx.fillRect(x,GY+6,1,H-GY-6);cx.fillRect(x+3,GY+10,2,2);cx.fillRect(x+11,GY+10,2,2)}
  else if(th==="dna"){if(i%2===0){cx.fillRect(x+4,GY+11,6,4);cx.fillStyle="#b388ff";cx.fillRect(x+6,GY+12,2,2)}}
  else if(i%3===0){cx.fillRect(x+4,GY+11,5,3);cx.fillRect(x+10,GY+19,3,2)}}}
function apple(x,y){circ(x+7,y+8,6,"#1a1530",2);circ(x+7,y+8,5,"#ff4d6d",2);circ(x+5,y+6,2,"#ffb3c1",2);cx.fillStyle="#6b4226";cx.fillRect(x+6,y,2,4);cx.fillStyle="#3ee6b0";cx.fillRect(x+8,y,4,3)}
function coin(e){const bob=Math.sin((t+e.x)/8)*2,y=e.y+bob;
 if(e.l==="star"){spr(STAR,e.x,y,2);return}
 if(e.l==="sun"){cx.fillStyle="#ffb020";for(let i=0;i<8;i++){const a=i*Math.PI/4+t/30;cx.fillRect(e.x+7+Math.cos(a)*9,y+7+Math.sin(a)*9,2,2)}circ(e.x+8,y+8,6,"#1a1530",2);circ(e.x+8,y+8,5,"#ffd23f",2);return}
 circ(e.x+8,y+8,8,"#1a1530",2);circ(e.x+8,y+8,7,"#ffd23f",2);cx.fillStyle="#d99b00";cx.fillRect(e.x+3,y+12,10,2);
 const col={A:"#ff4d6d",T:"#2a6fdb",G:"#1f9e6e",C:"#7b4fd6"}[e.l]||"#8a5a00";txt(e.l,e.x+8,y+13,12,col,"center")}
function bubble(m,x,y){cx.font="bold 11px 'Pixelify Sans',monospace";const words=m.split(" "),lines=[];let cur="";
 words.forEach(w=>{if(cx.measureText(cur+" "+w).width>150&&cur){lines.push(cur);cur=w}else cur=cur?cur+" "+w:w});lines.push(cur);
 const wd=Math.max(...lines.map(l=>cx.measureText(l).width))+14,ht=lines.length*13+10,bx=Math.max(4,x-wd),by=y-ht;
 cx.fillStyle="#000";cx.fillRect(bx-2,by-2,wd+4,ht+4);cx.fillStyle="#fff";cx.fillRect(bx,by,wd,ht);cx.fillRect(bx+wd-14,by+ht,8,6);
 cx.fillStyle="#1a1530";lines.forEach((l,i)=>cx.fillText(l,bx+7,by+15+i*13))}
function drawBoss(){if(!boss)return;const b=boss,bob=b.dead?0:Math.round(Math.sin(t/14)*1.5);
 if(!(b.hitT>0&&Math.floor(b.hitT/4)%2)){spr(b.dead?NEWTON_HAPPY:NEWTON,b.x,b.y+bob,3);if(!b.dead)apple(b.x-6,b.y+(b.arm>0?14:34)+bob)}
 if(b.hitT>30)apple(b.x+20,b.y-18+(50-b.hitT)*2.5);
 if(b.dead)for(let i=0;i<3;i++){const a=t/12+i*2.1;cx.fillStyle="#ffd23f";cx.fillRect(b.x+27+Math.cos(a)*18,b.y-6+Math.sin(a)*5,4,4)}
 if(b.x<W){const bw=64,bx=b.x-5,by=b.y-22;cx.fillStyle="#000";cx.fillRect(bx-2,by-2,bw+4,10);cx.fillStyle="#3b3566";cx.fillRect(bx,by,bw,6);
  cx.fillStyle="#ff5fa2";cx.fillRect(bx,by,bw*b.hp/b.max,6);txt("NEWTON",bx,by-4,10,"#fff")}
 if(b.talk>0&&b.x<=b.tx+2)bubble(b.talk>130?"Ben Isaac Newton! Kuvvetin birimi benim adımı taşır.":"Sorularımı bil, elmalarımdan kaç!",b.x-8,b.y-34);
 if(b.dead>20)bubble("Tebrikler! Bilim yolunda başarılar!",b.x-8,b.y-34)}
function draw(){if(!cfg)return;cx.save();if(shake>0){cx.translate((Math.random()-.5)*shake,0);shake--}
 drawBg();drawGround();
 ents.forEach(e=>{
  if(e.k==="p"){const sp=cfg.theme==="space";for(let i=0;i<e.w;i+=16){cx.fillStyle="#000";cx.fillRect(e.x+i,e.y,16,e.h);cx.fillStyle=sp?"#7b74a3":cfg.theme==="dna"?"#9a4f86":cfg.theme==="weather"?"#3f8a8a":"#b8642a";cx.fillRect(e.x+i+1,e.y+1,14,e.h-2);
   cx.fillStyle=sp?"#a49dcc":cfg.theme==="dna"?"#c97ab0":cfg.theme==="weather"?"#5fb8b0":"#e08a45";cx.fillRect(e.x+i+1,e.y+1,14,2)}}
  if(e.k==="c")coin(e);
  if(e.k==="en"){const fr=EN[cfg.enemy];spr(fr[Math.floor(t/8)%fr.length],e.x,e.y+(cfg.enemy==="meteor"&&Math.sin(t/5+e.ph)>0?1:0),2);
   if(cfg.enemy==="cloud"&&Math.floor(t/10)%4===0){cx.fillStyle="#ffd23f";cx.fillRect(e.x+8,e.y+e.h,2,4)}}
  if(e.k==="ap")apple(e.x,e.y);
  if(e.k==="q"){const y=e.y-(e.bump?4:0);cx.fillStyle="#000";cx.fillRect(e.x-1,y-1,24,24);cx.fillStyle=e.used?"#a07a3a":"#ffd23f";cx.fillRect(e.x+1,y+1,20,20);
   cx.fillStyle=e.used?"#7a5a20":"#d99b00";cx.fillRect(e.x+1,y+17,20,4);cx.fillRect(e.x+17,y+1,4,20);if(!e.used)txt("?",e.x+11,y+16,16,"#8a5a00","center")}
  if(e.k==="flag"){cx.fillStyle="#000";cx.fillRect(e.x-1,e.y-1,6,e.h+1);cx.fillStyle="#eee";cx.fillRect(e.x,e.y,4,e.h);
   circ(e.x+2,e.y-3,4,"#ffd23f",2);const wv=Math.sin(t/6)*2;cx.fillStyle="#3ee6b0";cx.beginPath();cx.moveTo(e.x+4,e.y+4);cx.lineTo(e.x+34,e.y+14+wv);cx.lineTo(e.x+4,e.y+26);cx.fill();
   cx.fillStyle="#000";cx.fillRect(e.x-8,GY-10,20,10);cx.fillStyle="#7b74a3";cx.fillRect(e.x-7,GY-9,18,8)}});
 drawBoss();
 parts.forEach(p=>{cx.fillStyle=p.c;cx.fillRect(Math.round(p.x),Math.round(p.y),p.l>100?2:3,p.l>100?2:3)});
 if(!(inv>0&&state==="run"&&Math.floor(inv/5)%2)){let fr=LUNA;if(state==="run"&&L.onG&&Math.floor(t/7)%2)fr=LUNA_RUN;if(state==="idle"&&Math.floor(Date.now()/160)%25===0)fr=LUNA_BLINK;
  spr(fr,L.x,Math.round(L.y)+(state==="idle"?Math.round(Math.sin(Date.now()/300)*2):0),2)}
 cx.restore()}

/* sabit adımlı döngü: 60 ve 120 Hz ekranlarda aynı hız */
let last=performance.now(),acc=0;
function loop(now){acc+=Math.min(100,now-last);last=now;
 if(inView){if(cv.width!==W||!stage.clientWidth)fit();while(acc>=16.67){if(state==="run")update();else if(state==="idle")t++;acc-=16.67}draw()}else acc=0;
 requestAnimationFrame(loop)}
L.y=GY-L.h;menu();requestAnimationFrame(loop);
})();
