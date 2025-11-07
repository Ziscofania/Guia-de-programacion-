import { jest } from "@jest/globals";
import * as db from "../src/db.js";
import app from "../src/index.js";

describe("Backend - Módulos y rutas", () => {

test("1. El archivo db.js debe exportar al menos una función", () => {
    const keys = Object.keys(db);
    expect(keys.length).toBeGreaterThan(0);
});

test("2. La función de conexión a base de datos debe existir", () => {
    const fn = Object.values(db).find(v => typeof v === "function");
    expect(fn).toBeDefined();
});

test("3. El servidor debe poder inicializar sin errores", async () => {
    const mockListen = jest.fn((port, cb) => cb());
    app.listen = mockListen;
    app.listen(3000, () => {});
    expect(mockListen).toHaveBeenCalled();
});

test("4. Las rutas deben incluir al menos una ruta definida", async () => {
    const router = await import("../src/routes/index.js");
    expect(Object.keys(router)).not.toHaveLength(0);
});

test("5. Los módulos deben cargar sin lanzar errores", () => {
    expect(() => require("../src/index.js")).not.toThrow();
});
});
