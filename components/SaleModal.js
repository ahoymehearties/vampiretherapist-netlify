import { useEffect } from 'react';

export default function SaleModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="sale-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Steam Scream Sale">
      <div className="sale-modal" onClick={(e) => e.stopPropagation()}>
        <button className="sale-modal-close" onClick={onClose} aria-label="Close">&#x2715;</button>
        <a
          href="https://store.steampowered.com/app/2481020/Vampire_Therapist/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
        >
          <img
            src="/images/VT-Oct2026Sale.webp"
            alt="Steam Fall Sale — Vampire Therapist 35% off, Oct 26-Nov 2"
          />
        </a>
      </div>
    </div>
  );
}
