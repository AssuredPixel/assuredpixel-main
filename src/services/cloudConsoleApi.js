/**
 * Cloud & DevOps Console API Service
 *
 * Provisioned for live backend integration via VITE_CLOUD_API_URL.
 * If no backend is configured or if network fails, gracefully falls back
 * to the built-in local command evaluation logic.
 */

const API_BASE_URL = import.meta.env.VITE_CLOUD_API_URL || '';

// Fallback command responses
const LOCAL_COMMAND_MAP = {
  help: [
    ['plain', 'commands:'],
    ['dim', '  services   what we set up for clients'],
    ['dim', '  stack      tools we use'],
    ['dim', '  status     current availability'],
    ['dim', '  work       recent cloud project'],
    ['dim', '  contact    how to reach us'],
    ['dim', '  clear      clear the screen'],
  ],
  services: [
    ['green', '> AWS setup        accounts, networking, permissions'],
    ['green', '> Terraform        your whole setup written as code'],
    ['green', '> CI/CD            deploy on every push, safely'],
    ['green', '> Monitoring       alerts, logs, backups, uptime'],
  ],
  stack: [
    ['plain', 'aws · terraform · docker · kubernetes'],
    ['plain', 'github actions · cloudwatch · grafana'],
  ],
  status: [
    ['ok', 'availability: taking new projects'],
    ['ok', 'response time: within one working day'],
    ['dim', 'timezone: WAT (UTC+1), working with clients globally'],
  ],
  work: [
    ['plain', 'RekrutKlin'],
    ['dim', 'clinical trial recruitment platform · multi-tenant · HIPAA aware'],
    ['dim', 'infra as code · automated pipeline · per-tenant isolation'],
  ],
  contact: [
    ['green', 'email  support@assuredpixel.com'],
    ['green', 'phone  +234 903 097 7669'],
  ],
};

/**
 * Execute a command either via backend API or local fallback
 * @param {string} command
 * @returns {Promise<Array<{ t: string, text: string }>>}
 */
export async function executeConsoleCommand(command) {
  const trimmed = command.trim().toLowerCase();

  // If live API endpoint configured, attempt remote fetch
  if (API_BASE_URL) {
    try {
      const startTime = performance.now();
      const res = await fetch(`${API_BASE_URL}/console/execute`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: trimmed }),
      });

      if (res.ok) {
        const data = await res.json();
        const duration = Math.round(performance.now() - startTime);
        return {
          lines: data.lines || [],
          latency: duration,
          fromApi: true,
        };
      }
    } catch (err) {
      console.warn('[CloudConsoleApi] Backend unreachable, falling back to local evaluator:', err);
    }
  }

  // Local fallback
  const matched = LOCAL_COMMAND_MAP[trimmed];
  const lines = matched
    ? matched.map(([t, text]) => ({ t, text }))
    : [{ t: 'dim', text: `command not found: ${trimmed}. Try "help".` }];

  return {
    lines,
    latency: Math.floor(21 + Math.random() * 8),
    fromApi: false,
  };
}

/**
 * Fetch live system status (online state, region, latency, visitor count)
 */
export async function getCloudStatus() {
  if (API_BASE_URL) {
    try {
      const res = await fetch(`${API_BASE_URL}/console/status`);
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn('[CloudConsoleApi] Status endpoint unavailable, using defaults:', err);
    }
  }

  return {
    online: true,
    statusText: 'SYSTEMS ONLINE · TAKING NEW CLOUD PROJECTS',
    region: 'us-east-1',
    visitors: 1420,
  };
}

/**
 * Fetch live architecture metrics for showcase cards
 */
export async function getCloudMetrics() {
  if (API_BASE_URL) {
    try {
      const res = await fetch(`${API_BASE_URL}/console/metrics`);
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn('[CloudConsoleApi] Metrics endpoint unavailable, using defaults:', err);
    }
  }

  return {
    environments: '3',
    uptime: '99.9%',
    pushToLive: '3.2 min',
    tenants: '12+',
  };
}
