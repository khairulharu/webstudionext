"use client";

import { useState } from "react";

export default function Contact() {

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch("/api/sendEmail", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          alert('Pesan berhasil dikirim!');
        } else {
          alert('Gagal mengirim pesan.');
        }
      };
     return (
          <>
          <section className="bg-gray-900">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Hubungi Kami</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">Konsultasikan website yang anda inginkan, Mulai dari Tampilan, Desain, Fitur, Fungsi Dan Harga, Kami siap mendevelop website sesuai dengan preferensi anda.</p>
        {/* //add onsubmitt */}
        <form action="#"  onSubmit={handleSubmit} className="space-y-8">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="nama@gmail.com" required/>
            </div>
            <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Nama</label>
                <input type="text" name="name" value={formData.name}  onChange={handleChange} id="subject" className="block p-3 w-full text-sm rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Nama Atau Nama Bisnis Anda" required/>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">Pesan Anda</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="6" className="block p-2.5 w-full text-sm text-white rounded-lg shadow-sm border  bg-gray-700  placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500" placeholder="Pesan Singkat Tentang Website Yang Anda Inginkan."></textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit focus:ring-4 focus:outline-none bg-primary-600 hover:bg-primary-700 focus:ring-primary-300">Kirim Pesan</button>
        </form>
    </div>
  </section>
          </>
     )
}