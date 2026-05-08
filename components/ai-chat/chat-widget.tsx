'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, Send, Sparkles, X } from 'lucide-react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

function sanitizeAndRenderHtml(content: string): string {
  // Strip all HTML tags first (to prevent XSS)
  const stripped = content.replace(/<[^>]*>/g, '')
  // Then apply allowed formatting
  return stripped
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .split('\n')
    .join('<br/>')
}

export function ChatWidget() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [threadId, setThreadId] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  // Don't render on admin pages
  if (pathname?.startsWith('/admin')) return null

  // Initialise session thread ID
  useEffect(() => {
    const existing = sessionStorage.getItem('bt-chat-thread-id')
    if (existing) {
      setThreadId(existing)
    } else {
      const id = crypto.randomUUID()
      sessionStorage.setItem('bt-chat-thread-id', id)
      setThreadId(id)
    }
  }, [])

  // Add welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content:
            "Hi! I'm the BanditoThreads AI assistant. Ask me anything about our products, services, pricing, or ordering process and I'll do my best to help.",
        },
      ])
    }
  }, [isOpen])

  // Scroll only the messages container to bottom (NOT the page) when messages change
  useEffect(() => {
    const container = messagesContainerRef.current
    if (!container) return
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' })
  }, [messages, isLoading])

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  async function sendMessage() {
    const trimmed = inputValue.trim()
    if (!trimmed || isLoading) return

    const userMessage: Message = { role: 'user', content: trimmed }
    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)
    setHasError(false)

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000)

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_AI_API_URL}/chat`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: trimmed,
            thread_id: threadId,
          }),
          signal: controller.signal,
        }
      )

      clearTimeout(timeout)

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
      }

      const data = await res.json()
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (err) {
      clearTimeout(timeout)
      console.error('AI chat error:', err)
      setHasError(true)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I'm having trouble connecting right now. Please use our contact form or call us directly.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Pulse ring + floating button */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center">
        <div className="relative flex items-center justify-center">
          {!isOpen && (
            <span
              className="absolute -inset-1 rounded-full bg-accent/30"
              style={{ animation: 'chat-pulse 2s ease-out infinite' }}
              aria-hidden="true"
            />
          )}
          {isOpen ? (
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Close AI chat"
              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <X className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Open AI chat assistant"
              className="relative flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-accent-foreground shadow-lg transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Sparkles className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm font-semibold whitespace-nowrap pr-1">
                Ask our AI
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-label="AI Chat Assistant"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed right-8 z-50 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
            style={{
              bottom: '104px',
              width: 'min(380px, calc(100vw - 32px))',
              height: 'min(520px, 70vh)',
              display: 'grid',
              gridTemplateRows: 'auto minmax(0, 1fr) auto',
            }}
          >
            {/* Header — row 1 (auto) */}
            <div
              className="flex items-center justify-between border-b border-border bg-secondary px-4 py-3"
              style={{ gridRow: 1 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/15">
                  <Bot className="h-4 w-4 text-accent" />
                </div>
                <span className="font-sans text-sm font-medium text-foreground">
                  BanditoThreads AI
                </span>
                <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                  AI
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close AI chat"
                className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages — row 2 (1fr, scrolls independently) */}
            <div
              ref={messagesContainerRef}
              className="overflow-y-auto overflow-x-hidden"
              style={{ gridRow: 2, minHeight: 0 }}
            >
              <div className="flex flex-col gap-3 p-4">
                {messages.map((msg, i) =>
                  msg.role === 'user' ? (
                    <div
                      key={i}
                      className="ml-auto max-w-[80%] rounded-[16px_16px_4px_16px] bg-accent px-3.5 py-2.5 text-sm text-accent-foreground"
                    >
                      {msg.content}
                    </div>
                  ) : (
                    <div
                      key={i}
                      className="mr-auto max-w-[85%] rounded-[16px_16px_16px_4px] bg-secondary px-3.5 py-2.5 text-sm text-foreground"
                      dangerouslySetInnerHTML={{
                        __html: sanitizeAndRenderHtml(msg.content),
                      }}
                    />
                  )
                )}

                {/* Typing indicator */}
                {isLoading && (
                  <div className="mr-auto max-w-[85%] rounded-[16px_16px_16px_4px] bg-secondary px-3.5 py-3">
                    <div className="flex items-center gap-1">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-accent"
                          style={{
                            animation: 'chat-dot-pulse 1.2s ease-in-out infinite',
                            animationDelay: `${i * 0.2}s`,
                          }}
                          aria-hidden="true"
                        />
                      ))}
                      <span className="sr-only">AI is typing</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input area — row 3 (auto, locked at bottom) */}
            <div
              className="flex items-center gap-2 border-t border-border bg-card px-4 py-3"
              style={{ gridRow: 3 }}
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about our products..."
                maxLength={1000}
                disabled={isLoading}
                aria-label="Message input"
                className="min-w-0 flex-1 rounded-xl border border-border bg-secondary px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                aria-label="Send message"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed"
                style={{
                  backgroundColor:
                    inputValue.trim() && !isLoading
                      ? 'var(--accent)'
                      : 'var(--muted)',
                }}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyframe animations */}
      <style>{`
        @keyframes chat-pulse {
          0%   { transform: scale(1);   opacity: 0.6; }
          70%  { transform: scale(1.7); opacity: 0;   }
          100% { transform: scale(1.7); opacity: 0;   }
        }
        @keyframes chat-dot-pulse {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 1;   }
        }
      `}</style>
    </>
  )
}
