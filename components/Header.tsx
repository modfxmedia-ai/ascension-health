"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import { NAVIGATION, SITE, type NavItem } from "@/lib/navigation";
import { cn } from "@/lib/cn";
import logo from "@/images/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer open
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="hidden md:block bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950 text-brand-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs tracking-wide">
          <div className="flex items-center gap-5">
            <a
              href={SITE.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden />
              <span>{SITE.address}</span>
            </a>
            <span className="text-brand-300/40">|</span>
            <span className="text-brand-100/80">{SITE.hours}</span>
          </div>
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-1.5 font-medium hover:text-accent transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-accent" aria-hidden />
            <span>{SITE.phone}</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "transition-all duration-300 backdrop-blur-xl",
          scrolled
            ? "bg-white/95 shadow-[0_8px_30px_-12px_rgba(43,56,32,0.25)] border-b border-brand-100/60"
            : "bg-white/90 border-b border-slate-100"
        )}
      >
        <div className="mx-auto flex h-20 sm:h-22 lg:h-24 max-w-7xl items-center justify-between gap-6 lg:gap-10 xl:gap-14 px-6">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center -my-1"
            aria-label="Ascension Health — Home"
          >
            <Image
              src={logo}
              alt="Ascension Health"
              priority
              quality={95}
              className="h-14 w-auto sm:h-16 lg:h-20 object-contain"
              sizes="(min-width: 1024px) 260px, (min-width: 640px) 220px, 180px"
            />
          </Link>

          {/* Desktop nav */}
          <DesktopNav />

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={SITE.phoneHref}
              className="hidden xl:flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-brand-700 transition-colors whitespace-nowrap"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {SITE.phone}
            </a>
            <Link
              href={SITE.appointmentsHref}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group relative hidden lg:inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-br from-brand-600 to-brand-800 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-900/20 hover:shadow-lg hover:shadow-brand-900/30 hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Request Appointment</span>
            </Link>
            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

/* ------------------------------- Desktop ------------------------------- */

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex" aria-label="Primary">
      <ul className="flex items-center gap-0">
        {NAVIGATION.map((item) =>
          item.children ? (
            <DesktopMenuWithChildren key={item.label} item={item} />
          ) : (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center whitespace-nowrap rounded-md px-1.5 py-1.5 text-[13px] font-medium text-slate-700 hover:text-brand-700"
              >
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

function DesktopMenuWithChildren({ item }: { item: NavItem }) {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <li
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onFocus={() => {
        cancelClose();
        setOpen(true);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <Link
        href={item.href}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={cn(
          "group inline-flex items-center gap-1 whitespace-nowrap rounded-md px-1.5 py-1.5 text-[13px] font-medium",
          "text-slate-700 hover:text-brand-700 outline-none",
          open && "text-brand-700"
        )}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5" aria-hidden />
      </Link>

      {open && (
        <div
          className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2"
          role="menu"
        >
          <div className="w-[560px] rounded-xl border border-slate-100 bg-white p-4 shadow-xl">
            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
              <Link
                href={item.href}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="col-span-2 mb-2 flex items-center justify-between rounded-lg bg-brand-50/60 px-4 py-3 text-sm font-semibold text-brand-800 hover:bg-brand-50"
              >
                <span>All {item.label}</span>
                <span aria-hidden>→</span>
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-700"
                  role="menuitem"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

/* -------------------------------- Mobile ------------------------------- */

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <span className="font-serif text-lg font-semibold text-slate-900">
                Ascension Health
              </span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4">
              {NAVIGATION.map((item) => (
                <MobileItem key={item.label} item={item} onNavigate={onClose} />
              ))}
            </nav>

            <div className="border-t border-slate-100 px-5 py-4 space-y-3 bg-slate-50">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 text-sm font-medium text-slate-800"
              >
                <Phone className="h-4 w-4 text-brand-700" />
                {SITE.phone}
              </a>
              <a
                href={SITE.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-slate-600"
              >
                <MapPin className="h-4 w-4 mt-0.5 text-brand-700 shrink-0" />
                <span>{SITE.address}</span>
              </a>
              <Link
                href={SITE.appointmentsHref}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onClose();
                }}
                className="flex w-full items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-800"
              >
                Request Appointment
              </Link>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = React.useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          onNavigate();
        }}
        className="block rounded-md px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-700"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-50"
        aria-expanded={open}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-2 pl-3">
              <Link
                href={item.href}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onNavigate();
                }}
                className="block rounded-md px-3 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50"
              >
                All {item.label} →
              </Link>
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    onNavigate();
                  }}
                  className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-700"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
