"use client";

import { useState } from "react";
import Link from "next/link";

type FoodData = {
  name: string;
  emoji: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  accuracy: number;
  color: string;
  barColor: string;
};

const FOODS: Record<string, FoodData> = {
  nasipadang: {
    name: "Nasi Padang",
    emoji: "🍛",
    calories: 680,
    protein: 32,
    fat: 28,
    carbs: 76,
    accuracy: 94,
    color: "bg-orange-500/10 text-orange-700 border-orange-200/50",
    barColor: "bg-orange-500",
  },
  salad: {
    name: "Salad Sayur",
    emoji: "🥗",
    calories: 180,
    protein: 6,
    fat: 8,
    carbs: 22,
    accuracy: 98,
    color: "bg-emerald-500/10 text-emerald-700 border-emerald-200/50",
    barColor: "bg-emerald-500",
  },
  gadogado: {
    name: "Gado-Gado",
    emoji: "🥜",
    calories: 318,
    protein: 12,
    fat: 14,
    carbs: 36,
    accuracy: 91,
    color: "bg-amber-500/10 text-amber-700 border-amber-200/50",
    barColor: "bg-amber-500",
  },
};

export default function LandingPage({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [selectedFood, setSelectedFood] =
    useState<keyof typeof FOODS>("nasipadang");
  const activeFood = FOODS[selectedFood];

  const authHref = isLoggedIn ? "/dashboard" : "/auth";
  const ctaLabel = isLoggedIn ? "Buka Dashboard" : "Mulai Sekarang";

  return (
    <div className="min-h-screen bg-[#f7f6f1] text-[#1c2d22] font-sans overflow-x-hidden selection:bg-[#42b26e]/20">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#f7f6f1]/80 border-b border-gray-200/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#42b26e] text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl shadow-md shadow-[#42b26e]/20">
              🍃
            </div>
            <span className="text-[#113c23] font-bold text-2xl tracking-tight">
              NutriSi
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-[#5c6e62]">
            <a href="#fitur" className="hover:text-[#113c23] transition-colors">
              Fitur
            </a>
            <a href="#demo" className="hover:text-[#113c23] transition-colors">
              Interactive Demo
            </a>
            <a
              href="#statistik"
              className="hover:text-[#113c23] transition-colors"
            >
              Statistik
            </a>
            <Link
              href="/kalkulator"
              className="hover:text-[#113c23] transition-colors"
            >
              Kalkulator Gizi
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {!isLoggedIn && (
              <Link
                href="/auth"
                className="px-5 py-2.5 rounded-xl text-[#113c23] font-bold text-[14px] hover:bg-[#113c23]/5 transition-colors"
              >
                Masuk
              </Link>
            )}
            <Link
              href={authHref}
              className="bg-[#113c23] text-white hover:bg-[#174e2d] px-6 py-2.5 rounded-xl font-bold text-[14px] shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:py-32 overflow-hidden">
        {/* Soft decorative background gradients */}
        <div className="absolute top-0 right-0 -z-10 w-[50%] aspect-square rounded-full bg-gradient-to-br from-[#42b26e]/10 to-transparent blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[40%] aspect-square rounded-full bg-gradient-to-tr from-amber-500/5 to-transparent blur-[100px] -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 bg-[#42b26e]/10 border border-[#42b26e]/20 text-[#2e7a3f] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              ✨ Asisten Nutrisi Cerdas AI
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Raih Tubuh Sehat Impianmu Bersama{" "}
              <span className="text-[#113c23] bg-gradient-to-r from-[#113c23] to-[#42b26e] bg-clip-text text-transparent">
                NutriSi
              </span>
            </h1>

            <p className="text-gray-500 font-medium text-[16px] sm:text-[18px] leading-relaxed mb-8 max-w-2xl">
              Aplikasi pelacak gizi cerdas berbasis AI. Ambil foto makanan untuk
              deteksi kalori instan, hitung kebutuhan gizi harianmu secara
              presisi, dan capai gaya hidup sehat yang seimbang tanpa ribet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/auth"
                className="bg-[#113c23] hover:bg-[#174e2d] text-white text-[15px] font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#113c23]/10 hover:shadow-[#113c23]/20 transition-all text-center hover:-translate-y-0.5 active:translate-y-0"
              >
                Mulai Gratis Sekarang
              </Link>
              <Link
                href="/kalkulator"
                className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-[15px] font-bold px-8 py-4 rounded-xl shadow-sm transition-all text-center hover:-translate-y-0.5 active:translate-y-0"
              >
                Hitung Kebutuhan Gizi ➔
              </Link>
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-gray-200/50 w-full">
              <div className="flex items-center gap-2">
                <span className="text-xl">📸</span>
                <span className="text-sm font-semibold text-gray-500">
                  Scan Foto AI
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">📊</span>
                <span className="text-sm font-semibold text-gray-500">
                  Kalkulator Akurat
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🔒</span>
                <span className="text-sm font-semibold text-gray-500">
                  Data Terenkripsi
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Image/Mockup Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] bg-[#113c23] rounded-[40px] shadow-2xl border-[8px] border-gray-900/10 overflow-hidden flex flex-col justify-between p-6 text-white group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d2d1a]/90 pointer-events-none z-10"></div>

              {/* Fake Phone Status Bar */}
              <div className="flex justify-between items-center text-xs opacity-60 font-semibold mb-6">
                <span>09:41</span>
                <div className="flex gap-1.5">
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* Fake AI Scanner Graphic */}
              <div className="relative flex-1 flex items-center justify-center border-2 border-dashed border-white/20 rounded-3xl p-4 overflow-hidden bg-[#0e311c]">
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#42b26e]"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#42b26e]"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#42b26e]"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#42b26e]"></div>

                {/* Laser animation */}
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#42b26e]/80 shadow-[0_0_12px_2px_rgba(66,178,110,0.5)] animate-pulse"></div>

                <div className="text-center z-10 flex flex-col items-center">
                  <span className="text-5xl mb-4 animate-bounce">🍛</span>
                  <div className="bg-[#42b26e] text-white text-[12px] font-bold px-3 py-1 rounded-full shadow-sm">
                    Menganalisis Makanan...
                  </div>
                </div>
              </div>

              {/* Fake Result HUD */}
              <div className="mt-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 z-20">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-sm text-[#8ca896]">
                    Hasil Deteksi AI
                  </span>
                  <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full font-bold">
                    94% Cocok
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-bold text-[16px]">Nasi Padang</h4>
                    <p className="text-xs text-white/60">
                      Estimasi 1 porsi (300g)
                    </p>
                  </div>
                  <span className="text-lg font-bold text-[#42b26e]">
                    680 Kkal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="fitur" className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-[#42b26e] uppercase tracking-widest mb-3">
              Fitur Utama
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Segala yang Kamu Butuhkan untuk Hidup Lebih Sehat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#f7f6f1] p-8 rounded-[32px] border border-gray-200/30 hover:shadow-lg transition-all group duration-300">
              <div className="bg-[#113c23] w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm text-white mb-6 group-hover:scale-110 transition-transform">
                📱
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI Food Scanner
              </h3>
              <p className="text-[#5c6e62] font-medium text-[14.5px] leading-relaxed">
                Cukup ambil foto makanan Anda. Sistem AI kami akan mengenali
                jenis makanan secara instan dan mengestimasi asupan kalori serta
                makronutrisi harian Anda secara otomatis.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#f7f6f1] p-8 rounded-[32px] border border-gray-200/30 hover:shadow-lg transition-all group duration-300">
              <div className="bg-[#113c23] w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm text-white mb-6 group-hover:scale-110 transition-transform">
                📊
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Kalkulator Gizi Personal
              </h3>
              <p className="text-[#5c6e62] font-medium text-[14.5px] leading-relaxed">
                Gunakan rumus ilmiah Mifflin-St Jeor untuk menghitung angka
                metabolisme basal (BMR) dan target kalori harian yang unik
                sesuai tinggi, berat badan, tingkat aktivitas, dan target berat
                badan Anda.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#f7f6f1] p-8 rounded-[32px] border border-gray-200/30 hover:shadow-lg transition-all group duration-300">
              <div className="bg-[#113c23] w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm text-white mb-6 group-hover:scale-110 transition-transform">
                🗒️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Log Makanan Harian
              </h3>
              <p className="text-[#5c6e62] font-medium text-[14.5px] leading-relaxed">
                Pantau progres gizi harian Anda melalui visualisasi diagram
                makro gizi (Protein, Lemak, Karbohidrat, Serat). Dapatkan
                notifikasi dan tips penyeimbang gizi secara instan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Text */}
            <div className="lg:col-span-5 text-left flex flex-col items-start">
              <h2 className="text-xs font-bold text-[#42b26e] uppercase tracking-widest mb-3">
                Demo Interaktif
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
                Coba Sensasi Deteksi Instan NutriSi
              </h3>
              <p className="text-gray-500 font-medium text-[15px] sm:text-[16px] leading-relaxed mb-8">
                Klik salah satu contoh makanan di bawah untuk melihat bagaimana
                sistem AI kami memecah komponen makronutrisi makanan tersebut
                dalam hitungan detik.
              </p>

              {/* Interactive buttons */}
              <div className="flex flex-col gap-3.5 w-full">
                {Object.keys(FOODS).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedFood(key)}
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all text-left font-bold ${
                      selectedFood === key
                        ? "bg-white border-[#113c23] text-gray-900 shadow-md translate-x-2"
                        : "bg-white/40 border-gray-200/60 text-gray-500 hover:bg-white hover:text-gray-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{FOODS[key].emoji}</span>
                      <span>{FOODS[key].name}</span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100">
                      Pilih
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Display Simulator */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-[580px] bg-white rounded-[32px] p-6 sm:p-8 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-6 relative min-h-[380px]">
                {/* Simulator Left - Visual Mockup */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="aspect-[4/3] rounded-2xl bg-gray-50 flex items-center justify-center text-6xl relative border border-gray-100 overflow-hidden shadow-inner">
                    <div className="absolute inset-0 bg-[#123e25]/5 flex items-center justify-center">
                      <span className="relative z-10 transition-transform duration-500 scale-125">
                        {activeFood.emoji}
                      </span>
                    </div>

                    {/* Bounding box simulation */}
                    <div className="absolute inset-6 border-2 border-dashed border-[#42b26e]/30 rounded-xl flex items-center justify-center">
                      <span className="absolute bottom-2 bg-[#42b26e] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {activeFood.name}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between items-center text-xs text-gray-400 font-bold mb-1">
                      <span>STATUS ANALISIS AI</span>
                      <span className="text-[#42b26e]">SELESAI</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-extrabold text-[18px] text-gray-900">
                        {activeFood.name}
                      </span>
                      <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-md font-bold border border-green-100">
                        {activeFood.accuracy}% Akurasi
                      </span>
                    </div>
                  </div>
                </div>

                {/* Simulator Right - Nutrition Breakdown */}
                <div className="flex-1 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-6">
                  <div>
                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-4">
                      Informasi Gizi Estimasi
                    </h4>

                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-6 flex justify-between items-center">
                      <span className="text-gray-500 font-semibold text-sm">
                        Kalori Total
                      </span>
                      <span className="text-2xl font-extrabold text-[#113c23]">
                        {activeFood.calories}{" "}
                        <span className="text-xs font-bold text-gray-400">
                          kkal
                        </span>
                      </span>
                    </div>

                    {/* Progress bars */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-bold text-gray-700 mb-1.5">
                          <span>Protein</span>
                          <span>{activeFood.protein} g</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${activeFood.barColor} rounded-full transition-all duration-700`}
                            style={{
                              width: `${Math.min(100, Math.round((activeFood.protein / 92) * 100))}%`,
                            }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-bold text-gray-700 mb-1.5">
                          <span>Lemak</span>
                          <span>{activeFood.fat} g</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${activeFood.barColor} rounded-full transition-all duration-700`}
                            style={{
                              width: `${Math.min(100, Math.round((activeFood.fat / 62) * 100))}%`,
                            }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-bold text-gray-700 mb-1.5">
                          <span>Karbohidrat</span>
                          <span>{activeFood.carbs} g</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${activeFood.barColor} rounded-full transition-all duration-700`}
                            style={{
                              width: `${Math.min(100, Math.round((activeFood.carbs / 231) * 100))}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/auth"
                    className="mt-6 w-full text-center bg-[#113c23] text-white hover:bg-[#174e2d] font-bold text-xs py-3 rounded-xl transition-all shadow-sm"
                  >
                    Coba dengan Makanan Anda
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="statistik"
        className="py-24 bg-[#113c23] text-white relative overflow-hidden"
      >
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[70%] aspect-square rounded-full bg-[#42b26e]/10 blur-[150px]"></div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-[#42b26e] uppercase tracking-widest mb-3">
              Statistik & Dampak
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Dipercaya Ribuan Orang untuk Membangun Pola Hidup Sehat
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 flex flex-col items-center">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 text-[#42b26e]">
                98%
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#8ca896]">
                Akurasi Pemindaian AI
              </span>
            </div>
            <div className="p-6 flex flex-col items-center border-l border-white/10">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 text-[#42b26e]">
                25K+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#8ca896]">
                Pengguna Aktif Bulanan
              </span>
            </div>
            <div className="p-6 flex flex-col items-center border-l border-white/10">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 text-[#42b26e]">
                500K+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#8ca896]">
                Makanan Terdaftar di Database
              </span>
            </div>
            <div className="p-6 flex flex-col items-center border-l border-white/10">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 text-[#42b26e]">
                4.9★
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#8ca896]">
                Rating Kepuasan Pengguna
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#f7f6f1] relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-[40px] p-8 sm:p-12 lg:p-16 shadow-xl border border-gray-100 flex flex-col items-center">
            <span className="text-3xl mb-4">🍃</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Siap Memulai Perubahan Sehat Hari Ini?
            </h3>
            <p className="text-gray-500 font-medium text-[15px] sm:text-[16px] leading-relaxed mb-8 max-w-xl">
              Bergabunglah bersama ribuan pengguna NutriSi lainnya yang telah
              berhasil mengontrol gizi dan mencapai tubuh ideal dengan asisten
              nutrisi AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/auth"
                className="bg-[#113c23] hover:bg-[#174e2d] text-white text-[15px] font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#113c23]/10 hover:shadow-[#113c23]/20 transition-all text-center"
              >
                Gabung Gratis Sekarang
              </Link>
              <Link
                href="/kalkulator"
                className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-[15px] font-bold px-8 py-4 rounded-xl shadow-sm transition-all text-center"
              >
                Kalkulasi Nutrisimu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#113c23] text-[#8ca896] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#42b26e] text-white w-9 h-9 rounded-xl flex items-center justify-center font-bold text-lg">
              🍃
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              NutriSi
            </span>
          </div>

          <p className="text-xs text-center md:text-left text-[#678471] max-w-md">
            NutriSi adalah asisten nutrisi pintar berbasis AI. Desain dibuat
            untuk keperluan edukasi dan analisis gizi sehari-hari. Bukan
            pengganti saran medis profesional.
          </p>

          <p className="text-xs text-[#678471]">
            &copy; {new Date().getFullYear()} NutriSi. Hak Cipta Dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
}
