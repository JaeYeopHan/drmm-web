
export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 akind studio. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <a href="mailto:ljyhanll@gmail.com" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

