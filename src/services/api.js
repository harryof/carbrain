// Mock API layer
// In the future this file will be replaced with real HTTP requests

let recordsStore = [];

export function getFleetSummary() {
  return {
    vehiclesCount: 12,
    recordsCount: recordsStore.length,
  };
}

export function getRecords() {
  return recordsStore;
}

export function addRecord(record) {
  recordsStore = [...recordsStore, record];
  return record;
}
