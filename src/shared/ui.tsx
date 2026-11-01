import type { ReactNode } from 'react';
export function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (<section className="panel"><h2>{title}</h2>{children}</section>);
}
export function SliderField(p: { label: string; value: number; min: number; max: number; step: number; unit?: string; onChange: (v: number) => void }) {
  return (<label className="slider"><span>{p.label} : {p.value}{p.unit ? ' ' + p.unit : ''}</span>
    <input type="range" min={p.min} max={p.max} step={p.step} value={p.value} onChange={(e) => p.onChange(Number(e.target.value))} /></label>);
}
