import { Head } from "./head";

import Navbar from "@/components/navbar";
import LanguagesTab from '@/pages/LanguagesTab/LanguagesTab'
import CardsTab from '@/pages/CardsTab/cardsTab'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex-col justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head />
      <Navbar />
      <LanguagesTab />
      <CardsTab />
      {children}
    </main>
  );
}
