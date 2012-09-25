Class = {
  create:function () {
  }
}

Campfire = {
}

Campfire.Responders = {
  push:function () {
  }
}

chat = {
  installPropaneResponder:function () {
  }
}

function FauxBodyElement(text) {
  this.innerText = text;
}

function FauxMessage(text) {
  this.element = new FauxBodyElement(text);
}

FauxMessage.prototype = {
  bodyElement: function() {
    return this.element;
  }
}

describe("DropMachine", function () {
  describe("matchMessages()", function() {
    it("returns url on first match", function () {
      var library = [
        [/foo/, 'foo.mp3']
      ]
      var machine = new DropMachine(library);
      var url = machine.matchMessage([new FauxMessage('foo')]);
      expect(url).toBe('foo.mp3');
    }),

    it("returns null on no match", function () {
      var library = [
        [/foo/, 'foo.mp3']
      ]
      var machine = new DropMachine(library);
      var url = machine.matchMessage([new FauxMessage('bar')]);
      expect(url).toBeNull();
    })
  })
});