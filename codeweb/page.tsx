export default function UserPage() {
  return (
    <div className="flex min-h-screen bg-[#F3F4F6] text-[#111827]">

      {/* ================= SIDEBAR ================= */}
      <div className="w-64 bg-white border-r p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold text-blue-600 mb-6">CallZ</h2>

          <div className="mb-6">
            <p className="text-sm font-semibold">Mitra Aktif</p>
            <p className="text-xs text-gray-400">
              Layanan Concierge Terverifikasi
            </p>
          </div>

          <ul className="space-y-4 text-sm">
            <li className="text-blue-600 font-semibold">Dashboard</li>
            <li className="text-gray-500">Tugas Aktif</li>
            <li className="text-gray-500">Riwayat</li>
            <li className="text-gray-500">Pengaturan</li>
          </ul>
        </div>

        <button className="bg-blue-600 text-white py-2 rounded-md">
          Buat Tugas
        </button>
      </div>

      {/* ================= MAIN ================= */}
      <div className="flex-1 p-6">

        {/* NAVBAR */}
        <div className="flex justify-between items-center">
          <input
            placeholder="Cari tugas, mitra, atau riwayat..."
            className="border px-4 py-2 rounded-md w-1/2"
          />

          <div className="flex gap-6 items-center text-sm">
            <span className="text-blue-600 font-medium cursor-pointer">
              Layanan
            </span>
            <span className="text-gray-500">Tentang</span>
            <span className="text-gray-500">Bantuan</span>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Mulai Sekarang
            </button>
          </div>
        </div>

        {/* HERO */}
        <div className="mt-8">
          <h1 className="text-3xl font-bold leading-snug">
            Selamat Datang kembali, Alex.
            <br />
            Siap untuk{" "}
            <span className="text-blue-600">
              mengembalikan waktu Anda?
            </span>
          </h1>

          <p className="text-gray-500 mt-2">
            Jaringan concierge pribadi Anda sudah aktif dan siap membantu.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-3 gap-6 mt-8">

          {/* LEFT SIDE */}
          <div className="col-span-2">

            {/* QUICK TASK */}
            <div>
              <p className="text-xs text-gray-400 mb-3">TUGAS CEPAT</p>

              <div className="grid grid-cols-3 gap-4">
                {["Belanja Bahan Makanan", "Ambil Paket", "Antre"].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border">
                    <p className="font-medium">{item}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {i === 1 ? "3 Mitra di sekitar sini" : "Sudah tersedia"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* TASK ACTIVE */}
            <div className="bg-white p-5 rounded-lg border mt-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Courier Mitra: David K.</h3>
                <span className="text-xs bg-orange-100 text-orange-500 px-2 py-1 rounded">
                  DALAM PROGRESS
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-3">
                Mengambil barang-barang terakhir dari kasir.
              </p>

              {/* PROGRESS */}
              <div className="bg-gray-200 h-2 rounded">
                <div className="bg-blue-600 h-2 w-3/4 rounded"></div>
              </div>

              <p className="text-sm text-blue-600 mt-2">
                75% Selesai • 3.2 km
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <p className="text-xs text-gray-400 mb-3">
              MITRA DI SEKITAR
            </p>

            {/* MAP FAKE */}
            <div className="bg-green-200 h-40 rounded-lg mb-4 flex items-center justify-center">
              <p className="text-sm text-gray-600">Map</p>
            </div>

            {/* MITRA LIST */}
            <div className="space-y-3">
              {["Sarah L.", "Marcus J."].map((name, i) => (
                <div key={i} className="bg-white p-3 rounded-lg border flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-xs text-gray-400">
                      {i === 0 ? "98% Rating • 1.2 mi" : "Elite • 0.8 mi"}
                    </p>
                  </div>

                  <button className="bg-orange-500 text-white text-xs px-3 py-1 rounded">
                    SIAP
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}