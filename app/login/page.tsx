"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'masuk' | 'daftar'>('masuk');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      router.push('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#f4f5f2] flex flex-col items-center justify-center p-4 sm:p-6 font-sans text-gray-900">
      
      {/* Logo di bagian atas */}
      <div className="flex items-center gap-2.5 mb-5">
        <div className="bg-[#42b26e] text-white w-9 h-9 rounded-xl flex items-center justify-center font-bold text-lg shadow-sm">
          🍃
        </div>
        <span className="font-bold text-[24px] tracking-tight text-[#123e25]">NutriSi</span>
      </div>

      {/* Container Card Login */}
      <div className="w-full max-w-[400px] bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-5 sm:p-7 relative overflow-hidden">
        
        {/* Toggle Switch */}
        <div className="flex bg-gray-50/80 rounded-xl p-1 mb-5 w-full shadow-inner border border-gray-100/50">
          <button 
            onClick={() => setActiveTab('masuk')}
            className={`flex-1 font-semibold text-[13px] py-2 px-4 rounded-lg transition-all text-center z-10 ${
              activeTab === 'masuk' ? 'text-gray-900 bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] border border-gray-100' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/50'
            }`}
          >
            Masuk
          </button>
          <button 
            onClick={() => setActiveTab('daftar')}
            className={`flex-1 font-semibold text-[13px] py-2 px-4 rounded-lg transition-all text-center z-10 ${
              activeTab === 'daftar' ? 'text-gray-900 bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] border border-gray-100' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/50'
            }`}
          >
            Daftar
          </button>
        </div>

        {/* Login Header */}
        <div className="mb-5 text-center">
          <h2 className="text-[22px] font-bold mb-1.5 text-gray-900 tracking-tight">
            {activeTab === 'masuk' ? 'Selamat datang' : 'Buat akun baru'}
          </h2>
          <p className="text-gray-500 text-[13px]">
            {activeTab === 'masuk' ? 'Masuk ke akun NutriSi kamu' : 'Mulai perjalanan sehatmu sekarang'}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-3" onSubmit={handleSubmit}>
          
          {activeTab === 'daftar' && (
             <div className="group">
             <label className="block text-[13px] font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-[#2e7a3f]">
               Nama Lengkap
             </label>
             <div className="relative">
               <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#2e7a3f] transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                 </svg>
               </div>
               <input
                 type="text"
                 required
                 className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#42b26e]/20 focus:border-[#42b26e] text-[14px] transition-all outline-none placeholder-gray-400 bg-gray-50/50 focus:bg-white"
                 placeholder="Nama lengkap kamu"
               />
             </div>
           </div>
          )}

          {/* Email */}
          <div className="group">
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-[#2e7a3f]">
              Alamat email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#2e7a3f] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                required
                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#42b26e]/20 focus:border-[#42b26e] text-[14px] transition-all outline-none placeholder-gray-400 bg-gray-50/50 focus:bg-white"
                placeholder="nama@email.com"
              />
            </div>
          </div>

          {/* Password */}
          <div className="group">
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-[#2e7a3f]">
              Kata sandi
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#2e7a3f] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type="password"
                required
                className="block w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#42b26e]/20 focus:border-[#42b26e] text-[14px] transition-all outline-none placeholder-gray-400 bg-gray-50/50 focus:bg-white"
                placeholder="Minimal 8 karakter"
              />
              <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center cursor-pointer text-gray-400 hover:text-gray-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Options */}
          {activeTab === 'masuk' && (
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-3.5 w-3.5 text-[#2e7a3f] focus:ring-[#2e7a3f] border-gray-300 rounded cursor-pointer transition-colors"
                />
                <label htmlFor="remember-me" className="ml-2 block text-[13px] font-medium text-gray-600 cursor-pointer">
                  Ingat saya
                </label>
              </div>
              <div className="text-[13px]">
                <a href="#" className="font-semibold text-[#2e7a3f] hover:text-[#174e2d] transition-colors">
                  Lupa kata sandi?
                </a>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-[0_4px_14px_0_rgba(66,178,110,0.2)] text-[14px] font-bold text-white bg-[#2e7a3f] hover:bg-[#246231] hover:shadow-[0_6px_20px_rgba(66,178,110,0.3)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#42b26e] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                activeTab === 'masuk' ? 'Masuk ke akun' : 'Daftar Sekarang'
              )}
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="mt-5 mb-5 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-white text-[12px] font-medium text-gray-400">atau</span>
          </div>
        </div>

        {/* Google Login */}
        <div>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-200 rounded-xl shadow-sm bg-white text-[14px] font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google Logo" />
            Lanjutkan dengan Google
          </button>
        </div>

      </div>

      {/* Security Info */}
      <div className="mt-5 text-center">
        <p className="text-gray-400 flex items-center justify-center gap-2 text-[12px] font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.95 11.95 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Data kamu aman dan terenkripsi
        </p>
      </div>
      
    </div>
  );
}
