import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import "./styles/appLayout.css";
import { ThemeProvider } from "@mui/material/styles";

const AppLayout = ({ children, theme }) => {

  return (
    <ThemeProvider theme={theme}>
      <div
        className="  w-full"
      >
        <Navbar />
        <Search />
        <main className="w-full h-full">
          <div className="min-h-[calc(100vh-64px)] mb-32 md:mb-0 px-5 md:px-0">
            {children}
          </div>

        </main>
        <Footer />
      </div>

    </ThemeProvider>
  );
};

export default AppLayout;
