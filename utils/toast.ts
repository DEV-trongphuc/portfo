export interface ToastDetail {
  message: string;
}

const TOAST_EVENT = 'turnio:toast';

/** Dispatch a transient global toast notification. */
export function showToast(message: string): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent<ToastDetail>(TOAST_EVENT, { detail: { message } }));
}

/** Copy string to clipboard with graceful fallback and toast confirmation. */
export async function copyWithToast(value: string, label?: string): Promise<void> {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      showToast(label ? `Đã sao chép ${label}: ${value}` : `Đã sao chép: ${value}`);
      return;
    } catch {
      // Fallback below
    }
  }
  showToast(label ? `${label}: ${value}` : value);
}

export function subscribeToast(handler: (message: string) => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const listener = (e: Event) => {
    const custom = e as CustomEvent<ToastDetail>;
    if (custom.detail?.message) handler(custom.detail.message);
  };
  window.addEventListener(TOAST_EVENT, listener);
  return () => window.removeEventListener(TOAST_EVENT, listener);
}
