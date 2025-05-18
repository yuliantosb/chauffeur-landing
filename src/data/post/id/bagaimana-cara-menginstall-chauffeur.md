---
publishDate: 2025-05-15T00:00:00Z
title: Cara menginstall chauffeur
excerpt: Setelah mengunduh Chauffeur ada beberapa langkah yang anda harus lakukan, berikut beberapa langkah-langkah untuk menginstall dan menjalankan Chauffeur
image: ~/assets/images/banner/feature4.jpg
category: Documentation
lang: id
alternate:
  - hreflang: en
    href: how-to-install-chauffeur
tags:
  - dokumentasi
  - tips-dan-trik
  - tutorial
metadata:
  canonical: https://chauffeurpos.app/en/how-to-install-chauffuer
---

## Menyiapkan Database

Pertama-tama, kamu perlu menginstal database terlebih dahulu. Karena Chauffeur menggunakan MySQL sebagai database, kamu harus mengunduhnya terlebih dahulu, atau bisa juga menggunakan database remote dari server kamu. Disarankan menggunakan versi MySQL terbaru atau versi 9.2.0 untuk hasil terbaik. Kamu bisa mengunduh MySQL dari situs resmi `https://www.mysql.com/downloads/` dan pilih instalasi sesuai dengan platform perangkatmu.

## Membuat Database

Setelah mengunduh MySQL, kamu bisa membuat database. Di sini saya menggunakan DBeaver, sebuah alat GUI untuk mengakses MySQL. Klik koneksi yang akan kamu gunakan, perluas, klik pada "Databases", klik kanan lalu pilih "Create new Database", kemudian beri nama databasenya.

![Create Database](/images/how-to-install-chauffeur/create-db.png)

Atau kamu bisa melakukannya lewat command line, pertama masuk ke CLI MySQL dengan mengetik:

```
sudo mysql -u root
```

atau

```
mysql -u <namapenggunadbkamu> -p
```

Setelah masuk ke CLI MySQL, ketik:

```
create db <namadatabasekamu>;
```

lalu tekan Enter.

## Mengatur DB di Chauffeur

Buka Aplikasi Chauffeur POS, aplikasi akan otomatis mengarah ke halaman pengaturan database jika kamu belum mengaturnya. Isi konfigurasi database kamu.

![Config Database](/images/how-to-install-chauffeur/config-db.png)

Setelah konfigurasi terisi, klik tombol "Save", maka database kamu akan dipulihkan (restore).

## Bagaimana jika saya sudah pernah mengatur database sebelumnya?

## Mengatur Server Email

Server email digunakan untuk mengirim notifikasi, reset kata sandi, dll. Ketika kamu lupa password, OTP akan dikirim ke email kamu. Namun, kamu juga bisa melewati proses ini. Jika dilewati, kamu tidak akan bisa me-reset password.

![Config Email](/images/how-to-install-chauffeur/config-email.png)

## Mengatur Konfigurasi Umum

Kamu bisa menyesuaikan preferensi seperti warna, mata uang, pemisah ribuan, pemisah desimal, format tanggal, format waktu, dan lokasi penyimpanan file yang diunggah.

![Config General Config](/images/how-to-install-chauffeur/config-general.png)

Kamu bisa mencari folder secara manual, atau mengetikkan lokasinya.

![Browse File](/images/how-to-install-chauffeur/browse-file.png)

Setelah itu, lanjutkan dengan mengklik "Save". Kamu juga bisa melewati proses ini, dan sistem akan menggunakan konfigurasi default.
