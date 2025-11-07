/**
 * @jest-environment jsdom
 */

import fs from "fs";
import path from "path";

// Cargar el HTML antes de cada prueba
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
document.body.innerHTML = html;

const script = fs.readFileSync(path.resolve(__dirname, "../src/js/script.js"), "utf8");
eval(script);

describe("Frontend - Página principal", () => {

test("1. Debe contener un footer con la clase 'container'", () => {
    const footer = document.querySelector("footer .container");
    expect(footer).not.toBeNull();
});

test("2. Debe contener enlaces rápidos en el footer", () => {
    const enlaces = document.querySelectorAll(".footer-section ul li a");
    expect(enlaces.length).toBeGreaterThan(0);
});

test("3. Los enlaces deben tener texto visible", () => {
    const enlaces = document.querySelectorAll(".footer-section ul li a");
    enlaces.forEach(link => {
    expect(link.textContent.trim().length).toBeGreaterThan(0);
    });
});

test("4. Debe existir la sección de contacto", () => {
    const contacto = document.querySelector(".footer-section h3");
    expect(contacto.textContent).toMatch(/Contacto/i);
});

test("5. Debe contener íconos sociales en el footer", () => {
    const icons = document.querySelectorAll(".social-icons a i");
    expect(icons.length).toBeGreaterThanOrEqual(3);
});

test("6. Debe cargar el script principal correctamente", () => {
    const scriptTag = document.querySelector("script[src*='script.js']");
    expect(scriptTag).not.toBeNull();
});

test("7. El footer debe mostrar derechos reservados", () => {
    const texto = document.querySelector("footer p").textContent;
    expect(texto).toMatch(/derechos reservados/i);
});

test("8. Verifica que los enlaces tengan '#' o rutas relativas válidas", () => {
    const links = [...document.querySelectorAll("a")];
    links.forEach(a => {
    expect(a.getAttribute("href")).toMatch(/^#|\.|\//);
    });
});

test("9. El archivo HTML debe tener idioma español", () => {
    expect(document.documentElement.lang).toBe("es");
});

test("10. La estructura general del HTML debe tener <html>, <body> y <footer>", () => {
    expect(document.querySelector("html")).not.toBeNull();
    expect(document.querySelector("body")).not.toBeNull();
    expect(document.querySelector("footer")).not.toBeNull();
});
});
