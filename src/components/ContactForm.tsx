import React from "react";

export default function ContactForm() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-md rounded">
      <form className="space-y-4">
        <div>
          <label className="block font-medium mb-1">
            Имя <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Фамилия <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Телефон <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Телеграм</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Сообщение <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            className="w-full border border-gray-300 p-2 rounded h-24 resize-none focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full"
        >
          Отправить
        </button>
      </form>
    </div>
  );
}