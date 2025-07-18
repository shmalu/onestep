import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Wiadomość wysłana!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="text-gray-800 bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md">
        <img src="/logoOS.png" alt="One Step logo" className="h-10" />
        <nav className="space-x-4 text-sm md:text-base">
          <a href="#why" className="hover:text-yellow-500">Dlaczego my?</a>
          <a href="#services" className="hover:text-yellow-500">Oferta</a>
          <a href="#testimonials" className="hover:text-yellow-500">Opinie</a>
          <a href="#contact" className="hover:text-yellow-500">Kontakt</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-yellow-100 py-20 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4"
        >
          Zbuduj swoją markę razem z nami!
        </motion.h1>
        <p className="mb-6 text-lg">Nowoczesne rozwiązania marketingowe dla Twojego biznesu.</p>
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600">Skontaktuj się z nami</Button>
      </section>

      {/* Why Us */}
      <section id="why" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Dlaczego warto?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-2">Strategia</h3>
              <p>Spersonalizowane strategie dopasowane do Twoich celów.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-2">Technologia</h3>
              <p>Nowoczesne narzędzia i automatyzacja zwiększające efektywność.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-2">Wsparcie</h3>
              <p>Pomoc techniczna i doradztwo na każdym etapie współpracy.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Nasza Oferta</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-yellow-600 font-semibold text-lg">SEO i Content Marketing</h3>
              <p>Tworzymy treści, które pozycjonują Twoją markę na rynku.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-yellow-600 font-semibold text-lg">Reklama w social media</h3>
              <p>Skuteczne kampanie reklamowe na Facebooku, Instagramie i TikToku.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-yellow-600 font-semibold text-lg">Branding i identyfikacja wizualna</h3>
              <p>Projektujemy spójną tożsamość marki, od logo po design strony.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-6 bg-yellow-50 text-center">
        <h2 className="text-3xl font-bold mb-10">Co mówią nasi klienci?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card><CardContent className="p-6">"Nasza sprzedaż wzrosła o 40% w 3 miesiące!"<br />— <strong>Anna</strong></CardContent></Card>
          <Card><CardContent className="p-6">"Pełen profesjonalizm i realne wyniki. Polecam każdemu!"<br />— <strong>Michał</strong></CardContent></Card>
          <Card><CardContent className="p-6">"Świetna obsługa klienta i szybka realizacja usług."<br />— <strong>Katarzyna</strong></CardContent></Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Skontaktuj się z nami</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
          <Input name="name" value={form.name} onChange={handleChange} placeholder="Imię" required />
          <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Adres e-mail" required />
          <Textarea name="message" value={form.message} onChange={handleChange} placeholder="Wiadomość" rows={5} required />
          <Button type="submit" className="bg-yellow-500 text-white hover:bg-yellow-600">Wyślij wiadomość</Button>
        </form>
      </section>

      <footer className="bg-yellow-100 text-center text-sm py-4 text-gray-600">
        © 2025 One Step. Wszelkie prawa zastrzeżone.
      </footer>
    </div>
  );
}
