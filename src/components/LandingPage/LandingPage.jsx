// import { BeakerIcon, SearchIcon, BrainIcon, ArrowRightIcon } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import './ChemBotLanding.css';

// const ChemBotLanding = () => {
//   return (
//     <div className="chembot-landing">
//       {/* <header className="header">
//         <div className="container">
//           <h1 className="logo">Chem<span>Bot</span></h1>
//           <nav className="nav">
//             <a href="#features">Features</a>
//             <a href="#about">About</a>
//             <a href="#contact">Contact</a>
//             <Link to="/chat" className="chat-link">
//               Try ChatBot
//             </Link>
//           </nav>
//         </div>
//       </header> */}

//       <main className="main">
//         <div className="container">
//           <section className="hero">
//             <h2>Advanced Chemical Information Retrieval</h2>
//             <p>Powered by LLama-8B and Corrective-RAG Technology</p>
//             <div className="icon-container">
//               <div className="icon-wrapper">
//                 <BeakerIcon size={48} className="icon" />
//                 <span>Analysis</span>
//               </div>
//               <div className="icon-wrapper">
//                 <SearchIcon size={48} className="icon" />
//                 <span>Search</span>
//               </div>
//               <div className="icon-wrapper">
//                 <BrainIcon size={48} className="icon" />
//                 <span>Intelligence</span>
//               </div>
//             </div>
//           </section>

//           <section id="features" className="features">
//             <div className="feature-card">
//               <h3>LLama-8B Model</h3>
//               <p>Our cutting-edge large language model understands and generates human-like text, processing complex queries with ease.</p>
//             </div>
//             <div className="feature-card">
//               <h3>Retrieval-Augmented Generation (RAG)</h3>
//               <p>Combining generative capabilities with information retrieval for accurate, context-rich responses.</p>
//             </div>
//             <div className="feature-card">
//               <h3>Corrective-RAG</h3>
//               <p>Advanced reranking mechanism that refines retrieved documents for improved precision and relevance.</p>
//             </div>
//             <div className="feature-card">
//               <h3>Comprehensive Chemical Knowledge</h3>
//               <p>Navigate the intricacies of chemical language and concepts with our extensive and diverse dataset.</p>
//             </div>
//           </section>

//           <section className="cta">
//             <h2>Experience the Future of Chemical Information Retrieval</h2>
//             <Link to="/chat" className="cta-button">
//               Get Started with ChemBot
//               <ArrowRightIcon size={20} className="arrow-icon" />
//             </Link>
//           </section>
//         </div>
//       </main>

//       <footer className="footer">
//         <div className="container">
//           <p>&copy; 2024 ChemBot Project. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ChemBotLanding;

import { BeakerIcon, SearchIcon, BrainIcon, ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './ChemBotLanding.module.css';

const ChemBotLanding = () => {
  return (
    <div className={styles.chembotLanding}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.logo}>Chem<span>Bot</span></h1>
          <nav className={styles.nav}>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <Link to="/chat" className={styles.chatLink}>
              Try ChatBot
            </Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <h2>Advanced Chemical Information Retrieval</h2>
            <p>Powered by LLama-8B and Corrective-RAG Technology</p>
            <div className={styles.iconContainer}>
              <div className={styles.iconWrapper}>
                <BeakerIcon size={48} className={styles.icon} />
                <span>Analysis</span>
              </div>
              <div className={styles.iconWrapper}>
                <SearchIcon size={48} className={styles.icon} />
                <span>Search</span>
              </div>
              <div className={styles.iconWrapper}>
                <BrainIcon size={48} className={styles.icon} />
                <span>Intelligence</span>
              </div>
            </div>
          </section>

          <section id="features" className={styles.features}>
            <div className={styles.featureCard}>
              <h3>LLama-8B Model</h3>
              <p>Our cutting-edge large language model understands and generates human-like text, processing complex queries with ease.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Retrieval-Augmented Generation (RAG)</h3>
              <p>Combining generative capabilities with information retrieval for accurate, context-rich responses.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Corrective-RAG</h3>
              <p>Advanced reranking mechanism that refines retrieved documents for improved precision and relevance.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Comprehensive Chemical Knowledge</h3>
              <p>Navigate the intricacies of chemical language and concepts with our extensive and diverse dataset.</p>
            </div>
          </section>

          <section className={styles.cta}>
            <h2>Experience the Future of Chemical Information Retrieval</h2>
            <Link to="/chat" className={styles.ctaButton}>
              Get Started with ChemBot
              <ArrowRightIcon size={20} className={styles.arrowIcon} />
            </Link>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; 2024 ChemBot Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ChemBotLanding;
