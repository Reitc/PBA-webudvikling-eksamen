import { expect } from 'vitest'; // Import the expect function from Vitest
import '@testing-library/jest-dom'; // Import the jest-dom library for additional matchers
import { setActivePinia, createPinia } from 'pinia'; // Import the setActivePinia and createPinia functions from Pinia
import { config } from '@vue/test-utils'; // Import the config object from Vue Test Utils
import { createRouter, createWebHistory } from 'vue-router'; // Import the createRouter and createWebHistory functions from Vue Router

// Mock Pinia - To get it to stop trying to use it in the tests, we are not actively using it out project
const pinia = createPinia();
setActivePinia(pinia);

// Mock Vue Router - There was some isses with the router in the tests, so we are mocking it here to conduct the test without any issues
const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

config.global.plugins = [router];

// Add any global setup or mocks here