
Test Edilen Gereksinimler

Aşağıda belirtilen gereksinimler için test kodu yazılmıştır. Test türü olarak Thunder Client ile API Testleri kullanılmıştır.

..........................................................................................................

# Murad Eyvazli Test

..........................................................................................................

1 .Register (Kayıt Ol)

2 .Login (Giriş Yap)

3 .Logout (Çıkış Yap)

4 .Get All Jobs (Tüm İşleri Getir)

5 .Get Single Job (Tek Bir İşi Getir)

6 .Edit Job (İşi Düzenle)

7 .Delete Job (İşi Sil)

8 .Show Stats (İstatistikleri Göster)

9 .Get Current User (Mevcut Kullanıcıyı Getir)

10 .Update User (Kullanıcıyı Güncelle)

11 .Get Application Stats (Uygulama İstatistiklerini Getir)


# Test Videolari
getCurrentUser,UpdateUser,GetAppStats-->https://youtu.be/jl6wRoNmul8
Create,edit,getSingleJob,Delete,showStats,GetAllJobs-->https://youtu.be/eD7n3-BsyI0
Register,Login,Logout-->https://youtu.be/KF62--s1_2Y
..........................................................................................................


# Test Türleri

..........................................................................................................

Gereksinimlerin Test Detayları

1. Register (Kayıt Ol)

Açıklama: Kullanıcı kayıt işlemi.
Test Türü: API Testi
Test Yöntemi: Postman ile /api/v1/auth/register endpointine POST isteği gönderilerek yeni kullanıcı oluşturulması test 
edilir.

2. Login (Giriş Yap)

Açıklama: Kullanıcı giriş işlemi.
Test Türü: API Testi
Test Yöntemi: Postman ile /api/v1/auth/login endpointine POST isteği gönderilerek kullanıcı giriş işlemi test edilir.

3. Logout (Çıkış Yap)

Açıklama: Kullanıcı çıkış işlemi.
Test Türü: API Testi
Test Yöntemi: Postman ile /api/v1/auth/logout endpointine GET isteği gönderilerek kullanıcı çıkış işlemi test edilir.

4. Get All Jobs (Tüm İşleri Getir)

Açıklama: Tüm işlerin listelenmesi.
Test Türü: API Testi
Test Yöntemi: Postman ile /api/v1/jobs endpointine GET isteği gönderilerek tüm işler listelenir.

5. Get Single Job (Tek Bir İşi Getir)

Açıklama: Tek bir işin detaylarının getirilmesi.
Test Türü: API Testi
Test Yöntemi: Postman ile /api/v1/jobs/:id endpointine GET isteği gönderilerek tek bir işin detayları getirilir.

6. Edit Job (İşi Düzenle)

Açıklama: Mevcut bir işin düzenlenmesi.
Test Türü: API Testi
Test Yöntemi: Postman ile /api/v1/jobs/:id endpointine PATCH isteği gönderilerek işin detayları güncellenir.

7. Delete Job (İşi Sil)

Açıklama: Mevcut bir işin silinmesi.
Test Türü: API Testi
Test Yöntemi: Postman ile /api/v1/jobs/:id endpointine DELETE isteği gönderilerek iş silinir.

8. Show Stats (İstatistikleri Göster)

Açıklama: Kullanıcının iş istatistiklerinin gösterilmesi.
Test Türü: API Testi
Test Yöntemi: Postman ile /api/v1/jobs/stats endpointine GET isteği gönderilerek istatistikler getirilir.

9. Get Current User (Mevcut Kullanıcıyı Getir)

Açıklama: Mevcut kullanıcı bilgilerinin getirilmesi.
Test Türü: API Testi
Test Yöntemi: Postman ile /api/v1/users/current-user endpointine GET isteği gönderilerek mevcut kullanıcı bilgileri getirilir.

10. Update User (Kullanıcıyı Güncelle)

Açıklama: Kullanıcı bilgilerinin güncellenmesi.
Test Türü: API Testi
Test Yöntemi: Postman ile /api/v1/users/update-user endpointine PATCH isteği gönderilerek kullanıcı bilgileri güncellenir.

11. Get Application Stats (Uygulama İstatistiklerini Getir)

Açıklama: Uygulamanın genel istatistiklerinin getirilmesi(sadece admin tarafindan).
Test Türü: API Testi
Test Yöntemi: Postman ile /api/v1/users/admin/app-stats endpointine GET isteği gönderilerek uygulama istatistikleri getirilir.