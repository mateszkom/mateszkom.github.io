# Artykul: Portfolio + blog jako baza pokazania umiejetnosci

## Cel i teza

- Teza: wlasna strona z portfolio i blogiem to najlepsze miejsce, zeby pokazac umiejetnosci, pasje i sposob myslenia, bo daje pelna swobode narracji i prezentacji.
- Cel: pokazac, jak ta strona sluzy jako "basecamp" dla rekruterow, klientow i spolecznosci, oraz jak technicznie jest zorganizowana.

## Dla kogo piszesz

- Rekruterzy i przyszli pracodawcy.
- Klienci (freelance / projekty).
- Inni twórcy i osoby uczace sie.

## Proponowana struktura artykulu

1. **Intro: gdzie pokazywac swoja prace?**
   - Krotka historia: zeby nie ginac w feedzie, potrzebujesz miejsca "na lata".
   - Szybka diagnoza ograniczen Instagram/Behance/Dribbble (format, algorytmy, brak kontekstu).

2. **Wlasna strona jako centrum (basecamp)**
   - Kontrola nad struktura, narracja, dlugoscia i formatem.
   - Latwiejsze pokazanie procesu, nie tylko efektu.
   - SEO i stabilny link do wysylania w CV.

3. **Co jest na stronie i dlaczego**
   - Strona glowna: skrot tego, kim jestes i co robisz.
   - Portfolio projektow: case study, efekt, rola, narzedzia.
   - Blog/notes: wiedza, proces i eksperymenty.
   - About/Resume: kontekst i szybki kontakt.

4. **Jak to jest zorganizowane (content first)**
   - Tresc oddzielona od UI w plikach MDX (posts, projects, pages).
   - Jednolity frontmatter (title, description, date, category, published).
   - Filtrowanie po kategoriach dla posts i projects.

5. **Stack techniczny (prosto, ale solidnie)**
   - Next.js (App Router) + statyczny export pod GitHub Pages.
   - MDX z obsluga GFM, autolink headings i ladnym kodem.
   - Tailwind CSS + tokeny kolorow.
   - Date-fns do formatowania dat.

6. **Ciekawe rozwiazania w kodzie**
   - Automatyczne czytanie tresci MDX i walidacja metadanych.
   - Flaga published i sortowanie po dacie.
   - Wlasne komponenty MDX (linki, obrazki, styl).
   - Filtry kategorii na front-endzie.

7. **Dlaczego to jest lepsze dla kariery**
   - Pokazujesz proces, system myslenia i komunikacje.
   - Budujesz wiarygodnosc i zaufanie.
   - Masz miejsce na dluzsze, merytoryczne formy.

8. **Co dalej (plany rozwoju)**
   - Rozszerzenie tagow i typow tresci.
   - Strony tematyczne (np. UX, automatyzacja, coding).
   - Lepsze porzadkowanie archiwum i wyszukiwarka.

## Ton i styl

- Konkret, bez marketingowych slogonow.
- Krotkie akapity, duzo przykladow.
- "Pokazuje, jak mysle" zamiast "jestem najlepszy".
- w miare prostym językiem, ale z technicznymi szczegolami dla zainteresowanych.

## Robocze tytuly

- "Portfolio bez ograniczen: wlasny hub zamiast feedu"
