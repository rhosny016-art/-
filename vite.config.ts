import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(async ({ mode, command }) => {
  const plugins = [react(), tailwindcss()];
  // Source-tags are only injected in dev for the element picker; skip in production builds.
  if (command === 'serve') {
    try {
      // @ts-expect-error — dynamic import of local JS plugin
      const m = await import('./.vite-source-tags.js');
      plugins.push(m.sourceTags());
    } catch {
      // Plugin file is gitignored and may not exist; skip silently.
    }
  }

  const env = loadEnv(mode, process.cwd(), ['VITE_', 'NEXT_PUBLIC_']);
  const processEnvDefines: Record<string, string> = {};
  for (const [key, value] of Object.entries(env)) {
    processEnvDefines[`process.env.${key}`] = JSON.stringify(value);
  }

  return {
    plugins,
    envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
    define: processEnvDefines,
  };
})
