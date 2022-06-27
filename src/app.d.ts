/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  interface Session {
    logged?: boolean;
    name?: string;
    user?: string;
    image?: string;
    link?: string;
    country?: string;
    birthday?: string;
    createdAt?: number;
    following?: number;
    followers?: number;
    description?: string;
  }
  // interface Stuff {}
}
