import React, { useEffect, useState } from 'react';
import { Menu, X, CalendarDays } from 'lucide-react';

const links = [
  ['Início', 'inicio'], ['Serviços', 'servicos'], ['Equipe', 'equipe'], ['Estrutura', 'estrutura'],
  ['Avaliações', 'avaliacoes'], ['FAQ', 'faq'], ['Contato', 'contato']
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <button className="brand" onClick={() => go('inicio')} aria-label="Ir para o início">
          <span className="brand-mark">V</span>
          <span className="brand-name">Vitta<span>Vet</span></span>
        </button>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}
        </nav>
        <button className="btn btn-primary header-cta" onClick={() => go('agendamento')}>
          <CalendarDays size={17} /> Agendar atendimento
        </button>
        <button className="nav-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`mobile-nav ${open ? 'is-open' : ''}`}>
        <nav className="container" aria-label="Navegação mobile">
          {links.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}<span>→</span></button>)}
          <button className="btn btn-primary" onClick={() => go('agendamento')}><CalendarDays size={18}/> Agendar atendimento</button>
        </nav>
      </div>
    </header>
  );
}
