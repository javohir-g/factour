import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {routing} from "@/i18n/routing";
import {notFound} from 'next/navigation';
import {getMessages} from "next-intl/server";
import './globals.css'
import PreloaderWrapper from "@/app/[locale]/components/animation/PreloaderWrapper";
import type { Metadata } from 'next';

type Props = {
    children: React.ReactNode;
    params: Promise<{locale: string}>
};

export const metadata: Metadata = {
    title: 'Factour',
    description: 'Factour - Pushing the Boundaries',
    keywords: ['factour', 'Factour'],
    authors: [{ name: 'Factour Team' }],
    openGraph: {
        title: 'Factour',
        description: 'Factour - Pushing the Boundaries',
        siteName: 'Factour',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Factour',
        description: 'Factour - Pushing the Boundaries',
    },
};

export default async function LocaleLayout({children, params}: Props) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = await getMessages();


    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider messages={messages}>
            <PreloaderWrapper>
                {children}
            </PreloaderWrapper>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}