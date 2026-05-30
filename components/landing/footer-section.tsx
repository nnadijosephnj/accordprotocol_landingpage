export function FooterSection() {
  return (
    <footer className="border-t border-black/10 bg-white px-6 py-8 text-black lg:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <img src="/accordlogoBLACKO.svg" alt="Accord Protocol" className="h-8 w-auto" />
        <p className="text-sm text-black/65">
          Copyright © 2026 Nnadi Joseph (Accord Protocol). All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
