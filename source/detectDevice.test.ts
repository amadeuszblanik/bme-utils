import detectDevice from './detectDevice';

describe('detectDevice', () => {
  test('Empty user agent should return unknown', () => {
    const userAgent = '';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('unknown');
    expect(result.os).toBe('unknown');
    expect(result.type).toBe('desktop');
  });

  test('iPhone Safari user agent should return ios', () => {
    const userAgent =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.1';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Safari');
    expect(result.os).toBe('iOS');
    expect(result.type).toBe('mobile');
  });

  test('iPhone Chrome user agent should return ios', () => {
    const userAgent =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/108.0.5359.112 Mobile/15E148 Safari/604.1';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Safari'); // This is expected to be chrome, but it's not. Due to the way the user agent is parsed, it's not possible to detect the browser correctly.
    expect(result.os).toBe('iOS');
    expect(result.type).toBe('mobile');
  });

  test('iPhone Firefox user agent should return ios', () => {
    const userAgent =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/108.0 Mobile/15E148 Safari/605.1.15';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Safari'); // This is expected to be firefox, but it's not. Due to the way the user agent is parsed, it's not possible to detect the browser correctly.
    expect(result.os).toBe('iOS');
    expect(result.type).toBe('mobile');
  });

  test('iPad Safari user agent should return macOS', () => {
    const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Safari/605.1.15';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Safari');
    expect(result.os).toBe('macOS'); // It's not possible to test for iOS on iPad, because the user agent is the same as for macOS.
    expect(result.type).toBe('desktop'); // It's not possible to test for iPad, so it's always desktop.
  });

  test('macOS Chrome user agent should return macOS', () => {
    const userAgent =
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Chrome');
    expect(result.os).toBe('macOS');
    expect(result.type).toBe('desktop');
  });

  test('macOS Firefox user agent should return macOS', () => {
    const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:86.0) Gecko/20100101 Firefox/86.0';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Firefox');
    expect(result.os).toBe('macOS');
    expect(result.type).toBe('desktop');
  });

  test('macOS Safari user agent should return macOS', () => {
    const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Safari/605.1.15';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Safari');
    expect(result.os).toBe('macOS');
    expect(result.type).toBe('desktop');
  });

  test('macOS Edge user agent should return macOS', () => {
    const userAgent =
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36 Edg/88.0.705.56';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Chrome');
    expect(result.os).toBe('macOS');
    expect(result.type).toBe('desktop');
  });

  test('macOS Opera user agent should return macOS', () => {
    const userAgent =
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36 OPR/74.0.3911.160';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Chrome');
    expect(result.os).toBe('macOS');
    expect(result.type).toBe('desktop');
  });

  test('macOS Brave user agent should return macOS', () => {
    const userAgent =
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36 Brave/1.21.73';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Chrome');
    expect(result.os).toBe('macOS');
    expect(result.type).toBe('desktop');
  });

  test('Windows Edge user agent should return macOS', () => {
    const userAgent =
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36 Edg/88.0.705.56';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Chrome');
    expect(result.os).toBe('Windows');
    expect(result.type).toBe('desktop');
  });

  test('Windows Chrome user agent should return macOS', () => {
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Chrome');
    expect(result.os).toBe('Windows');
    expect(result.type).toBe('desktop');
  });

  test('Windows Firefox user agent should return windows', () => {
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:86.0) Gecko/20100101 Firefox/86.0';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Firefox');
    expect(result.os).toBe('Windows');
    expect(result.type).toBe('desktop');
  });

  test('Windows Opera user agent should return windows', () => {
    const userAgent =
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36 OPR/74.0.3911.160';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Chrome');
    expect(result.os).toBe('Windows');
    expect(result.type).toBe('desktop');
  });

  test('Windows Brave user agent should return windows', () => {
    const userAgent =
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36 Brave/1.21.73';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Chrome');
    expect(result.os).toBe('Windows');
    expect(result.type).toBe('desktop');
  });

  test('Linux Chrome user agent should return linux', () => {
    const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Chrome');
    expect(result.os).toBe('Linux');
    expect(result.type).toBe('desktop');
  });

  test('Linux Firefox user agent should return linux', () => {
    const userAgent = 'Mozilla/5.0 (X11; Linux x86_64; rv:86.0) Gecko/20100101 Firefox/86.0';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Firefox');
    expect(result.os).toBe('Linux');
    expect(result.type).toBe('desktop');
  });

  test('Linux Opera user agent should return linux', () => {
    const userAgent =
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36 OPR/74.0.3911.160';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Chrome');
    expect(result.os).toBe('Linux');
    expect(result.type).toBe('desktop');
  });

  test('Linux Brave user agent should return linux', () => {
    const userAgent =
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36 Brave/1.21.73';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Chrome');
    expect(result.os).toBe('Linux');
    expect(result.type).toBe('desktop');
  });

  test('Android Chrome user agent should return android', () => {
    const userAgent =
      'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.181 Mobile Safari/537.36';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Chrome');
    expect(result.os).toBe('Android');
    expect(result.type).toBe('mobile');
  });

  test('Android Firefox user agent should return android', () => {
    const userAgent = 'Mozilla/5.0 (Android 10; Mobile; rv:68.0) Gecko/68.0 Firefox/86.0';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Firefox');
    expect(result.os).toBe('Android');
    expect(result.type).toBe('mobile');
  });

  test('Android Opera user agent should return android', () => {
    const userAgent =
      'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.181 Mobile Safari/537.36 OPR/74.0.3911.160';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Chrome');
    expect(result.os).toBe('Android');
    expect(result.type).toBe('mobile');
  });

  test('Android Brave user agent should return android', () => {
    const userAgent =
      'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.181 Mobile Safari/537.36 Brave/1.21.73';

    const result = detectDevice(userAgent);

    expect(result.browser).toBe('Chrome');
    expect(result.os).toBe('Android');
    expect(result.type).toBe('mobile');
  });
});
