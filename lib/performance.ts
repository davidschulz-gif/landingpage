// Performance monitoring utilities
export const measurePerformance = () => {
  if (typeof window === 'undefined') return;

  // Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      console.log(`📊 ${entry.name}:`, entry.startTime);
    });
  });

  observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });

  // Custom performance metrics
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    const metrics = {
      'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
      'TCP Connection': navigation.connectEnd - navigation.connectStart,
      'Server Response': navigation.responseEnd - navigation.requestStart,
      'DOM Content Loaded': navigation.domContentLoadedEventEnd - navigation.fetchStart,
      'Page Load Complete': navigation.loadEventEnd - navigation.fetchStart,
      'First Paint': performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      'First Contentful Paint': performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    };

    console.table(metrics);
    
    // Performance score
    const totalTime = metrics['Page Load Complete'];
    const score = totalTime < 1500 ? 'Excellent (A+)' : 
                  totalTime < 2500 ? 'Good (A)' : 
                  totalTime < 4000 ? 'Fair (B)' : 'Poor (C)';
    
    console.log(`🎯 Performance Score: ${score} (${totalTime.toFixed(0)}ms)`);
  });
};

// Ideal performance targets
export const PERFORMANCE_TARGETS = {
  EXCELLENT: 1500, // < 1.5s
  GOOD: 2500,      // < 2.5s  
  FAIR: 4000,      // < 4s
  POOR: 4000       // > 4s
};