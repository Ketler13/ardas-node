const changes = [
  "Button does not work",
  "Request for user failed",
  "Loading too slow",
  "Client is angry",
  "They want to change framework"
];

class Manager {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
    this.subscribeToFixedIssues();
    this.startRequestingChanges();
  }

  subscribeToFixedIssues() {
    this.mediator.on("issueFixed", this.onIssueFixed.bind(this));
  }

  startRequestingChanges() {
    this.requestChange();
    setInterval(this.requestChange.bind(this), 4000);
  }

  requestChange() {
    const index = Math.floor(Math.random() * changes.length);
    const data = {
      managerName: this.name,
      description: changes[index]
    };
    this.mediator.emit("changeRequest", data);
  }

  onIssueFixed({ developerName, description }) {
    console.log(`Issue -=${description}=- is fixed by ${developerName}`);
  }
}

module.exports = Manager;
