class Developer {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
    this.mediator.on("changeRequest", this.handleRequest.bind(this));
  }

  handleRequest({ managerName, description }) {
    console.log(`${this.name} got request from ${managerName}: ${description}`);
    this.tryToResolveIssue(description);
  }

  tryToResolveIssue(description) {
    const isResolved = Math.random() < 0.1;
    if (isResolved) {
      console.log(`${this.name} started resolving issue: -=${description}=-`);
      setTimeout(() => {
        const data = { developerName: this.name, description };
        this.mediator.emit("issueFixed", data);
      }, 2000);
    }
  }
}

module.exports = Developer;
