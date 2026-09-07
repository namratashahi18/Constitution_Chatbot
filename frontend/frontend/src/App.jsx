// App.jsx
// Root component that assembles the full-page Nepal Constitution Chatbot.
// Layout: full-height flex column — Header at top, 3-col main (image | chat | image).

import Header from './components/Header';
import ChatBox from './components/ChatBox';
import './index.css';
import './App.css';

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden">

      {/* Fixed top header with Nepal imagery */}
      <Header />

      {/* Main area: parliament | chatbox | constitution book */}
      <main className="flex flex-1 overflow-hidden items-stretch">

        {/* LEFT — Parliament building */}
        <div className="side-panel side-panel--left hidden lg:flex">
          <img
            src="/parliament.jpg"
            alt="Nepal Parliament Building"
            className="side-image"
          />
          <div className="side-overlay" />
          <p className="side-caption">नेपाल संसद भवन</p>
        </div>

        {/* CENTER — Chat */}
        <ChatBox />

        {/* RIGHT — Constitution book */}
        <div className="side-panel side-panel--right hidden lg:flex">
          <img
            src="/book.webp"
            alt="Nepal Constitution Book"
            className="side-image side-image--book"
          />
          <div className="side-overlay" />
          <p className="side-caption">नेपालको संविधान २०७२</p>
        </div>

      </main>
    </div>
  );
};

export default App;
