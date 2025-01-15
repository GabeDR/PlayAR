import Header from "../header";
import Footer from "../footer";

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex flex-col">
                {children}
            </main>
            <Footer />
        </div>
    );
}
