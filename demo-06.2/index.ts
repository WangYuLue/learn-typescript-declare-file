// Ensure this is treated as a module.
export { };

declare global {
  interface Window {
    helloWorld(): void;
  }
}

window.helloWorld = () => console.log('hello world');
