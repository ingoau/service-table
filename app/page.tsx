"use client";

import { AIButton } from "@/components/ai-button";
import SearchBox from "@/components/searchbox";
import { Bot, Megaphone, Moon } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="w-full bg-blue-200 p-36 flex flex-col gap-4 items-center">
        <h1>Welcome to Service Table</h1>
        <h1>How can we help you</h1>
        <SearchBox />
        <a href="/createticket">Create a support ticket</a>
        or
        <div>
          <AIButton />
        </div>
      </div>
      <h1>
        <Megaphone />
        Announcements
      </h1>
      <div className="flex flex-col gap-2">
        <div className="w-screen p-4 bg-blue-100 rounded-full">
          <h1>
            <Bot /> Transitioning to AI based support
            <Bot />
          </h1>
          As of 2025, we’ve swapped traditional docs for an AI chat
          experience—because getting help shouldn’t feel like a treasure hunt
          through endless pages 🗺️📚. Instead of guessing the right search term,
          you can just ask what you need in plain language and get a clear,
          step-by-step answer tailored to your situation 🧠💬. Need the quick
          version? You’ll get it ⚡. Want the deeper dive with examples and edge
          cases? The chat can go there too 🔎🧩. It can also point you to the
          underlying references when you want to double-check details or share
          something with your team 🔗✅. The best part: every question helps us
          improve—common “wait, what?” moments show up immediately, so we can
          fix gaps, update guidance, and make the whole experience smoother over
          time 🛠️📈. Bottom line: less searching, more doing 🚀😄.
        </div>
        <div className="w-screen p-4 bg-blue-100 rounded-full">
          <h1>🔒 New security protocols</h1>
          Security upgrade incoming! 🔐✨ We’ve tightened our password
          requirements, so the next time you sign in or change your password,
          you’ll need to meet the new (stronger) rules. 💪 We’ve also made
          passwords unique per user—meaning you can’t use the same password as
          another user in the system. 🚫🔁 Accounts that don’t meet these
          requirements will be banned. ⛔ If you need help updating your
          password, please contact Support. 🆘
        </div>
        <div className="w-screen p-4 bg-blue-100 rounded-full">
          <h1>
            <Moon />
            Dark mode is here
          </h1>
          Good news: Dark Mode has arrived! 🌙✨ You can now switch to a sleek,
          low-glare theme that’s easier on the eyes—especially at night 🖤👀. To
          turn it on, head to Settings and toggle Dark Mode (and if your device
          supports it, you may be able to match your system theme too) ⚙️. Try
          it out and tell us what you think! 🚀
        </div>
      </div>
      <h1>About</h1>
      <h2>Support for Failsforce Service Table</h2>

      <p>
        Welcome to the Failsforce Service Table support site—your central place
        for help, guidance, and practical answers for using the platform day to
        day. Whether you’re setting things up for the first time, standardising
        workflows across teams, integrating with existing systems, or
        troubleshooting something urgent, this site is built to help you get
        from “stuck” to “solved” with minimal friction and maximum clarity.
      </p>

      <h2>Start where you are</h2>

      <p>
        People come here with different goals, so we’ve organised support around
        common entry points:
      </p>

      <ul>
        <li>
          Learn the basics: key concepts, terminology, and how Service Table
          fits into your process
        </li>
        <li>
          Configure with confidence: permissions, settings, and recommended
          defaults
        </li>
        <li>
          Run operations smoothly: day-to-day workflows, quality checks, and
          admin tips
        </li>
        <li>
          Troubleshoot issues: symptom-based guides, known issues, and recovery
          steps
        </li>
        <li>
          Improve over time: best practices, templates, and rollout patterns
          that scale
        </li>
      </ul>

      <h2>Get answers your way (browse or ask)</h2>

      <p>
        If you prefer browsing, you’ll find curated guides designed to be useful
        quickly—short sections, checklists, and examples rather than long,
        generic pages. If you already know what you’re trying to do, you can
        jump straight into task-focused topics and collections that map to real
        workflows, not just product menus.
      </p>

      <h2>Ask a question, get a tailored answer</h2>

      <p>
        We replaced traditional documentation with an AI chat experience so you
        can describe what you’re trying to accomplish in plain language and get
        clear, step-by-step guidance tailored to your context—your setup,
        constraints, and desired outcome. The chat supports how real
        troubleshooting works: ask follow-ups, paste an error message, clarify
        what you’ve already tried, and refine the solution iteratively without
        restarting your search or losing the thread. When it matters, it can
        also link back to underlying references so you can verify details, share
        a source internally, or keep decisions transparent.
      </p>

      <h2>Workflows, templates, and best practices</h2>

      <p>
        Failsforce Service Table works best when processes are consistent and
        repeatable. That’s why we include templates, recommended patterns, and
        practical examples you can adapt to your team. Expect guidance on safe
        changes, rollout approaches, and the operational habits that prevent
        recurring issues, along with callouts for common pitfalls and how to
        avoid them.
      </p>

      <h2>Troubleshooting that’s incident-ready</h2>

      <p>
        When something breaks, speed and precision matter. Our troubleshooting
        content is organised around symptoms and outcomes: what you’re seeing,
        what it usually means, how to confirm the cause, and what to do next to
        recover safely. Where relevant, we include validation steps so you can
        confirm the fix and reduce the chance of the issue returning.
      </p>

      <h2>Help us improve</h2>

      <p>
        This support experience is designed to improve continuously. If
        something is unclear, missing, or outdated—or if you had to work too
        hard to get an answer—tell us. Your feedback helps us improve guidance,
        keep references current, and make Failsforce Service Table easier to use
        over time.
      </p>

      <h2>Need more help?</h2>

      <p>
        If you can’t find what you need, use the chat and share a bit of context
        (what you were doing, what you expected, what happened instead, and any
        error text). The more specific you are, the faster we can help you get
        to a reliable solution.
      </p>
    </>
  );
}
