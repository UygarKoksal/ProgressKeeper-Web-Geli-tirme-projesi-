
# Progress Keeper - Fitness ve Antrenman Takip Uygulaması

Bu proje, sporcuların ağırlık antrenmanlarını ve "progressive overload" (kademeli aşırı yüklenme) gelişimlerini takip etmeleri için tasarlanmış, modern bir frontend web uygulamasıdır. Proje, Modern Javascript kütüphanelerinden **ReactJS** ve **Vite** kullanılarak geliştirilmiştir.

## Özellikler

* **Kapsamlı CRUD Operasyonları:** Antrenman programları için hafta, gün ve hareket (set/ağırlık) ekleme, listeleme, güncelleme ve silme işlemleri.


* **Kalıcı Veri Yönetimi:** Uygulamaya girilen tüm antrenman verileri tarayıcının `LocalStorage` API'si kullanılarak kaydedilir, böylece sayfa yenilendiğinde veri kaybı yaşanmaz.


* **Gelişmiş Şablonlama:** Önceki haftanın antrenman programını tek tuşla yeni haftaya kopyalama özelliği.
* **İstatistik ve Raporlama:** Kullanıcının toplam antrenman hacmini ve kayıtlı set sayısını anlık olarak hesaplayan istatistik sayfası (React Router DOM ile yönlendirme).
* **Modern Tasarım:** **Tailwind CSS** kullanılarak tamamen responsive (mobil uyumlu) ve karanlık mod (dark theme) konseptinde kullanıcı dostu bir arayüz tasarlanmıştır.



## Kurulum ve Çalıştırma Yönergesi

Bu projeyi kendi bilgisayarınızda yerel ortamda çalıştırmak için aşağıdaki adımları izleyin:

1. **Bağımlılıkları Yükleyin:** Terminalde projenin ana dizininde şu komutu çalıştırarak gerekli kütüphaneleri (React Router, Tailwind vb.) kurun:
`npm install`
2. **Projeyi Başlatın:** Vite sunucusunu ayağa kaldırmak için şu komutu çalıştırın:
`npm run dev`
3. **Uygulamayı Görüntüleyin:** Terminalde beliren `http://localhost:5173` bağlantısına tıklayarak projeyi tarayıcınızda açın.

---

# Progress Keeper - Fitness & Workout Tracker

This project is a modern frontend web application designed for athletes to track their weightlifting workouts and monitor their progressive overload development. The project is built using modern JavaScript libraries, specifically **ReactJS** and **Vite**.

## Features

* **Comprehensive CRUD Operations:** Create, read, update, and delete functions for workout weeks, days, and individual exercises (sets/weights).


* **Persistent Data Management:** All workout data is stored locally in the browser using the `LocalStorage` API, preventing data loss upon page refresh.


* **Advanced Templating:** A one-click feature to copy the previous week's workout routine to a new week.
* **Statistics & Reporting:** A dedicated stats page (using React Router DOM) that dynamically calculates the user's total workout volume and logged sets.
* **Modern UI Design:** A fully responsive and user-friendly interface designed with a dark theme concept using **Tailwind CSS**.



## Installation and Setup Guide

Follow these steps to run the project locally on your machine:

1. **Install Dependencies:** Open your terminal in the project's root directory and run the following command:
`npm install`
2. **Start the Project:** Run the following command to start the Vite development server:
`npm run dev`
3. **View the App:** Click the `http://localhost:5173` link that appears in the terminal to view the project in your browser.

---


