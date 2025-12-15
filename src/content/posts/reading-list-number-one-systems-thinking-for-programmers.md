---
title: Reading List nº1 - Systems Thinking for Programmers
pubDate: '2025-12-14'
---

I spend most of my time writing scrapers. My training taught me to think in straight lines: **Problem A causes Symptom B. Fix A, and B goes away.**

But recently, I hit a wall. The problems that actually keep me up at night: backlogs that never shrink no matter how much we ship, infrastructure that breaks in ways that make no sense, communication breakdowns that seem to feed on themselves, these aren't code problems. They're _system problems_.

To level up as a programmer, I need to stop just looking at the code and start looking at the connections _between_ the code, the people, and the processes. I need to learn **Systems Thinking**.

## What is Systems Thinking?

If linear thinking is looking at a snapshot, systems thinking is watching the movie.

It's the realization that A doesn't just cause B; A and B are often connected in a feedback loop. Push hard on "A" to fix things today, and you might create a massive explosion in "B" three weeks from now because of a hidden delay.

It's about seeing the invisible web of feedback loops, delays, and leverage points that govern everything on an IT team.

## The Reading List

I've curated a list of foundational resources and split them into three categories: the theory, the application, and the human element.

This post is my public commitment to actually reading these over the coming weeks.

---

## Category 1: Theory

### 1. Thinking in Systems: A Primer (Donella Meadows)

