"use client"

import { useForm } from 'react-hook-form';
import { useState } from 'react';

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('http://localhost:8000/api/send-email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();  // Resetea el formulario después de enviar
      } else {
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Campo Nombre Completo */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
          Nombre Completo
        </label>
        <input
          id="fullName"
          {...register("fullName", { required: "El nombre es obligatorio" })}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 text-gray-800 rounded-md shadow-sm"
        />
        {errors.fullName && <p className="text-error mt-1">{errors.fullName.message}</p>}
      </div>

      {/* Campo Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Correo Electrónico
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "El correo es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "El correo no es válido",
            },
          })}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 text-gray-800 rounded-md shadow-sm"
        />
        {errors.email && <p className="text-error mt-1">{errors.email.message}</p>}
      </div>

      {/* Campo Mensaje */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Mensaje
        </label>
        <textarea
          id="message"
          {...register("message", { required: "El mensaje es obligatorio" })}
          rows={4}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 text-gray-800 rounded-md shadow-sm"
        ></textarea>
        {errors.message && <p className="text-error mt-1">{errors.message.message}</p>}
      </div>

      {/* Botón de Enviar */}
      <div>
        <button
          type="submit"
          className="bg-teal-800 text-white py-2 px-4 rounded hover:bg-teal-900 transition-all"
        >
          Enviar Mensaje
        </button>
      </div>

      {/* Mensaje de éxito */}
      {submitted && <p className="text-green-600 mt-4">¡Gracias por contactarnos!</p>}
    </form>
  );
};

export default ContactForm;
