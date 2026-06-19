"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { commandLinks, profile } from "@/content/profile";

type ConsoleLine = {
  prompt?: string;
  text: string;
  tone?: "muted" | "accent" | "error";
};

const commandMap = new Map<string, (typeof commandLinks)[number]>(
  commandLinks.map((item) => [item.command, item]),
);

const prompt = profile.prompt;
const initialLines: ConsoleLine[] = [
  { text: "type help or select a command", tone: "muted" },
];

type CommandConsoleProps = {
  compact?: boolean;
  context?: string;
};

export function CommandConsole({ compact = false, context }: CommandConsoleProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const activePrompt = context ? `${profile.handle}@nyc ${context} λ` : prompt;
  const [value, setValue] = useState("");
  const [lines, setLines] = useState<ConsoleLine[]>(initialLines);

  const commands = useMemo(
    () => commandLinks.map((item) => item.command).join("  "),
    [],
  );

  function runCommand(rawCommand: string) {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;

    if (command === "clear") {
      setLines(initialLines);
      setValue("");
      return;
    }

    if (command === "help") {
      setLines((current) => [
        ...current,
        { prompt: activePrompt, text: command },
        { text: `${commands}  clear`, tone: "accent" },
      ]);
      setValue("");
      return;
    }

    const target = commandMap.get(command);
    if (target) {
      setLines((current) => [
        ...current,
        { prompt: activePrompt, text: command },
        { text: `opening ${target.label}`, tone: "accent" },
      ]);
      setValue("");

      if (target.external) {
        window.open(target.href, "_blank", "noopener,noreferrer");
      } else {
        router.push(target.href);
      }
      return;
    }

    setLines((current) => [
      ...current,
      { prompt: activePrompt, text: command },
      { text: `command not found: ${command}`, tone: "error" },
      { text: `try: ${commands}`, tone: "muted" },
    ]);
    setValue("");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    runCommand(value);
  }

  function focusInput() {
    inputRef.current?.focus();
  }

  function isInteractiveTarget(target: EventTarget | null) {
    if (!(target instanceof HTMLElement)) return false;
    return Boolean(
      target.closest(
        'a, button, input, textarea, select, label, [role="button"], [data-terminal-ignore]',
      ),
    );
  }

  useEffect(() => {
    function onDocumentClick(event: MouseEvent) {
      if (!isInteractiveTarget(event.target)) {
        focusInput();
      }
    }

    function onDocumentKeyDown(event: globalThis.KeyboardEvent) {
      if (event.defaultPrevented || isInteractiveTarget(event.target)) return;
      if (event.ctrlKey || event.metaKey || event.altKey) return;

      focusInput();

      if (event.key.length === 1) {
        event.preventDefault();
        setValue((current) => current + event.key);
      } else if (event.key === "Backspace") {
        event.preventDefault();
        setValue((current) => current.slice(0, -1));
      } else if (event.key === "Enter") {
        event.preventDefault();
        runCommand(value);
      }
    }

    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onDocumentKeyDown);
    return () => {
      document.removeEventListener("click", onDocumentClick);
      document.removeEventListener("keydown", onDocumentKeyDown);
    };
  }, [value]);

  return (
    <section
      className={`console ${compact ? "console-compact" : ""}`}
      aria-label="Command console"
    >
      <div className="console-output" aria-live="polite">
        {lines.map((line, index) => (
          <p className={`console-line ${line.tone ?? ""}`} key={`${line.text}-${index}`}>
            {line.prompt ? <span className="prompt">{line.prompt}</span> : null}
            <span>{line.text}</span>
          </p>
        ))}
      </div>

      <div className="quick-commands" aria-label="Primary navigation">
        {commandLinks.map((item) => (
          <button key={item.command} type="button" onClick={() => runCommand(item.command)}>
            {item.label}
          </button>
        ))}
      </div>

      <form className="command-form" onSubmit={onSubmit} onClick={focusInput}>
        <div className="command-display" aria-hidden="true">
          <span className="prompt">{activePrompt}</span>
          <span className="command-entry">
            <span className="command-value">{value}</span>
            <span className="cursor" />
          </span>
        </div>
        <input
          id="command-input"
          className="command-input"
          aria-label="Terminal command"
          ref={inputRef}
          autoFocus
          autoComplete="off"
          spellCheck={false}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
    </section>
  );
}
