export function Footer() {
  return (
    <footer className="mt-auto py-8 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Huzaifa Ahmed. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/placeholder" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted hover:text-emerald transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted hover:text-emerald transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
