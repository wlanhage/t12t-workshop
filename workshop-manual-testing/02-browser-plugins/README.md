# Tillgänglighetsövning

I denna övning ska vi utvärdera och förbättra tillgängligheten på en webbsida genom att använda olika verktyg för tillgänglighetsgranskning. Målet är att identifiera tillgänglighetsproblem, förstå deras påverkan och lära oss hur vi kan åtgärda dem.

## Verktyg

För att genomföra denna övning använder vi följande verktyg som browser-plugins:

- [Axe DevTools](https://www.deque.com/axe/devtools/) – Ett kraftfullt verktyg för att identifiera och förstå tillgänglighetsproblem.
- [Accessibility Insights](https://accessibilityinsights.io/) – Hjälper dig att upptäcka tillgänglighetsproblem och erbjuder steg-för-steg-vägledning för att lösa dem.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) – Ett integrerat verktyg i Chrome för att granska tillgänglighet, prestanda och SEO.
- [WAVE](https://wave.webaim.org/) - Ett verktyg för att automatiskt hitta tillgänglighetsfel
- [Web developer plugin](https://chrispederick.com/work/web-developer/)

## Steg för att genomföra övningen

1. **Installera plugin**
   Om du inte redan har det installerat, ladda ner och installera något av ovanstående tillgänglighetsverktyg till din webbläsare.

2. **Kör en första granskning**
   Öppna webbsidan som finns i detta repo i din webbläsare och kör en första granskning med hjälp av det valda verktyget.

3. **Analysera resultatet**
   Granska de problem som verktyget rapporterar. Verktygen kommer att kategorisera problemen efter deras svårighetsgrad och ge förslag på hur de kan åtgärdas.

4. **Fokusera på följande områden:**
   - **Kontrast**: Är texten läsbar mot bakgrunden?
   - **Alternativ för bilder**: Har alla bilder alternativa texter?
   - **Tangentbordsnavigering**: Går det att navigera sidan med bara tangentbordet?
   - **ARIA-attribut**: Är de korrekta och används på rätt sätt?

5. **Föreslå åtgärder**
   Efter att du identifierat problemen, skriv ner en kort sammanfattning av de viktigaste problemen och föreslå lösningar för att åtgärda dessa.

6. **Åtgärda tillgänglighetsproblem**
   Implementera förbättringar i koden baserat på dina fynd. Genomför därefter en ny granskning för att verifiera att problemen är lösta.

## Mål med övningen

- Öka förståelsen för vanliga tillgänglighetsproblem.
- Lära sig att använda tillgänglighetsverktyg effektivt.
- Förbättra tillgängligheten för webbsidor genom konkreta åtgärder.

## Dokumentation

För mer information om hur man bygger tillgängliga webbsidor, se dessa resurser:

- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Deque University](https://dequeuniversity.com/) – En resurs för tillgänglighetsutbildning och vägledning.
