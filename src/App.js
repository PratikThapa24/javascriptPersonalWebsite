import "./App.css";
import Body from "./Body";
import Footer from "./Component/Footer";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function App() {
  return (
    <>
      {/* Fixed Social Media Links */}
      <div className="fixed flex flex-col left-0 top-1/2 transform -translate-y-1/2 space-y-4">
        <a
          href="https://github.com/SyntaxErrorThapa"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <GitHubIcon style={{ fontSize: 40 }}/>
        </a>
        <a
          href="https://linkedin.com/in/pthapa4"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <LinkedInIcon style={{ fontSize: 40 }}/>
        </a>
      </div>

      {/* Main Content */}
      <div className="flex flex-col min-h-screen bg-white bg-custom-bg-image font-fira text-custom-text-charcoal">
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