[Link to Book](https://www.amazon.com.br/Thinking-Systems-Primer-Donella-Meadows/dp/1603580557)

**The Pitch:**  
If you only read one book on this list, read this one. It's considered the definitive introduction to the field. Meadows uses simple examples like a bathtub draining, a thermostat adjusting room temperature, to explain complex concepts like reinforcing loops, balancing loops, and system delays. It's the key for seeing the world as interconnected structures.

> **What I'm Looking For (via NotebookLM):**
>
> This extensive text introduces the core principles and profound implications of systems thinking. The key purpose is to illuminate how complex, interconnected systems — from economies and ecosystems to personal problems — behave in ways that are often counterintuitive to linear thought. Meadows emphasizes that a system's structure (its stocks, flows, and feedback loops) determines its long-term behavior, arguing that persistent global issues like poverty and environmental degradation are intrinsically systems problems that can only be solved by restructuring. The text explores critical system properties like resilience, self-organization, and hierarchy, and warns against common system traps (such as policy resistance and addiction) that arise from linear thinking and bounded rationality. Ultimately, the source provides a framework for identifying leverage points to create lasting, positive change, shifting the focus from controlling events to dancing with the system by understanding its underlying dynamics and respecting its inherent complexity.

### 2. Systems Thinking (Russell Ackoff)

[Link to Lecture](https://www.youtube.com/watch?v=EbLh7rZ3rhU)

**The Pitch:**
Russell Ackoff is the "Grandfather" of the field. He's famous for breaking the illusion that optimizing parts will optimize the whole. His classic example: "If you take the best engine from a Ferrari, the best transmission from a Porsche, and the best brakes from a BMW, you don't get a perfect car; you get a pile of junk that won't move." That example alone changed how I think about software architecture. If you prefer listening to reading, his lectures are worth checking out.

> **What I'm Looking For (via NotebookLM):**
>
> Dr. Russell Ackoff, in his speech on systems thinking, asserts that a system is a whole that cannot be divided into independent parts, emphasizing that a system's essential properties derive out of how its parts interact, not how they perform in isolation. He uses the compelling example of building a car from all the best separate parts, which would fail because "the parts don't fit" together in a systemic way. Ackoff criticizes traditional Western management's "divide and conquer" approach, arguing that improving the parts separately often hurts the whole, and he applies this systemic critique to education, highlighting a failure to prioritize wisdom, understanding, and learning over mere information and teaching. Furthermore, he contends that the reality we experience is a "mess" of interacting problems, not neat, separate disciplinary problems, and advocates for "dissolving" problems through system redesign rather than just solving them — a process he calls design thinking, which is crucial for fostering creativity and facilitation of learning in students.

---

## Pillar 2: The Engineering Bridge

How does this abstract theory actually apply to deploying code and managing databases?

### 3. How Complex Systems Fail (Richard Cook)

[Link to Paper](https://how.complexsystems.fail/)

**The Pitch:**  
This isn't a book; it's a 4-page manifesto that everyone working in DevOps or SRE needs to read. Cook, a physician and researcher of high-consequence systems, dismantles the idea of "human error". He explains why complex systems (like production environments) are intrinsically hazardous and why they usually run in a "degraded mode." If you want to understand why your "safe" deployment just crashed production, read this.

> **What I'm Looking For (via NotebookLM):**
>
> This treatise explores the inherent nature of failure within complex systems, like healthcare and transportation, positing that such systems are intrinsically hazardous and always operate in a degraded mode with latent flaws present. While these systems are heavily defended by multiple layers, catastrophe requires multiple failures to align and overwhelm the defenses, meaning that single-point failures are rarely sufficient to cause a full accident. The author fundamentally argues that attributing failure to a 'root cause' is wrong because accidents stem from the linked co-occurrence of multiple factors, and post-accident analysis is often distorted by hindsight bias that unfairly judges the complex gambles made by human practitioners. Ultimately, the text stresses that people continuously create safety through dynamic adaptation, recognizing that robust system performance requires experience with failure and an understanding that safety is an emergent property of the system as a whole.

### 4. Out of the Tar Pit (Ben Moseley & Peter Marks)

[Link to Paper](http://curtclifton.net/papers/MoseleyMarks06a.pdf)

**The Pitch:**  
A legendary paper in computer science that tackles a simple question: Why is software so hard to understand? Their conclusion is that **State** (mutable data) is the root of almost all accidental complexity. It's a brilliant systems analysis of software architecture, arguing that we create vicious reinforcing loops of complexity by mixing control logic with state management.

> **What I'm Looking For (via NotebookLM):**
>
> This extensive paper asserts that complexity is the principal obstacle to developing large-scale software systems, classifying it into accidental (avoidable) and essential (inherent) forms. Authors Ben Moseley and Peter Marks challenge the premise that most remaining complexity is essential, arguing instead that the primary contributor to difficulty is the handling of state and the burden it places on system understanding and reasoning. To combat this, they propose a foundational approach called Functional Relational Programming (FRP), which seeks to eliminate accidental complexity by blending ideas from functional programming (to avoid mutable state) and Codd's relational model of data (for structured data integrity), while strictly separating essential logic from accidental concerns like performance optimization.

---

## Pillar 3: The Human System

The most complex part of any technical system is usually the people building it.

### 5. The Goal: A Process of Ongoing Improvement (Eliyahu M. Goldratt)

[Link to Book](https://www.amazon.com/Goal-Process-Ongoing-Improvement/dp/0884271951)

**The Pitch:**  
This is a business novel about a manager trying to save a failing manufacturing plant. Why is it on an engineering reading list? Because a software delivery pipeline is just a digital factory floor. Goldratt introduces the **Theory of Constraints** — the idea that every system is limited by exactly _one_ bottleneck. If you've ever stared at a Jira column piled high with tickets waiting for "Code Review," you're living inside this book.

> **What I'm Looking For (via NotebookLM):**
>
> Presents the Theory of Constraints (TOC) through a narrative about a plant manager, Alex Rogo, who must save his factory and his marriage. The text interweaves Alex's professional crisis — where he learns that maximizing local efficiencies actually makes the plant inefficient — with his personal struggles, highlighting his obsession with work and the resulting strain on his family life. A key theme is the discovery, guided by the mysterious Jonah, that the entire system's output (throughput) is limited by a bottleneck, which must be identified and exploited; this concept is elegantly illustrated using a hiking analogy involving the slow scout, Herbie, to teach the principles of dependent events and statistical fluctuations. Finally, the excerpts confirm the book's long-lasting influence and common-sense logic through interviews with industry professionals who have successfully applied TOC concepts, such as identifying constraints and subordinating other operations, to achieve dramatic improvements in various organizations like General Motors and Sikorsky Aircraft.

### 6. **Team Topologies (Matthew Skelton & Manuel Pais)**

[Link to Website](https://teamtopologies.com/)

**The Pitch:**  
This book is the missing link between HR and DevOps. It argues that team structures must match the software architecture we want to build (Conway's Law). Most importantly, it introduces the concept of **"Cognitive Load"** as a system constraint. It promises a blueprint for designing teams that interact like well-defined APIs, minimizing the friction and confusion that usually plagues growing tech organizations.

> **What I'm Looking For (via NotebookLM):**
>
> Outlines a comprehensive approach to organizational and team design centered on enabling a fast, safe flow of software delivery. A central tenet is the critical role of Conway's law, which asserts that system architecture mirrors communication pathways, making intentional team structure essential for effective software architecture. The text introduces the four fundamental team topologies and three essential team interaction modes (Collaboration, X-as-a-Service, and Facilitating) as tools for dynamically structuring organizations and minimizing wasteful communication. Crucially, the concept of cognitive load is emphasized as a limiting factor on team size and the complexity of the software domains they can responsibly manage, often dictating how software boundaries, or "fracture planes," should be chosen to match a team's capacity. Finally, the source advocates for a "team-first" approach that uses Dunbar's number to guide stable team sizes, rewards collective effort, and designs physical and virtual workspaces to foster trust and learning, treating teams and their interactions as vital organizational senses and signals.

---

## Conclusion: Into the Rabbit Hole

This isn't just a reading list; it's a toolkit upgrade. My goal is to move from "fixing things when they break" to designing systems that are resilient to breakage in the first place.

I'll be sharing my notes and practical applications as I work through these. If you're tired of solving the same problems over and over, grab one of these books and join me.
