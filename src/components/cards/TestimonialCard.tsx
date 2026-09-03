import { MessageSquare } from 'lucide-react';

export default function TestimonialCard() {
  return (
    <div className="premium-card flex flex-col items-center justify-center p-10 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.06]">
        <MessageSquare className="h-6 w-6 text-ink-400" />
      </div>
      <p className="mt-5 text-sm text-ink-400">Client feedback will appear here.</p>
    </div>
  );
}
