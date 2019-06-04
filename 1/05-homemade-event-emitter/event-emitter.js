class EventEmitter {
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

  once(eventName, listener) {
    const wrapper = data => {
      listener(data);
      this.removeListener(eventName, wrapper);
    };
    this.on(eventName, wrapper);
  }

  removeListener(eventName, listener) {
    this._checkEvent(eventName);
    this._events[eventName] = this._events[eventName].filter(l => l!== listener)
  }

  _checkEvent(eventName) {
    if (!this._events[eventName]) {
      this._events[eventName] = [];
    }
  }
}

module.exports = EventEmitter
