--- summary: "Tools and skills for AI Tools Directory agents"
read_when:
  - When using tools
  - When scheduling cron jobs
---

# TOOLS.md - Available Tools & Skills

This file documents all tools available to the Coordinator and sub-agents.

---

## Core Tools

### 1. Git Operations

**Tool:** `exec` with git commands
**Purpose:** Clone, pull, push, branch management

**Common Commands:**
```bash
# Clone repo
git clone https://github.com/yukng1118/ai-tools-directory.git

# Pull latest
git pull origin main

# Commit changes
git add -A
git commit -m "message"
git push origin main

# Create branch
git checkout -b feature/new-thing
git push origin feature/new-thing
```

**Used By:** Deployer, ContentUpdater, CodeUpgrader
---

### 2. Browser Automation

**Tool:** `browser` (OpenClaw browser control)
**Purpose:** Navigate sites, verify visually, scrape data

**Common Actions:**
```javascript
// Navigate to site
browser.navigate({ url: "https://ai-tools-directory.vercel.app" })

// Take screenshot
browser.screenshot({ fullPage: true })

// Click element
browser.act({ ref: "button", kind: "click" })

// Fill form
browser.act({ ref: "input", kind: "type", text: "search" })
```

**Used By:** Debugger, ContentUpdater (verification), Deployer

---

### 3. Code Execution

**Tool:** `exec`
**Purpose:** Run shell commands, test code snippets

**Common Commands:**
```bash
# Run dev server
npm run dev

# Build project
npm run build

# Run tests
npm test

# Install dependencies
npm install

# Database operations
npx prisma db push
npx prisma migrate dev
```

**Used By:** Debugger, CodeUpgrader

---

### 4. File Operations

**Tools:** `read`, `edit`, `write`
**Purpose:** Read and modify files

**Examples:**
```javascript
// Read file
read({ file_path: "src/lib/data.ts" })

// Edit specific text
edit({
  file_path: "package.json",
  old_string: '"version": "1.0.0"',
  new_string: '"version": "1.1.0"'
})

// Write new file
write({
  file_path: "README.md",
  content: "# New Project"
})
```

**Used By:** All agents

---

### 5. Web Search

**Tool:** `web_search`
**Purpose:** Find information, discover new tools

**Example:**
```javascript
web_search({
  query: "new AI video editing tools 2025",
  count: 10
})
```

**Used By:** ContentUpdater, SEOOptimizer

---

### 6. Web Scraping

**Tool:** `web_fetch`
**Purpose:** Extract content from URLs

**Example:**
```javascript
web_fetch({
  url: "https://example.com/tool",
  extractMode: "markdown",
  maxChars: 5000
})
```

**Used By:** ContentUpdater

---

## Cron Scheduling

### Tool: `cron`

**Purpose:** Schedule recurring tasks

### Current Scheduled Jobs

| Job Name | Schedule | Task | Agent |
|----------|----------|------|-------|
| `daily-content-scan` | 0 2 * * * | Find new AI tools and add to directory | ContentUpdater |
| `seo-weekly-report` | 0 6 * * * | Analyze traffic and suggest improvements | SEOOptimizer |
| `debugger-health-check` | 0 */6 * * * | Browse site and check for errors | Debugger |
| `code-upgrade-check` | 0 0 * * 0 | Check for new features/upgrades | CodeUpgrader |
| `random-discovery` | 0 */4 * * * | Send random discovery to Lawrence | Coordinator |
| `moltbook-retry` | */30 * * * * | Retry Moltbook registration (until success) | Coordinator |

### Cron Syntax

```
* * * * *
│ │ │ │ │
│ │ │ │ └─── Day of week (0-7, Sunday=0 or 7)
│ │ │ └───── Month (1-12)
│ │ └─────── Day of month (1-31)
│ └───────── Hour (0-23)
└─────────── Minute (0-59)

Examples:
"0 2 * * *"    = Daily at 2:00 AM
"0 */6 * * *"  = Every 6 hours
"0 0 * * 0"    = Weekly on Sunday at midnight
"*/30 * * * *" = Every 30 minutes
```

### Adding New Cron Jobs

```javascript
cron.add({
  name: "job-name",
  schedule: { kind: "cron", expr: "0 2 * * *" },
  payload: {
    kind: "agentTurn",
    message: "Spawn ContentUpdater: Find new video editing tools"
  }
})
```

---

## Agent Coordination Tools

### Sessions Management

**Tool:** `sessions_spawn`
**Purpose:** Create new agent sessions

```javascript
sessions_spawn({
  agentId: "content-updater",
  task: "Find 5 new AI tools for video creators",
  label: "content-001",
  runTimeoutSeconds: 300
})
```

**Tool:** `sessions_list`
**Purpose:** List active sessions

```javascript
sessions_list({ activeMinutes: 60 })
```

**Tool:** `sessions_send`
**Purpose:** Send messages to agents

```javascript
sessions_send({
  sessionKey: "...",
  message: "Status check: How's progress?"
})
```

**Tool:** `subagents`
**Purpose:** List, kill, or steer sub-agents

```javascript
subagents({ action: "list" })
subagents({ action: "kill", target: "content-001" })
```

---

## Skills (External)

### ClawHub Skills

Skills can be installed via:
```bash
openclaw skill install <skill-name>
```

**Available Skills:** (check `openclaw skill list`)

---

## Tool Best Practices

### 1. Always Verify
```javascript
// After deploy
browser.navigate({ url: "https://yoursite.com" })
// Check for 404s, broken layouts
```

### 2. Test Before Push
```javascript
// CodeUpgrader rule
exec({ command: "npm run build" }) // Must pass before push
```

### 3. Secure Credentials
- Never log API keys
- Use environment variables
- Store tokens in `.env.local` (gitignored)

### 4. Error Handling
```javascript
try {
  await exec({ command: "npm run build" })
} catch (error) {
  // Log to Coordinator
  sessions_send({ message: "Build failed: " + error })
}
```

---

## Quick Reference: Which Agent Uses What

| Tool | ContentUpdater | CodeUpgrader | Debugger | SEOOptimizer | Deployer |
|------|:------------:|:----------:|:--------:|:----------:|:--------:|
| Git | ✅ | ✅ | ❌ | ❌ | ✅ |
| Browser | ✅ (verify) | ✅ (test) | ✅ (check) | ✅ (analyze) | ✅ (verify) |
| Exec | ✅ (seed) | ✅ (build) | ✅ (logs) | ❌ | ✅ (deploy) |
| Web Search | ✅ | ❌ | ❌ | ✅ | ❌ |
| Web Fetch | ✅ | ❌ | ❌ | ❌ | ❌ |
| Cron | ❌ | ❌ | ❌ | ❌ | ❌ |

---

_Last updated: 2026-02-21_
