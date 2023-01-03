export type DeviceType = 'desktop' | 'mobile' | 'tablet';
export type Browser = 'Chrome' | 'Firefox' | 'Safari' | 'Edge' | 'IE' | 'unknown';
export type OS = 'iOS' | 'Android' | 'Windows' | 'macOS' | 'Linux' | 'unknown';

const TABLET_TOUCH_POINT = 1;

const detectBrowser = (userAgent: string): Browser => {
  if (/Chrome/i.test(userAgent)) {
    return 'Chrome';
  }

  if (/Firefox/i.test(userAgent)) {
    return 'Firefox';
  }

  if (/Safari/i.test(userAgent)) {
    return 'Safari';
  }

  if (/Edge/i.test(userAgent)) {
    return 'Edge';
  }

  if (/Trident/i.test(userAgent)) {
    return 'IE';
  }

  return 'unknown';
};

const detectOS = (userAgent: string): OS => {
  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return 'iOS';
  }

  if (/Android/i.test(userAgent)) {
    return 'Android';
  }

  if (/Windows/i.test(userAgent)) {
    return 'Windows';
  }

  if (/Mac/i.test(userAgent)) {
    return 'macOS';
  }

  if (/Linux/i.test(userAgent)) {
    return 'Linux';
  }

  return 'unknown';
};

const detectDevice = (userAgent?: string): { type: DeviceType; browser: Browser; os: OS } => {
  userAgent = userAgent || navigator.userAgent;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
  const isTablet = /Macintosh/i.test(userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > TABLET_TOUCH_POINT;

  if (isMobile && !isTablet) {
    return {
      type: 'mobile',
      browser: detectBrowser(userAgent),
      os: detectOS(userAgent),
    };
  }

  if (isTablet) {
    return {
      type: 'tablet',
      browser: detectBrowser(userAgent),
      os: detectOS(userAgent),
    };
  }

  return {
    type: 'desktop',
    browser: detectBrowser(userAgent),
    os: detectOS(userAgent),
  };
};

export default detectDevice;
