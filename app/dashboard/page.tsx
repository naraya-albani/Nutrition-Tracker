"use client";

import { useState, useEffect, useTransition } from "react";
import Link from "next/link";
import { logout } from "../auth/action";
import { createClient } from "../../lib/supabase/client";
import { User } from "@supabase/supabase-js";

export default function Home() {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [isPending, startTransition] = useTransition();
  const [targets, setTargets] = useState({
    calories: 2000,
    protein: 92,
    fat: 62,
    carbs: 231,
  });

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const savedTargets = localStorage.getItem("nutrisi_targets");
    if (savedTargets) {
      setTargets(JSON.parse(savedTargets));
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f6f1] flex flex-col md:flex-row font-sans">
      {/* Navbar (Sidebar on Desktop) */}
      <nav className="w-full md:w-64 bg-[#113c23] text-[#678471] p-6 flex flex-col md:min-h-screen shrink-0">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="bg-[#42b26e] text-white w-9 h-9 rounded-xl flex items-center justify-center font-bold text-lg shadow-sm">
              🍃
            </div>
            <span className="text-white font-bold text-2xl tracking-tight">
              NutriSi
            </span>
          </div>

          <Link
            href="/"
            className="flex items-center gap-3 p-3 rounded-xl bg-[#174e2d] text-white mb-2 font-medium transition-colors"
          >
            <span className="text-xl">🏠</span> Beranda
          </Link>
          <Link
            href="/dashboard/scan"
            className="w-full text-left flex items-center gap-3 p-3 rounded-xl hover:bg-[#174e2d] hover:text-white transition-colors mb-2 font-medium"
          >
            <span className="text-xl">📱</span> Scan Makanan
          </Link>
          <Link
            href="/dashboard/kalkulator"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#174e2d] hover:text-white transition-colors mb-2 font-medium"
          >
            <span className="text-xl">📊</span> Kalkulator Gizi
          </Link>
          {/* <Link
            href="/akun"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#174e2d] hover:text-white transition-colors mb-2 font-medium"
          >
            <span className="text-xl">👤</span> Akun saya
          </Link> */}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-10 lg:p-12 overflow-y-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1.5 tracking-tight">
              Selamat pagi, {user?.user_metadata?.full_name.split(" ")[0]}
            </h1>
            <p className="text-gray-500 font-medium text-[15px]">
              {new Intl.DateTimeFormat("id-ID", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              }).format(new Date())}{" "}
              &middot; Target kalori: {targets.calories.toLocaleString("id-ID")}{" "}
              kkal/hari
            </p>
          </div>
          <div className="flex gap-3">
            {/* <Link
              href="/akun"
              className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 px-5 py-2.5 rounded-xl font-semibold transition-all shadow-sm flex items-center gap-2 active:scale-95"
            >
              👤 Akun saya
            </Link> */}
            <button
              onClick={() => startTransition(() => logout())}
              disabled={isPending}
              className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 px-5 py-2.5 rounded-xl font-semibold transition-all shadow-sm flex items-center gap-2 active:scale-95 disabled:opacity-50"
            >
              {isPending ? "Keluar..." : "Keluar"}
            </button>
          </div>
        </header>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-gray-500 text-[14px] font-semibold mb-3">
              Kalori hari ini
            </h3>
            <div className="text-[32px] font-bold text-gray-900 mb-1 tracking-tight">
              1.240
            </div>
            <div className="text-[13px] font-medium text-gray-400">
              dari {targets.calories} kkal target
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-gray-500 text-[14px] font-semibold mb-3">
              Protein
            </h3>
            <div className="text-[32px] font-bold text-gray-900 mb-1 tracking-tight">
              62 g
            </div>
            <div className="text-[13px] font-medium text-gray-400">
              dari {targets.protein} g target
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-gray-500 text-[14px] font-semibold mb-3">
              Lemak
            </h3>
            <div className="text-[32px] font-bold text-gray-900 mb-1 tracking-tight">
              38 g
            </div>
            <div className="text-[13px] font-medium text-gray-400">
              dari {targets.fat} g target
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-gray-500 text-[14px] font-semibold mb-3">
              Karbohidrat
            </h3>
            <div className="text-[32px] font-bold text-gray-900 mb-1 tracking-tight">
              142 g
            </div>
            <div className="text-[13px] font-medium text-gray-400">
              dari {targets.carbs} g target
            </div>
          </div>
        </section>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Food Log Table */}
          <section className="lg:col-span-2 bg-white rounded-4xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Log makanan hari ini
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-125">
                <thead>
                  <tr>
                    <th className="text-[12px] text-gray-400 font-bold uppercase tracking-wider pb-4 border-b border-gray-100 w-[35%]">
                      Makanan
                    </th>
                    <th className="text-[12px] text-gray-400 font-bold uppercase tracking-wider pb-4 border-b border-gray-100">
                      Waktu
                    </th>
                    <th className="text-[12px] text-gray-400 font-bold uppercase tracking-wider pb-4 border-b border-gray-100">
                      Kalori
                    </th>
                    <th className="text-[12px] text-gray-400 font-bold uppercase tracking-wider pb-4 border-b border-gray-100">
                      Protein
                    </th>
                    <th className="text-[12px] text-gray-400 font-bold uppercase tracking-wider pb-4 border-b border-gray-100">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 border-b border-gray-50 text-[15px] font-semibold text-gray-800">
                      <div className="flex items-center gap-3">
                        <span className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-xl text-lg">
                          🍚
                        </span>
                        Nasi putih
                      </div>
                    </td>
                    <td className="py-4 border-b border-gray-50 text-[14px] font-medium text-gray-500">
                      Sarapan
                    </td>
                    <td className="py-4 border-b border-gray-50 text-[14px] font-bold text-gray-700">
                      130 kkal
                    </td>
                    <td className="py-4 border-b border-gray-50 text-[14px] font-medium text-gray-500">
                      2.7 g
                    </td>
                    <td className="py-4 border-b border-gray-50">
                      <span className="px-3 py-1.5 rounded-full text-[12px] font-bold bg-[#42b26e]/10 text-[#2e7a3f]">
                        Baik
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b border-gray-50 text-[15px] font-semibold text-gray-800">
                      <div className="flex items-center gap-3">
                        <span className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-xl text-lg">
                          🥚
                        </span>
                        Telur rebus
                      </div>
                    </td>
                    <td className="py-4 border-b border-gray-50 text-[14px] font-medium text-gray-500">
                      Sarapan
                    </td>
                    <td className="py-4 border-b border-gray-50 text-[14px] font-bold text-gray-700">
                      143 kkal
                    </td>
                    <td className="py-4 border-b border-gray-50 text-[14px] font-medium text-gray-500">
                      12.6 g
                    </td>
                    <td className="py-4 border-b border-gray-50">
                      <span className="px-3 py-1.5 rounded-full text-[12px] font-bold bg-[#42b26e]/10 text-[#2e7a3f]">
                        Baik
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b border-gray-50 text-[15px] font-semibold text-gray-800">
                      <div className="flex items-center gap-3">
                        <span className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-xl text-lg">
                          🍗
                        </span>
                        Ayam goreng
                      </div>
                    </td>
                    <td className="py-4 border-b border-gray-50 text-[14px] font-medium text-gray-500">
                      Siang
                    </td>
                    <td className="py-4 border-b border-gray-50 text-[14px] font-bold text-gray-700">
                      298 kkal
                    </td>
                    <td className="py-4 border-b border-gray-50 text-[14px] font-medium text-gray-500">
                      28 g
                    </td>
                    <td className="py-4 border-b border-gray-50">
                      <span className="px-3 py-1.5 rounded-full text-[12px] font-bold bg-orange-100 text-orange-700 leading-tight block w-fit">
                        Tinggi
                        <br />
                        lemak
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 text-[15px] font-semibold text-gray-800">
                      <div className="flex items-center gap-3">
                        <span className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-xl text-lg">
                          🥦
                        </span>
                        Brokoli kukus
                      </div>
                    </td>
                    <td className="py-4 text-[14px] font-medium text-gray-500">
                      Siang
                    </td>
                    <td className="py-4 text-[14px] font-bold text-gray-700">
                      34 kkal
                    </td>
                    <td className="py-4 text-[14px] font-medium text-gray-500">
                      2.8 g
                    </td>
                    <td className="py-4">
                      <span className="px-3 py-1.5 rounded-full text-[12px] font-bold bg-[#42b26e]/10 text-[#2e7a3f]">
                        Baik
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-center mt-6 pt-4 border-t border-gray-50">
              <button className="bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
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
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </section>

          {/* Macro Distribution */}
          <section className="bg-white rounded-4xl p-6 sm:p-8 shadow-sm border border-gray-100 h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-8">
              Distribusi makro
            </h2>

            <div className="mb-6">
              <div className="flex justify-between text-[14px] font-bold text-gray-800 mb-2.5">
                <span>Kalori</span>
                <span className="text-gray-500">
                  1.240 / {targets.calories.toLocaleString("id-ID")} kkal
                </span>
              </div>
              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#c8812c] rounded-full"
                  style={{
                    width: `${Math.min(100, Math.round((1240 / targets.calories) * 100))}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-[14px] font-bold text-gray-800 mb-2.5">
                <span>Protein</span>
                <span className="text-gray-500">62 / {targets.protein} g</span>
              </div>
              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1e62a8] rounded-full"
                  style={{
                    width: `${Math.min(100, Math.round((62 / targets.protein) * 100))}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-[14px] font-bold text-gray-800 mb-2.5">
                <span>Lemak</span>
                <span className="text-gray-500">38 / {targets.fat} g</span>
              </div>
              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#e05252] rounded-full"
                  style={{
                    width: `${Math.min(100, Math.round((38 / targets.fat) * 100))}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-[14px] font-bold text-gray-800 mb-2.5">
                <span>Karbohidrat</span>
                <span className="text-gray-500">142 / {targets.carbs} g</span>
              </div>
              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#42b26e] rounded-full"
                  style={{
                    width: `${Math.min(100, Math.round((142 / targets.carbs) * 100))}%`,
                  }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[14px] font-bold text-gray-800 mb-2.5">
                <span>Serat</span>
                <span className="text-gray-500">12 / 25 g</span>
              </div>
              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#2e7a3f] rounded-full"
                  style={{ width: "48%" }}
                ></div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
