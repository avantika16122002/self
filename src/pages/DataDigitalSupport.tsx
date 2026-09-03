import { ArrowRight, Database, FileSpreadsheet, FileText, Keyboard, Search, Copy, Type, Table } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import CTASection from '@/components/sections/CTASection';

const dataServices = [
  { icon: FileSpreadsheet, name: 'Data Entry' },
  { icon: Table, name: 'Excel' },
  { icon: Table, name: 'Google Sheets' },
  { icon: Database, name: 'Data Cleaning' },
  { icon: FileText, name: 'PDF Conversion' },
  { icon: Keyboard, name: 'Typing' },
  { icon: Search, name: 'Web Research' },
  { icon: Copy, name: 'Copy-Paste' },
  { icon: Type, name: 'Document Formatting' },
  { icon: Database, name: 'Data Collection' },
];

export default function DataDigitalSupport() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-accent-500/10 blur-[100px]" />
        <div className="container-page relative">
          <Reveal>
            <Badge variant="accent" className="mb-5">
              <Database className="h-3.5 w-3.5" />
              Data & Digital Support
            </Badge>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl text-balance">
              Reliable Digital Support for the <span className="text-gradient-accent">Work You Don't Have Time For.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-lg text-ink-300 text-balance">
              Accurate support for repetitive, administrative and data-heavy digital work — handled with care and precision.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="border-y border-white/[0.06] bg-ink-900/30 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeader eyebrow="Services" title="Data & Digital Support Services" />
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {dataServices.map((service, i) => (
              <Reveal key={service.name} delay={i * 50}>
                <div className="premium-card flex flex-col items-center gap-3 p-6 text-center h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
                    <service.icon className="h-5 w-5 text-accent-400" />
                  </div>
                  <span className="text-sm font-medium text-white">{service.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After data cleaning */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <SectionHeader eyebrow="Example" title="Data Cleaning in Action" description="From messy, unstructured data to clean, organized spreadsheets." />
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Messy Data */}
            <div className="premium-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-md bg-error-500/10 border border-error-500/20 px-2.5 py-1 text-xs font-medium text-error-500">Messy Data</span>
              </div>
              <div className="space-y-2 font-mono text-xs text-ink-400">
                <div className="rounded-lg bg-ink-900/50 p-3">john doe, 25, n/a</div>
                <div className="rounded-lg bg-ink-900/50 p-3">JANE  DOE | 28 | NULL</div>
                <div className="rounded-lg bg-ink-900/50 p-3">j.doe - 25 - ?</div>
                <div className="rounded-lg bg-ink-900/50 p-3">Jane Doe,28,</div>
              </div>
            </div>

            {/* Clean Data */}
            <div className="premium-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-md bg-warning-500/10 border border-warning-500/20 px-2.5 py-1 text-xs font-medium text-warning-500">Clean Data</span>
              </div>
              <div className="space-y-2 font-mono text-xs text-ink-300">
                <div className="rounded-lg bg-ink-900/50 p-3">John Doe | 25 | N/A</div>
                <div className="rounded-lg bg-ink-900/50 p-3">Jane Doe | 28 | N/A</div>
                <div className="rounded-lg bg-ink-900/50 p-3">John Doe | 25 | N/A</div>
                <div className="rounded-lg bg-ink-900/50 p-3">Jane Doe | 28 | N/A</div>
              </div>
            </div>

            {/* Organized Spreadsheet */}
            <div className="premium-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-md bg-success-500/10 border border-success-500/20 px-2.5 py-1 text-xs font-medium text-success-500">Organized</span>
              </div>
              <div className="overflow-hidden rounded-lg border border-white/[0.06]">
                <table className="w-full text-xs">
                  <thead className="bg-ink-800/50">
                    <tr>
                      <th className="px-3 py-2 text-left font-medium text-ink-300">Name</th>
                      <th className="px-3 py-2 text-left font-medium text-ink-300">Age</th>
                      <th className="px-3 py-2 text-left font-medium text-ink-300">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-400">
                    <tr className="border-t border-white/[0.04]"><td className="px-3 py-2">John Doe</td><td className="px-3 py-2">25</td><td className="px-3 py-2">N/A</td></tr>
                    <tr className="border-t border-white/[0.04]"><td className="px-3 py-2">Jane Doe</td><td className="px-3 py-2">28</td><td className="px-3 py-2">N/A</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-12 text-center">
            <Button to="/contact" size="lg">
              Send Your Task
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
