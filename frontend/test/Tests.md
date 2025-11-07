# Resultados de Pruebas Unitarias – Frontend

Ejecución de pruebas realizada con **Jest** para el módulo **frontend** del proyecto **Guía de Programación**.

```bash
ziscofania@fedora:~/Descargas/Guia-de-programacion-/frontend$ npm test
```

> frontend@1.0.0 test
> jest --coverage
```bash
 FAIL  test/frontend.test.js
  Frontend - Página principal
    ✓ 1. Debe contener un footer con la clase 'container' (6 ms)
    ✓ 2. Debe contener enlaces rápidos en el footer (4 ms)
    ✓ 3. Los enlaces deben tener texto visible (2 ms)
    ✕ 4. Debe existir la sección de contacto (5 ms)
    ✓ 5. Debe contener íconos sociales en el footer (4 ms)
    ✓ 6. Debe cargar el script principal correctamente (4 ms)
    ✕ 7. El footer debe mostrar derechos reservados (3 ms)
    ✓ 8. Verifica que los enlaces tengan '#' o rutas relativas válidas (5 ms)
    ✕ 9. El archivo HTML debe tener idioma español (4 ms)
    ✓ 10. La estructura general del HTML debe tener <html>, <body> y <footer> (3 ms)

  ● Frontend - Página principal › 4. Debe existir la sección de contacto

    expect(received).toMatch(expected)

    Expected pattern: /Contacto/i
    Received string:  "Gruta del Programador"

      34 | test("4. Debe existir la sección de contacto", () => {
      35 |     const contacto = document.querySelector(".footer-section h3");
    > 36 |     expect(contacto.textContent).toMatch(/Contacto/i);
         |                                  ^
      37 | });
      38 |
      39 | test("5. Debe contener íconos sociales en el footer", () => {

      at Object.toMatch (test/frontend.test.js:36:34)

  ● Frontend - Página principal › 7. El footer debe mostrar derechos reservados

    expect(received).toMatch(expected)

    Expected pattern: /derechos reservados/i
    Received string:  "Tu fuente confiable para aprender desarrollo de software."

      49 | test("7. El footer debe mostrar derechos reservados", () => {
      50 |     const texto = document.querySelector("footer p").textContent;
    > 51 |     expect(texto).toMatch(/derechos reservados/i);
         |                   ^
      52 | });
      53 |
      54 | test("8. Verifica que los enlaces tengan '#' o rutas relativas válidas", () => {

      at Object.toMatch (test/frontend.test.js:51:19)

  ● Frontend - Página principal › 9. El archivo HTML debe tener idioma español

    expect(received).toBe(expected) // Object.is equality

    Expected: "es"
    Received: ""

      60 |
      61 | test("9. El archivo HTML debe tener idioma español", () => {
    > 62 |     expect(document.documentElement.lang).toBe("es");
         |                                           ^
      63 | });
      64 |
      65 | test("10. La estructura general del HTML debe tener <html>, <body> y <footer>", () => {

      at Object.toBe (test/frontend.test.js:62:43)
```
```bash
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |                   
----------|---------|----------|---------|---------|-------------------
```
```bash
Test Suites: 1 failed, 1 total
Tests:       3 failed, 7 passed, 10 total
Snapshots:   0 total
Time:        1.609 s
Ran all test suites.
```
