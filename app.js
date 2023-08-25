const performanceObserverCallback = (list, observer) => {
    list.getEntries().forEach((entry) => {
        // console.log(entry);
        if (entry.entryType === "resource") {
            console.log(`
            Type: ${entry.entryType} 
            ${entry.name}'s 
            startTime: ${entry.startTime} 
            duration: ${entry.duration}
            `);
        }
        if (entry.entryType === "navigation") {
            console.log(`
            Type: ${entry.entryType} 
            ${entry.name}'s 
            startTime: ${entry.startTime} 
            duration: ${entry.duration}
            `);
        }
        if (entry.entryType === "paint") {
            console.log(`
            Type: ${entry.entryType} 
            ${entry.name}'s 
            startTime: ${entry.startTime} 
            duration: ${entry.duration}
            `);
        }
        if (entry.entryType === "largest-contentful-paint") {
            console.log(`
            Type: ${entry.entryType} 
            ${entry.element.localName + '.' + entry.element.className} 
            startTime: ${entry.startTime} 
            loadTime: ${entry.loadTime}
            renderTime: ${entry.renderTime}
            URL: ${entry.element.currentSrc}
            size: ${entry.size}
            alt: ${entry.element.alt}
            `);
        }
    });
}

const performanceObserver = new PerformanceObserver(performanceObserverCallback);

// console.log(PerformanceObserver.supportedEntryTypes);

const entryTypesArray = [
    'element', 
    'event', 
    'first-input', 
    'largest-contentful-paint', 
    'layout-shift', 
    'longtask', 
    'mark', 
    'measure', 
    'navigation', 
    'paint', 
    'resource', 
    'visibility-state'
];

performanceObserver.observe({ entryTypes: entryTypesArray });