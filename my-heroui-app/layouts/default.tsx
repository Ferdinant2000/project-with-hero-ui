import { Head } from "./head";

import Navbar from "@/components/navbar";
import LanguageTab from '@/pages/Tabs/LanguageTab'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head />
      <Navbar />
      <LanguageTab />
      {children}
    </main>
  );
}
