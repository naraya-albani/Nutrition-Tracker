"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ScanMakananPage() {
  const [activeTab, setActiveTab] = useState('Kamera');
  const [isScanning, setIsScanning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [portion, setPortion] = useState(300);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setShowResult(true);
    }, 2000);
  };

  const handleReset = () => {
    setShowResult(false);
    setActiveTab('Kamera');
    setPortion(300);
  };

  return (
    <div className="min-h-screen bg-[#f7f8f4] font-sans flex flex-col items-center pb-20">

      {/* Top Navbar */}
      <nav className="w-full bg-[#113c23] px-6 sm:px-10 py-4 flex items-center gap-10 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-[#42b26e] text-white w-9 h-9 rounded-xl flex items-center justify-center font-bold text-lg shadow-sm">
            🍃
          </div>
          <span className="text-white font-bold text-2xl tracking-tight">NutriSi</span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#8ca896] hover:bg-[#174e2d] hover:text-white transition-colors font-medium">
            <span>🏠</span> Beranda
          </Link>
          <Link href="/scan" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#174e2d] text-white font-medium shadow-inner border border-white/5">
            <span>📱</span> Scan Makanan
          </Link>
          <Link href="/kalkulator" className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#8ca896] hover:bg-[#174e2d] hover:text-white transition-colors font-medium">
            <span>📊</span> Kalkulator Gizi
          </Link>
          <Link href="/akun" className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#8ca896] hover:bg-[#174e2d] hover:text-white transition-colors font-medium">
            <span>👤</span> Akun saya
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full max-w-[1200px] px-6 sm:px-10 py-10">

        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-[28px] font-bold text-gray-900 tracking-tight">Scan makanan</h1>

          {showResult ? (
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg font-bold text-[14px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Makanan terdeteksi
            </div>
          ) : (
            <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-bold text-[14px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              AI Vision aktif
            </div>
          )}
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left Column */}
          <div className="flex flex-col gap-6">

            {/* Tabs (Always visible) */}
            <div className="flex bg-transparent border border-gray-300 rounded-xl overflow-hidden w-fit p-1 bg-white/50">
              <button
                onClick={() => { setActiveTab('Kamera'); setShowResult(false); }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-[15px] transition-all ${activeTab === 'Kamera' ? 'bg-white shadow-sm border border-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                </svg>
                Kamera
              </button>
              <button
                onClick={() => { setActiveTab('Unggah foto'); setShowResult(false); }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-[15px] transition-all ${activeTab === 'Unggah foto' ? 'bg-white shadow-sm border border-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Unggah foto
              </button>
            </div>

            {/* Dynamic Content Left Column */}
            {showResult ? (
              // RESULT STATE - LEFT COLUMN
              <div className="flex flex-col gap-6">

                {/* Image Preview */}
                <div className="w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200">
                  <div className="w-full aspect-[16/10] bg-[#1a3b2b] relative">
                    {/* Bounding box simulation */}
                    <div className="absolute top-[20%] left-[40%] w-[120px] h-[100px] border-2 border-[#42b26e] rounded-xl bg-[#42b26e]/10">
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#42b26e] text-white text-[12px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                        Nasi Padang
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-gray-900 text-[15px]">foto_makan_siang.jpg</h4>
                      <p className="text-gray-500 text-[13px] font-medium mt-1">1 objek terdeteksi</p>
                    </div>
                    <span className="bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-[13px] font-bold">Akurasi 94%</span>
                  </div>
                </div>

                {/* Adjust Portion */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-[16px]">Sesuaikan porsi</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 font-medium text-[15px]">Berat estimasi</span>
                    <span className="font-bold text-gray-900 text-[16px]">{portion} g</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="600"
                    step="10"
                    value={portion}
                    onChange={(e) => setPortion(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#42b26e] mb-2"
                  />
                  <p className="text-gray-400 text-[13px] font-medium">AI mengestimasi 1 porsi ≈ 300g berdasarkan foto</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-2">
                  <button onClick={handleReset} className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-bold py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Scan ulang
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-bold py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Koreksi manual
                  </button>
                </div>

              </div>
            ) : (
              // INITIAL STATE - LEFT COLUMN
              <>
                {/* Dynamic View Area Based on Active Tab */}
                {activeTab === 'Kamera' && (
                  <>
                    <div className="w-full aspect-[4/3] bg-[#112d1b] rounded-3xl relative overflow-hidden shadow-inner flex flex-col items-center justify-center border-4 border-[#123e25]">
                      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#42b26e 1px, transparent 1px), linear-gradient(90deg, #42b26e 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#42b26e]"></div>
                      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#42b26e]"></div>
                      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#42b26e]"></div>
                      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#42b26e]"></div>

                      <div className={`absolute top-1/2 left-0 w-full h-[2px] bg-[#42b26e] shadow-[0_0_15px_3px_rgba(66,178,110,0.5)] z-10 ${isScanning ? 'animate-pulse' : ''}`}></div>

                      <div className="relative z-20 flex flex-col items-center text-center mt-[-40px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#42b26e] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-[#8ca896] text-[16px] max-w-[250px] font-medium leading-relaxed">
                          Arahkan kamera ke makanan yang ingin dianalisis
                        </p>
                      </div>

                      <div className="absolute bottom-6 w-full px-8 flex justify-between items-center z-20">
                        <button className="w-12 h-12 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-white hover:bg-black/50 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </button>
                        <button
                          onClick={handleScan}
                          className="w-16 h-16 rounded-full bg-[#42b26e] border-4 border-[#123e25] flex items-center justify-center text-white hover:bg-[#389e61] hover:scale-105 transition-all shadow-lg active:scale-95"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          </svg>
                        </button>
                        <button className="w-12 h-12 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-white hover:bg-black/50 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="mt-2">
                      <h3 className="font-bold text-gray-900 mb-3 text-[16px]">Tips foto terbaik</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-gray-600 text-[14.5px] font-medium">
                          <span className="text-yellow-500 text-lg">☀️</span> Pastikan pencahayaan cukup terang
                        </li>
                        <li className="flex items-center gap-3 text-gray-600 text-[14.5px] font-medium">
                          <span className="text-blue-500 text-lg">🔍</span> Tampilkan seluruh makanan dalam frame
                        </li>
                        <li className="flex items-center gap-3 text-gray-600 text-[14.5px] font-medium">
                          <span className="text-gray-500 text-lg">⏱️</span> Tahan kamera agar gambar tidak buram
                        </li>
                      </ul>
                    </div>
                  </>
                )}

                {activeTab === 'Unggah foto' && (
                  <div className="w-full aspect-[4/3] bg-white rounded-3xl relative overflow-hidden flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-[#42b26e] hover:bg-green-50/30 transition-colors cursor-pointer group">
                    <div className="bg-blue-50 p-6 rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <h3 className="text-[18px] font-bold text-gray-800 mb-2">Tarik dan lepas gambar di sini</h3>
                    <p className="text-[14px] text-gray-500 font-medium mb-6">Mendukung format JPG, PNG, atau WebP (Maks. 5MB)</p>
                    <button className="bg-[#42b26e] hover:bg-[#389e61] text-white px-6 py-2.5 rounded-xl font-semibold shadow-sm transition-colors active:scale-95">
                      Pilih dari galeri
                    </button>
                  </div>
                )}

                {activeTab === 'Barcode' && (
                  <div className="w-full aspect-[4/3] bg-gray-900 rounded-3xl relative overflow-hidden flex flex-col items-center justify-center border-4 border-gray-800">
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                    <div className="w-[80%] max-w-[300px] h-[150px] bg-white/5 rounded-2xl border-2 border-dashed border-gray-500 relative flex items-center justify-center">
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[#42b26e] rounded-tl-lg"></div>
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#42b26e] rounded-tr-lg"></div>
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#42b26e] rounded-bl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[#42b26e] rounded-br-lg"></div>

                      <div className="absolute top-1/2 left-4 right-4 h-[2px] bg-red-500 shadow-[0_0_15px_3px_rgba(239,68,68,0.6)] animate-pulse"></div>

                      <div className="opacity-30">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Right Column - Results & History */}
          <div className="flex flex-col gap-6">

            {showResult ? (
              // RESULT STATE - RIGHT COLUMN (Analysis Results)
              <div className="bg-white rounded-[24px] p-6 sm:p-8 shadow-sm border border-gray-100 min-h-[340px]">

                {/* Card Header */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900 text-[18px]">Hasil analisis AI</h3>
                  <span className="bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5 border border-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    Terverifikasi
                  </span>
                </div>

                {/* Main Food Item */}
                <div className="flex items-center justify-between bg-gray-50/50 p-4 rounded-2xl border border-gray-100 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center text-3xl shadow-sm border border-gray-100">
                      🍛
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-[18px]">Nasi Padang</h4>
                      <p className="text-gray-500 text-[13px] font-medium mt-0.5">1 porsi &middot; est. 300g</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#42b26e] text-[18px]">94%</div>
                    <div className="text-gray-400 text-[12px] font-medium mt-0.5">akurasi</div>
                  </div>
                </div>

                {/* Macro summary boxes */}
                <div className="grid grid-cols-4 gap-3 mb-8">
                  <div className="bg-[#fcfaf7] border border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
                    <span className="text-[#c8812c] font-bold text-[24px] leading-tight mb-1">{(680 * (portion / 300)).toFixed(0)}</span>
                    <span className="text-gray-400 text-[12px] font-semibold">Kkal</span>
                  </div>
                  <div className="bg-[#fcfaf7] border border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
                    <span className="text-[#1e62a8] font-bold text-[24px] leading-tight mb-1">{(32 * (portion / 300)).toFixed(0)}g</span>
                    <span className="text-gray-400 text-[12px] font-semibold">Protein</span>
                  </div>
                  <div className="bg-[#fcfaf7] border border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
                    <span className="text-[#e05252] font-bold text-[24px] leading-tight mb-1">{(28 * (portion / 300)).toFixed(0)}g</span>
                    <span className="text-gray-400 text-[12px] font-semibold">Lemak</span>
                  </div>
                  <div className="bg-[#fcfaf7] border border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
                    <span className="text-[#42b26e] font-bold text-[24px] leading-tight mb-1">{(76 * (portion / 300)).toFixed(0)}g</span>
                    <span className="text-gray-400 text-[12px] font-semibold">Karbo</span>
                  </div>
                </div>

                {/* Detailed progress bars */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[14px] font-bold text-gray-700 w-24">Lemak jenuh</span>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#c8812c] rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <span className="text-[14px] font-bold text-red-500 w-12 text-right">{(9.2 * (portion / 300)).toFixed(1)}g</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[14px] font-bold text-gray-700 w-24">Serat</span>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#42b26e] rounded-full" style={{ width: '15%' }}></div>
                    </div>
                    <span className="text-[14px] font-bold text-gray-900 w-12 text-right">{(3.1 * (portion / 300)).toFixed(1)}g</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[14px] font-bold text-gray-700 w-24">Gula</span>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-400 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <span className="text-[14px] font-bold text-gray-900 w-12 text-right">{(5.8 * (portion / 300)).toFixed(1)}g</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[14px] font-bold text-gray-700 w-24">Natrium</span>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-500 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <span className="text-[14px] font-bold text-red-500 w-16 text-right">{(820 * (portion / 300)).toFixed(0)}mg</span>
                  </div>
                </div>

                {/* Recommendations */}
                <h4 className="font-bold text-[15px] text-gray-900 mb-4">Rekomendasi</h4>
                <div className="space-y-4 mb-10">
                  <div className="flex gap-4 p-4 rounded-2xl bg-red-50 border border-red-100">
                    <div className="text-red-500 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-red-700 text-[14px] mb-1">Natrium cukup tinggi</h5>
                      <p className="text-red-600/80 text-[13px] leading-relaxed">{(820 * (portion / 300)).toFixed(0)}mg = {Math.round(36 * (portion / 300))}% kebutuhan harian. Kurangi garam di makan malam.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-2xl bg-green-50 border border-green-100">
                    <div className="text-green-500 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-green-700 text-[14px] mb-1">Protein mencukupi</h5>
                      <p className="text-green-700/80 text-[13px] leading-relaxed">{(32 * (portion / 300)).toFixed(0)}g sudah memenuhi {Math.round(35 * (portion / 300))}% kebutuhan protein harianmu.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-2xl bg-orange-50 border border-orange-100">
                    <div className="text-orange-500 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-orange-700 text-[14px] mb-1">Tambah sayuran</h5>
                      <p className="text-orange-700/80 text-[13px] leading-relaxed">Serat hanya {(3.1 * (portion / 300)).toFixed(1)}g. Tambahkan lalapan untuk melengkapi nutrisi.</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <button onClick={() => alert('Berhasil ditambahkan ke log makan!')} className="w-full flex items-center justify-center gap-2 bg-white border-2 border-[#123e25] text-[#123e25] font-bold py-3.5 px-6 rounded-xl hover:bg-[#123e25] hover:text-white transition-all shadow-sm">
                    <span className="text-xl leading-none">+</span> Tambahkan ke log makan
                  </button>
                  <button onClick={() => alert('Disimpan ke favorit!')} className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 font-bold py-3.5 px-6 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    Simpan ke favorit
                  </button>
                </div>
              </div>

            ) : (
              // INITIAL STATE - RIGHT COLUMN
              <>
                {/* Status Card */}
                <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[340px]">
                  <div className="w-full flex justify-between items-center mb-10 absolute top-8 px-8 left-0">
                    <h3 className="font-bold text-gray-900 text-[18px]">Menunggu scan...</h3>
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-[13px] font-bold flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                      AI siap
                    </span>
                  </div>

                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <div className="text-gray-400 mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-center max-w-[280px] font-medium leading-relaxed">
                      Ambil foto atau unggah gambar makanan untuk melihat analisis gizi otomatis
                    </p>
                  </div>
                </div>

                {/* History Card */}
                <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex-1">
                  <h3 className="font-bold text-gray-900 text-[18px] mb-5">Riwayat scan hari ini</h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer border border-transparent hover:border-gray-200">
                      <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm border border-gray-100">
                        🍚
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-[15px]">Nasi goreng</h4>
                        <p className="text-gray-500 text-[13px] font-medium mt-0.5">340 kkal &middot; 08:30</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer border border-transparent hover:border-gray-200">
                      <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm border border-gray-100">
                        🥚
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-[15px]">Telur dadar</h4>
                        <p className="text-gray-500 text-[13px] font-medium mt-0.5">120 kkal &middot; 08:30</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>

        </div>

        {/* Scroll Down Hint for Results */}
        {showResult && (
          <div className="mt-12 flex justify-center pb-20 relative">
            <div className="absolute inset-y-0 w-full flex items-center z-0">
              <div className="w-full border-t border-dashed border-gray-300"></div>
            </div>
            <button className="bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 shadow-sm w-12 h-12 rounded-full flex items-center justify-center transition-all z-10 hover:-translate-y-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
