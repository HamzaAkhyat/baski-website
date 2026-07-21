/* BASKI Automation — blueprint project data.
   Each entry drives blueprint.html?id=<key>. Add a new project by adding an object here. */
window.BASKI_BLUEPRINTS = {

  "linkedin-lead-engine": {
    code: "LEAD_ENGINE",
    icon: "hub",
    title: "LinkedIn Lead Engine",
    tagline: "AI-driven prospecting, scoring and outreach on autopilot.",
    overview: "An n8n workflow that runs your top-of-funnel LinkedIn prospecting end to end. It finds people who match your ideal customer profile, uses AI to score them by buyer intent, then sends personalized connection requests and follow-up messages — logging every lead and its status to a spreadsheet so nothing slips.",
    steps: [
      { t: "Find prospects", d: "Pull people matching your ICP (role, industry, location) from LinkedIn." },
      { t: "Score with AI", d: "An LLM reads each profile and rates buyer intent, so you focus on the warmest leads first." },
      { t: "Personalize outreach", d: "AI writes a connection note and follow-up tailored to each prospect's profile." },
      { t: "Send & track", d: "Messages go out on a safe schedule; every lead and reply is written to Google Sheets." }
    ],
    stack: [
      { name: "LinkedIn", d: "Source and outreach channel" },
      { name: "OpenAI", d: "Lead scoring + message writing" },
      { name: "Google Sheets", d: "Lead log and status tracking" }
    ],
    outcomes: [
      { label: "Prospecting time", value: "-95%" },
      { label: "Outreach", value: "Personalized" },
      { label: "Lead tracking", value: "Automatic" }
    ],
    bestFor: "Agencies, freelancers and B2B founders who need a steady flow of qualified conversations without spending hours a day on LinkedIn."
  },

  "cold-email-machine": {
    code: "OUTBOUND_BDR",
    icon: "outgoing_mail",
    title: "Cold Email Machine",
    tagline: "From raw lead list to personalized multi-step campaign — automatically.",
    overview: "A full outbound BDR pipeline in n8n. It sources leads from Apollo, enriches and verifies them, writes hyper-personalized copy with AI based on each company's details, then launches a multi-step email sequence in Instantly.ai. Replies and bounces flow back so your list stays clean.",
    steps: [
      { t: "Source leads", d: "Pull targeted contacts from Apollo by role, company size and industry." },
      { t: "Verify & enrich", d: "Clean the list and append the data needed for personalization." },
      { t: "Write with AI", d: "AI drafts a unique opening line and angle for each prospect." },
      { t: "Launch sequence", d: "Contacts drop into a multi-step Instantly.ai campaign that runs itself." }
    ],
    stack: [
      { name: "Apollo", d: "Lead sourcing and data" },
      { name: "OpenAI", d: "Per-lead copywriting" },
      { name: "Instantly.ai", d: "Sending + sequence engine" }
    ],
    outcomes: [
      { label: "List building", value: "Automated" },
      { label: "Copy per lead", value: "Unique" },
      { label: "Sequences", value: "Hands-off" }
    ],
    bestFor: "Sales teams and service businesses running cold outbound who want volume without sending generic, copy-pasted emails."
  },

  "inbox-triage": {
    code: "SUPPORT_TRIAGE",
    icon: "support_agent",
    title: "Inbox Auto-Triage",
    tagline: "Every incoming email read, sorted and drafted before you open it.",
    overview: "An n8n workflow that watches your support inbox and does the first pass for you. AI reads each message, classifies it (sales, support, billing, spam), drafts a suggested reply, and routes anything urgent straight to your team's Slack — so response times drop and nothing important gets buried.",
    steps: [
      { t: "Watch inbox", d: "Trigger on every new email arriving in Gmail." },
      { t: "Understand it", d: "AI reads the message, detects intent, category and urgency." },
      { t: "Draft a reply", d: "A suggested response is generated in your tone, ready to review and send." },
      { t: "Route & alert", d: "Urgent items are pushed to Slack; the rest are labeled and organized." }
    ],
    stack: [
      { name: "Gmail", d: "Inbox trigger + drafts" },
      { name: "OpenAI", d: "Classification + reply drafting" },
      { name: "Slack", d: "Urgent-ticket alerts" }
    ],
    outcomes: [
      { label: "First response", value: "Minutes" },
      { label: "Sorting", value: "Automatic" },
      { label: "Missed emails", value: "Near zero" }
    ],
    bestFor: "Small teams and solo operators drowning in inbound email who want triage and draft replies handled before they even look."
  },

  "invoice-extraction": {
    code: "DOC_EXTRACT",
    icon: "receipt_long",
    title: "Invoice Data Extraction",
    tagline: "Turn PDFs and receipts into clean, structured rows — no manual entry.",
    overview: "An n8n workflow that reads invoices, receipts and documents and pulls out the data you actually need. Drop a file in (or forward it by email) and AI extracts vendor, totals, tax, dates and line items, then writes them as structured rows into Google Sheets or your accounting tool — ending copy-paste data entry.",
    steps: [
      { t: "Ingest the file", d: "A PDF or image arrives via upload, Drive or email." },
      { t: "Read the document", d: "OCR + AI parse the layout, even messy or scanned files." },
      { t: "Extract fields", d: "Vendor, totals, tax, dates and line items are pulled into clean data." },
      { t: "Store it", d: "Structured rows land in Google Sheets or your accounting system." }
    ],
    stack: [
      { name: "Gemini", d: "Document understanding" },
      { name: "OCR", d: "Reads scans and images" },
      { name: "Google Sheets", d: "Structured output" }
    ],
    outcomes: [
      { label: "Data entry", value: "Eliminated" },
      { label: "Accuracy", value: "Consistent" },
      { label: "Per document", value: "Seconds" }
    ],
    bestFor: "Bookkeepers, agencies and any business processing a steady stream of invoices or receipts by hand today."
  },

  "knowledge-chatbot": {
    code: "RAG_ASSISTANT",
    icon: "smart_toy",
    title: "Knowledge Chatbot",
    tagline: "A chatbot that answers from your docs — accurate, not made up.",
    overview: "A retrieval-augmented (RAG) chatbot built in n8n. Your documents, FAQs and Notion pages are indexed into a vector database; when someone asks a question, the workflow retrieves the most relevant passages and has the AI answer strictly from them — so responses stay grounded in your real content instead of hallucinating.",
    steps: [
      { t: "Index your content", d: "Docs, FAQs and Notion pages are chunked and embedded into a vector store." },
      { t: "Receive a question", d: "A user asks something via chat widget, Slack or your site." },
      { t: "Retrieve context", d: "The most relevant passages are pulled from Pinecone." },
      { t: "Answer grounded", d: "AI responds using only the retrieved content, with sources." }
    ],
    stack: [
      { name: "OpenAI", d: "Embeddings + answers" },
      { name: "Pinecone", d: "Vector knowledge base" },
      { name: "Notion", d: "Source of truth content" }
    ],
    outcomes: [
      { label: "Answers", value: "Grounded" },
      { label: "Availability", value: "24/7" },
      { label: "Support load", value: "Reduced" }
    ],
    bestFor: "Businesses with a knowledge base, product docs or a busy support inbox who want instant, accurate self-serve answers."
  },

  "content-pipeline": {
    code: "CONTENT_ENGINE",
    icon: "campaign",
    title: "Content Pipeline",
    tagline: "One idea in, approved posts scheduled across your channels.",
    overview: "An n8n content workflow with a human in the loop. Give it a topic or let it pull from a backlog, and AI drafts platform-ready posts. Each draft is sent to you on Telegram for a one-tap approve or reject — approved content is automatically scheduled across your social channels, so publishing stays consistent without living in a scheduler.",
    steps: [
      { t: "Start from an idea", d: "Feed a topic, or pull the next item from your content backlog." },
      { t: "AI drafts posts", d: "Copy is written and adapted for each platform's format." },
      { t: "Approve on Telegram", d: "You review drafts and approve or reject with a single tap." },
      { t: "Auto-schedule", d: "Approved posts are queued and published across channels via Buffer." }
    ],
    stack: [
      { name: "OpenAI", d: "Post drafting" },
      { name: "Telegram", d: "One-tap approval" },
      { name: "Buffer", d: "Scheduling + publishing" }
    ],
    outcomes: [
      { label: "Drafting", value: "Automated" },
      { label: "Control", value: "You approve" },
      { label: "Posting", value: "Consistent" }
    ],
    bestFor: "Founders and creators who want a steady posting cadence but still want the final say before anything goes live."
  }

};
