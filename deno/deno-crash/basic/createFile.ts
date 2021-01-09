const encoder = new TextEncoder();
const greetText = encoder.encode('hello world\nmy name is juhyeon');

// top level class await 
await Deno.writeFile('greet.txt', greetText);

/**
 * > deno run --allow-write createFile.ts
 */