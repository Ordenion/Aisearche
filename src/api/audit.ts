// src/api/audit.ts

export type AuditSubmitPayload = {
  fullName: string;
  websiteUrl: string;
  contactEmail: string;
};

export type AuditSubmitResponse = {
  ok: boolean;
  message?: string;
};

type ErrorBody = { message?: string; error?: string };

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function safeReadJson<T>(res: Response): Promise<T | null> {
  const contentType = res.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) return null;
  return (await res.json().catch(() => null)) as T | null;
}

export async function submitAudit(payload: AuditSubmitPayload): Promise<AuditSubmitResponse> {
  // Optional timeout (10s). Remove if you don't want it.
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 10_000);

  try {
    const res = await fetch('/api/audit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const data = await safeReadJson<AuditSubmitResponse | ErrorBody>(res);

    if (!res.ok) {
      const msg =
        (data && 'message' in data && data.message) ||
        (data && 'error' in data && data.error) ||
        `Request failed (${res.status})`;
      throw new ApiError(msg, res.status);
    }

    // If backend returns no JSON, still treat success as ok:true
    return (data ?? { ok: true }) as AuditSubmitResponse;
  } catch (err) {
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw new ApiError('Request timed out', 408);
    }
    throw err;
  } finally {
    window.clearTimeout(timeoutId);
  }
}
