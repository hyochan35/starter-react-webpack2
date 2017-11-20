const getWorldTime = (tzOffset) => {
  var now = new Date();
  var tz = now.getTime() + (now.getTimezoneOffset() * 60000) + (tzOffset * 3600000);
  now.setTime(tz);

  var leadingZeros = function (n, digits) {
    var zero = '';
    n = n.toString();

    if (n.length < digits) {
        for (var i = 0; i < digits - n.length; i++)
            zero += '0';
    }
    return zero + n;
  };

  var s =
    leadingZeros(now.getFullYear(), 4) + '-' +
    leadingZeros(now.getMonth() + 1, 2) + '-' +
    leadingZeros(now.getDate(), 2) + ' ' +

    leadingZeros(now.getHours(), 2) + ':' +
    leadingZeros(now.getMinutes(), 2) ;

  return s;
};

const getStorage = (key) => {
  return localStorage.getItem(key);
};

const setStorage = (key, value) => {
  return localStorage.setItem(key, value);
};

const destroyStorage = (key) => {
  return localStorage.removeItem(key);
};

const getSessionStorage = (key) => {
  return sessionStorage.getItem(key);
};

const setSessionStorage = (key, value) => {
  return sessionStorage.setItem(key, value);
};

const destroySessionStorage = (key) => {
  return sessionStorage.removeItem(key);
};

const checkImageExists = (url, callback) => {
  var img = new Image();
  img.onload = function() {callback(true);};
  img.onerror = function() {callback(false);};
  img.src = url;
};

export {
  getWorldTime,
  getStorage,
  setStorage,
  destroyStorage,
  getSessionStorage,
  setSessionStorage,
  destroySessionStorage,
  checkImageExists,
};
