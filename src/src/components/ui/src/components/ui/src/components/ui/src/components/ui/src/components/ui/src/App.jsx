import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Badge } from "./components/ui/badge";
import { PhoneCall, CheckCircle2 } from "lucide-react";

const BRAND = "Ascensoprimesrl";
const PHONE_DISPLAY = "1136276198";
const WHATSAPP_NUMBER = "541136276198";
const EMAIL = "info@ascensoprimesrl.com";
const COVERAGE = "CABA";
const LOGO_PATH = "/logo_transparent_white.png";

export default function LandingAscensores() {
  const [form, setForm] = useState({
    nombre: "", email: "", telefono: "", edificio: "", unidades: "",
    mensaje: "Quisiera cotizar mantenimiento para mi edificio.\n\nDatos:\n- Dirección: \n- Cantidad de ascensores: \n- Marca/modelo (si saben): \n- Urgencia: \n",
  });

  const waLink = useMemo(() => {
    const texto = encodeURIComponent(
      `Hola ${BRAND}, soy ${form.nombre || "[tu nombre]"}.\nQuiero un presupuesto de mantenimiento.\nEmail: ${form.email}\nTel: ${form.telefono}\nEdificio: ${form.edificio}\nUnidades: ${form.unidades}\n\n${form.mensaje}`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`;
  }, [form]);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Solicitud de presupuesto – Mantenimiento de ascensores");
    const body = encodeURIComponent(
      `Hola ${BRAND},\n\nQuisiera solicitar un presupuesto.\n\nNombre: ${form.nombre}\nEmail: ${form.email}\nTeléfono: ${form.telefono}\nEdificio: ${form.edificio}\nUnidades: ${form.unidades}\n\nMensaje:\n${form.mensaje}`
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/70 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img src={LOGO_PATH} alt="Ascenso Prime S.R.L" className="h-9 w-auto" />
            <span className="sr-only">{BRAND}</span>
            <Badge className="ml-2">24/7</Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#presentacion" className="hover:underline">Presentación</a>
            <a href="#contactos" className="hover:underline">Contactos</a>
            <a href="#servicios" className="hover:underline">Servicios que brindamos</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={`tel:${PHONE_DISPLAY.replace(/[^+\d]/g, "")}`}>
              <Button className="hidden sm:inline-flex border-white text-white">
                <PhoneCall className="h-4 w-4 mr-2" />Llamar
              </Button>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`}>
              <Button className="bg-white text-black hover:bg-gray-200">WhatsApp</Button>
            </a>
          </div>
        </div>
      </header>

      {/* PRESENTACION */}
      <section id="presentacion" className="relative overflow-hidden py-16 md:py-24 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Bienvenidos a <span className="text-gray-400">Ascenso Prime S.R.L</span>
            </h1>
            <p className="mt-4 text-gray-300 md:text-lg">
              Somos especialistas en mantenimiento de ascensores y elevadores en {COVERAGE}. Contamos con técnicos matriculados, atención 24/7 y años de experiencia garantizando la seguridad de su edificio.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Mantenimiento preventivo y correctivo</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Guardias 24/7</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Modernización y repuestos certificados</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="grid sm:grid-cols-3 gap-4">
              <img src="/images/tecnico-ascensor-1.jpg" alt="Técnico inspeccionando cabina" className="w-full h-40 object-cover rounded-xl shadow-lg border border-gray-700" />
              <img src="/images/tecnico-ascensor-2.jpg" alt="Revisión de puertas y guías" className="w-full h-40 object-cover rounded-xl shadow-lg border border-gray-700" />
              <img src="/images/tecnico-ascensor-3.jpg" alt="Ajustes en tablero de control" className="w-full h-40 object-cover rounded-xl shadow-lg border border-gray-700" />
            </div>
            <p className="text-xs text-gray-400 mt-2">Podés reemplazar estas imágenes subiendo tus fotos a <code>/public/images/</code> con esos nombres.</p>
          </motion.div>
        </div>
      </section>

      {/* CONTACTOS */}
      <section id="contactos" className="py-16 md:py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Contactos</h2>
          <p className="mt-2 text-gray-400">Podés comunicarte con nosotros en cualquier momento:</p>
          <div className="mt-6 space-y-2 text-lg">
            <p><b>Teléfono:</b> {PHONE_DISPLAY}</p>
            <p><b>Email:</b> {EMAIL}</p>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <a href={`tel:${PHONE_DISPLAY.replace(/[^+\d]/g, "")}`}><Button className="border-white text-white">Llamar</Button></a>
            <a href={`mailto:${EMAIL}`}><Button className="bg-white text-black">Enviar Email</Button></a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Servicios que brindamos</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader><CardTitle>Mantenimiento de Ascensores</CardTitle></CardHeader>
              <CardContent><p className="text-gray-300">Visitas periódicas, lubricación, ajustes eléctricos y chequeo integral.</p></CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader><CardTitle>Bombas de Agua</CardTitle></CardHeader>
              <CardContent><p className="text-gray-300">Mantenimiento y reparación de sistemas de bombeo para edificios.</p></CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader><CardTitle>Guardias 24/7</CardTitle></CardHeader>
              <CardContent><p className="text-gray-300">Atención inmediata los 7 días de la semana, las 24 horas.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-700 py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <img src={LOGO_PATH} alt="Ascenso Prime S.R.L" className="h-6 w-auto" />
            <span>© {new Date().getFullYear()} {BRAND}. Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
