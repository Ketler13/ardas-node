class Mediator {
  constructor() {
    this._events = {};
  }

  on(eventName, listener) {
    this._checkEvent(eventName);
    this._events[eventName].push(listener);
  }

  emit(eventName, data) {
    const listeners = this._events[eventName] || [];
    listeners.forEach(listener => listener(data));
  }

  _checkEvent(eventName) {
    if (!this._events[eventName]) {
      this._events[eventName] = [];
    }
  }
}

module.exports = new Mediator();
