"use client";

import React, { useState, useTransition } from "react";
import { login, register } from "./action";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"masuk" | "daftar">("masuk");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result =
        activeTab === "masuk"
          ? await login(formData)
          : await register(formData);

      if (result?.error) setErrorMsg(result.error);
    });
  };

  return (
    <div className="min-h-screen bg-[#f4f5f2] flex flex-col items-center justify-center p-4 sm:p-6 font-sans text-gray-900">
      {/* Logo */}
      <div className="flex items-center gap-2.5 mb-5">
        <div className="bg-[#42b26e] text-white w-9 h-9 rounded-xl flex items-center justify-center font-bold text-lg shadow-sm">
          🍃
        </div>
        <span className="font-bold text-[24px] tracking-tight text-[#123e25]">
          NutriSi
        </span>
      </div>

      <div className="w-full max-w-md bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-5 sm:p-7">
        {/* Tab Toggle */}
        <div className="flex bg-gray-50/80 rounded-xl p-1 mb-5 w-full shadow-inner border border-gray-100/50">
          {(["masuk", "daftar"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setErrorMsg(null);
              }}
              className={`flex-1 font-semibold text-[13px] py-2 px-4 rounded-lg transition-all text-center ${
                activeTab === tab
                  ? "text-gray-900 bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] border border-gray-100"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab === "masuk" ? "Masuk" : "Daftar"}
            </button>
          ))}
        </div>

        {/* Header */}
        <div className="mb-5 text-center">
          <h2 className="text-[22px] font-bold mb-1.5 text-gray-900 tracking-tight">
            {activeTab === "masuk" ? "Selamat datang" : "Buat akun baru"}
          </h2>
          <p className="text-gray-500 text-[13px]">
            {activeTab === "masuk"
              ? "Masuk ke akun NutriSi kamu"
              : "Mulai perjalanan sehatmu sekarang"}
          </p>
        </div>

        {/* Error Message */}
        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-[13px] font-medium flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
              />
            </svg>
            {errorMsg}
          </div>
        )}

        {/* Form */}
        <form className="space-y-3" onSubmit={handleSubmit}>
          {activeTab === "daftar" && (
            <div className="group">
              <label className="block text-[13px] font-semibold text-gray-700 mb-1.5 group-focus-within:text-[#2e7a3f]">
                Nama Lengkap
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#2e7a3f]">
                  {/* user icon svg sama seperti aslinya */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  name="full_name"
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
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5 group-focus-within:text-[#2e7a3f]">
              Alamat email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#2e7a3f]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                name="email"
                type="email"
                required
                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#42b26e]/20 focus:border-[#42b26e] text-[14px] transition-all outline-none placeholder-gray-400 bg-gray-50/50 focus:bg-white"
                placeholder="nama@email.com"
              />
            </div>
          </div>

          {/* Password */}
          <div className="group">
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5 group-focus-within:text-[#2e7a3f]">
              Kata sandi
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#2e7a3f]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                minLength={8}
                className="block w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#42b26e]/20 focus:border-[#42b26e] text-[14px] transition-all outline-none placeholder-gray-400 bg-gray-50/50 focus:bg-white"
                placeholder="Minimal 8 karakter"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {showPassword ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  ) : (
                    <>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              disabled={isPending}
              className="w-full flex justify-center py-3 px-4 rounded-xl shadow-[0_4px_14px_0_rgba(66,178,110,0.2)] text-[14px] font-bold text-white bg-[#2e7a3f] hover:bg-[#246231] hover:shadow-[0_6px_20px_rgba(66,178,110,0.3)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#42b26e] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : activeTab === "masuk" ? (
                "Masuk ke akun"
              ) : (
                "Daftar Sekarang"
              )}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-5 text-center">
        <p className="text-gray-400 flex items-center justify-center gap-2 text-[12px] font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.95 11.95 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          Data kamu aman dan terenkripsi
        </p>
      </div>
    </div>
  );
}
