import { expect, afterEach } from 'vitest';
import * as vitejs from '@vitejs/plugin-react'
import * as playwright from '@vitest/browser-playwright'
import * as browserReact from 'vitest-browser-react'

afterEach(() => {
  browserReact.cleanup()
});
