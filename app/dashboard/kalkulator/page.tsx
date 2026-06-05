"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function KalkulatorPage() {
  const [gender, setGender] = useState<"Perempuan" | "Laki-laki">("Perempuan");
  const [age, setAge] = useState<string>("25");
  const [height, setHeight] = useState<string>("160");
  const [weight, setWeight] = useState<string>("55");
  const [activity, setActivity] = useState<string>("1.375"); // 1.375 = Ringan
  const [goal, setGoal] = useState<string>("maintain"); // maintain = Menjaga berat badan

  // Default hasil perhitungan berdasarkan screenshot
  const [calories, setCalories] = useState<number>(1850);
  const [protein, setProtein] = useState<number>(92);
  const [fat, setFat] = useState<number>(62);
  const [carbs, setCarbs] = useState<number>(231);
  const [bmi, setBmi] = useState<number>(21.5);
  const [bmiCategory, setBmiCategory] = useState<string>("Normal");

  const calculateNutrition = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const a = parseFloat(age) || 0;
    const h = parseFloat(height) || 0;
    const w = parseFloat(weight) || 0;

    if (h === 0 || w === 0 || a === 0) return;

    // 1. Hitung BMR (Mifflin-St Jeor Equation)
    let bmr = 0;
    if (gender === "Laki-laki") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    // 2. Hitung TDEE berdasarkan aktivitas
    let tdee = bmr * parseFloat(activity);

    // 3. Sesuaikan dengan tujuan
    if (goal === "lose") tdee -= 500;
    if (goal === "gain") tdee += 500;

    const finalCalories = Math.round(tdee);
    setCalories(finalCalories);

    // 4. Hitung Makronutrisi (20% Protein, 30% Lemak, 50% Karbo)
    setProtein(Math.round((finalCalories * 0.2) / 4)); // 1g protein = 4 kalori
    setFat(Math.round((finalCalories * 0.3) / 9)); // 1g lemak = 9 kalori
    setCarbs(Math.round((finalCalories * 0.5) / 4)); // 1g karbo = 4 kalori

    // 5. Hitung BMI
    const heightInMeters = h / 100;
    const calcBmi = w / (heightInMeters * heightInMeters);
    setBmi(parseFloat(calcBmi.toFixed(1)));

    // Tentukan Kategori BMI
    if (calcBmi < 18.5) setBmiCategory("Kurus");
    else if (calcBmi < 25) setBmiCategory("Normal");
    else if (calcBmi < 30) setBmiCategory("Berlebih");
    else setBmiCategory("Obesitas");
  };

  return (
    <div className="min-h-screen bg-[#f7f8f4] font-sans flex flex-col items-center pb-20">
      {/* Top Navbar */}
      <nav className="w-full bg-[#113c23] px-6 sm:px-10 py-4 flex items-center gap-10 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-[#42b26e] text-white w-9 h-9 rounded-xl flex items-center justify-center font-bold text-lg shadow-sm">
            🍃
          </div>
          <span className="text-white font-bold text-2xl tracking-tight">
            NutriSi
          </span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#8ca896] hover:bg-[#174e2d] hover:text-white transition-colors font-medium"
          >
            <span>🏠</span> Beranda
          </Link>
          <Link
            href="/dashboard/scan"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#8ca896] hover:bg-[#174e2d] hover:text-white transition-colors font-medium"
          >
            <span>📱</span> Scan Makanan
          </Link>
          <Link
            href="/dashboard/kalkulator"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#174e2d] text-white font-medium shadow-inner border border-white/5"
          >
            <span>📊</span> Kalkulator Gizi
          </Link>
          {/* <Link href="/akun" className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#8ca896] hover:bg-[#174e2d] hover:text-white transition-colors font-medium">
            <span>👤</span> Akun saya
          </Link> */}
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full max-w-[1000px] px-6 sm:px-10 py-10">
        <h1 className="text-[28px] font-bold text-gray-900 tracking-tight mb-8">
          Kalkulator gizi
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <form
            onSubmit={calculateNutrition}
            className="bg-white rounded-[24px] p-6 sm:p-8 shadow-sm border border-gray-100 h-fit"
          >
            <h3 className="font-bold text-gray-900 text-[18px] mb-6">
              Data diri
            </h3>

            {/* Gender Toggle */}
            <div className="mb-5">
              <label className="block text-[13px] font-bold text-gray-600 mb-2">
                Jenis kelamin
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setGender("Perempuan")}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold text-[14px] transition-all border ${
                    gender === "Perempuan"
                      ? "border-gray-800 text-gray-900 bg-white shadow-sm"
                      : "border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                >
                  Perempuan
                </button>
                <button
                  type="button"
                  onClick={() => setGender("Laki-laki")}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold text-[14px] transition-all border ${
                    gender === "Laki-laki"
                      ? "border-gray-800 text-gray-900 bg-white shadow-sm"
                      : "border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                >
                  Laki-laki
                </button>
              </div>
            </div>

            {/* Age & Height */}
            <div className="flex gap-4 mb-5">
              <div className="flex-1">
                <label className="block text-[13px] font-bold text-gray-600 mb-2">
                  Usia
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 font-bold focus:ring-2 focus:ring-[#42b26e]/30 focus:border-[#42b26e] outline-none transition-all"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-[13px] font-bold text-gray-600 mb-2">
                  Tinggi badan (cm)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 font-bold focus:ring-2 focus:ring-[#42b26e]/30 focus:border-[#42b26e] outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Weight */}
            <div className="mb-5">
              <label className="block text-[13px] font-bold text-gray-600 mb-2">
                Berat badan (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 font-bold focus:ring-2 focus:ring-[#42b26e]/30 focus:border-[#42b26e] outline-none transition-all"
                required
              />
            </div>

            {/* Activity Level */}
            <div className="mb-5">
              <label className="block text-[13px] font-bold text-gray-600 mb-2">
                Tingkat aktivitas
              </label>
              <div className="relative">
                <select
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 font-bold focus:ring-2 focus:ring-[#42b26e]/30 focus:border-[#42b26e] outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="1.2">Sangat Ringan (Tidak olahraga)</option>
                  <option value="1.375">Ringan (jarang olahraga)</option>
                  <option value="1.55">
                    Sedang (Olahraga 3-5 hari/minggu)
                  </option>
                  <option value="1.725">
                    Aktif (Olahraga 6-7 hari/minggu)
                  </option>
                  <option value="1.9">
                    Sangat Aktif (Fisik berat tiap hari)
                  </option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600 font-bold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Goal */}
            <div className="mb-8">
              <label className="block text-[13px] font-bold text-gray-600 mb-2">
                Tujuan
              </label>
              <div className="relative">
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 font-bold focus:ring-2 focus:ring-[#42b26e]/30 focus:border-[#42b26e] outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="lose">Menurunkan berat badan</option>
                  <option value="maintain">Menjaga berat badan</option>
                  <option value="gain">Menambah berat badan</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600 font-bold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white border border-gray-300 text-gray-900 font-bold py-3.5 px-6 rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
            >
              Hitung kebutuhan gizi saya
            </button>
          </form>

          {/* Right Column - Results */}
          <div className="bg-[#24422e] rounded-[24px] p-6 sm:p-8 shadow-sm text-white h-fit">
            <h3 className="font-bold text-[#8ca896] text-[16px] mb-8">
              Hasil perhitungan
            </h3>

            <div className="flex flex-col items-center mb-8">
              <div className="text-[64px] font-bold leading-none tracking-tight mb-2">
                {calories.toLocaleString("id-ID")}
              </div>
              <p className="text-[#8ca896] font-medium text-[15px]">
                Kebutuhan kalori harian (kkal)
              </p>
            </div>

            <div className="w-full border-t border-white/10 mb-8"></div>

            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center">
                <span className="font-bold text-[22px] leading-tight mb-1">
                  {protein} g
                </span>
                <span className="text-[#8ca896] text-[12px] font-medium">
                  Protein
                </span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center">
                <span className="font-bold text-[22px] leading-tight mb-1">
                  {fat} g
                </span>
                <span className="text-[#8ca896] text-[12px] font-medium">
                  Lemak
                </span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center">
                <span className="font-bold text-[22px] leading-tight mb-1">
                  {carbs} g
                </span>
                <span className="text-[#8ca896] text-[12px] font-medium">
                  Karbohidrat
                </span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex justify-between items-center">
              <div>
                <div className="font-bold text-[20px]">
                  BMI {bmi.toLocaleString("id-ID")}
                </div>
                <div className="text-[#8ca896] text-[13px] font-medium">
                  Indeks massa tubuh
                </div>
              </div>
              <div
                className={`px-4 py-1.5 rounded-full text-[13px] font-bold ${
                  bmiCategory === "Normal"
                    ? "bg-[#42b26e]/20 text-[#42b26e]"
                    : bmiCategory === "Kurus"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-orange-500/20 text-orange-400"
                }`}
              >
                {bmiCategory}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
