  // C:\codingVibes\nuansasolution\.subpath\generator-surat-perjanjian-sewa\src\App.jsx

  import React, { useState } from 'react';
  import {
    FileText,
    Eye,
    User,
    Mail,
    FileEdit,
    Download,
    ChevronDown,
    ChevronUp
  } from 'lucide-react';
  import logo from './assets/NS_white_01.png';

  // Component: Accordion untuk form sections
  const Accordion = ({ title, icon: Icon, children, isOpen, onToggle }) => {
    return (
      <div className="mb-4 bg-white overflow-hidden">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 flex items-center justify-center">
              <Icon className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-semibold text-gray-800">{title}</span>
          </div>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>
        {isOpen && <div className="p-4 pt-0 border-t border-gray-100">{children}</div>}
      </div>
    );
  };

  // Component: Input Field
  const InputField = ({ label, name, value, onChange, placeholder, type = "text" }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        />
      </div>
    );
  };

  // Component: Textarea Field
  const TextareaField = ({ label, name, value, onChange, placeholder, rows = 3 }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
        />
      </div>
    );
  };

  // Component: Preview Surat
  const PreviewSurat = ({ data }) => {
    const formatDate = (dateString) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
      const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
      return `${days[date.getDay()]}, tanggal ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    };

    return (
      <div className="bg-white p-8 shadow-sm min-h-[600px]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-center mb-8">SURAT PERJANJIAN SEWA</h1>
          
          <div className="text-justify leading-relaxed mb-6">
            <p className="mb-4">
              Pada hari ini, {data.tanggalSurat ? formatDate(data.tanggalSurat) : '___________'}, 
              bertempat di {data.tempatSurat || '___________'}, telah disepakati perjanjian sewa antara 
              pihak-pihak di bawah ini :
            </p>

            <div className="mb-6">
              <table className="w-full mb-4">
                <tbody>
                  <tr>
                    <td className="py-1 w-24">Nama</td>
                    <td className="py-1 w-4">:</td>
                    <td className="py-1 font-semibold">{data.namaPengirim || '___________'}</td>
                  </tr>
                  <tr>
                    <td className="py-1 align-top">Alamat</td>
                    <td className="py-1 align-top">:</td>
                    <td className="py-1">{data.alamatPengirim || '___________'}</td>
                  </tr>
                  <tr>
                    <td className="py-1">NIK</td>
                    <td className="py-1">:</td>
                    <td className="py-1">{data.nikPengirim || '___________'}</td>
                  </tr>
                </tbody>
              </table>
              <p>Bertindak selaku Pemilik Tempat, Selanjutnya disebut <strong>PIHAK PERTAMA</strong>.</p>
            </div>

            <div className="mb-6">
              <table className="w-full mb-4">
                <tbody>
                  <tr>
                    <td className="py-1 w-24">Nama</td>
                    <td className="py-1 w-4">:</td>
                    <td className="py-1 font-semibold">{data.namaPenerima || '___________'}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Jabatan</td>
                    <td className="py-1">:</td>
                    <td className="py-1">{data.jabatanPenerima || '___________'}</td>
                  </tr>
                  <tr>
                    <td className="py-1 align-top">Alamat</td>
                    <td className="py-1 align-top">:</td>
                    <td className="py-1">{data.alamatPenerima || '___________'}</td>
                  </tr>
                  <tr>
                    <td className="py-1">NIK</td>
                    <td className="py-1">:</td>
                    <td className="py-1">{data.nikPenerima || '___________'}</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Bertindak untuk dan atas nama {data.instansiPenerima || '___________'}, 
                Selanjutnya disebut <strong>PIHAK KEDUA</strong>.
              </p>
            </div>

            <p className="mb-6">
              Kedua belah pihak sepakat untuk mengadakan perjanjian sewa menyurat dengan 
              ketentuan sebagai berikut :
            </p>

            <div className="mb-6">
              <h2 className="font-bold text-center mb-3">PASAL 1</h2>
              <h3 className="font-bold text-center mb-3">OBJEK SEWA</h3>
              <p>
                PIHAK PERTAMA menyewakan kepada PIHAK KEDUA sebuah bangunan/ruangan yang berlokasi 
                di {data.lokasiObjek || '___________'}, untuk dipergunakan sebagai {data.peruntukanObjek || '___________'}.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="font-bold text-center mb-3">PASAL 2</h2>
              <h3 className="font-bold text-center mb-3">JANGKA WAKTU</h3>
              <p>
                Perjanjian sewa ini berlaku selama {data.jangkaWaktu || '___'} ({data.jangkaWaktuTerbilang || '___________'}), 
                terhitung sejak tanggal {data.tanggalMulai ? new Date(data.tanggalMulai).toLocaleDateString('id-ID') : '___________'} sampai 
                dengan tanggal {data.tanggalSelesai ? new Date(data.tanggalSelesai).toLocaleDateString('id-ID') : '___________'}.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="font-bold text-center mb-3">PASAL 3</h2>
              <h3 className="font-bold text-center mb-3">HARGA SEWA DAN PEMBAYARAN</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Harga sewa untuk jangka waktu tersebut adalah sebesar Rp{data.hargaSewa || '___________'},- 
                  ({data.hargaSewaTerbilang || '___________'} Rupiah).
                </li>
                <li>
                  Pembayaran dilakukan secara {data.metodePembayaran || '___________'} oleh PIHAK KEDUA 
                  kepada PIHAK PERTAMA pada saat penandatanganan perjanjian ini sebagai bukti pelunasan.
                </li>
              </ol>
            </div>

            <div className="mb-6">
              <h2 className="font-bold text-center mb-3">PASAL 4</h2>
              <h3 className="font-bold text-center mb-3">HAK DAN KEWAJIBAN</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  PIHAK KEDUA berhak menggunakan bangunan tersebut untuk keperluan operasional 
                  perusahaan sesuai aturan hukum yang berlaku.
                </li>
                <li>
                  PIHAK KEDUA wajib menjaga kebersihan, ketertiban, dan merawat bangunan selama 
                  masa sewa berlangsung.
                </li>
                <li>
                  PIHAK PERTAMA menjamin bahwa Objek Sewa adalah milik sah PIHAK PERTAMA 
                  dan tidak dalam sengketa.
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h2 className="font-bold text-center mb-3">PASAL 5</h2>
              <h3 className="font-bold text-center mb-3">KETENTUAN LAIN-LAIN</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Perubahan atau hal-hal yang belum diatur dalam perjanjian ini akan dimusyawarahkan 
                  lebih lanjut oleh kedua belah pihak.
                </li>
                <li>
                  Perjanjian ini dibuat tanpa paksaan dari pihak manapun dan ditandatangani untuk 
                  digunakan sebagaimana mestinya.
                </li>
              </ol>
            </div>

            <p className="mb-8">
              Demikian perjanjian ini dibuat dan ditandatangani di {data.tempatSurat || '___________'}, 
              pada tanggal {data.tanggalSurat ? new Date(data.tanggalSurat).toLocaleDateString('id-ID') : '___________'}.
            </p>

            <div className="flex justify-between mt-16">
              <div className="text-center w-1/2">
                <p className="mb-16 font-semibold">PIHAK PERTAMA</p>
                <p className="font-bold uppercase">{data.namaPengirim || '___________'}</p>
              </div>
              <div className="text-center w-1/2">
                <p className="mb-16 font-semibold">PIHAK KEDUA</p>
                <p className="font-bold uppercase">{data.namaPenerima || '___________'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Main App Component
  export default function App() {
    const [viewMode, setViewMode] = useState('form');
    const [openSections, setOpenSections] = useState({
      pengirim: true,
      penerima: false,
      isi: false
    });

    const [formData, setFormData] = useState({
      // Data Pengirim (Pihak Pertama)
      namaPengirim: '',
      alamatPengirim: '',
      nikPengirim: '',
      
      // Data Penerima (Pihak Kedua)
      namaPenerima: '',
      jabatanPenerima: '',
      instansiPenerima: '',
      alamatPenerima: '',
      nikPenerima: '',
      
      // Isi Surat
      tanggalSurat: '',
      tempatSurat: '',
      lokasiObjek: '',
      peruntukanObjek: '',
      jangkaWaktu: '',
      jangkaWaktuTerbilang: '',
      tanggalMulai: '',
      tanggalSelesai: '',
      hargaSewa: '',
      hargaSewaTerbilang: '',
      metodePembayaran: 'tunai/transfer'
    });

    const toggleSection = (section) => {
      setOpenSections(prev => ({
        ...prev,
        [section]: !prev[section]
      }));
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handlePrint = () => {
      window.print();
    };

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200 print:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="w-32 h-32 border-gray-300 rounded-xl shadow-[5px_5px_12px_rgba(0,0,0,0.11)]">
                <img src={logo} alt="Logo"/>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Generator Surat Perjanjian Sewa</h1>
                <p className="text-sm text-gray-600">Buat surat resmi dengan mudah dan cepat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left Panel - Form */}
            <div
                className={`
                  lg:col-span-2 print:hidden
                  ${viewMode === 'preview' ? 'hidden' : 'block'}
                  lg:block
                `}
              >
              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">💡</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Tips:</p>
                    <p className="text-sm text-gray-600">
                      Pastikan semua data terisi dengan benar sebelum mencetak surat. 
                      Gunakan bahasa yang formal dan sopan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 inline-flex items-center justify-center text-sm mr-2">1</span>
                  Isi Data Surat
                </h2>

                {/* Informasi Pengirim */}
                <Accordion
                  title="Informasi Pengirim"
                  icon={User}
                  isOpen={openSections.pengirim}
                  onToggle={() => toggleSection('pengirim')}
                >
                  <InputField
                    label="Nama Lengkap (Pihak Pertama)"
                    name="namaPengirim"
                    value={formData.namaPengirim}
                    onChange={handleInputChange}
                    placeholder="Bagus Ibrahim Aji"
                  />
                  <TextareaField
                    label="Alamat Lengkap"
                    name="alamatPengirim"
                    value={formData.alamatPengirim}
                    onChange={handleInputChange}
                    placeholder="Jalan Setu Cilangkap Nomor 23, RT 003, RW 003..."
                    rows={4}
                  />
                  <InputField
                    label="NIK"
                    name="nikPengirim"
                    value={formData.nikPengirim}
                    onChange={handleInputChange}
                    placeholder="3329060408890001"
                  />
                </Accordion>

                {/* Informasi Penerima */}
                <Accordion
                  title="Informasi Penerima"
                  icon={Mail}
                  isOpen={openSections.penerima}
                  onToggle={() => toggleSection('penerima')}
                >
                  <InputField
                    label="Nama Lengkap (Pihak Kedua)"
                    name="namaPenerima"
                    value={formData.namaPenerima}
                    onChange={handleInputChange}
                    placeholder="Eva Mardiana"
                  />
                  <InputField
                    label="Jabatan"
                    name="jabatanPenerima"
                    value={formData.jabatanPenerima}
                    onChange={handleInputChange}
                    placeholder="Komisaris"
                  />
                  <InputField
                    label="Nama Instansi/Perusahaan"
                    name="instansiPenerima"
                    value={formData.instansiPenerima}
                    onChange={handleInputChange}
                    placeholder="CV. NAQI PUTRI KENCANA"
                  />
                  <TextareaField
                    label="Alamat Lengkap"
                    name="alamatPenerima"
                    value={formData.alamatPenerima}
                    onChange={handleInputChange}
                    placeholder="Jalan Setu Cilangkap Nomor 23, RT 003, RW 003..."
                    rows={4}
                  />
                  <InputField
                    label="NIK"
                    name="nikPenerima"
                    value={formData.nikPenerima}
                    onChange={handleInputChange}
                    placeholder="3276025703970003"
                  />
                </Accordion>

                {/* Isi Surat */}
                <Accordion
                  title="Isi Surat"
                  icon={FileEdit}
                  isOpen={openSections.isi}
                  onToggle={() => toggleSection('isi')}
                >
                  <InputField
                    label="Tanggal Surat"
                    name="tanggalSurat"
                    value={formData.tanggalSurat}
                    onChange={handleInputChange}
                    type="date"
                  />
                  <InputField
                    label="Tempat Pembuatan Surat"
                    name="tempatSurat"
                    value={formData.tempatSurat}
                    onChange={handleInputChange}
                    placeholder="Kota Depok"
                  />
                  <TextareaField
                    label="Lokasi Objek Sewa"
                    name="lokasiObjek"
                    value={formData.lokasiObjek}
                    onChange={handleInputChange}
                    placeholder="Jalan Setu Cilangkap Nomor 23, RT 003, RW 003..."
                    rows={3}
                  />
                  <InputField
                    label="Peruntukan Objek"
                    name="peruntukanObjek"
                    value={formData.peruntukanObjek}
                    onChange={handleInputChange}
                    placeholder="kantor/kegiatan usaha"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <InputField
                      label="Jangka Waktu"
                      name="jangkaWaktu"
                      value={formData.jangkaWaktu}
                      onChange={handleInputChange}
                      placeholder="1"
                    />
                    <InputField
                      label="Terbilang"
                      name="jangkaWaktuTerbilang"
                      value={formData.jangkaWaktuTerbilang}
                      onChange={handleInputChange}
                      placeholder="satu tahun"
                    />
                  </div>
                  <InputField
                    label="Tanggal Mulai Sewa"
                    name="tanggalMulai"
                    value={formData.tanggalMulai}
                    onChange={handleInputChange}
                    type="date"
                  />
                  <InputField
                    label="Tanggal Selesai Sewa"
                    name="tanggalSelesai"
                    value={formData.tanggalSelesai}
                    onChange={handleInputChange}
                    type="date"
                  />
                  <InputField
                    label="Harga Sewa (Angka)"
                    name="hargaSewa"
                    value={formData.hargaSewa}
                    onChange={handleInputChange}
                    placeholder="1.000.000"
                  />
                  <InputField
                    label="Harga Sewa (Terbilang)"
                    name="hargaSewaTerbilang"
                    value={formData.hargaSewaTerbilang}
                    onChange={handleInputChange}
                    placeholder="Satu Juta"
                  />
                  <InputField
                    label="Metode Pembayaran"
                    name="metodePembayaran"
                    value={formData.metodePembayaran}
                    onChange={handleInputChange}
                    placeholder="tunai/transfer"
                  />
                </Accordion>
              </div>
            </div>

            {/* Right Panel - Preview */}
            <div
              className={`
                lg:col-span-3
                ${viewMode === 'form' ? 'hidden' : 'block'}
                lg:block
              `}
            >
              <div className="print:hidden mb-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-800">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 inline-flex items-center justify-center text-sm mr-2">2</span>
                    Pratinjau Hasil
                  </h2>
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm"
                  >
                    <Download className="w-5 h-5" />
                    Cetak PDF
                  </button>
                </div>
              </div>

              <PreviewSurat data={formData} />
            </div>
          </div>
        </div>

        {/* Print Styles */}
        <style>{`
          @media print {
            body {
              margin: 0;
              padding: 0;
            }
            
            .print\\:hidden {
              display: none !important;
            }
            
            @page {
              size: A4;
              margin: 2cm;
            }
          }
        `}</style>
        <div className="fixed bottom-4 right-4 z-50 lg:hidden">
          <button
            onClick={() =>
              setViewMode(viewMode === 'form' ? 'preview' : 'form')
            }
            className="
              w-14 h-14
              rounded-full
              bg-blue-600 hover:bg-blue-700
              text-white
              flex items-center justify-center
              shadow-lg
              transition-all
              active:scale-95
            "
            aria-label="Toggle View"
          >
            {/* Icon */}
            {viewMode === 'form' ? (
              <FileText className="w-6 h-6" />
            ) : (
              <FileEdit className="w-6 h-6" />
            )}

            {/* Aksesibilitas label */}
            <span className="sr-only">
              {viewMode === 'form' ? 'Lihat Preview' : 'Edit Form'}
            </span>
          </button>
        </div>

      </div>
    );
  }