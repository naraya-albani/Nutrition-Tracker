"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Tipe data profil
type UserProfile = {
  name: string;
  email: string;
  activeDays: number;
  avgCalories: number;
  bmi: number;
};

// Tipe data target gizi
type NutritionTargets = {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
};

export default function AkunPage() {
  const router = useRouter();

  // State Profil Pengguna
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Arini Kusuma',
    email: 'arini@email.com',
    activeDays: 28,
    avgCalories: 1840,
    bmi: 21.5
  });

  // State Target Gizi
  const [targets, setTargets] = useState<NutritionTargets>({
    calories: 2000,
    protein: 92,
    fat: 62,
    carbs: 231
  });

  // State Keamanan
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // State Notifikasi
  const [notifications, setNotifications] = useState({
    breakfast: true,
    lunch: true,
    dinner: true,
    dailyReport: false
  });

  // State modal aktif
  const [activeModal, setActiveModal] = useState<
    'none' | 'edit-profile' | 'target-gizi' | 'riwayat-makan' | 'notifikasi' | 'keamanan'
  >('none');

  // Temp states untuk form modal
  const [tempProfile, setTempProfile] = useState<UserProfile>({ ...profile });
  const [tempTargets, setTempTargets] = useState<NutritionTargets>({ ...targets });
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Load data dari localStorage pada saat render pertama
  useEffect(() => {
    const savedProfile = localStorage.getItem('nutrisi_profile');
    const savedTargets = localStorage.getItem('nutrisi_targets');
    const savedNotifications = localStorage.getItem('nutrisi_notifications');

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
    if (savedTargets) {
      setTargets(JSON.parse(savedTargets));
    }
    if (savedNotifications) {
      setNotifications(JSON.parse(savedNotifications));
    }
  }, []);

  // Toast helper
  const showToast = (message: string) => {
    setSuccessToast(message);
    setTimeout(() => {
      setSuccessToast(null);
    }, 3000);
  };

  // Simpan Edit Profil
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(tempProfile);
    localStorage.setItem('nutrisi_profile', JSON.stringify(tempProfile));
    setActiveModal('none');
    showToast('Profil berhasil diperbarui!');
  };

  // Simpan Target Gizi
  const handleSaveTargets = (e: React.FormEvent) => {
    e.preventDefault();
    setTargets(tempTargets);
    localStorage.setItem('nutrisi_targets', JSON.stringify(tempTargets));
    setActiveModal('none');
    showToast('Target gizi berhasil diperbarui!');
  };

  // Simpan Notifikasi
  const handleSaveNotifications = () => {
    localStorage.setItem('nutrisi_notifications', JSON.stringify(notifications));
    setActiveModal('none');
    showToast('Pengaturan notifikasi disimpan!');
  };

  // Simpan Sandi Baru
  const handleSavePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('Konfirmasi kata sandi baru tidak cocok!');
      return;
    }
    if (passwordForm.newPassword.length < 8) {
      alert('Kata sandi baru harus minimal 8 karakter!');
      return;
    }
    // Simulasi penyimpanan kata sandi
    setPasswordForm({ oldPassword: '', newPassword: '', confirmPassword: '' });
    setActiveModal('none');
    showToast('Kata sandi berhasil diperbarui!');
  };

  // Logout Handler
  const handleLogout = () => {
    if (confirm('Apakah Anda yakin ingin keluar dari sesi ini?')) {
      router.push('/login');
    }
  };

  // Buka Modal Edit Profil
  const openEditProfile = () => {
    setTempProfile({ ...profile });
    setActiveModal('edit-profile');
  };

  // Buka Modal Target Gizi
  const openTargetGizi = () => {
    setTempTargets({ ...targets });
    setActiveModal('target-gizi');
  };

  return (
    <div className="min-h-screen bg-[#f7f6f1] font-sans flex flex-col items-center pb-20 relative">

      {/* Top Navbar */}
      <nav className="w-full bg-[#113c23] px-6 sm:px-10 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-10">
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
            <Link href="/scan" className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#8ca896] hover:bg-[#174e2d] hover:text-white transition-colors font-medium">
              <span>📱</span> Scan Makanan
            </Link>
            <Link href="/kalkulator" className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#8ca896] hover:bg-[#174e2d] hover:text-white transition-colors font-medium">
              <span>📊</span> Kalkulator Gizi
            </Link>
          </div>
        </div>

        {/* Profile indicator on Navbar */}
        <Link href="/akun" className="flex items-center gap-2 bg-[#174e2d] text-white px-3 py-1.5 rounded-xl border border-white/10 hover:border-white/20 transition-all">
          <div className="w-6 h-6 rounded-full bg-[#42b26e] flex items-center justify-center text-xs font-bold">
            {profile.name.charAt(0)}
          </div>
          <span className="text-sm font-semibold hidden sm:inline">{profile.name}</span>
        </Link>
      </nav>

      {/* Main Content */}
      <main className="w-full max-w-[1050px] px-6 sm:px-10 py-10">

        <h1 className="text-[28px] font-bold text-gray-900 tracking-tight mb-8">Akun saya</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Profile Card (Kiri) */}
          <div className="bg-white rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100/80 flex flex-col items-center text-center">
            {/* Avatar Icon */}
            <div className="w-24 h-24 rounded-full bg-[#2e7a3f] flex items-center justify-center text-white mb-4 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            {/* Profile Info */}
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">{profile.name}</h2>
            <p className="text-gray-400 font-medium text-sm mt-0.5 mb-6">{profile.email}</p>

            <div className="w-full border-t border-gray-100 my-4"></div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 w-full mb-6 py-2">
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-gray-900">{profile.activeDays}</span>
                <span className="text-[12px] font-medium text-gray-400 mt-1">Hari aktif</span>
              </div>
              <div className="flex flex-col items-center border-x border-gray-100">
                <span className="text-xl font-bold text-gray-900">{profile.avgCalories.toLocaleString('id-ID')}</span>
                <span className="text-[12px] font-medium text-gray-400 mt-1">Avg. kkal</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-gray-900">{profile.bmi.toLocaleString('id-ID')}</span>
                <span className="text-[12px] font-medium text-gray-400 mt-1">BMI</span>
              </div>
            </div>

            {/* Edit Profil Button */}
            <button
              onClick={openEditProfile}
              className="w-full bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 active:scale-98 font-bold py-3 px-6 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
            >
              Edit profil
            </button>
          </div>

          {/* Menu Items (Kanan) */}
          <div className="md:col-span-2 flex flex-col gap-4">

            {/* Riwayat Makan */}
            <button
              onClick={() => setActiveModal('riwayat-makan')}
              className="w-full text-left bg-white p-5 rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.01)] border border-gray-100/80 hover:shadow-md hover:border-gray-200 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#1e62a8]/10 w-12 h-12 rounded-xl flex items-center justify-center text-xl text-[#1e62a8] shrink-0">
                  🕒
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-[16px] group-hover:text-[#1e62a8] transition-colors">Riwayat makan</h3>
                  <p className="text-gray-400 font-medium text-sm mt-0.5">Lihat log makanan sebelumnya</p>
                </div>
              </div>
              <span className="text-gray-300 font-bold text-lg group-hover:translate-x-1 group-hover:text-gray-500 transition-all">➔</span>
            </button>

            {/* Keamanan Akun */}
            <button
              onClick={() => setActiveModal('keamanan')}
              className="w-full text-left bg-white p-5 rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.01)] border border-gray-100/80 hover:shadow-md hover:border-gray-200 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100/80 w-12 h-12 rounded-xl flex items-center justify-center text-xl text-yellow-600 shrink-0">
                  🔒
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-[16px] group-hover:text-yellow-600 transition-colors">Keamanan akun</h3>
                  <p className="text-gray-400 font-medium text-sm mt-0.5">Ubah kata sandi dan autentikasi</p>
                </div>
              </div>
              <span className="text-gray-300 font-bold text-lg group-hover:translate-x-1 group-hover:text-gray-500 transition-all">➔</span>
            </button>

            {/* Keluar */}
            <button
              onClick={handleLogout}
              className="w-full text-left bg-white p-5 rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.01)] border border-gray-100/80 hover:shadow-md hover:border-red-200 hover:bg-red-50/10 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-red-100/80 w-12 h-12 rounded-xl flex items-center justify-center text-xl text-red-500 shrink-0">
                  🚪
                </div>
                <div>
                  <h3 className="font-bold text-red-500 text-[16px] group-hover:text-red-600 transition-colors">Keluar</h3>
                  <p className="text-gray-400 font-medium text-sm mt-0.5">Logout dari sesi ini</p>
                </div>
              </div>
              <span className="text-red-300 font-bold text-lg group-hover:translate-x-1 group-hover:text-red-500 transition-all">➔</span>
            </button>

          </div>

        </div>

      </main>

      {/* TOAST SUCCESS NOTIFICATION */}
      {successToast && (
        <div className="fixed bottom-10 right-10 bg-gray-900 text-white px-6 py-3.5 rounded-2xl shadow-xl z-50 flex items-center gap-3 animate-fade-in border border-gray-800">
          <span className="bg-[#42b26e] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">✓</span>
          <span className="font-semibold text-sm">{successToast}</span>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 1. MODAL EDIT PROFIL */}
      {activeModal === 'edit-profile' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-[450px] shadow-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Edit Profil Anda</h3>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Nama Lengkap</label>
                <input
                  type="text"
                  value={tempProfile.name}
                  onChange={(e) => setTempProfile({ ...tempProfile, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 font-medium focus:ring-2 focus:ring-[#42b26e]/30 focus:border-[#42b26e] outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Alamat Email</label>
                <input
                  type="email"
                  value={tempProfile.email}
                  onChange={(e) => setTempProfile({ ...tempProfile, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 font-medium focus:ring-2 focus:ring-[#42b26e]/30 focus:border-[#42b26e] outline-none transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Hari Aktif</label>
                  <input
                    type="number"
                    value={tempProfile.activeDays}
                    onChange={(e) => setTempProfile({ ...tempProfile, activeDays: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 font-bold focus:ring-2 focus:ring-[#42b26e]/30 focus:border-[#42b26e] outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Avg. kkal</label>
                  <input
                    type="number"
                    value={tempProfile.avgCalories}
                    onChange={(e) => setTempProfile({ ...tempProfile, avgCalories: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 font-bold focus:ring-2 focus:ring-[#42b26e]/30 focus:border-[#42b26e] outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">BMI</label>
                  <input
                    type="number"
                    step="0.1"
                    value={tempProfile.bmi}
                    onChange={(e) => setTempProfile({ ...tempProfile, bmi: parseFloat(e.target.value) || 0 })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 font-bold focus:ring-2 focus:ring-[#42b26e]/30 focus:border-[#42b26e] outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setActiveModal('none')}
                  className="flex-1 py-3 px-4 border border-gray-200 hover:bg-gray-50 text-gray-600 font-bold rounded-xl transition-all text-[14px]"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-[#2e7a3f] hover:bg-[#246231] text-white font-bold rounded-xl shadow-md transition-all text-[14px]"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 3. MODAL RIWAYAT MAKAN */}
      {activeModal === 'riwayat-makan' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-[500px] max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Riwayat Makan</h3>
              <button
                onClick={() => setActiveModal('none')}
                className="text-gray-400 hover:text-gray-600 font-bold text-lg w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[14px] text-[#2e7a3f] bg-green-50/50 px-3 py-1.5 rounded-lg w-fit mb-3">Selasa, 19 Mei (Hari ini)</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🍚</span>
                      <div>
                        <div className="font-bold text-[14.5px] text-gray-800">Nasi putih</div>
                        <div className="text-[12px] text-gray-400 mt-0.5">1 porsi &middot; Sarapan</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[14.5px] text-gray-800">130 kkal</div>
                      <span className="text-[11px] px-2 py-0.5 rounded-full font-bold bg-green-100/60 text-green-700 mt-1 inline-block">Baik</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🥚</span>
                      <div>
                        <div className="font-bold text-[14.5px] text-gray-800">Telur rebus</div>
                        <div className="text-[12px] text-gray-400 mt-0.5">1 butir &middot; Sarapan</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[14.5px] text-gray-800">143 kkal</div>
                      <span className="text-[11px] px-2 py-0.5 rounded-full font-bold bg-green-100/60 text-green-700 mt-1 inline-block">Baik</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🍗</span>
                      <div>
                        <div className="font-bold text-[14.5px] text-gray-800">Ayam goreng</div>
                        <div className="text-[12px] text-gray-400 mt-0.5">100g &middot; Siang</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[14.5px] text-gray-800">298 kkal</div>
                      <span className="text-[11px] px-2 py-0.5 rounded-full font-bold bg-orange-100 text-orange-700 mt-1 inline-block">Tinggi lemak</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🥦</span>
                      <div>
                        <div className="font-bold text-[14.5px] text-gray-800">Brokoli kukus</div>
                        <div className="text-[12px] text-gray-400 mt-0.5">100g &middot; Siang</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[14.5px] text-gray-800">34 kkal</div>
                      <span className="text-[11px] px-2 py-0.5 rounded-full font-bold bg-green-100/60 text-green-700 mt-1 inline-block">Baik</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[14px] text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg w-fit mb-3">Senin, 18 Mei (Kemarin)</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🍲</span>
                      <div>
                        <div className="font-bold text-[14.5px] text-gray-800">Nasi goreng</div>
                        <div className="text-[12px] text-gray-400 mt-0.5">1 porsi &middot; Sarapan</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[14.5px] text-gray-800">340 kkal</div>
                      <span className="text-[11px] px-2 py-0.5 rounded-full font-bold bg-orange-100 text-orange-700 mt-1 inline-block">Tinggi lemak</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🥚</span>
                      <div>
                        <div className="font-bold text-[14.5px] text-gray-800">Telur dadar</div>
                        <div className="text-[12px] text-gray-400 mt-0.5">1 butir &middot; Sarapan</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[14.5px] text-gray-800">120 kkal</div>
                      <span className="text-[11px] px-2 py-0.5 rounded-full font-bold bg-green-100/60 text-green-700 mt-1 inline-block">Baik</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 mt-6">
              <button
                onClick={() => setActiveModal('none')}
                className="w-full py-3.5 px-4 bg-[#2e7a3f] hover:bg-[#246231] text-white font-bold rounded-xl shadow-md transition-all text-[14px]"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}


      {/* 6. MODAL KEAMANAN */}
      {activeModal === 'keamanan' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-[420px] shadow-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ubah Kata Sandi</h3>
            <p className="text-gray-400 font-medium text-xs mb-6">Demi keamanan akun, jangan bagikan kata sandi Anda.</p>

            <form onSubmit={handleSavePassword} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Kata Sandi Lama</label>
                <input
                  type="password"
                  placeholder="Masukkan kata sandi saat ini"
                  value={passwordForm.oldPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, oldPassword: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 font-medium focus:ring-2 focus:ring-[#42b26e]/30 focus:border-[#42b26e] outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Kata Sandi Baru</label>
                <input
                  type="password"
                  placeholder="Minimal 8 karakter"
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 font-medium focus:ring-2 focus:ring-[#42b26e]/30 focus:border-[#42b26e] outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Konfirmasi Kata Sandi Baru</label>
                <input
                  type="password"
                  placeholder="Ulangi kata sandi baru"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 font-medium focus:ring-2 focus:ring-[#42b26e]/30 focus:border-[#42b26e] outline-none transition-all"
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setPasswordForm({ oldPassword: '', newPassword: '', confirmPassword: '' });
                    setActiveModal('none');
                  }}
                  className="flex-1 py-3 px-4 border border-gray-200 hover:bg-gray-50 text-gray-600 font-bold rounded-xl transition-all text-[14px]"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-[#2e7a3f] hover:bg-[#246231] text-white font-bold rounded-xl shadow-md transition-all text-[14px]"
                >
                  Ubah Sandi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
