---
publishedDate: 2023-02-12
tags: 
    - computing 
    - symbols
title: On the paradoxes and limits of computing symbols
summary: Exploring the historical trajectory from Wittgenstein to Derrida, highlighting the paradoxical nature of symbols and emphasizing the need for cautious exploration in the pursuit of artificial intelligence and natural language processing.
---

Before we dive into natural language understanding, the theory, and its applications–it is important from a pedagogical perspective that we understand the historical trajectory of the ideas that led us there. While it would be interesting to go as far as back to Aristotle, we will skip ahead to what is considered the most important flashpoint in modern philosophy & science–referred to as the *‘linguistic turn’.* It begins with our Wittgenstein, inspired by Gottlob Frege:

> *“The limits of my language mean the limits of my world. […]”*
> 

While this line is almost used to the point it has become a cliche in modern NLP research papers, Indeed Wittgenstein himself would go on later to re-write and almost rethink all of the ideas he posited in the original Tractatus–which is why the irony is sweet when you see his famous quote plastered on the beginning of most modern research papers; but it is undeniable that Wittgenstein’s first posit changed the face of philosophical debate, effectively ending the practice of continental philosophy, and the birth of the more ‘logical’ analytic philosophy. In our rush to understand reality, we had lost sight of the tool we were bound by during our examination and discourse–language itself.

Put simply, Wittgenstein asserts that every perception of the world is language bound, and is the ‘mediator’ between an ‘individual’ and their perceived ‘reality’. Building on Frege and this, contemporary philosophy of the times turned to numbers to seek the‘truth’ of things–formalizing the idea of ‘First Order Logic’, ‘predicate grammar’, or what linguists refer to as ‘formal semantics’. It is built on the fundamental axiom that a statement can be written in a formal notation where it can be true **or** false (but not in between).

Turing's infamous paper on the *Entscheidungsproblem* built on this introduces the concept of a Turing machine and demonstrates that there are problems that are algorithmically unsolvable, which is exemplified by the halting problem. This is complemented by Gödel's incompleteness theorem, which deals with the limitations of formal systems, showing that there are true statements within such systems that cannot be proven within those systems themselves:

> *“Any consistent formal system F within which a certain amount of elementary arithmetic can be carried out is incomplete; i.e. there are statements of the language of F which can neither be proved nor disproved in F*.”
> 

Godel posists that there exists a statement within any consistent formal system that is true but cannot be proven within that system–a paradox. Together Turing and Godel laid the foundations for building the modern computer. Further down the line, another paradox emerged in the 1960s that complemented the above but was less concerned with logic, and more with language and symbols in themselves. Building on theories of the Swiss linguist Ferdinand de Saussure, Derrida wrote *“Il n'y a pas de hors-texte”; “There is no outside-text”* and coined the term *différance* as: *"[...] the movement of differences that produce meaning,"*

Derrida posits that meaning does not exist as a fixed entity but rather emerges through the continuous play of differences. In this sense, meaning is a dynamic process, constantly shifting and evolving. Through the movement of differences, both within and between texts, concepts, and languages, new significations and interpretations are generated. It is in this perpetual interplay of differences that the richness and plurality of meaning unfold, challenging any fixed or singular interpretations. Derrida's quote emphasizes the importance of recognizing the inherent multiplicity and fluidity within language and how it contributes to the construction of meaning. In summary, that meaning is a flux between difference and an act of deferring. To help ponder, consider its indirect but analogous nature to the wave-particle duality in quantum theory. To take a step back though, let us consider a different passage from Derrida:

> *“Nevertheless, the center also closes off the play which it opens up and makes possible. As center, it is the point at which the substitution of contents, elements, or terms is no longer possible. At the center, the permutation of the transformation of elements (which may of course be structures enclosed within a structure) is forbidden. At least this permutation has always remained interdicted (and I am using this word deliberately). Thus it has always been thought that the center, which is by definition unique, constitutes that very thing within a structure which while governing the structure, escapes structurality. This is why classical thought concerning structure could say that the center is, paradoxically, within the structure and outside it. The center is at the center of the totality, and yet, since the center does not belong to the totality (is not part of the totality), the totality has its center elsewhere. The center is not the center."*
> 

For our case let us consider numerals or language as the center, Derruda argues that the center is paradoxical in nature, being both within and outside the structure simultaneously. Technically, this should be able to be written in first order logic, First-order logic operates within the framework of classical logic, which does not allow for contradictions. However, we can represent the paradoxical nature of the statement about the center not being the center by expressing it in a conditional form that captures its contradictory essence:

$$
\forall x (C(x) \to \lnot(C(x) \land \lnot C(x)))
$$

Our friend GPT-4 however, hallucinates itself into believing it can capture the nuance of the paradox that Derrida describes, and fails miserably:

$$
∀x[C(x)→(P(x)∧S(x)∧F(x)∧G(x)∧I(x)∧H(x))]
$$

$$
∀x[C(x)→¬∃y(T(x)∧E(y,x))]∀x[C(x)→¬∃y(T(x)∧E(y,x))]
$$

$$
∀x[C(x)→¬F(x)]∀x[C(x)→¬F(x)]
$$

$$
∀x[C(x)→(W(x)→¬O(x))]∀x[C(x)→(W(x)→¬O(x))]
$$

$$
∀x[C(x)→¬W(x)]∀x[C(x)→¬W(x)]
$$

The purpose of this foreword was to illustrate the fragile nature and often paradoxical nature of symbols. The relevance of this section was to remind ourselves, as data scientists, researchers, and policy practitioners–that the tools we take for granted are simply still tools–not truths. On our journey towards the vision of a general artificial intelligence, of which natural language processing is a large part of, we must be precarious in our approach and acknowledge limits but not be limited by them. Quantum physics is still paradoxical, but that does not mean it isn’t useful. The same follows for the study of language and the limits of its computability. We may look to Kant for inspiration on our journey:

> *"All our knowledge begins with sense, proceeds thence to understanding, and ends with reason, beyond which nothing higher can be discovered in the human mind for elaborating the matter of intuition and subjecting it to the highest and most general laws of thought."*
> 

With that out of the way, we may begin. We are after all, scientists and academics. we will and must continue to push; Albeit with a sense and sensibility, and above all–moral and ethical accountability (to ourselves) and responsibility (for society at large).
