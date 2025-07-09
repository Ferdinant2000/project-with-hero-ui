import { Head } from "./head";

import Navbar from "@/components/ui/navbar";
import LanguagesTab from '@/components/ui/LanguagesTab'
import CardsTab from '@/components/ui/cardsTab'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex-col justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head />
      <Navbar />
      <div className="mx-auto px-[16px] py-[32px] max-w-4xl">
      <LanguagesTab />
      <CardsTab />
      </div>
      {children}
    </main>
  );
}
