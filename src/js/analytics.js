export function startAnalytics() {
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics disabled in "development" env');
    return;
  }

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', 'G-R3TP38N1F7');
}
