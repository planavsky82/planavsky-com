const userAgent = window.navigator.userAgent.toLowerCase();

export function iOS() {

  // Detects if device is in standalone mode
  const navigator: any = window.navigator;
  const isInStandaloneMode = () => ('standalone' in navigator) && (navigator.standalone);
  const isIos = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document);

  return isIos && !isInStandaloneMode();

  /* // Detects if device is on iOS
  const isIos = () => {
    return /iphone|ipad|ipod/.test( userAgent );
  } */
}

export function isIPhone() {
  return /iphone|ipod/.test(userAgent);
}

export function isIPad() {
  return /ipad/.test(userAgent);
}
