# Övning: Automatisk tillgänglighetstestning

I denna övning ska vi testa hur det kan gå till när tillgänglighetstester körs automatiskt för en sida.

## Instruktioner

1. **Öppna terminalen**
   Kör kommandot
   ```
   npm run ci:e2e
   ```

2. **Testa automatisk testning via Github Actions**
   1. Skapa en ny branch (eller byt till devlop om den redan finns)
   ```
   git checkout -B develop
   ```
   2. Skapa en [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) från `develop` till `main`
   3. Notera hur ett jobb körs automatiskt genom [Github Actions](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions). I projektet finns en fil `./github/workflows/node.js.yml` som styr vad som ska köras.
   4. Lös de tillgänglighetsproblem som finns i filen `MarketingPageIntegration.tsx` i denna mapp tills det att testerna i Pull requesten går igenom. Du når sidan genom http://localhost:5173/automated/integration


## Mål med övningen

- Förstå grundläggande automatisk testning av tillgänglighet.
- Ges möjlighet att fånga upp dessa fel tidigt i processen

