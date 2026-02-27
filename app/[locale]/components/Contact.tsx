"use client";

import { useTranslations } from "next-intl";
import { Figtree } from "next/font/google";
import Image from "next/image";
import { useState, } from "react";

const figtreeLight = Figtree({ weight: "300", subsets: ["latin"] });


export default function Contact() {
    const t = useTranslations("contact");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (submitResult) setSubmitResult(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitResult(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitResult({ type: 'success', message: t("form.success") });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitResult({ type: 'error', message: t("form.error") });
            }
        } catch (error) {
            setSubmitResult({ type: 'error', message: t("form.error") });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id={"contact"} className="bg-cream py-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-12">
                <div className="grid gap-10 md:gap-20 md:grid-cols-2 items-start">
                    {/* LEFT: text + logo image */}
                    <div className="space-y-10 flex flex-col">
                        <div className={"w-full md:w-[80%] self-center"}>
                            <div className="h-px bg-primary/40 mb-8" />
                            <h2
                                className={`${figtreeLight.className} italic text-4xl lg:text-5xl text-primary mb-6`}
                            >
                                {t("title")}
                            </h2>
                            <p className="text-primary/80 text-justify md:text-start leading-relaxed text-sm lg:text-base whitespace-pre-line">
                                {t("text")}
                            </p>
                        </div>

                        <div className="w-full h-[50px] md:h-[100px] relative my-3">
                            <Image
                                src="/factour_text_black.png"
                                alt="Factour logo"
                                fill
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>

                    {/* RIGHT: form */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6 w-full ml-auto"
                    >
                        {/* First name */}
                        <div className="relative w-full">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="peer w-full border border-primary/30 rounded-sm px-3 py-3 text-sm placeholder-transparent bg-transparent focus:outline-none focus:border-[#222222]"
                                placeholder={t("form.firstName")}
                                id="contact-first-name"
                            />
                            <label
                                htmlFor="contact-first-name"
                                className="absolute left-3 -top-2.5 bg-cream px-1 text-xs text-primary/60 transition-all
                                    peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/40
                                    peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#222222]"
                            >
                                {t("form.firstName")}
                            </label>
                        </div>

                        {/* Email */}
                        <div className="relative w-full">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="peer w-full border border-primary/30 rounded-sm px-3 py-3 text-sm placeholder-transparent bg-transparent focus:outline-none focus:border-[#222222]"
                                placeholder={t("form.email")}
                                id="contact-email"
                            />
                            <label
                                htmlFor="contact-email"
                                className="absolute left-3 -top-2.5 bg-cream px-1 text-xs text-primary/60 transition-all
                                    peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/40
                                    peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#222222]"
                            >
                                {t("form.email")}
                            </label>
                        </div>

                        {/* Message (textarea with same floating label style) */}
                        <div className="relative w-full">
                            <textarea
                                name="message"
                                value={formData.message}
                                required
                                onChange={handleInputChange}
                                rows={4}
                                className="peer w-full border border-primary/30 rounded-sm px-3 py-3 text-sm placeholder-transparent bg-transparent focus:outline-none focus:border-[#222222] resize-none"
                                placeholder={t("form.message")}
                                id="contact-message"
                            />
                            <label
                                htmlFor="contact-message"
                                className="absolute left-3 -top-2.5 bg-cream px-1 text-xs text-primary/60 transition-all
                                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/40
                                    peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#222222]"
                            >
                                {t("form.message")}
                            </label>
                        </div>
                        <div className={"py-0 md:py-3"}>
                            {submitResult && (
                                <p className={`text-sm ${submitResult.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                                    {submitResult.message}
                                </p>
                            )}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="py-3 w-[70%] self-center bg-primary rounded-sm text-cream text-sm uppercase font-semibold hover:bg-primary/80 transition"
                        >
                            {t("form.submit")}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
