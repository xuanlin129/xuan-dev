import { getOutlet } from 'reconnect.js';

const LoadingOutlet = getOutlet('loading');

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function setLoading(loading, params) {
  const { message = '' } = params || {};
  setTimeout(() => {
    LoadingOutlet.update({ loading: loading, message: message });
  }, 0);
}

export { delay, setLoading };
