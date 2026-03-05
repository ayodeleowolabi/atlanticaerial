function Footer() {
  return (
    <footer className="bg-black text-white/60 px-10 py-8 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex justify-between">
        <span>Atlantic Aerials</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default Footer;