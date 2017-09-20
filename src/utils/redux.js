export function getApiType(type, status = 'success') {
  return `${type}_${status}`;
}

export function setupApiTypes(type) {
  return [
    getApiType(type, 'request'),
    getApiType(type, 'success'),
    getApiType(type, 'failure'),
  ];
}
