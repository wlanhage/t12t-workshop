# Tillgänglighetsövning med inbyggda DevTools

I denna övning ska vi utvärdera och förbättra tillgängligheten på en webbsida genom att använda de inbyggda utvecklarverktygen (DevTools) i webbläsare som Firefox, Safari och Chrome. Dessa verktyg innehåller funktioner för att identifiera och analysera tillgänglighetsproblem utan att behöva externa plugins.

## Verktyg

De webbläsare som vi kommer att arbeta med i denna övning är:

- **Chrome** – Inbyggda verktyg inkluderar fliken "Lighthouse" för tillgänglighetsgranskning.
- **Firefox** – Har en dedikerad flik för "Accessibility" i DevTools som ger en översikt över tillgänglighetsproblem.
- **Safari** – Har också tillgänglighetsverktyg integrerade i sina utvecklarverktyg.

## Steg för att genomföra övningen

1. **Öppna utvecklarverktygen**
   - I **Chrome**: Högerklicka på sidan och välj "Inspektera", eller tryck `Ctrl+Shift+I` (Windows/Linux) eller `Cmd+Opt+I` (Mac). Gå sedan till fliken "Lighthouse" eller använd fliken "Elements" för att granska tillgänglighetsaspekter.
   - I **Firefox**: Öppna utvecklarverktygen via `Ctrl+Shift+I` eller `Cmd+Opt+I` och gå till fliken "Accessibility".
   - I **Safari**: Aktivera utvecklarverktygen via Safari-inställningarna om de inte redan är synliga. Öppna sedan verktygen och gå till fliken "Accessibility".

2. **Kör en första granskning**
   Använd komponenten `MarkeringPageBrowser.tsx` i denna mapp som utgång. När projektet körs igång `npm run dev` så finns den på http://localhost:5173/manual/browser


   Välj webbsidan från detta repo och använd de inbyggda tillgänglighetsverktygen i din valda webbläsare för att köra en granskning. Särskilda tillgänglighetsproblem kommer att lyftas fram, och vissa webbläsare som Chrome ger tillgång till automatisk rapportering via fliken "Lighthouse".

3. **Analysera resultatet**
   Utvärdera de problem som upptäcks av verktygen. Fokusera på områden där problem rapporteras, exempelvis:
   - **Kontrastproblem** – Kontrollera om text och bakgrund har tillräcklig kontrast för att vara läsbara.
   - **Bilder och alternativ text** – Se till att alla bilder har alternativa beskrivningar (alt-text) för skärmläsare.
   - **Semantiska HTML-element** – Kontrollera om rätt HTML-element används för rätt ändamål (t.ex. `<button>` istället för `<div>` för interaktiva element).

4. **Föreslå åtgärder**
   Sammanfatta de viktigaste tillgänglighetsproblemen som identifierats under granskningen. Fundera över hur dessa problem kan åtgärdas och dokumentera dina förslag.

5. **Implementera lösningar**
   Gör ändringar i koden baserat på dina fynd och utför en ny granskning för att säkerställa att problemen har lösts.


## Dokumentation och resurser

För mer information om hur du kan använda webbläsarens utvecklarverktyg för tillgänglighetsgranskning, se följande resurser:

- [Chrome DevTools tillgänglighetsfunktioner](https://developers.google.com/web/tools/chrome-devtools/accessibility)
- [Firefox Developer Tools – Accessibility](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector)
- [Safari Web Inspector Guide](https://developer.apple.com/safari/tools/)
- [WCAG 2.1: Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/)
