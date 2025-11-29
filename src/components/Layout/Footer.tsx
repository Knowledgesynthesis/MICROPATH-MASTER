export function Footer() {
  return (
    <footer className="mt-auto border-t bg-background">
      <div className="container px-4 py-6 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2024 MicroPath Master. Educational purposes only.
          </p>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            Not for clinical use or patient care.
          </p>
        </div>
      </div>
    </footer>
  )
}
