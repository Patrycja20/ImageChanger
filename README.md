# ImageChanger

![](https://raw.githubusercontent.com/Patrycja20/ImageChanger/master/screens/mainPage01.png)

**Image Changer** to program graficzny, służący do edycji istniejących obrazów i tworzenia nowych. Składa się z trzech modułów opartych o _React_, _Redux_ i _HTML5 Canvas_:

- **Change Parameters** służy do szybkiej modyfikacji parametrów wybranego przez nas zdjęcia.
- **Filters** nakłada gotowe filtry na wybrane przez nas zdjęcie i tworzy z nich galerię.
- **Drawing** umożliwia tworzenie swoich własnych grafik przy użyciu udostępnionego przybornika.

Szczegółowy opis działania każdego z modułów znajduje się niżej.

## Instalacja i uruchomienie

Ostatnią wersję aplikacji możemy uruchomić pobierając najnowsze wydanie (_release_). Wypakowujemy archiwum i uruchamiamy w przeglądarce plik `index.html`.

**Wymagania** - przeglądarka Firefox 63 (lub nowsza), Chrome 69 (lub nowszy). Na innych przeglądarkach program nie był testowany, więc nie jest gwarantowane jego stabilne działanie.


Do instalacji i uruchomienia aplikacji z kodu źródłowego potrzebujemy _Node.js_ z _npm_ i _yarn_.

1. Aby zainstalować globalnie yarna wystarczy użyć komendy `npm install -g yarn`.
2. Jeśli mamy już zainstalowanego yarna to klonujemy projekt (`git clone ...`).
3. Za pomocą polecenia `yarn install` instalujemy zależności.
4. Po wszystkim przez komendę `yarn start` uruchamiamy projekt Image Changer.
5. Serwer odpala się na `localhost:3000`.

Do testowania modułów Change Parameters i Filters polecamy używać zdjęć z katalogu `/preview_images/`.


___________________________________________


## Change Parameters

Pierwszym modułem jest edytor obrazów, umożliwiający zmianę różnych parametrów (Change Parameters). Całość zbudowana jest w oparciu o _Canvas_ z HTML5. Wielkość modułu to 800 linii kodu.

![](https://raw.githubusercontent.com/Patrycja20/ImageChanger/master/screens/changeParameters01.png)

Po lewej stronie widzimy wyszarzone kontrolki do modyfikacji parametrów obrazka. Po prawej jest przycisk umożliwiający załadowanie zdjęcia. Poniżej widzimy pusty _Canvas_, na który zdjęcie zostanie załadowane.

![](https://raw.githubusercontent.com/Patrycja20/ImageChanger/master/screens/changeParameters02.png)

Po załadowaniu zdjęcia, _Canvas_ zmienia swoje proporcje by się do niego dostosować, a wszystkie kontrolki stają się aktywne. Na górnym pasku strony pojawia się przycisk umożliwiający zapis zdjęcia po modyfikacjach do pliku `*.jpg`. Obok nazwy aktualnie wybranego pliku wyświetla się jego rozmiar, który nie powinien przekraczać 5 Mpix. Na tak dużych obrazkach operacje (obliczenia) wykonują się dłużej. Podczas próby załadowania dużego obrazka, wyświetla się ostrzeżenie o wolniejszym działaniu skryptu.

![](https://raw.githubusercontent.com/Patrycja20/ImageChanger/master/screens/changeParameters03.png)

Kontrolki zostały podzielone na 3 sekcje - pierwsza z nich zawiera checkboxy -> `r` , `g` i `b`, które domyślnie są zaznaczone.
Odznaczenie checkboxa powoduje usunięcie wybranej warstwy koloru ze zdjęcia, w powyższym screenie została usunięta warstwa `b`.

![](https://raw.githubusercontent.com/Patrycja20/ImageChanger/master/screens/changeParameters04.png)

Druga sekcja zawiera inputy typu 'range' określające zakres zmian parametrów zdjęcia:

- **`Brightness`** - umożliwia zmianę jasności.
- **`Contrast`** - podbija albo obniża kontrast.
- **`Saturation`** - zmienia nasycenie barw.
- **`Vignetting`** - tworzy efekt winiety.
- **`Number Of Shades`** - to ilość odcieni szarości, które zostaną użyte na zdjęciu.

![](https://raw.githubusercontent.com/Patrycja20/ImageChanger/master/screens/changeParameters05.png)

Ostatnia sekcja to dwa checkboxy, których zaznaczenie:
- **`Black And White`** - zamienia zdjęcie na czarno-biały.
- **`Inverted Colors`** - dokonuje odwrócenia kolorów na zdjęciu.

Przycisk `Reset` umożliwia przywrócenie wszystkich wartości do stanu domyślnego. Mamy też możliwość resetowania pojedynczych kontrolek. Możemy to robić przez dwuklik na nazwę kontrolki.

### Technikalia

Po wczytaniu obrazek ładowany jest na _Canvas_. W miedzy czasie odczytywana jest szerokość i wysokość. Następnie skrypt oczekuje na działania użytkownika.

Gdy użytkownik zmieni jakąkolwiek kontrolkę, jest wysyłana akcja zmieniająca odpowiedni wycinek stanu aplikacji. Komponent z _canvasem_ nasłuchuje na jakąkolwiek zmianę, i reaguje dopiero wtedy, gdy użytkownik puści przycisk myszy. Wtedy są nakładane wszystkie zmiany. Dzieje się to w pętli, która iteruje po wszystkich pikselach obrazka. Tablica z pikselami ma postać `[r, g, b, alfa, r, g, b, alfa, r, g, b, alfa, ...]`. Dlatego indeks co iterację skacze w górę o cztery wartości. Pętla ta, oraz wszystkie obliczenia na pikselach są wykonywane w pliku `src/components/ChangeParameters/cpModifiers.js`. W pętli na każdy piksel są nakładane wszystkie efekty. Po każdej zmianie parametru przez użytkownika zmiany są nakładane na wejściowy obrazek od nowa. Skrypt też sprawdza, by żadna wartość składowej RGB nie wyszła poza zakres [0, 255]. Poszczególne efekty są robione następująco:

- `Brightness`- do każdej składowej RGB jest dodawana (bądź odejmowana) wartość z kontrolki.
- `Contrast` - wyliczany jest _współczynnik_, o który później jest zmieniana każda składowa (`value` - wartość z kontrolki):

```javascript
  factor = (259 * (value + 255)) / (255 * (259 - value));
  r = factor * (r - 128) + 128;
  g = factor * (g - 128) + 128;
  b = factor * (b - 128) + 128;
````

- `Saturation` - wyliczany jest _współczynnik_, który jest odpowiednio dodawany i odejmowany od składowej (przemnożywszy wcześniej przez `value`, czyli wartość z kontrolki):

```javascript
  const Pr = 0.299;
  const Pg = 0.587;
  const Pb = 0.114;
  const P = Math.sqrt((r) * (r) * Pr + (g) * (g) * Pg + (b) * (b) * Pb);
  r = P + (r - P) * value;
  g = P + (g - P) * value;
  b = P + (b - P) * value;
``` 

- `Vignetting` - Winieta jest dodawana poprzez narysowanie dwóch kół. Środek pierwszego znajduje się w środku załadowanego obrazka, rozciągającego się do wierzchołków. Pierwsze koło ma czarny kolor z `alfa = 80%`. Drugie koło rozpościera się do wartości z filtra, odpowiednio przemnożonej przez współczynnik. Drugie koło jest w całości przeźroczyste.

- `Number Of Shades` - 8-bitowy zakres jest dzielony przez wartość z kontrolki. Następnie obliczana jest średnia ze składowych pikseli RGB. Później kolor każdej składowej jest wyliczany ze wzoru `(averageValue / conversionFactor) + 0.5) * conversionFactor`.

```javascript
  conversionFactor = 255 / value;
  averageValue = (r + g + b) / 3;
  r = g = b = parseInt((averageValue / conversionFactor) + 0.5) * conversionFactor;
```

- `Black and White` - Składowe są wymnażana przez odpowiednie współczynniki: `r = g = b = (r * 0.2126 + g * 0.7152 + b * 0.0722);`

- `Inverted Color` - Każda składowa RGB jest odejmowana od `255`.

- `R`, `G`, `B` - Gdy `checkbox` jest odznaczony, do wartości danej składowej jest przypisywane `0`.

Po wszystkich przekształceniach z tablica pikseli jest rysowana na _canvasie_ jako obraz. Działanie skryptu zostaje zakończone i oczekuje on znowu na działania użytkownika


________________________________________


## Filters
Drugi moduł nakłada na obrazki filtry (Filters). Wykorzystuje atrybut _filter_ z CSS3 oraz _Canvas_. Wielkość modułu to 450 linii kodu. 

![](https://raw.githubusercontent.com/Patrycja20/ImageChanger/master/screens/filters01.png)

Na górnym pasku mamy możliwość wybrania zdjęcia, które później, po nałożeniu filtrów, jest przedstawiane w formie galerii w głównej części strony. Nad każdym kafelku mamy nazwę użytego filtra. Po kliknięciu na zdjęcie, możemy zobaczyć jego powiększoną wersję. Na górnym pasku wyświetli się przycisk, który umożliwia zapisanie go do pliku `*.jpg`. Zdjęcie zostanie zapisane w pełnych rozmiarach.

![](https://raw.githubusercontent.com/Patrycja20/ImageChanger/master/screens/filters02.png)

W pliku `src/components/Filters/filtersHelpers.js` mamy tablicę z nazwami filtrów i ich specyfikacją. 

Dostępne filtry to:

- `Original` - podgląd oryginalnego zdjęcia, dla porównania (nie nakłada żadnego filtra).
- `Winter` - rozjaśnia lekko zdjęcie, zbliża kolorystykę do skali szarości oraz odwraca koło barw o 200deg.
- `Coffee With Milk` - rozjaśnia mocniej zdjęcie, podnosi kontrast, a kolorystykę zamienia na sepię.
- `Spring` - podnosi lekko jasność i delikatnie odwraca koło barw (o 60deg).
- `Tea` - delikatnie podnosi kontrast i zbliża kolorystykę do sepii.
- `Black & White` - nakłada na obrazek skalę szarości.
- `Dirty window` - rozmywa delikatnie zdjęcie i mocno rozjaśnia.
- `Fairyland` - zwiększa kontrast i nasycenie barw zdjęcia.
- `Vice versa` - ostatni filtr rozjaśnia mocno zdjęcie, delikatnie nakłada skalę szarości, odwraca koło barw o 180deg, odwraca kolory i dodaje niewielki efekt sepii.

W widoku galeryjnym dane z tablicy są ładowane w pętli, filtr jest nakładany na zdjęcia, i wszystko jest wyświetlane w kafelkach. Nakładanie filtra jest robione w dwojaki sposób. W widoku galeryjnym jest on nakładany za pomocą styli _CSS_. Natomiast na podglądzie zdjęcia filtr jest nakładany na _Canvas_, na który wcześniej wczytywane jest zdjęcie. Dzięki temu jest możliwy zapis zdjęcia do pliku `*.jpg`.


____________________________________


## Drawing
Ostatnim modułem w aplikacji jest moduł rysowania (drawing). Całość zbudowana jest w oparciu o _Canvas_ z HTML5, który znajduje się w centralnej części okna. Wielkość całego modułu to 800 linii kodu.

![](https://raw.githubusercontent.com/Patrycja20/ImageChanger/master/screens/drawing01.png)

Na samej górze okna znajdziemy pasek z narzędziami:

![](https://raw.githubusercontent.com/Patrycja20/ImageChanger/master/screens/drawing02.png)

1. Kontrolka do wyboru grubości linii. Po prawej możemy podejrzeć aktualnie wybraną wartość.
2. Wybór koloru.
3. Przełącznik trybu rysowania kształtów. Aktualnie będziemy rysować tylko kontury kształtów. Po zmianie trybu, kształty będą wypełniane kolorem.
4. Czyszczenie płótna.

Dalej mamy pięć trybów rysowania:

5. Zwykły mazak(aktualnie wybrany).
6. Linia.
7. Prostokąt.
8. Okrąg.
9. Trójkąt prostokątny.

10. Przycisk umożliwiający zapisanie obrazka jako plik _*.jpg_.

Rysowanie odbywa się w sposób intuicyjny. Wybieramy grubość linii, kolor oraz narzędzie. Następnie, trzymając wciśnięty LPM, przesuwamy kursorem myszy po płótnie (canvasie).

![](https://raw.githubusercontent.com/Patrycja20/ImageChanger/master/screens/drawing03.png)


### Technikalia
Moduł ten, tak jak i pozostałe w aplikacji, został oparty o komponenty Reacta. Znajdziemy go w folderze `src/components/Drawing`. 

Głównym plikiem jest komponent `Drawing`. Nie robi on w zasadzie nic ciekawego. Definiuje szkielet modułu i wyświetla dwa pozostałe komponenty: `DrawingButtons` oraz `DrawingCanvas`.

Przyciski przybornika znajdują się w komponencie `DrawingButtons`. Informacje o wybranych parametrach są zapisywane w _state_ aplikacji (via _Redux_). Domyślny stan znajdziemy w pliku `src/store.js`, a wygląda on tak:

```javascript
drawing: {
  drawMode: DRAW,
  paintSize: 10,
  color: '#6edb31',
  canvasRef: null,
  isFill: false,
}
```
Wyjaśnienia mogą wymagać dwa ostatnie rekordy. `canvasRef` przetrzymuje referencję (odwołanie) do _canvasa_. Natomiast flaga `isFill` jest ustawiana w zależności od przycisku _nr 3_ (patrz obrazek nr 2). Sama referencja do _canvasa_ jest ustawiana w komponencie `DrawingCanvas`, dzięki czemu mamy dostęp do niego z każdego miejsca w module. Wykorzystuje to przycisk _Save as *.jpg_, który odwołuje się do _canvasa_ i przetwarza go na obraz JPG oraz wyświetla okno pobierania pliku.

Ostatnim komponentem (i najważniejszym) jest `DrawingCanvas`. To on wyświetla _canvas_ i przetwarza akcje myszki na odpowiednie kształty. Podczas montowania komponentu są obliczane i ustawiane marginesy (_paddings_) i canvas jest wypełniany białym kolorem. Wartości malowania (kolor, grubość kreski) przyjmują domyślne wartości. Ustawiana jest także referencja do canvasa w modelu. Informacje o kolorze, grubości i narzędziu są ustalane za każdym razem, gdy zmieni się model.

Samo rysowanie składa się z trzech etapów - kliknięcie, trzymanie oraz puszczenie lewego przycisku myszy. Na kliknięcie obliczana jest aktualna (relatywna) pozycja myszy nad _canvasem_. Informacja ta jest zapisywana do stanu komponentu. Zmienia się też flaga `mouseDown` na `true`. Na _canvasie_ przenosimy punkt początkowy ścieżki (_path_) do współrzędnych kliknięcia i rozpoczynamy rysowanie nowej ścieżki.

Drugi etap to ruch myszy nad _canvasem_. Rysowanie mazakiem jest najprostszą czynnością. Przy każdej zmianie odczytujemy aktualną pozycję myszy, oraz rysujemy linię do tego miejsca (dokładając ją do poprzedniej pozycji kursora). Trzeci etap to akcja puszczenia LPM. Wówczas zmieniamy flagę `mouseDown` na `false` i zaprzestajemy rysowanie.

Rysowanie kształtów jest trochę bardziej skomplikowane. Na ich potrzeby został stworzony drugi canvas, który znajduje się nad tym pierwszym. Drugi canvas jest całkowicie przezroczysty (wartość każdego piksela jest ustawiona na null). Gdy rysujemy kształt, przy każdej zmianie pozycji myszki, drugi canvas jest czyszczony i kształt rysowany jest od nowa. Po skończeniu (puszczeniu LPM) zawartość drugiego _canvasa_ jest nakładana na pierwszy (ten właściwy). Dzięki temu, że drugi canvas jest przezroczysty, nakładany jest tylko narysowany przez nas kształt. Na koniec drugi _canvas_ jest czyszczony.

Algorytmy rysowania kształtów można znaleźć w pliku `drawingHelpers.js`. Rysowanie każdego kształtu jest w odpowiedniej metodzie, a za jej wywołanie odpowiada `switch`.

_Reduxowe_ akcje znajdziemy w pliku `src/actions/index.js`. Stałe oraz `reducer` obsługujący te akcje znajdziemy w pliku `src/reducers/drawingReducer.js`.