export * from "../shared";

console.log("window server update", window);
if (typeof window !== "undefined" && !!window) {
  throw new Error("You tried to import server-only code on the client.");
}

export type ServerOnlyType = "server-only";
export const serverOnly: ServerOnlyType = "server-only";
