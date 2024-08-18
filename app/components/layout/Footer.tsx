// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 w-[100vw] min-w-[100vw] max-w-[100vw] bottom-0">
      <div className="max-w-4xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MyEcommerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
