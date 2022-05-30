export function startFontLoadListener() {
  const font = 'IBM Plex Mono';
  const intervalSpeed = 100;
  const maxWaitTime = 5000 / intervalSpeed;
  let elapsedTime = 0;
  let interval = null;

  const fontLoadListener = () => {
    elapsedTime++;
    let hasLoaded = false;

    try {
      hasLoaded = document.fonts.check(`12px "${font}"`);
    } catch (error) {
      console.info(`document.fonts API error: ${error}`);
      fontLoadListenerStop();
      return;
    }

    if (elapsedTime > maxWaitTime) {
      console.error(`document.fonts.check waited the max time for "${font}". Looks like you can't use this cool font :(`);
      fontLoadListenerStop();
    }

    if (hasLoaded) {
      console.info(`document.fonts finished in: ${elapsedTime}`);
      fontLoadListenerStop();
      fontLoadedSuccess();
    }
  };

  const fontLoadListenerStop = () => {
    if (interval) {
      clearInterval(interval);
    }
  };

  const fontLoadedSuccess = () => {
    document.getElementsByTagName('html')[0].classList.remove('font-loading');
  };

  if (!document?.fonts?.check) {
    fontLoadedSuccess();
    return;
  }

  interval = setInterval(fontLoadListener, intervalSpeed);
}
