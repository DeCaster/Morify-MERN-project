# Back End Gereksinimler ve Tasarımlar
Docker: Kullanılmadı. REST API: Kullanıldı
# Murad Eyvazli Tasarımlar:

1.Kayıt Ol (Register):

2.Kullanıcıların sisteme kayıt olabilmesi için gerekli form ve işlevsellik.

3.Giriş Yap (Login):
Kullanıcıların sisteme giriş yapabilmesi için gerekli form ve işlevsellik.

4.Çıkış Yap (Logout):
Kullanıcıların sistemden çıkış yapabilmesi için gerekli işlevsellik.

5.Yeni İş Ekle (AddJob):
Kullanıcıların yeni iş ekleyebilmesi için gerekli form ve işlevsellik.

6.İşleri Listele (AllJobs):
Kullanıcıların tüm işleri listeleyebilmesi için gerekli bileşen.

7.Tek Bir İşi Görüntüle (GetSingleJob):
Kullanıcıların tek bir işin detaylarını görüntüleyebilmesi için gerekli bileşen.

8.şi Düzenle (EditJob):
Kullanıcıların mevcut bir işi düzenleyebilmesi için gerekli form ve işlevsellik.

9.İşi Sil (DeleteJob):
Kullanıcıların mevcut bir işi silebilmesi için gerekli işlevsellik.

10.İstatistikleri Göster (ShowStats):
Kullanıcıların kendi iş istatistiklerini görüntüleyebilmesi için gerekli bileşen.

11.Mevcut Kullanıcıyı Getir(GetCurrentUser):
Kullanıcıların mevcut kullanıcı bilgilerini alabilmesi için gerekli bileşen.

12.Kullanıcıyı Güncelle (UpdateUser):
Kullanıcıların kendi bilgilerini güncelleyebilmesi için gerekli form ve işlevsellik.

13.Uygulama İstatistiklerini Getir (GetApplicationStats):
1Uygulamanın genel istatistiklerini görüntüleyebilmesi için gerekli bileşen.


Kontrolcüler (Controllers)

authController.js: Kimlik doğrulama ve kullanıcı yönetimi işlevlerini içerir.

jobController.js: İş ilanlarıyla ilgili CRUD işlemlerini içerir.

userController.js: Kullanıcı bilgileri ve kullanıcıyla ilgili işlemleri içerir.

Hatalar (Errors)

customErrors.js: Özel hata sınıflarını ve hata işleme fonksiyonlarını içerir.

Middleware
authMiddleware.js: Kimlik doğrulama ve yetkilendirme işlemleri için kullanılır.

errorHandlerMiddleware.js: Genel hata işleme middleware'i.

multerMiddleware.js: Dosya yükleme işlemleri için kullanılır.

validationMiddleware.js: Giriş verilerinin doğrulanması için kullanılır.

Modeller (Models)

JobModel.js: İş ilanları veri modelini tanımlar.

UserModel.js: Kullanıcı veri modelini tanımlar.

Routerlar (Routes)

authRouter.js: Kimlik doğrulama işlemleri için rota tanımlamaları.

jobRouter.js: İş ilanları işlemleri için rota tanımlamaları.

userRouter.js: Kullanıcı işlemleri için rota tanımlamaları.