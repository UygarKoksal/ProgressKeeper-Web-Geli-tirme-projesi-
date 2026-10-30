**Progress Keeper - Proje Tanıtım Dokümanı**
**Canlı Site (Live Demo):** [https://progresskeeper.netlify.app/]
## 1. Projenin Amacı

Bu proje, ReactJS ve Vite teknolojileri kullanılarak sporcuların ağırlık antrenmanlarını dijital ortamda düzenli olarak kayıt altına alabilmesi için geliştirilmiş bir frontend web uygulamasıdır.

## 2. Proje Senaryosu

Ağırlık antrenmanı yapan bir kullanıcı, gelişimini (progressive overload) takip etmek için haftalık rutinlerini ve günlük setlerini kaydetmek istemektedir. Bu sistem sayesinde kullanıcı:

* Haftalık antrenman şablonları oluşturabilir.
* Hangi gün hangi hareketi, kaç kilo ve kaç set yaptığını (CRUD işlemleri) sisteme girebilir.


* Pratik kullanım için geçmiş haftadaki programını tek tuşla yeni haftaya aktarabilir.
* İstatistik sayfası üzerinden bugüne kadar sisteme girmiş olduğu toplam kayıtlı set sayısını anlık olarak görebilir.

## 3. Sistem Özeti ve Teknik Özellikler

* **Frontend Mimarisi:** Vite altyapısı ile kurulan ReactJS projesidir. Sayfa geçişleri (Home ve Stats arası) için `react-router-dom` kullanılmıştır.
* **Veri Saklama:** Tüm CRUD işlemleri (Ekleme, Listeleme, Güncelleme, Silme) tarayıcının `LocalStorage` API'si üzerinden gerçekleştirilir ve veri kaybı önlenir.


* **Stil ve Tasarım:** Arayüz tamamen Tailwind CSS kullanılarak modern, karanlık mod (dark theme) odaklı ve mobil uyumlu (responsive) olarak tasarlanmıştır.


* **Bileşen Yapısı:** Proje; `Components`, `Pages`, `Interfaces` (Opsiyonel) ve `Utils` gibi modüler klasör yapılarına ayrılarak temiz kod prensiplerine uygun olarak inşa edilmiştir.



---

**Progress Keeper - Project Overview Document**

## 1. Project Purpose

This project is a frontend web application developed using ReactJS and Vite, designed to allow athletes to regularly log and digitally track their weightlifting workouts.

## 2. Project Scenario

A user performing weight training wants to log their weekly routines and daily sets to track their progressive overload. Through this system, the user can:

* Create weekly workout templates.
* Log specific exercises, weights, and sets for each day (CRUD operations).


* Copy a previous week's routine to a new week with a single click for practical use.
* View the total number of logged sets in the system in real-time via the statistics page.

## 3. System Summary and Technical Features

* **Frontend Architecture:** A ReactJS project built with Vite infrastructure. Page transitions (between Home and Stats) are handled using `react-router-dom`.
* **Data Storage:** All CRUD operations (Create, Read, Update, Delete) are performed via the browser's `LocalStorage` API, preventing data loss.


* **Styling and Design:** The interface is fully styled with Tailwind CSS, focusing on a modern, dark theme and responsive design.


* **Component Structure:** The project is built following clean code principles, modularized into folder structures like `Components`, `Pages`, `Interfaces` (Optional), and `Utils`.



---

