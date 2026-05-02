
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
  var dataLayer: any[];
  var gtag: (...args: any[]) => void;
}

export {};
