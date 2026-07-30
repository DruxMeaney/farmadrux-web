import type { Foto } from "./data/photos";

// Baraja la galería con aleatoriedad controlada conservando dos reglas:
// 1) dura: dos fotos de la misma serie (misma sesión/escena) nunca quedan
//    consecutivas — ni en "Todas" ni dentro de una categoría filtrada;
// 2) suave: se evita repetir el estilo visual (b/n, nocturna, estudio...)
//    en posiciones contiguas siempre que sea posible.

function mezclar<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function eleccionPonderada<T>(items: T[], peso: (t: T) => number): T {
  const total = items.reduce((s, it) => s + peso(it), 0);
  let r = Math.random() * total;
  for (const it of items) {
    r -= peso(it);
    if (r <= 0) return it;
  }
  return items[items.length - 1];
}

interface Cola {
  clave: string;
  items: Foto[];
}

// Intercala colas eligiendo al azar sin repetir la clave anterior (regla dura
// salvo que sea inevitable) y prefiriendo cambiar de estilo (regla suave).
// Si una cola concentra más de la mitad de lo que falta, se toma de ella
// obligatoriamente para no pintarse en una esquina.
function intercalar(colas: Cola[], preservarOrden: boolean): Foto[] {
  const vivas = () => colas.filter((c) => c.items.length > 0);
  const out: Foto[] = [];
  let ultimaClave: string | null = null;
  let ultimoEstilo: string | null = null;

  if (!preservarOrden) for (const c of colas) c.items = mezclar(c.items);

  let restante = colas.reduce((s, c) => s + c.items.length, 0);
  while (restante > 0) {
    const activas = vivas();
    const mayor = activas.reduce((a, b) => (b.items.length > a.items.length ? b : a));
    let pool: Cola[];
    if (mayor.items.length * 2 > restante) {
      // obligatorio drenar la cola dominante
      pool = [mayor];
    } else {
      const sinRepetir = activas.filter((c) => c.clave !== ultimaClave);
      const base = sinRepetir.length ? sinRepetir : activas;
      const distintoEstilo = base.filter((c) => c.items[0].estilo !== ultimoEstilo);
      pool = distintoEstilo.length ? distintoEstilo : base;
    }
    const elegida = eleccionPonderada(pool, (c) => c.items.length);
    const foto = elegida.items.shift()!;
    out.push(foto);
    ultimaClave = elegida.clave;
    ultimoEstilo = foto.estilo;
    restante--;
  }
  return out;
}

export function barajarGaleria(fotos: Foto[]): Foto[] {
  // etapa 1: dentro de cada categoría, separar series (rige vistas filtradas)
  const porCat = new Map<string, Foto[]>();
  for (const f of fotos) {
    if (!porCat.has(f.cat)) porCat.set(f.cat, []);
    porCat.get(f.cat)!.push(f);
  }
  const catsOrdenadas = new Map<string, Foto[]>();
  for (const [cat, arr] of porCat) {
    const series = new Map<string, Foto[]>();
    for (const f of arr) {
      if (!series.has(f.serie)) series.set(f.serie, []);
      series.get(f.serie)!.push(f);
    }
    const colas: Cola[] = [...series.entries()].map(([clave, items]) => ({ clave, items }));
    catsOrdenadas.set(cat, intercalar(colas, false));
  }

  // etapa 2: intercalar categorías preservando su orden interno
  const colasCat: Cola[] = [...catsOrdenadas.entries()].map(([clave, items]) => ({ clave, items }));
  return intercalar(colasCat, true);
}
