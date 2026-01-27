import Footer from '../components/landing/Footer';
import Header from '../components/landing/Header';
import AuditForm from '../components/landing/AuditForm';

const Audit = () => {
  return (
    <div className="min-h-screen bg-page flex flex-col">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />

      <main className="flex-1">
        <AuditForm />
      </main>

      <Footer />
    </div>
  );
};

export default Audit;