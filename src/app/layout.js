import AnantaNavigationBar from "./components/ananta_navigation_bar";
import "./globals.css";

export const metadata = {
  title: "Ananta. | Empowering the future of work",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnantaNavigationBar />
        <div class="h-[5.3125rem]  lg:h-[6.875rem]"></div>
        {children}
      </body>
    </html>
  );
}
