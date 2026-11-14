import React, { useState } from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';
import { BlogChartSpec } from '../../types/blog';

interface BlogChartCardProps {
  chart: BlogChartSpec;
}

/** Lightweight, zero-dependency interactive Analytics Chart & KPI Dashboard card. */
const BlogChartCard: React.FC<BlogChartCardProps> = ({ chart }) => {
  const [activeIdx, setActiveIdx] = useState<number>(chart.points.length - 1);
  const maxValue = Math.max(
    1,
    ...chart.points.flatMap((p) => [p.primary, p.secondary ?? 0])
  );

  const svgWidth = 640;
  const svgHeight = 230;
  const padX = 40;
  const padTop = 20;
  const padBottom = 34;
  const innerW = svgWidth - padX * 2;
  const innerH = svgHeight - padTop - padBottom;

  const pointsCount = chart.points.length;
  const xAt = (idx: number) =>
    pointsCount <= 1 ? padX + innerW / 2 : padX + (idx / (pointsCount - 1)) * innerW;
  const yAt = (val: number) => padTop + innerH - (val / maxValue) * innerH;

  const primaryPolyline = chart.points
    .map((p, i) => `${xAt(i).toFixed(1)},${yAt(p.primary).toFixed(1)}`)
    .join(' ');
  const areaPolygon = `${padX},${padTop + innerH} ${primaryPolyline} ${xAt(
    pointsCount - 1
  ).toFixed(1)},${padTop + innerH}`;
  const secondaryPolyline = chart.secondaryLabel
    ? chart.points
        .map((p, i) => `${xAt(i).toFixed(1)},${yAt(p.secondary ?? 0).toFixed(1)}`)
        .join(' ')
    : '';

  const activePoint = chart.points[activeIdx] || chart.points[0];

  return (
    <div className="inkica-glass-card rounded-2xl p-5 sm:p-7 space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#1E40FF]">
            <BarChart3 size={14} />
            <span>Live Metrics &amp; Growth Telemetry</span>
          </div>
          <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
            {chart.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">{chart.subtitle}</p>
        </div>

        {/* Active Hover Readout Pill */}
        {activePoint && (
          <div className="rounded-xl bg-blue-50/90 border border-blue-200 px-3.5 py-2 text-right shrink-0">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              {activePoint.label}
            </div>
            <div className="text-sm font-black text-[#1E40FF]">
              {activePoint.primary}
              {chart.unit}
              {chart.secondaryLabel && activePoint.secondary !== undefined && (
                <span className="ml-2 text-xs font-bold text-slate-500">
                  vs {activePoint.secondary}
                  {chart.unit}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 3 Highlight KPI Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {chart.kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl bg-white/90 border border-slate-200/90 px-4 py-3 shadow-xs"
          >
            <div className="text-[11px] font-semibold text-slate-500">{kpi.label}</div>
            <div className="mt-0.5 flex items-baseline justify-between gap-2">
              <span className="font-display text-xl font-black text-slate-900">{kpi.value}</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                <TrendingUp size={12} />
                {kpi.delta}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Chart Stage */}
      {chart.type === 'funnel' ? (
        <div className="space-y-2.5 pt-1">
          {chart.points.map((pt, idx) => {
            const widthPct = Math.max(18, Math.round((pt.primary / maxValue) * 100));
            const isSelected = activeIdx === idx;
            return (
              <button
                key={pt.label}
                type="button"
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                className={`w-full text-left rounded-xl p-2.5 transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-blue-50/70 border-blue-200'
                    : 'bg-white/75 border-slate-200/70 hover:border-blue-200'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1.5">
                  <span>
                    {idx + 1}. {pt.label}
                  </span>
                  <span className="text-[#1E40FF] font-black">
                    {pt.primary}
                    {chart.unit}
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    style={{ width: `${widthPct}%` }}
                    className="h-full rounded-full bg-gradient-to-r from-[#1E40FF] via-[#2563EB] to-[#06B6D4] transition-all duration-300"
                  />
                </div>
              </button>
            );
          })}
        </div>
      ) : chart.type === 'bar' ? (
        <div className="space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 items-end pt-4 pb-2 px-2 rounded-2xl bg-slate-50/80 border border-slate-200/70 min-h-[210px]">
            {chart.points.map((pt, idx) => {
              const h1 = Math.max(10, Math.round((pt.primary / maxValue) * 130));
              const h2 =
                pt.secondary !== undefined
                  ? Math.max(6, Math.round((pt.secondary / maxValue) * 130))
                  : null;
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={pt.label}
                  type="button"
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex flex-col items-center gap-2 p-2 rounded-xl transition-all cursor-pointer ${
                    isSelected ? 'bg-white shadow-sm ring-1 ring-blue-200' : 'hover:bg-white/70'
                  }`}
                >
                  <div className="flex items-end justify-center gap-1.5 h-[138px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[10px] font-extrabold text-[#1E40FF]">
                        {pt.primary}
                        {chart.unit.trim()}
                      </span>
                      <div
                        style={{ height: `${h1}px` }}
                        className="w-6 sm:w-7 rounded-t-lg bg-gradient-to-t from-[#1E40FF] to-[#0EA5E9] shadow-sm transition-all duration-300"
                      />
                    </div>
                    {h2 !== null && (
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[10px] font-semibold text-slate-400">
                          {pt.secondary}
                          {chart.unit.trim()}
                        </span>
                        <div
                          style={{ height: `${h2}px` }}
                          className="w-5 sm:w-6 rounded-t-lg bg-slate-300 transition-all duration-300"
                        />
                      </div>
                    )}
                  </div>
                  <span className="text-[11px] font-bold text-slate-700 text-center leading-tight line-clamp-2">
                    {pt.label}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-semibold text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-gradient-to-r from-[#1E40FF] to-[#0EA5E9]" />
              {chart.primaryLabel}
            </span>
            {chart.secondaryLabel && (
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-slate-300" />
                {chart.secondaryLabel}
              </span>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="w-full overflow-hidden rounded-2xl bg-slate-50/80 border border-slate-200/70 p-2">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-auto block"
              role="img"
              aria-label={chart.title}
            >
              <defs>
                <linearGradient id="blogAreaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1E40FF" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
                const y = padTop + innerH * (1 - ratio);
                return (
                  <g key={ratio}>
                    <line
                      x1={padX}
                      y1={y}
                      x2={svgWidth - padX}
                      y2={y}
                      stroke="#E2E8F0"
                      strokeDasharray="4 4"
                    />
                    <text
                      x={padX - 8}
                      y={y + 4}
                      textAnchor="end"
                      className="fill-slate-400 text-[10px] font-semibold"
                    >
                      {Math.round(maxValue * ratio)}
                    </text>
                  </g>
                );
              })}

              <polygon points={areaPolygon} fill="url(#blogAreaFill)" />
              {secondaryPolyline && (
                <polyline
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="2.2"
                  strokeDasharray="5 5"
                  points={secondaryPolyline}
                />
              )}
              <polyline
                fill="none"
                stroke="#1E40FF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={primaryPolyline}
              />

              {chart.points.map((pt, i) => {
                const cx = xAt(i);
                const cy = yAt(pt.primary);
                const selected = i === activeIdx;
                return (
                  <g
                    key={pt.label}
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveIdx(i)}
                    onClick={() => setActiveIdx(i)}
                  >
                    <circle
                      cx={cx}
                      cy={cy}
                      r={selected ? 6.5 : 4.5}
                      fill={selected ? '#0EA5E9' : '#1E40FF'}
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                    <text
                      x={cx}
                      y={svgHeight - 10}
                      textAnchor="middle"
                      className={`text-[11px] ${
                        selected ? 'fill-[#1E40FF] font-extrabold' : 'fill-slate-500 font-semibold'
                      }`}
                    >
                      {pt.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-semibold text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-1 rounded-full bg-[#1E40FF]" />
              {chart.primaryLabel}
            </span>
            {chart.secondaryLabel && (
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-0.5 border-t-2 border-dashed border-slate-400" />
                {chart.secondaryLabel}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogChartCard;
